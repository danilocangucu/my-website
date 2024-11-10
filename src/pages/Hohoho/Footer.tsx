import React from 'react';
import useFadeInAnimation from '../../hooks/useFadeInAnimation';

function Footer() {
    const { sectionRef, isVisible } = useFadeInAnimation({
        delay: 5900,
    });

    if (!isVisible) {
        return null;
    }
    const imageSrc = `https://danilocangucu.net/my-website/assets/hohoho/footer/snowman.png`

    return (
        <footer className="footer border-top margin-top--footer">
            <section ref={sectionRef}>
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
