import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import useFadeInAnimation from '../../hooks/useFadeInAnimation';

type BreadcrumbsProps = {
    separator?: string;
};

function Breadcrumbs({ separator }: BreadcrumbsProps) {
    const { sectionRef, isVisible } = useFadeInAnimation({
        delay: 3500,
    });

    const location = useLocation();

    if (!isVisible) {
        return null;
    }

    const paths = location.pathname.split('/').filter(Boolean);
    const domain = window.location.hostname;
    const completeSegments = [domain, ...paths];

    const renderedBreadCrumbs = completeSegments.map((segment, index) => {
        const displaySegment = segment === 'hohoho' ? 'Ho! Ho! Ho!' : segment;
        const isLast = index === completeSegments.length - 1;
        const className = isLast ? 'color-quaternary' : 'color-border';
        const pathToSegment = `/${completeSegments.slice(1, index + 1).join('/')}`;

        return (
            <React.Fragment key={index}>
                <li className={className}>
                    {isLast ? (
                        displaySegment
                    ) : (
                        <Link to={pathToSegment}>
                            {displaySegment}
                        </Link>
                    )}
                </li>
                {index < completeSegments.length - 1 && <span> {separator} </span>}
            </React.Fragment>
        );
    });

    return (
        <nav aria-label="breadcrumb">
            <section ref={sectionRef}>
                <div className="u-container">
                    <ol className="breadcrumbs-grid margin-top--space-3xs-2xs font-size--step-1 merriweather-regular">
                        {renderedBreadCrumbs}
                    </ol>
                </div>
            </section>
        </nav>
    );
}

export default Breadcrumbs;
