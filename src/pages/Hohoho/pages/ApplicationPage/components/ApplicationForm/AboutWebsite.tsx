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

const AboutWebsite = React.memo(({ isDisabled }: AboutProjectProps) => {
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
                        <div className="input-paragraph--small">
                            <small>
                                <em>This is a description. It provides more context and additional details about the subject, offering insight and clarity. This text serves as an example of how a more extensive description might look, showcasing the type of content that can be expected.</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={`"This is a medium filling tip. It offers a brief explanation or suggestion, giving the user the essential information they need in a short, easily digestible format."`} />
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
                        {/* TODO add char counter? */}
                        <p id="charWebsiteMainDescription" className="char-counter">0 / 500</p>
                        <div className="input-paragraph--small">
                            <small>
                                <em>This is a description. It provides context and additional details, offering insight about the subject in a concise manner.</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text="This is a long filling tip. It provides detailed instructions or advice for users, explaining all relevant steps in a process. It can include examples, extra information, and context to ensure users fully understand what to do. The goal is to give as much information as possible while still being concise and clear. When providing guidance, it's important to balance helpful details with brevity, so users aren't overwhelmed by too much text at once. This length is suitable for more complex or technical tips." />
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
                        />
                        <div className="input-paragraph--small">
                            <small>
                                <em>This is a brief description for context.</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text="I want a website for my new business that will allow customers to book appointments online." />
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
                                />
                            </div>
                        ))}
                        <div className="input-paragraph--small">
                            <small>
                                <em>This is a description. It provides more context and additional details about the subject, offering insight and clarity. This text serves as an example of how a more extensive description might look, showcasing the type of content that can be expected.</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text="This is a short filling tip. It provides quick, helpful information for the user in a concise manner." />
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
                        <div className="input-paragraph--small">
                            <small>
                                <em>This is a description. It provides context and additional details, offering insight about the subject in a concise manner.</em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text="This is a medium filling tip. It offers a brief explanation or suggestion, giving the user the essential information they need in a short, easily digestible format." />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
})

export default AboutWebsite;
