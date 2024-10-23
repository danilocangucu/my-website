import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillsMarquee: React.FC<{ logos: string[] }> = ({ logos }) => {
    const fillMarquee = (logos: string[], desiredCount: number) => {
        const filledLogos = [];
        let index = 0;

        while (filledLogos.length < desiredCount) {
            filledLogos.push(logos[index % logos.length]);
            index++;
        }

        return filledLogos;
    };

    const filledLogos = fillMarquee(logos, 20);

    return (
        <Marquee gradient={false} pauseOnHover={true} speed={50}>
            {filledLogos.map((logo, index) => (
                <div key={index} style={{ margin: '0 20px' }}>
                    <img key={index} src={logo} alt="Skill Logo" className="marquee-image" height={80} />
                </div>
            ))}
        </Marquee>
    );
};

export default SkillsMarquee;
