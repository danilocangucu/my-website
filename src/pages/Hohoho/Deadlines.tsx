import React, { useMemo } from 'react';

import useFadeInAnimation from '../../hooks/useFadeInAnimation';
import { useResizeHandler } from '../../hooks/useResizeHandler';
import { largeGrid, smallGrid } from '../../utils/DeadlinesUtils';
import Header from './Header/Header';
import Paragraph from './Paragraph';
import Separator from './Separator';

const Deadlines = ({ separator }: { separator: string }) => {
  const { h1Ref, h2Ref, sectionRef, separatorRef, isVisible } = useFadeInAnimation({
    delay: 5500,
  });
  const { currentWidth } = useResizeHandler(window.innerHeight, window.innerWidth);

  const deadlineGridLarge = useMemo(() => {
    return [
      ...largeGrid.years.render(largeGrid.years.data),
      ...largeGrid.months.render(largeGrid.months.data),
      ...largeGrid.emptyRow.render(largeGrid.months.data, false),
      ...largeGrid.dates.render(largeGrid.dates.data, largeGrid.months.data),
      ...largeGrid.emptyRow.render(largeGrid.months.data, true),
    ];
  }, []);

  const deadlineGridSmall = useMemo(() => {
    return smallGrid.render(smallGrid.data);
  }, []);

  if (!isVisible) {
    return null;
  }

  const isCurrentWidthLarge = currentWidth >= 665;

  return (
    <>
      <div className="u-container">
        <Header
          h1Text='Calls and Deadlines'
          h2Text='Prepare for Your Application Journey'
          h1Ref={h1Ref}
          h2Ref={h2Ref}
        />
        <section className="quattrocento-regular" ref={sectionRef}>
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
            <em>
              <small>
                *Note: After I review your application,
                you might be invited to have a quick chat
                via videocall before the end of the selection time.
              </small>
            </em>
          </Paragraph>
        </section>
      </div>
      <Separator separator={separator} separatorRef={separatorRef} />
    </>
  );
};

export default Deadlines;
