import React from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

import Header from '../../../components-elements/Header/Header';
import H3 from '../../../components-elements/Header/H3';
import Paragraph from '../../../components-elements/Paragraph';
import Separator from '../../../components-shared/Separator';

import useFadeInAnimation from '../../../hooks/useFadeInAnimation';

const Awardee = ({ separator }: { separator: string }) => {
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
          h1Text={t('awardee-h1')}
          h2Text={t('awardee-h2')}
          h1Ref={h1Ref}
          h2Ref={h2Ref}
          isFirstH1={false}
        />
        <section
          ref={sectionRef}
          className="p-grid p-grid--font-size"
          style={{ opacity: 0 }}
        >
          <H3>{t('awardee-h3-1')}</H3>
          <Paragraph>{t('awardee-p1')}</Paragraph>
          <Paragraph>{t('awardee-p2')}</Paragraph>
          <H3>{t('awardee-h3-2')}</H3>
          <Paragraph>{t('awardee-p3')}</Paragraph>
          <Paragraph>{t('awardee-p4')}</Paragraph>
          <H3>{t('awardee-h3-3')}</H3>
          <Paragraph>{t('awardee-p5')}</Paragraph>
          <H3>{t('awardee-h3-4')}</H3>
          <Paragraph>{t('awardee-p6')}</Paragraph>
          <H3>{t('awardee-h3-5')}</H3>
          <Paragraph>{t('awardee-p7')}</Paragraph>
        </section>
      </div>
      <Separator separator={separator} separatorRef={separatorRef} />
    </>
  );
};

export default Awardee;
