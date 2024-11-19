import React from 'react'
import { useTranslation } from 'react-i18next';
import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import Header from '../../../../components-elements/Header/Header';

interface AboutYourWebsiteProps {
    aboutYourWebsite: {
        websiteReason: string;
        websiteMainDescription: string;
        websiteMainFeature: string;
        websiteAdditionalFeatures: {
            feature1: string;
            feature2: string;
            feature3: string;
        };
        websiteContentMaterial: string;
    };
}

function SentAboutYourWebsite({ aboutYourWebsite }: AboutYourWebsiteProps) {
    const { h2Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 1700,
        customDuration: { hasCustomDuration: true, h2Duration: 0.5, sectionDuration: 0.5 },
    });

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    const additionalFeatures = aboutYourWebsite.websiteAdditionalFeatures;
    const validAdditionalFeatures = Object.values(additionalFeatures)
        .filter(feature => feature.trim() !== '');


    return (
        <div className="u-container">
            <Header h2Text={t("h2-about-your-website")} h2Ref={h2Ref} />
            <section
                ref={sectionRef}
                className="p-grid p-grid--font-size"
                style={{ opacity: 0 }}
            >
                <dl>
                    <dt className="merriweather-regular">{t("3-AYW-website-reason")}</dt>
                    <dd className="quattrocento-regular color-quaternary">{aboutYourWebsite.websiteReason}</dd>

                    <dt className="merriweather-regular">{t("3-AYW-website-main-description")}</dt>
                    <dd className="quattrocento-regular color-quaternary">{aboutYourWebsite.websiteMainDescription}</dd>

                    <dt className="merriweather-regular">{t("3-AYW-website-main-feature")}</dt>
                    <dd className="quattrocento-regular color-quaternary">{aboutYourWebsite.websiteMainFeature}</dd>

                    {validAdditionalFeatures.length > 0 && (
                        <>
                            <dt className="merriweather-regular">{t("3-AYW-website-additional-features")}</dt>
                            {validAdditionalFeatures.map((feature, index) => (
                                <dd key={index} className="quattrocento-regular color-quaternary">
                                    {feature}
                                </dd>
                            ))}
                        </>
                    )}

                    <dt className="merriweather-regular">{t("3-AYW-content-material")}</dt>
                    <dd className="quattrocento-regular color-quaternary">{aboutYourWebsite.websiteContentMaterial}</dd>
                </dl>
            </section>
        </div>
    )
}

export default SentAboutYourWebsite;
