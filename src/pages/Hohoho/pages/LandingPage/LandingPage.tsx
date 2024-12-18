import React from 'react'
import gsap from 'gsap'
import { useSelector } from 'react-redux'

import HohohoAnimation from '../../components-animations/HohohoAnimation'
import IntroLanding from './components/IntroLanding'
import Deadlines from './components/Deadlines'
import Criteria from './components/Criteria/Criteria'
import CallToAction from './components/CallToAction'
import Footer from '../../components-elements/Footer'
import NavBar from '../../components-shared/NavBar/NavBar'
import { RootState } from '../../../../redux/store'
import TopBar from '../../components-shared/TopBar'

function LandingPage() {
    // TODO the following GSAP animation needs to be refactored
    gsap.to('.hohoho-page-container', {
        opacity: 1,
        duration: 0.7,
    });

    const applicationData = useSelector((state: RootState) => state.hohoho.applicationData);
    const currentLanguage = useSelector((state: RootState) => state.hohoho.language) as "en" | "es" | "ptbr";

    const isLoggedIn = !!applicationData;

    return (
        <>
            <HohohoAnimation />
            <TopBar />
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
