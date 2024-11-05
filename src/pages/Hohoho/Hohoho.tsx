import React from 'react'

import SnowAnimation from './SnowAnimation'
import ChristmasGiftPage from './ChristmasGiftPage'
import Separator from './Separator'
import HohohoAnimation from './HohohoAnimation'

function Hohoho() {
    return (
        <div className='hohoho-component-container'>
            <SnowAnimation />
            <div className='overlay text-white'>
                <HohohoAnimation />
                <ChristmasGiftPage />
                <Separator separator="lights" />
            </div>
        </div>
    )
}

export default Hohoho
