import React from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

import Header from '../../../components-elements/Header/Header';
import Paragraph from '../../../components-elements/Paragraph';
import Separator from '../../../components-shared/Separator';

import useFadeInAnimation from '../../../hooks/useFadeInAnimation';

const IntroResults = ({ separator }: { separator: string }) => {
    const { h1Ref, h2Ref, sectionRef, separatorRef, isVisible } = useFadeInAnimation({
        delay: 500,
        modifyBodyOverflow: true,
        additionalAnimation: () => {
            gsap.to('.snowFlake', { opacity: 0.6, duration: 3.5 });
        }
    });

    const { t } = useTranslation("hohoho/results-page");

    if (!isVisible) {
        return null;
    }


    return (
        <>
            <div className="u-container">
                <Header
                    h1Text={t('intro-h1')}
                    h2Text={t('intro-h2')}
                    h1Ref={h1Ref}
                    h2Ref={h2Ref}
                    isFirstH1={true}
                />
                <section
                    ref={sectionRef}
                    className="p-grid p-grid--font-size"
                    style={{ opacity: 0 }}
                >
                    <Paragraph>{t('intro-p1')}</Paragraph>
                    <Paragraph>{t('intro-p2')}</Paragraph>
                    <Paragraph>{t('intro-p3')}</Paragraph>
                    <Paragraph>{t('intro-p4')}</Paragraph>
                    <Paragraph>{t('intro-p5')}</Paragraph>
                    <Paragraph>{t('intro-p6')}</Paragraph>
                    <Paragraph>{t('intro-p7')}</Paragraph>
                    <Paragraph>{t('intro-p8')}</Paragraph>
                    <Paragraph>{t('intro-p9')}</Paragraph>
                </section>
            </div>
            <Separator separator={separator} separatorRef={separatorRef} />
        </>
    );
};

export default IntroResults;
