import React from 'react'

import SnowAnimation from './Animations/SnowAnimation'
import HohohoAnimation from './Animations/HohohoAnimation'
import Intro from './Intro'
import Deadlines from './Deadlines'
import Criteria from './Criteria/Criteria'
import CallToAction from './CallToAction'
import Breadcrumbs from './BreadCrumbs'
import Footer from './Footer'

function Hohoho() {
    return (
        <div className='hohoho-component-container'>
            <SnowAnimation />
            <div className='overlay text-white'>
                <HohohoAnimation />
                <Breadcrumbs separator='❄' />
                <Intro separator="branch1" />
                <Deadlines separator="lights" />
                <Criteria separator="branch2" />
                <CallToAction />
                <Footer />
            </div>
        </div>
    )
}

export default Hohoho