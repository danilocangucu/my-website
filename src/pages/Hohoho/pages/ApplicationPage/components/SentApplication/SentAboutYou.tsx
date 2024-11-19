import React from 'react'
import { useTranslation } from 'react-i18next';
import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import Header from '../../../../components-elements/Header/Header';

interface AboutYouProps {
    aboutYou: {
        work: string;
        projectContext: string
    };
}

function SentAboutYou({ aboutYou }: AboutYouProps) {
    const { h2Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 1700,
        customDuration: { hasCustomDuration: true, h2Duration: 0.5, sectionDuration: 0.5 },
    });

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    return (
        <div className="u-container">
            <Header h2Text={t("h2-about-you")} h2Ref={h2Ref} />
            <section
                ref={sectionRef}
                className="p-grid p-grid--font-size"
                style={{ opacity: 0 }}
            >
                <dl>
                    <dt className="merriweather-regular">{t("2-AY-your-description")}</dt>
                    <dd className="quattrocento-regular color-quaternary">{aboutYou.work}</dd>

                    <dt className="merriweather-regular">{t("2-AY-project-context")}</dt>
                    <dd className="quattrocento-regular color-quaternary">{aboutYou.projectContext}</dd>
                </dl>
            </section>
        </div>
    )
}

export default SentAboutYou
