import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../../../components-elements/Header/Header';
import Paragraph from '../../../components-elements/Paragraph';
import Separator from '../../../components-shared/Separator';

import { largeGrid, smallGrid } from '../../../utils/DeadlinesUtils';

import useFadeInAnimation from '../../../hooks/useFadeInAnimation';
import { useResizeHandler } from '../../../hooks/useResizeHandler';

const Deadlines = React.memo(({ separator, language }: { separator: string, language: "en" | "es" | "ptbr" }) => {
  const { h1Ref, h2Ref, sectionRef, separatorRef, isVisible } = useFadeInAnimation({
    delay: 1000,
  });
  const { currentWidth } = useResizeHandler(window.innerHeight, window.innerWidth);

  const { t } = useTranslation("hohoho/guidelines-page");

  const deadlineGridLarge = useMemo(() => {
    return [
      ...largeGrid.years.render(largeGrid.years.data),
      ...largeGrid.months.render(largeGrid.months.data),
      ...largeGrid.emptyRow.render(largeGrid.months.data, false),
      ...largeGrid.dates.render(largeGrid.dates.data, largeGrid.months.data, language),
      ...largeGrid.emptyRow.render(largeGrid.months.data, true),
    ];
  }, [language]);

  const deadlineGridSmall = useMemo(() => {
    return smallGrid.render(smallGrid.data, language);
  }, [language]);

  if (!isVisible) {
    return null;
  }

  const isCurrentWidthLarge = currentWidth >= 665;

  return (
    <>
      <div className="u-container">
        <Header
          h1Text={t('deadlines-h1')}
          h2Text={t('deadlines-h2')}
          h1Ref={h1Ref}
          h2Ref={h2Ref}
        />
        <section className="quattrocento-regular" ref={sectionRef} style={{ opacity: 0 }}>
          {isCurrentWidthLarge ? (
            <div className="deadline-grid">
              {deadlineGridLarge}
            </div>
          ) : (
            <div className="deadline-grid--small">
              {deadlineGridSmall}
            </div>
          )}

          <Paragraph additionalClassNames={['margin-top--space-3xs-2xs', 'font-size--step-0']}>
            {/*
            TODO: Add the <em> and <small> tags back in when the design is updated
            <em>
              <small> */}
                {t('deadlines-p1-small')}
            {/* </small>
            </em> */}
          </Paragraph>
        </section>
      </div>
      <Separator separator={separator} separatorRef={separatorRef} />
    </>
  );
});

export default Deadlines;
