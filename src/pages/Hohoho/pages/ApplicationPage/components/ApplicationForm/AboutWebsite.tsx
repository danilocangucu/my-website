import React from 'react';
import { useFormContext } from 'react-hook-form';

import Header from '../../../../components-elements/Header/Header';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import FillingTip from './FillingTip';
import { addCharCountListeners } from '../../../../utils/MyApplicationUtils';
import { useTranslation } from 'react-i18next';

interface AboutProjectProps {
    isDisabled: boolean;
}

const AboutYourWebsite = React.memo(({ isDisabled }: AboutProjectProps) => {
    const { register } = useFormContext();

    const { h2Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 1700,
        customDuration: { hasCustomDuration: true, h2Duration: 0.5, sectionDuration: 0.5 },
    });

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    const inputClass = "input-modern";

    setTimeout(() => {
        addCharCountListeners([
            { textareaId: "websiteReason", charCountId: "charCountWebsiteReason", maxLength: 200 },
            { textareaId: "websiteMainDescription", charCountId: "charWebsiteMainDescription", maxLength: 500 },
            { textareaId: "websiteContentMaterial", charCountId: "charWebsiteContentMaterial", maxLength: 200 },
        ]);
    }, 100);

    return (
        <>
            <div className="u-container">
                <Header h2Text={t("h2-about-your-website")} h2Ref={h2Ref} />
                <section
                    ref={sectionRef}
                    className="p-grid p-grid--font-size"
                    style={{ opacity: 0 }}
                >
                    <div>
                        <label htmlFor="websiteReason">
                            {t("3-AYW-website-reason")}
                        </label>
                        <textarea
                            className={`${inputClass}`}
                            id="websiteReason"
                            {...register('aboutYourWebsite.websiteReason')}
                            placeholder=""
                            disabled={isDisabled}
                            style={{ width: '-webkit-fill-available', cursor: isDisabled ? "not-allowed" : "text" }}
                            rows={2}
                            maxLength={200}
                        />
                        <p id="charCountWebsiteReason" className="char-counter">0 / 200</p>
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>{t("3-AYW-website-reason-description")}</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={`"${t("3-AYW-website-reason-filling-tip")}"`} />
                            </div>
                        </div>

                    </div>
                    <div>
                        <label
                            htmlFor="websiteMainDescription"
                        >
                            {t("3-AYW-website-main-description")}
                        </label>
                        <textarea
                            className={`${inputClass}`}
                            id="websiteMainDescription"
                            {...register('aboutYourWebsite.websiteMainDescription')}
                            placeholder=""
                            disabled={isDisabled}
                            style={{ width: '-webkit-fill-available', cursor: isDisabled ? "not-allowed" : "text" }}
                            rows={5}
                            maxLength={500}
                        />
                        <p id="charWebsiteMainDescription" className="char-counter">0 / 500</p>
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>{t("3-AYW-website-main-description-description")}</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={`"${t("3-AYW-website-main-description-filling-tip")}"`} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="websiteMainFeature">{t("3-AYW-website-main-feature")}</label>
                        <input
                            className={`${inputClass}`}
                            id="websiteMainFeature"
                            {...register('aboutYourWebsite.websiteMainFeature')}
                            placeholder=""
                            disabled={isDisabled}
                            style={{ cursor: isDisabled ? "not-allowed" : "text" }}
                            maxLength={200}
                        />
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>{t("3-AYW-website-main-feature-description")}</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={`"${t("3-AYW-website-main-feature-filling-tip")}"`} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="websiteAdditionalFeatures">{t("3-AYW-website-additional-features")}</label>
                        {[0, 1, 2].map((index) => (
                            <div key={index}>
                                <input
                                    className={`${inputClass}`}
                                    {...register(`aboutYourWebsite.websiteAdditionalFeatures.feature${index + 1}` as const)}
                                    placeholder={`${t("3-AYW-feature")} ${index + 1}: ${t("3-AYW-purpose")}`}
                                    disabled={isDisabled}
                                    style={{ cursor: isDisabled ? "not-allowed" : "text" }}
                                    id={`websiteAdditionalFeatures${index + 1}`}
                                    maxLength={200}
                                />
                            </div>
                        ))}
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>{t("3-AYW-website-additional-features-description")}</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={`"${t("3-AYW-website-additional-features-filling-tip")}"`} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="websiteContentMaterial">{t("3-AYW-content-material")}</label>
                        <textarea
                            className={`${inputClass}`}
                            id="websiteContentMaterial"
                            {...register('aboutYourWebsite.websiteContentMaterial')}
                            placeholder=""
                            disabled={isDisabled}
                            style={{ width: '-webkit-fill-available', cursor: isDisabled ? "not-allowed" : "text" }}
                            rows={2}
                            maxLength={200}
                        />
                        <p id="charWebsiteContentMaterial" className="char-counter">0 / 200</p>
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>{t("3-AYW-content-material-description")}</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={`"${t("3-AYW-content-material-filling-tip")}"`} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
})

export default AboutYourWebsite;
