import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import i18next from 'i18next'

import SnowAnimation from './components-animations/SnowAnimation'

// Translations
// Shared
import enShared from './translations/shared/en.json'
import esShared from './translations/shared/es.json'
import ptbrShared from './translations/shared/ptbr.json'
// Landing Page
import enLandingPage from './translations/landing-page/en.json'
import esLandingPage from './translations/landing-page/es.json'
import ptbrLandingPage from './translations/landing-page/ptbr.json'
// Results Page
import enResultsPage from './translations/results-page/en.json'
import esResultsPage from './translations/results-page/es.json'
import ptbrResultsPage from './translations/results-page/ptbr.json'
// Guidelines Page
import enGuidelinesPage from './translations/guidelines-page/en.json'
import esGuidelinesPage from './translations/guidelines-page/es.json'
import ptbrGuidelinesPage from './translations/guidelines-page/ptbr.json'
// Application Page
import enApplicationPage from './translations/application-page/en.json'
import esApplicationPage from './translations/application-page/es.json'
import ptbrApplicationPage from './translations/application-page/ptbr.json'

import useLanguageDetection from './hooks/useLanguageDetection'
import useLanguage from './hooks/useLanguage'


function Hohoho() {
    // TODO debug language detection
    useLanguageDetection();
    useLanguage();

    // TODO refactor Hohoho useEffect
    useEffect(() => {
        // Translations
        // Shared
        i18next.addResources('en', 'hohoho/shared', enShared);
        i18next.addResources('es', 'hohoho/shared', esShared);
        i18next.addResources('ptbr', 'hohoho/shared', ptbrShared);
        // Landing Page
        i18next.addResources('en', 'hohoho/landing-page', enLandingPage);
        i18next.addResources('es', 'hohoho/landing-page', esLandingPage);
        i18next.addResources('ptbr', 'hohoho/landing-page', ptbrLandingPage);
        // Results Page
        i18next.addResources('en', 'hohoho/results-page', enResultsPage);
        i18next.addResources('es', 'hohoho/results-page', esResultsPage);
        i18next.addResources('ptbr', 'hohoho/results-page', ptbrResultsPage);
        // Guidelines Page
        i18next.addResources('en', 'hohoho/guidelines-page', enGuidelinesPage);
        i18next.addResources('es', 'hohoho/guidelines-page', esGuidelinesPage);
        i18next.addResources('ptbr', 'hohoho/guidelines-page', ptbrGuidelinesPage);
        // Application Page
        i18next.addResources('en', 'hohoho/application-page', enApplicationPage);
        i18next.addResources('es', 'hohoho/application-page', esApplicationPage);
        i18next.addResources('ptbr', 'hohoho/application-page', ptbrApplicationPage)
    }, []);

    return (
        <div className='hohoho-component-container'>
            <SnowAnimation />
            <div className='overlay text-white'>
                <div className="hohoho-page-container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Hohoho