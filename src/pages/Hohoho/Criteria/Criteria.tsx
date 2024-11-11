import React from 'react'
import Header from '../Header/Header'
import Paragraph from '../Paragraph'
import CriteriaList from './CriteriaList';
import useFadeInAnimation from '../../../hooks/useFadeInAnimation';
import Separator from '../Separator';

function Criteria({ separator }: { separator: string }) {
    const { h1Ref, h2Ref, sectionRef, separatorRef, isVisible } = useFadeInAnimation({
        delay: 5600,
    });

    if (!isVisible) {
        return null;
    }

    const criteria = [
        {
            title: 'Clear Vision and Ready Content:',
            description:
                'The project must be well-defined with all necessary content (such as text, images, and videos) prepared and ready for development.',
        },
        {
            title: 'Communication:',
            description:
                'The applicant should be able to communicate effectively in one of the following languages: Portuguese, Spanish, English, or Swedish.',
        },
        {
            title: 'Collaboration:',
            description:
                'A website is not made alone. The applicant should be available for a few videocalls during the construction process (perhaps once a week over 6 weeks) to approve design elements, give feedback on progress, and ensure the project stays on track.',
        },
        {
            title: 'Feasibility:',
            description:
                'The project should be manageable and able to be completed within a 6-week timeframe.',
        },
    ];

    return (
        <>
            <div className="u-container">
                <Header
                    h1Text='Award Criteria'
                    h2Text='Guidelines for Success'
                    h1Ref={h1Ref}
                    h2Ref={h2Ref}
                />
                <section className="p-grid p-grid--font-size" ref={sectionRef} style={{ opacity: 0 }}>
                    <Paragraph>
                        To make sure the project is a perfect fit for this Christmas gift, I have a few selection criteria in mind. Here's what I'm looking for:
                    </Paragraph>
                    <CriteriaList criteria={criteria} />
                </section>
            </div>
            <Separator separator={separator} separatorRef={separatorRef} />
        </>
    )
}

export default Criteria
