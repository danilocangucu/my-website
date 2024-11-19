import React from 'react'
import { useTranslation } from 'react-i18next';
import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import Header from '../../../../components-elements/Header/Header';

interface FinalThoughtsProps {
    finalThoughts: string;
}

function SentFinalThoughts({ finalThoughts }: FinalThoughtsProps) {
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
            <Header h2Text={t("h2-final-thoughts")} h2Ref={h2Ref} />
            <section
                ref={sectionRef}
                className="p-grid p-grid--font-size"
                style={{ opacity: 0 }}
            >
                <dl>
                    <dt className="merriweather-regular">{t("5-FT-final-thoughts")}</dt>
                    <dd className="quattrocento-regular color-quaternary">{finalThoughts}</dd>
                </dl>
            </section>
        </div>
    )
}

export default SentFinalThoughts;
