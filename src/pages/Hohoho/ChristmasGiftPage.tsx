import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ChristmasGiftPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const h1Ref = React.useRef(null);
  const h2Ref = React.useRef(null);
  const sectionRef = React.useRef(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflowY = 'scroll';
      gsap.to('.snowFlake', { opacity: 0.6, duration: 3.5 });
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflowY = 'hidden';
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline();

      tl.fromTo(
        h1Ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      )
        .fromTo(
          h2Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.1"
        )
        .fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.05"
        );;
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="u-container">
      <header>
        <h1 ref={h1Ref} className='mountains-of-christmas-bold mountains-o-c-b--h1'>
          Ho! Ho! Ho!
        </h1>
        <h2 ref={h2Ref} className="merriweather-regular merriweather-r--h2">
          Get Ready for a Christmas Gift You’ll Never Forget!
        </h2>
      </header>
      <section ref={sectionRef} className="p-grid">
          <p className="quattrocento-regular">
            This year, I’m giving you something special: a free, custom-made website! Imagine a beautiful site to showcase your ideas, hobbies, or business—ready to go for the new year. It’s a gift designed just for you. Everyone deserves some extra sparkle this season!
          </p>
          <p className="quattrocento-regular">
            To have a chance to win this fantastic Christmas gift, simply fill out the form below. It only takes a few minutes, and you could be on your way to an incredible new online presence. Just tell us a bit about your vision, and we’ll take care of the rest. Don't miss this opportunity for a holiday surprise that keeps on giving long after the season is over. Merry Christmas, and good luck!
          </p>
      </section>
    </div>
  );
};

export default ChristmasGiftPage;
