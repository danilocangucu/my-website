import React from 'react';
import Button from '../../../../components-elements/Button';
import { hideErrorMessage } from '../../../../utils/MyApplicationUtils';
import { useTranslation } from 'react-i18next';

function FormErrorMessage() {
    const { t } = useTranslation("hohoho/application-page");

    return (
        <div className="error-message-overlay display-none" id="div-error">
            <div className="error-message-content margin-sides-10 text-white">
                <h1 className="mountains-of-christmas-bold mountains-o-c-b--h1 mountains-o-c-b--h1-error">{t("form-error-message-h1")}</h1>
                <p className="quattrocento-regular">
                    {t("form-error-message-p-1")}<span id="span-error">{t("form-error-message-p-2")}</span>.<br /><br />
                    <b>{t("form-error-message-p-3")} </b>
                    {t("form-error-message-p-4")}<br /><br />
                    {t("form-error-message-p-5")}<br />
                    <Button
                        text={t("form-error-message-button")}
                        size="x-small"
                        variant="secondary"
                        inlineStyles={{ marginTop: "var(--space-s)", marginBottom: "var(--space-xs)" }}
                        onClick={() => hideErrorMessage()}
                    />
                </p>
            </div>
        </div>
    );
}

export default FormErrorMessage;