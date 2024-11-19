import React from 'react'
import gsap from 'gsap'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import HohohoAnimation from '../../components-animations/HohohoAnimation'
import IntroLanding from './components/IntroLanding'
import Deadlines from './components/Deadlines'
import Criteria from './components/Criteria/Criteria'
import CallToAction from './components/CallToAction'
import Footer from '../../components-elements/Footer'
import NavBar from '../../components-shared/NavBar/NavBar'
import { RootState } from '../../../../redux/store'
import { BASE_URL } from '../../utils/HohohoUtils';

function LandingPage() {
    // TODO the following GSAP animation needs to be refactored
    gsap.to('.hohoho-page-container', {
        opacity: 1,
        duration: 0.7,
    });

    const { t } = useTranslation("hohoho/landing-page");

    const applicationData = useSelector((state: RootState) => state.hohoho.applicationData);
    const currentLanguage = useSelector((state: RootState) => state.hohoho.language) as "en" | "es" | "ptbr";

    const isLoggedIn = !!applicationData;
    const imageUrl = `${BASE_URL}/hohoho-preview.png`;

    return (
        <>
            <Helmet>
                <title>{t("title")}</title>
                <meta property="og:url" content="https://danilocangucu.net/hohoho" />
                <meta name="description" content={t("description")} />
                <meta property="og:title" content={t('myApplication.title')} />
                <meta property="og:description" content={t('myApplication.description')} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:alt" content={t('myApplication.imageAlt')} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:type" content="website" />
            </Helmet>
            <HohohoAnimation />
            <NavBar showLogout={isLoggedIn} />
            <IntroLanding separator="branch1" />
            <Deadlines separator="lights" language={currentLanguage} />
            <Criteria separator="branch2" />
            <CallToAction />
            <Footer />
        </>
    )
}

export default LandingPage
