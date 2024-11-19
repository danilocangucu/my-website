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
import SentApplication from './components/SentApplication';

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
                    const { applicationData, loadMessage } = await loadApplicationData(token);
                    setIsLoading(false);

                    if (applicationData) {
                        dispatch(setHohohoApplicationData(applicationData));
                        dispatch(setHohohoToken(token));
                        console.log("loadMessage", loadMessage);
                    }

                } catch (err) {
                    console.log('Failed to load data. Please try again later.');
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

    // TODO better loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const isComplete = applicationData?.application.isComplete;

    return (
        <>
            <NavBar showLogout={isLoggedIn} delay={500} />
            <IntroApplication separator="branch1" isLoggedIn={isLoggedIn} isComplete={isComplete} />
            {isComplete ? <SentApplication /> : <ApplicationForm />}
            <Footer />
        </>
    )
}

export default ApplicationPage
