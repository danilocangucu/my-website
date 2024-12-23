import React from 'react'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap'

import Header from '../../../components-elements/Header/Header'
import Button from '../../../components-elements/Button'

import useFadeInAnimation from '../../../hooks/useFadeInAnimation';
import { RootState } from '../../../../../redux/store';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function CallToAction() {
    const { h1Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 1200,
    });

    const navigate = useNavigate();
    const currentLanguage = useSelector((state: RootState) => state.hohoho.language);

    const { t } = useTranslation("hohoho/guidelines-page");

    if (!isVisible) {
        return null;
    }

    const handleClick = () => {
        gsap.to(['.hohoho-page-container', '.footer'], {
            opacity: 0,
            duration: 0.7,
            onComplete: () => {
                const url = `/hohoho/my-application?lang=${currentLanguage}`;
                navigate(url, { state: { fromHohoho: true } });
            }
        });
    };

    return (
        <div className="u-container">
            <Header
                h1Text={t("cta-h1")}
                h1Ref={h1Ref}
            />
            <section ref={sectionRef} style={{ opacity: 0 }}>
                <Button
                    text={t("cta-button-text")}
                    onClick={handleClick}
                    variant="secondary"
                    size="medium"
                />
            </section>
        </div>
    )
}

export default CallToAction
