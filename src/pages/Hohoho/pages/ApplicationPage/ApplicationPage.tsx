import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import IntroApplication from './components/IntroApplication/IntroApplication';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';

import { RootState } from '../../../../redux/store';
import { setHohohoApplicationData, setHohohoToken } from '../../redux/hohohoSlice';
import { loadApplicationData, scrollAndAnimate } from '../../utils/MyApplicationUtils';
import Footer from '../../components-elements/Footer';
import NavBar from '../../components-shared/NavBar/NavBar';
import SentApplication from './components/SentApplication/SentApplication';
import SnowLoading from './SnowLoading';
import TopBar from '../../components-shared/TopBar';

// TODO refactor ApplicationPage
// TODO check GSAP error in console coming from ApplicationPage
function ApplicationPage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const applicationData = useSelector((state: RootState) => state.hohoho.applicationData);
    const isLoggedIn = !!applicationData;

    // TODO refactor useEffect
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('hohohoJwtToken');
            if (token) {
                try {
                    // TODO loadApplication returns also loadMessage. Where could it be used?
                    const { applicationData } = await loadApplicationData(token);
                    setIsLoading(false);

                    if (applicationData) {
                        dispatch(setHohohoApplicationData(applicationData));
                        dispatch(setHohohoToken(token));
                    }

                } catch (err) {
                    // TODO Debug fetch error. Could loadMessage be used here?
                    setIsLoading(false);
                }
            }
            setIsLoading(false);
        };

        fetchData();

        if (location.state?.fromHohoho) {
            scrollAndAnimate();
        }
    }, [dispatch, location.state?.fromHohoho]);

    if (isLoading) {
        return <SnowLoading isLoading={isLoading} />;
    }

    const isComplete = applicationData?.application.isComplete;

    return (
        <>
            <TopBar delay={500} />
            <NavBar showLogout={isLoggedIn} delay={500} />
            <IntroApplication separator="branch1" isLoggedIn={isLoggedIn} isComplete={isComplete} />
            {isComplete ? <SentApplication /> : <ApplicationForm />}
            <Footer delay={500} />
        </>
    )
}

export default ApplicationPage
