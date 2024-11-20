import React from 'react';
import { useFormContext } from 'react-hook-form';

import Header from '../../../../components-elements/Header/Header';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import { inputClass } from '../../../../utils/MyApplicationUtils';
import FillingTip from './FillingTip';
import { useTranslation } from 'react-i18next';

// TODO remove react.memo from PersonalInformation?
export const PersonalInformation = React.memo(({ isDisabled }: { isDisabled: boolean }) => {
    const { register } = useFormContext();

    const { h2Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 1000,
        customDuration: { hasCustomDuration: true, h2Duration: 0.5, sectionDuration: 0.5 },
    });

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className="u-container">
                <Header h2Text={t("h2-personal-information")} h2Ref={h2Ref} />
                <section ref={sectionRef} className="p-grid p-grid--font-size" style={{ opacity: 0 }}>
                    <div>
                        <label htmlFor="fullName">{t("1-PI-full-name")}</label>
                        <input
                            className={inputClass}
                            id="fullName"
                            {...register('personalInformation.fullName')}
                            disabled={isDisabled}
                            style={{ cursor: isDisabled ? "not-allowed" : "text" }}
                            maxLength={200}
                        />
                    </div>
                    <div>
                        <label htmlFor="emailAddress">{t("1-PI-email")}</label>
                        <input
                            className={inputClass}
                            id="emailAddress"
                            {...register('personalInformation.emailAddress')}
                            disabled={isDisabled}
                            style={{ cursor: isDisabled ? "not-allowed" : "text" }}
                            maxLength={200}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">{t("1-PI-phone-number")}</label>
                        <input
                            className={inputClass}
                            id="phoneNumber"
                            {...register('personalInformation.phoneNumber')}
                            disabled={isDisabled}
                            style={{ cursor: isDisabled ? "not-allowed" : "text" }}
                            maxLength={50}
                        />
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>{t("1-PI-phone-number-description")}</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={t("1-PI-phone-number-filling-tip")} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="preferred-language">{t("1-PI-preferred-language")}</label>
                        <select
                            id="preferred-language"
                            {...register('personalInformation.preferredLanguage')}
                            className="input-modern merriweather-regular font-size--step--1"
                            style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
                            disabled={isDisabled}
                        >
                            <option value="ptbr">{`Português (Brasil)`}</option>
                            <option value="es">Español</option>
                            <option value="en">English</option>
                            <option value="sv">Svenska</option>
                        </select>
                    </div>
                </section>
            </div>
        </>
    );
}, (prevProps, nextProps) => prevProps.isDisabled === nextProps.isDisabled);
