import React from 'react';
import { useFormContext } from 'react-hook-form';

import Header from '../../../../components-elements/Header/Header';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import { addCharCountListeners } from '../../../../utils/MyApplicationUtils';
import { useTranslation } from 'react-i18next';

const FinalThoughts = React.memo(({ isDisabled }: { isDisabled: boolean }) => {
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
            { textareaId: "finalThoughts", charCountId: "charCountFinalThoughts", maxLength: 300 },
        ]);
    }, 100);

    return (
        <>
            <div className="u-container">
                <Header h2Text={t("h2-final-thoughts")} h2Ref={h2Ref} />
                <section
                    ref={sectionRef}
                    className="p-grid p-grid--font-size"
                    style={{ opacity: 0 }}
                >
                    <div>
                        <label
                            htmlFor="finalThoughts">{t("5-FT-final-thoughts")}
                        </label>
                        <textarea
                            className={`${inputClass}`}
                            id="finalThoughts"
                            {...register('finalThoughts')}
                            placeholder=""
                            disabled={isDisabled}
                            style={{ width: '-webkit-fill-available', cursor: isDisabled ? "not-allowed" : "text" }}
                            rows={3}
                        />
                        <p id="charCountFinalThoughts" className="char-counter">0 / 300</p>
                        <div className="input-paragraph--small quattrocento-regular">
                            <small>
                                <em>
                                    <b className="text-quaternary">{t("5-FT-not-mandatory-singular")}</b>
                                </em>
                            </small>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
})

export default FinalThoughts;
