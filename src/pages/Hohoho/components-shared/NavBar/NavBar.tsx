import React from 'react';

import Breadcrumbs from './components/BreadCrumbs';
import LanguageSelector from './components/LanguageSelector';
import Logout from '../../pages/ApplicationPage/components/Logout';
import useFadeInAnimation from '../../hooks/useFadeInAnimation';

type NavBarProps = {
    showLogout?: boolean;
    delay?: number;
};

const NavBar: React.FC<NavBarProps> = ({ showLogout, delay }) => {
    const { sectionRef, isVisible } = useFadeInAnimation({
        delay: (delay ? delay : 3500),
    });

    if (!isVisible) {
        return null;
    }

    return (
        <nav className="u-container">
            <section className="margin-top--space-3xs-2xs font-size--step--1 merriweather-regular" ref={sectionRef} style={{ opacity: 0 }}>
                <div className="navbar-grid">
                    <div className="navbar-top">
                        <Breadcrumbs />
                        <LanguageSelector />
                    </div>
                    {showLogout && <div className='navbar-bottom'><Logout /></div>}
                </div>
            </section>
        </nav>
    );
};

export default NavBar;
