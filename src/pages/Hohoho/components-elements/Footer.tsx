import React from 'react';

import useFadeInAnimation from '../hooks/useFadeInAnimation';

type FooterProp = {
    delay?: number;
};

function Footer({ delay = 4000 }: FooterProp) {
    const { sectionRef, isVisible } = useFadeInAnimation({
        delay,
    });

    if (!isVisible) {
        return null;
    }
    const imageSrc = `https://danilocangucu.net/my-website/assets/hohoho/footer/snowman.png`

    return (
        <footer className="footer border-top margin-top--footer">
            <section ref={sectionRef} style={{ opacity: 0 }}>
                <div className="footer-grid">
                    <p className="footer-text merriweather-regular">© 2024 DANILO CANGUÇU</p>
                    <img
                        src={imageSrc}
                        alt="Snowman in a snow globe"
                        className="footer-image"
                    />
                </div>
            </section>
        </footer>
    );
}

export default Footer;
