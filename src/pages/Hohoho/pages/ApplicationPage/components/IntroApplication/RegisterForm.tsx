import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { HOHOHO_BASE_API_URL } from '../../../../utils/HohohoUtils';
import Button from '../../../../components-elements/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../redux/store';
import { useTranslation } from 'react-i18next';
import { sendErrorReport } from '../../../../utils/MyApplicationUtils';

const RegisterForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const lang = useSelector((State: RootState) => State.hohoho.language);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { t } = useTranslation("hohoho/application-page");

    const onSubmitForm = async (data: any) => {
        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const response = await axios.post(`${HOHOHO_BASE_API_URL}/register`, {
                email: data.email,
                lang,
            });
            setStatusMessage(response.data.message[lang]);

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setStatusMessage(`${error.response.data.message[lang]}`);
                // TODO better error handling
            } else {
                sendErrorReport({}, "trying to register", error as Error);
                setStatusMessage(t("register-unknown-error"));
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="margin-top--space-s">
                    <label htmlFor="email">Email:</label>
                    <input
                        {...register('email', {
                            required: `${t("register-email-required")}`,
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: `${t("register-email-invalid")}`,
                            },
                        })}
                        id="email"
                        type="email"
                        className='input-modern'
                    />
                    {/* TODO register errors multilang */}
                    {/* TODO error styles */}
                    {errors.email && typeof errors.email.message === 'string' && <span>{errors.email.message}</span>}
                </div>
                <Button text={t("send-button")} type="submit" size="x-small" variant="quaternary" inlineStyles={{ marginTop: "var(--space-s)" }} />
            </form>
            {isSubmitting && <div id="status-message">{t("register-submitting")}</div>}
            {statusMessage && <div id="status-message">{statusMessage}</div>}
        </div>
    );
};

export default RegisterForm;
