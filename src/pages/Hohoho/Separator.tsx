import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Separator = ({ separator }: { separator: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible && separator) {
            setImageSrc(`https://danilocangucu.net/my-website/assets/hohoho/separators/${separator}.png`);
            gsap.fromTo(
                imgRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power2.out" }
            );

        }
    }, [isVisible, separator]);

    if (!isVisible || !imageSrc) {
        return null;
    }

    return (
        <div className='img-grid'>
            <img ref={imgRef} src={imageSrc} alt="separator" />
        </div>
    );
};

export default Separator;
