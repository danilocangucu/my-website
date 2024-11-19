import React from 'react';
import { useFormContext } from 'react-hook-form';

import Header from '../../../../components-elements/Header/Header';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import { useTranslation } from 'react-i18next';
import { addCharCountListeners } from '../../../../utils/MyApplicationUtils';

interface AboutProjectProps {
    isDisabled: boolean;
}

const AboutYou = React.memo(({ isDisabled }: AboutProjectProps) => {
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
            { textareaId: "aboutYouWork", charCountId: "charCountAboutYouWork", maxLength: 300 },
            { textareaId: "projectContext", charCountId: "charCountProjectContext", maxLength: 200 },
        ]);
    }, 100);

    return (
        <>
            <div className="u-container">
                <Header h2Text={t("h2-about-you")} h2Ref={h2Ref} />
                <section
                    ref={sectionRef}
                    className="p-grid p-grid--font-size"
                    style={{ opacity: 0 }}
                >
                    <div>
                        <label
                            htmlFor="aboutYouWork">{t("2-AY-your-description")}
                        </label>
                        <textarea
                            className={`${inputClass}`}
                            id="aboutYouWork"
                            {...register('aboutYou.work')}
                            placeholder=""
                            disabled={isDisabled}
                            style={{ width: '-webkit-fill-available', cursor: isDisabled ? "not-allowed" : "text" }}
                            rows={3}
                            maxLength={300}
                        />
                        <p id="charCountAboutYouWork" className="char-counter">0 / 300</p>
                    </div>
                    <div>
                        {/* TODO should I give a filling tip for project context? */}
                        <label htmlFor="projectContext">
                            {t("2-AY-project-context")}
                        </label>
                        <textarea
                            className={`${inputClass}`}
                            id="projectContext"
                            {...register('aboutYou.projectContext')}
                            placeholder=""
                            disabled={isDisabled}
                            style={{
                                width: '-webkit-fill-available',
                                cursor: isDisabled ? "not-allowed" : "text"
                            }}
                            rows={2}
                            maxLength={200}
                        />
                        <p id="charCountProjectContext" className="char-counter">0 / 200</p>
                    </div>
                </section>
            </div>
        </>
    );
})

export default AboutYou;
