import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'

import { RootState } from '../../../../../../redux/store'
import { setHohohoApplicationData } from '../../../../redux/hohohoSlice'

import { PersonalInformation } from './PersonalInformation'
import AboutYou from './AboutYou'
import LinksAndReferences from './LinksAndReference'
import AboutWebsite from './AboutWebsite'
import Button from '../../../../components-elements/Button'
import FinalThoughts from './FinalThoughts'
import FormErrorMessage from './FormErrorMessage'

import { createEmptyApplication, handleSubmission, sendErrorReport, showErrorMessage, submitApplication, validateFormFields } from '../../../../utils/MyApplicationUtils'

import {
    startFloppyDiskAnimation,
    endFloppyDiskAnimation,
    floppyDiskButtonStyles,
} from '../../../../utils/FloppyDiskUtils'

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation'
import { useTranslation } from 'react-i18next'

function ApplicationForm() {
    const applicationData = useSelector((state: RootState) => state.hohoho.applicationData);
    const isLoggedIn = !!applicationData;
    const token = useSelector((state: RootState) => state.hohoho.token);
    const applicantEmail = useSelector((state: RootState) => state.hohoho.email);
    const dispatch = useDispatch();
    const { button1Ref, button2Ref, isVisible } = useFadeInAnimation({
        delay: 1000,
        customDuration: { hasCustomDuration: true, button1Duration: 2, button2Duration: 1 },
    });

    const defaultValues = applicationData
        ? { ...applicationData.application, isComplete: undefined }
        : createEmptyApplication();

    const methods = useForm({ defaultValues });

    useEffect(() => {
        if (applicationData) {
            methods.reset({ ...applicationData.application, isComplete: undefined });
        } else {
            methods.reset(createEmptyApplication());
        }

        let timeoutId: NodeJS.Timeout;
        if (isLoggedIn) {
            timeoutId = validateFormFields(3000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [applicationData, isLoggedIn, methods]
    )

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    // TODO onSubmit data needs to be typed
    const onSubmit = async (data: any, isComplete: boolean) => {
        const startSavingTime = startFloppyDiskAnimation();

        if (isComplete) {
            handleSubmission();
        }

        const formData = { ...data, isComplete };

        try {
            const response = await submitApplication(formData, token!);

            if (!(response instanceof Response)) {
                if (!isComplete) {
                    endFloppyDiskAnimation(startSavingTime!, false);
                }
                throw response;
            }

            endFloppyDiskAnimation(startSavingTime!, response.ok);

            if (!response.ok) {
                console.log("response", response);
                console.log("formData", formData);
                showErrorMessage(isComplete ? t("show-error-message-true") : t("show-error-message-false"));
                sendErrorReport(formData, applicantEmail!, response);
                return;
            }

            const result = await response.json();
            if (result.application.isComplete) {
                dispatch(setHohohoApplicationData({ application: result.application }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

        } catch (error) {
            showErrorMessage(isComplete ? "submitted" : "saved");
            sendErrorReport(formData, applicantEmail!, error as Error);
        }
    };

    // TODO change h2 to h3 in the form sections
    return (
        <FormProvider {...methods}>
            <div className='u-container'>
                <form onSubmit={methods.handleSubmit((data) => onSubmit(data, true))} id="application-form">
                    <PersonalInformation isDisabled={!isLoggedIn} />
                    <AboutYou isDisabled={!isLoggedIn} />
                    <AboutWebsite isDisabled={!isLoggedIn} />
                    <LinksAndReferences isDisabled={!isLoggedIn} />
                    <FinalThoughts isDisabled={!isLoggedIn} />
                    <Button
                        text="💾"
                        onClick={
                            () => methods.handleSubmit(
                                (data) => onSubmit(data, false))()
                        }
                        size="x-small"
                        variant="quaternary"
                        inlineStyles={floppyDiskButtonStyles}
                        disabled={!isLoggedIn}
                        id="floppy-disk"
                        ref={button1Ref}
                    />
                    <Button
                        text={t("submit-button")}
                        type="submit"
                        size="small"
                        variant="secondary"
                        inlineStyles={{ display: "block", margin: "0 auto", marginTop: "-30px" }}
                        disabled={true}
                        id="submit"
                        ref={button2Ref}
                        extraClass='button--disabled'
                    />
                    <FormErrorMessage />
                </form>
            </div>
        </FormProvider>
    )
}

export default ApplicationForm

