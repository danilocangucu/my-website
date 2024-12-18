import React from 'react'
import { useTranslation } from 'react-i18next';
import useFadeInAnimation from '../hooks/useFadeInAnimation';

type TopBarProp = {
    delay?: number;
};

const TopBar: React.FC<TopBarProp> = ({ delay }) => {
    const { sectionRef, isVisible } = useFadeInAnimation({
        delay: (delay ? delay : 3500),
    });

    const { t } = useTranslation("hohoho/shared");

    if (!isVisible) {
        return null;
    }

    return (
        <section className="bg-quaternary padding--space-3xs" ref={sectionRef} style={{ opacity: 0 }}>
            <div className="u-container merriweather-regular text-align--center text-black">🎄 {t("top-bar-text")} 🎄</div>
        </section>
    )
}

export default TopBar
