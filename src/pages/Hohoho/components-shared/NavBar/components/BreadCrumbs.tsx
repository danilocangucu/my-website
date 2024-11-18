import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { RootState } from '../../../../../redux/store';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Breadcrumbs() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentLanguage = useSelector((state: RootState) => state.hohoho.language);

    const { t } = useTranslation("hohoho/shared");

    const segmentMapping: Record<string, string> = {
        "my-application": t('breadcrumbs-my-application'),
        "hohoho": t('breadcrumbs-hohoho')
    };

    // TODO refactor handleClick in CallToAction to be shared with BreadCrumbs
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, pathToSegment: string) => {
        event.preventDefault();
        gsap.to(['.hohoho-page-container', '.footer'], {
            opacity: 0,
            duration: 0.7,
            onComplete: () => {
                // TODO tenery operator needs to be checked
                if (location.pathname === '/hohoho' && pathToSegment === '/hohoho/my-application') {
                    const url = `/hohoho/my-application?lang=${currentLanguage}`;
                    navigate(url, { state: { fromHohoho: true } });
                } else {
                    navigate(pathToSegment, { state: { fromHohoho: true } });
                }
            },
        });
    };

    const paths = location.pathname.split('/').filter(Boolean);
    const domain = window.location.hostname;
    const completeSegments = [domain, ...paths];

    const isOnHohohoPath = location.pathname === '/hohoho' || location.pathname === '/hohoho/';
    if (isOnHohohoPath) {
        completeSegments.push('my-application');
    }

    const renderedBreadCrumbs = completeSegments.map((segment, index) => {
        const displaySegment = segmentMapping[segment] || segment.replace(/-/g, ' ');
        const isLast = index === completeSegments.length - (isOnHohohoPath ? 2 : 1);
        const className = isLast ? 'color-quaternary' : 'color-border';
        let pathToSegment = `/${completeSegments.slice(1, index + 1).join('/')}`;

        if (pathToSegment === '/hohoho') {
            pathToSegment += `?lang=${currentLanguage}`;
        }

        return (
            <React.Fragment key={index}>
                <li className={className}>
                    {isLast ? (
                        displaySegment
                    ) : (
                        <Link
                            to={pathToSegment}
                            onClick={(event) => handleClick(event, pathToSegment)}
                        >
                            {displaySegment}
                        </Link>
                    )}
                    {index < completeSegments.length - 1 && <span className='text-white'> ∙ </span>}
                </li>
            </React.Fragment>
        );
    });

    return (
        <ol className="breadcrumbs-grid">
            {renderedBreadCrumbs}
        </ol>
    );
}

export default Breadcrumbs;
