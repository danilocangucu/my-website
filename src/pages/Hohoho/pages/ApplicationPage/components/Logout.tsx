import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

import { setHohohoApplicationData, setHohohoToken } from '../../../redux/hohohoSlice';
import Button from '../../../components-elements/Button';
import { useTranslation } from 'react-i18next';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation('hohoho/shared');

    const handleLogout = () => {
        localStorage.removeItem('hohohoJwtToken');
        dispatch(setHohohoApplicationData(null));
        dispatch(setHohohoToken(""));

        gsap.to(['.hohoho-page-container', '.footer'], {
            opacity: 0,
            duration: 0.7,
            onComplete: () => {
                // TODO debug logout, data is persisting. Animations are bugging. Temporary refresh solution.
                navigate('/hohoho');
            },
        });
    };

    return (
        <>
            <Button text={t("logout-button")} onClick={handleLogout} variant='tertiary' size="x-small" />
        </>
    );
};

export default Logout;
