import React from 'react'
import { useTranslation } from 'react-i18next';
import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import Header from '../../../../components-elements/Header/Header';

interface PersonalInformationProps {
    personalInformation: {
        fullName: string;
        emailAddress: string;
        phoneNumber: string;
        preferredLanguage: string;
    };
}

function SentPersonalInformation({ personalInformation }: PersonalInformationProps) {
    const { h2Ref, sectionRef, isVisible } = useFadeInAnimation({
        delay: 1000,
        customDuration: { hasCustomDuration: true, h2Duration: 0.5, sectionDuration: 0.5 },
    });

    const { t } = useTranslation("hohoho/application-page");

    if (!isVisible) {
        return null;
    }

    const languageNames: { [key: string]: string } = {
        en: "English",
        es: "Español",
        sv: "Svenska",
        ptbr: "Português (Brasil)"
    };

    return (
        <div className="u-container">
            <Header h2Text={t("h2-personal-information")} h2Ref={h2Ref} />
            <section
                ref={sectionRef}
                className="p-grid p-grid--font-size"
                style={{ opacity: 0 }}
            >
                <dl>
                    <dt className="merriweather-regular">{t("1-PI-full-name")}</dt>
                    <dd className="quattrocento-regular color-quaternary margin-top--15px">
                        {personalInformation.fullName}
                    </dd>

                    <dt className="merriweather-regular">{t("1-PI-email")}</dt>
                    <dd className="quattrocento-regular color-quaternary margin-top--15px">
                        {personalInformation.emailAddress}
                    </dd>

                    <dt className="merriweather-regular">{t("1-PI-phone-number")}</dt>
                    <dd className="quattrocento-regular color-quaternary margin-top--15px">
                        {personalInformation.phoneNumber}
                    </dd>

                    <dt className="merriweather-regular">{t("1-PI-preferred-language")}</dt>
                    <dd className="quattrocento-regular color-quaternary margin-top--15px">
                        {languageNames[personalInformation.preferredLanguage as keyof typeof languageNames] || personalInformation.preferredLanguage}
                    </dd>
                </dl>
            </section>
        </div>
    )
}

export default SentPersonalInformation
