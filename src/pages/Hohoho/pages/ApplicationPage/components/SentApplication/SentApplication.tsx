import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../redux/store';
import SentAboutYou from './SentAboutYou';
import SentPersonalInformation from './SentPersonalInformation';
import SentAboutYourWebsite from './SentAboutYourWebsite';
import SentLinksAndReferences from './SentLinksAndReferences';
import SentFinalThoughts from './SentFinalThoughts';

function SentApplication() {


    const applicationData = useSelector((state: RootState) => state.hohoho.applicationData?.application);

    return (
        <>
            <SentPersonalInformation personalInformation={applicationData?.personalInformation!} />
            <SentAboutYou aboutYou={applicationData?.aboutYou!} />
            <SentAboutYourWebsite aboutYourWebsite={applicationData?.aboutYourWebsite!} />
            <SentLinksAndReferences linksAndReferences={applicationData?.linksAndReferences!} />
            <SentFinalThoughts finalThoughts={applicationData?.finalThoughts!} />
        </>
    )
}

export default SentApplication
