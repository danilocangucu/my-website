import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../../../components-elements/Header/Header';
import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import { Link } from 'react-router-dom';

interface LinksAndReferencesProps {
    linksAndReferences: {
        currentPresence: {
            link1: string;
            link2: string;
            link3: string;
        };
        referenceWebsites: {
            link1: string;
            link2: string;
            link3: string;
        };
    };
}

function SentLinksAndReferences({ linksAndReferences }: LinksAndReferencesProps) {
    const { h2Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 2000,
        customDuration: { hasCustomDuration: true, h2Duration: 0.5, sectionDuration: 0.5 },
    });

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    const validLinks = Object.values(linksAndReferences.currentPresence).filter(link => link.trim() !== '');
    const validReferences = Object.values(linksAndReferences.referenceWebsites).filter(link => link.trim() !== '');

    return (
        <div className="u-container">
            <Header h2Text={t("h2-links-and-references")} h2Ref={h2Ref} />
            <section className="p-grid p-grid--font-size" ref={sectionRef}>
                <dt className="merriweather-regular">{t("4-LR-current-presence")}</dt>
                {validLinks.length > 0 ? (
                    <>
                        {validLinks.map((link, index) => (
                            <dd key={index} className="quattrocento-regular color-quaternary">
                                <Link
                                    to={link}
                                    className="dd-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link}
                                </Link>
                            </dd>
                        ))}
                    </>
                ) : (
                    <dd className="quattrocento-regular color-quaternary">{t("sent-no-current-presence")}</dd>
                )}
                <dt className="merriweather-regular">{t("4-LR-reference-websites")}</dt>
                {validReferences.length > 0 ? (
                    <>
                        {validReferences.map((link, index) => (
                            <dd key={index} className="quattrocento-regular color-quaternary">
                                <Link
                                    to={link}
                                    className="dd-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link}
                                </Link>
                            </dd>
                        ))}
                    </>
                ) : (
                    <dd className="quattrocento-regular color-quaternary">{t("sent-no-reference-websites")}</dd>
                )}
            </section>
        </div>
    );
}

export default SentLinksAndReferences;
