import React from 'react'
import gsap from 'gsap'
import { useSelector } from 'react-redux'

import HohohoAnimation from '../../components-animations/HohohoAnimation'
import Footer from '../../components-elements/Footer'
import NavBar from '../../components-shared/NavBar/NavBar'
import { RootState } from '../../../../redux/store'
import TopBar from '../../components-shared/TopBar'
import IntroLanding from './components/IntroLanding'

function LandingPage() {
    // TODO the following GSAP animation needs to be refactored
    gsap.to('.hohoho-page-container', {
        opacity: 1,
        duration: 0.7,
    });

    const applicationData = useSelector((state: RootState) => state.hohoho.applicationData);
    const isLoggedIn = !!applicationData;

    return (
        <>
            <HohohoAnimation />
            <TopBar />
            <NavBar showLogout={isLoggedIn} />
            <IntroLanding separator="branch1" />
            <Footer />
        </>
    )
}

export default LandingPage
