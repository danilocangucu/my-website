import React from 'react';
import { useFormContext } from 'react-hook-form';

import Header from '../../../../components-elements/Header/Header';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import { useTranslation } from 'react-i18next';
import FillingTip from './FillingTip';

interface LinksAndReferencesProps {
    isDisabled: boolean;
}

const LinksAndReferences = React.memo(({ isDisabled }: LinksAndReferencesProps) => {
    const { register } = useFormContext();

    const { h2Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 2000,
        customDuration: { hasCustomDuration: true, h2Duration: 0.5, sectionDuration: 0.5 },
    });

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    const inputClass = "input-modern";

    return (
        <>
            <div className="u-container">
                <Header h2Text={t("h2-links-and-references")} h2Ref={h2Ref} />
                <section
                    ref={sectionRef}
                    className="p-grid p-grid--font-size"
                    style={{ opacity: 0 }}
                >
                    <div>
                        <label htmlFor="currentPresence">
                            {t("4-LR-current-presence")}
                        </label>
                        {[0, 1, 2].map((index) => (
                            <div key={index}>
                                <input
                                    className={`${inputClass}`}
                                    {...register(`linksAndReferences.currentPresence.link${index + 1}` as const)}
                                    placeholder={`Link ${index + 1}`}
                                    disabled={isDisabled}
                                    style={{ cursor: isDisabled ? "not-allowed" : "text" }}
                                    id={`currentPresence${index + 1}`}
                                    maxLength={200}
                                />
                            </div>
                        ))}
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>
                                    <b className="text-quaternary">{t("4-LR-not-mandatory-plural")}</b> {t("4-LR-current-presence-description")}
                                </em>
                            </small>
                            <div className="margin-top--space-3xs">
                                <FillingTip text={`${t("4-LR-current-presence-filling-tip")}`} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="referenceWebsites">
                            {t("4-LR-reference-websites")}
                        </label>
                        {[0, 1, 2].map((index) => (
                            <div key={index}>
                                <input
                                    className={`${inputClass}`}
                                    {...register(`linksAndReferences.referenceWebsites.link${index + 1}` as const)}
                                    placeholder={`Link ${index + 1}`}
                                    disabled={isDisabled}
                                    style={{ cursor: isDisabled ? "not-allowed" : "text" }}
                                    id={`referenceWebsites${index + 1}`}
                                    maxLength={200}
                                />
                            </div>
                        ))}
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>
                                    <b className="text-quaternary">{t("4-LR-not-mandatory-plural")}</b> {t("4-LR-reference-websites-description")}
                                </em>
                            </small>
                            <FillingTip text={`${t("4-LR-current-presence-filling-tip")}`} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
})

export default LinksAndReferences;
