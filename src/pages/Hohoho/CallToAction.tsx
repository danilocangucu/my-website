import React from 'react'
import Header from './Header/Header'
import Button from './Button'
import useFadeInAnimation from '../../hooks/useFadeInAnimation';

function CallToAction() {
    const { h1Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 5700,
    });

    if (!isVisible) {
        return null;
    }

    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className="u-container">
            <Header
                h1Text='Ready to Apply?'
                h1Ref={h1Ref}
            />
            <section ref={sectionRef}>
                <Button
                    text="GET STARTED NOW"
                    onClick={handleClick}
                    variant="secondary"
                    size="medium"
                />
            </section>
        </div>
    )
}

export default CallToAction
