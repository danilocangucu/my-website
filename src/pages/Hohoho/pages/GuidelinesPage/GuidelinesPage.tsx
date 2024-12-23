import React from 'react'
import gsap from 'gsap'
import { useSelector } from 'react-redux'

import IntroGuidelines from './components/IntroGuidelines'
import Deadlines from './components/Deadlines'
import Criteria from './components/Criteria/Criteria'
import CallToAction from './components/CallToAction'
import Footer from '../../components-elements/Footer'
import NavBar from '../../components-shared/NavBar/NavBar'
import { RootState } from '../../../../redux/store'
import TopBar from '../../components-shared/TopBar'

function GuidelinesPage() {
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
            <TopBar delay={500} />
            <NavBar showLogout={isLoggedIn} delay={500} />
            <IntroGuidelines separator="branch2" />
            <Deadlines separator="branch1" language={currentLanguage} />
            <Criteria separator="lights" />
            <CallToAction />
            <Footer delay={500} />
        </>
    )
}

export default GuidelinesPage
