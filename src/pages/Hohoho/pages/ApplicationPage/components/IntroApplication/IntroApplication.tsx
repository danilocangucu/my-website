import React from 'react';
import { gsap } from 'gsap';

import Header from '../../../../components-elements/Header/Header';
import Paragraph from '../../../../components-elements/Paragraph';
import Separator from '../../../../components-shared/Separator';
import CollapsibleManager from './CollapsibleManager';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import { useTranslation } from 'react-i18next';

interface IntroApplicationProps {
  separator: string;
  isLoggedIn: boolean;
  isComplete: boolean | undefined;
}

const IntroApplication: React.FC<IntroApplicationProps> = ({ separator, isLoggedIn, isComplete }) => {
  const { h1Ref, h2Ref, sectionRef, separatorRef, isVisible } = useFadeInAnimation({
    delay: 500,
    modifyBodyOverflow: true,
    additionalAnimation: () => {
      gsap.to('.snowFlake', { opacity: 0.6, duration: 3.5 });
    }
  });

  const { t } = useTranslation("hohoho/application-page");

  if (!isVisible) {
    return null;
  }

  const h2Text = isLoggedIn
    ? isComplete
      ? t("h2-complete")
      : t("h2-welcome-back")
    : t("h2-start");

  const paragraphText = isLoggedIn
    ? isComplete
      ? t("p1-complete")
      : t("p1-welcome-back")
    : t("p1-start");

  const isHTML = (str: string) => /<[a-z][\s\S]*>/i.test(str);

  return (
    <>
      <div className="u-container">
        <Header
          h1Text={t("intro-h1")}
          h2Text={h2Text}
          h1Ref={h1Ref}
          h2Ref={h2Ref}
          isFirstH1={true}
        />
        <section
          ref={sectionRef}
          className="p-grid p-grid--font-size"
          style={{ opacity: 0 }}
        >
          {/* TODO solve this html check */}
          {
            isHTML(paragraphText)
              ? <div dangerouslySetInnerHTML={{ __html: paragraphText }} />
              : <Paragraph>{paragraphText}</Paragraph>
          }
          {!isLoggedIn && <CollapsibleManager />}
        </section>
      </div>
      <Separator separator={separator} separatorRef={separatorRef} />
    </>
  );
};

export default IntroApplication;