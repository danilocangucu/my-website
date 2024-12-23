import React from 'react'
import gsap from 'gsap'

import TopBar from '../../components-shared/TopBar'
import NavBar from '../../components-shared/NavBar/NavBar'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Footer from '../../components-elements/Footer';
import IntroResults from './components/IntroResults';
import Awardee from './components/Awardee';
// import Statistics from './components/Statistics/Statistics';


function ResultsPage() {
    gsap.to('.hohoho-page-container', {
        opacity: 1,
        duration: 0.7,
    });

    const applicationData = useSelector((state: RootState) => state.hohoho.applicationData);
    const isLoggedIn = !!applicationData;

    return (
        <>
            <TopBar delay={500} />
            <NavBar showLogout={isLoggedIn} delay={500} />
            <IntroResults separator='lights' />
            <Awardee separator='branch2' />
            {/* <Statistics separator='branch1' /> */}
            <Footer delay={500} />
        </>
    )
}

export default ResultsPage
