import React from 'react';
import { gsap } from 'gsap';

import Header from './Header/Header';
import Paragraph from './Paragraph';
import useFadeInAnimation from '../../hooks/useFadeInAnimation';
import Separator from './Separator';

const Intro = ({ separator }: { separator: string }) => {
  const { h1Ref, h2Ref, sectionRef, separatorRef, isVisible } = useFadeInAnimation({
    delay: 3500,
    modifyBodyOverflow: true,
    additionalAnimation: () => {
      gsap.to('.snowFlake', { opacity: 0.6, duration: 3.5 });
    }
  });

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="u-container">
        <Header
          h1Text='Ho! Ho! Ho!'
          h2Text='Get Ready for a Christmas Gift You’ll Never Forget!'
          h1Ref={h1Ref}
          h2Ref={h2Ref}
          isFirstH1={true}
        />
        <section ref={sectionRef} className="p-grid p-grid--font-size">
          <Paragraph>
            This year, I’m giving you something special: a free, custom-made website! Imagine a beautiful site to showcase your ideas, hobbies, or business—ready to go for the new year. It’s a gift designed just for you. Everyone deserves some extra sparkle this season!
          </Paragraph>
          <Paragraph>
            To have a chance to win this fantastic Christmas gift, simply fill out the form below. It only takes a few minutes, and you could be on your way to an incredible new online presence. Just tell us a bit about your vision, and we’ll take care of the rest. Don't miss this opportunity for a holiday surprise that keeps on giving long after the season is over. Merry Christmas, and good luck!
          </Paragraph>
        </section>
      </div>
      <Separator separator={separator} separatorRef={separatorRef} />
    </>
  );
};

export default Intro;
