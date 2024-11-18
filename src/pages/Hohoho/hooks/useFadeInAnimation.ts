import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface DurationOptions {
  hasCustomDuration?: boolean;
  h1Duration?: number;
  h2Duration?: number;
  sectionDuration?: number;
  button1Duration?: number;
  button2Duration?: number;
  separatorDuration?: number;
}

interface FadeInAnimationOptions {
  delay: number;
  modifyBodyOverflow?: boolean;
  additionalAnimation?: () => void;
  customDuration?: DurationOptions;
}

const useFadeInAnimation = ({
  delay,
  modifyBodyOverflow = false,
  additionalAnimation,
  customDuration = {},
}: FadeInAnimationOptions) => {
  const [isVisible, setIsVisible] = useState(false);

  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const sectionRef = useRef(null);
  const separatorRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);

      if (additionalAnimation) {
        additionalAnimation();
      }
    }, delay);

    return () => {
      clearTimeout(timer);

      if (modifyBodyOverflow) {
        document.body.style.overflowY = "scroll";
      }
    };
  }, [delay, modifyBodyOverflow, additionalAnimation]);

  useEffect(() => {
    if (isVisible) {
      const duration = modifyBodyOverflow ? 0.5 : 0.1;
      const tl = gsap.timeline();

      const {
        hasCustomDuration = false,
        h1Duration,
        h2Duration,
        sectionDuration,
        button1Duration,
        button2Duration,
        separatorDuration,
      } = customDuration;

      // Only animate if the ref is present
      if (h1Ref.current) {
        tl.fromTo(
          h1Ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: hasCustomDuration && h1Duration ? h1Duration : duration,
            ease: "power2.out",
          }
        );
      }

      if (h2Ref.current) {
        tl.fromTo(
          h2Ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: hasCustomDuration && h2Duration ? h2Duration : duration,
            ease: "power2.out",
          },
          // Remove the delay if custom duration is set
          hasCustomDuration ? undefined : "-=0.1"
        );
      }

      if (sectionRef.current) {
        tl.fromTo(
          sectionRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration:
              hasCustomDuration && sectionDuration ? sectionDuration : duration,
            ease: "power2.out",
          },
          hasCustomDuration ? undefined : "-=0.05"
        );
      }

      if (button1Ref.current) {
        tl.fromTo(
          button1Ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration:
              hasCustomDuration && button1Duration ? button1Duration : duration,
            ease: "power2.out",
          },
          hasCustomDuration ? "+=1.5" : "-=0.05"
        );
      }

      if (button2Ref.current) {
        tl.fromTo(
          button2Ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration:
              hasCustomDuration && button2Duration ? button2Duration : duration,
            ease: "power2.out",
          },
          hasCustomDuration ? "-=1" : "-=0.05"
        );
      }

      if (separatorRef.current) {
        tl.fromTo(
          separatorRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration:
              hasCustomDuration && separatorDuration
                ? separatorDuration
                : duration,
            ease: "power2.out",
          },
          hasCustomDuration ? undefined : "-=0.03"
        );
      }

      return () => {
        tl.kill();
      };
    }
  }, [customDuration, isVisible, modifyBodyOverflow]);

  return {
    h1Ref,
    h2Ref,
    sectionRef,
    separatorRef,
    button1Ref,
    button2Ref,
    isVisible,
  };
};

export default useFadeInAnimation;
