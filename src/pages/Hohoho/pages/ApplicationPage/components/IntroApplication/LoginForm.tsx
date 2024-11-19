import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setHohohoApplicationData, setHohohoEmail, setHohohoToken } from '../../../../redux/hohohoSlice';

import { loadApplicationData } from '../../../../utils/MyApplicationUtils';
import { HOHOHO_BASE_API_URL } from '../../../../utils/HohohoUtils';
import Button from '../../../../components-elements/Button';
import { useTranslation } from 'react-i18next';

// TODO refactor LoginForm
const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch();
    const { t } = useTranslation("hohoho/application-page");

    // Handle form submission
    const onSubmitForm = async (data: any) => {
        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            setStatusMessage(t("login-submitting"));
            const response = await axios.post(`${HOHOHO_BASE_API_URL}/login`, {
                email: data.email,
                code: data.code,
            });

            if (response.status !== 200) {
                // TODO debug login error
                throw new Error("Error: Something went while logging in.");
            }

            const { token, message } = response.data;

            localStorage.setItem('hohohoJwtToken', token);

            // TODO adjust backend to send success message in languages
            setStatusMessage(message.includes("successful") ? t("login-success") : message);

            const { applicationData, loadMessage } = await loadApplicationData(token);

            if (!applicationData) {
                // TODO debug no application data when logging in
                throw new Error(loadMessage!);
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });

            dispatch(setHohohoApplicationData(applicationData));
            dispatch(setHohohoToken(token));
            dispatch(setHohohoEmail(data.email));

            setStatusMessage(loadMessage);

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const erorMessage = error.response.data.message;
                setStatusMessage(erorMessage.includes("No pending or active") ? t("login-error") : erorMessage);
            } else if (error instanceof Error) {
                // TODO report error to backend
                setStatusMessage(error.message);
            } else {
                // TODO report error to backend
                setStatusMessage("Error: Something went wrong.");
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
                    {/* TODO register-email-required && register-email-invalid should be shared with register form key */}
                    <input
                        {...register('email', {
                            required: `${t("register-email-required")}`,
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: `${t("register-email-invalid")}`,
                            },
                        })}
                        id="email"
                        type="email"
                        className='input-modern'
                    />
                    {/* TODO improve style of input-error? */}
                    {errors.email && typeof errors.email.message === 'string' && <span className="input-error">{errors.email.message}</span>}
                </div>

                <div>
                    <label htmlFor="code">{t("label-code")}</label>
                    <input
                        {...register('code', {
                            required: `${t("code-required")}`,
                            validate: (value) =>
                                value.length === 6 || t("code-input-validate"),
                        })}
                        id="code"
                        type="text"
                        placeholder={t("code-input-placeholder")}
                        className='input-modern'
                    />
                    {errors.code && typeof errors.code.message === 'string' && <span className="input-error">{errors.code.message}</span>}
                </div>
                <Button text="LOGIN" type="submit" size="x-small" variant="quaternary" inlineStyles={{ marginTop: "var(--space-s)" }} />
            </form>
            {/* TODO improve status-message style with success or not */}
            {(statusMessage || isSubmitting) && <div id="status-message">{statusMessage}</div>}
        </div>
    );
};

export default LoginForm;
