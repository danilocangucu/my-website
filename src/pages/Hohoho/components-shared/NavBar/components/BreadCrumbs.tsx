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
        "results": t('breadcrumbs-results'),
        "guidelines": t('breadcrumbs-guidelines'),
        "my-application": t('breadcrumbs-my-application'),
        "hohoho": t('breadcrumbs-hohoho')
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, pathToSegment: string) => {
        event.preventDefault();
        gsap.to(['.hohoho-page-container', '.footer'], {
            opacity: 0,
            duration: 0.7,
            onComplete: () => {
                navigate(pathToSegment, { state: { fromHohoho: true } });
            },
        });
    };

    const breadcrumbPaths = ['hohoho', 'results', 'guidelines', 'my-application'];

    const renderedBreadCrumbs = breadcrumbPaths.map((segment, index) => {
        const displaySegment = segmentMapping[segment] || segment.replace(/-/g, ' ');

        let pathToSegment = `/${segment}`;
        if (index !== 0) {
            pathToSegment = `/hohoho${pathToSegment}`;
        }
        if (segment === 'hohoho') {
            pathToSegment += `?lang=${currentLanguage}`;
        }

        const isActive = location.pathname === pathToSegment || location.pathname === `/${segment}`;

        const className = isActive ? 'active-class color-quaternary' : 'color-border';

        return (
            <React.Fragment key={index}>
                <li className={className}>
                    {isActive ? (
                        displaySegment
                    ) : (
                        <Link
                                to={pathToSegment}
                                onClick={(event) => handleClick(event, pathToSegment)}
                        >
                            {displaySegment}
                        </Link>
                    )}
                    {index < breadcrumbPaths.length - 1 && <span className='text-white'> ∙ </span>}
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
