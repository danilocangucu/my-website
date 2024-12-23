import React from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

import Header from '../../../../components-elements/Header/Header';
import Separator from '../../../../components-shared/Separator';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import H3 from '../../../../components-elements/Header/H3';
import Traffic from './Traffic';
import Location from './Location';
import BrowserUsage from './Browsers';
import Paragraph from '../../../../components-elements/Paragraph';

const Statistics = ({ separator }: { separator: string }) => {
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
          h1Text={t('statistics-h1')}
          h2Text={t('statistics-h2')}
          h1Ref={h1Ref}
          h2Ref={h2Ref}
        />
        <section
          ref={sectionRef}
          className="p-grid p-grid--font-size"
          style={{ opacity: 0 }}
        >
          <Paragraph>{t('statistics-p1')}</Paragraph>
          <H3>{t('statistics-h3-1')}</H3>
          <Traffic />
          <H3>{t('statistics-h3-2')}</H3>
          <Location />
          <H3>{t('statistics-h3-3')}</H3>
          <BrowserUsage />
        </section>
      </div>
      <Separator separator={separator} separatorRef={separatorRef} />
    </>
  );
};

export default Statistics;
