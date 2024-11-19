import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { BASE_URL } from '../../utils/HohohoUtils';

const HEAVY_SNOW_FLAKE_URL = `${BASE_URL}/snow1.png`;

function SnowLoading({ isLoading }: { isLoading: boolean }) {
    const snowflakeRef = useRef<HTMLImageElement | null>(null);
    const [showSnow, setShowSnow] = useState(isLoading);

    useEffect(() => {
        if (isLoading) {
            setShowSnow(true);

            gsap.to(snowflakeRef.current, {
                opacity: 1,
                duration: 0.2,
                rotation: 360,
                repeat: -1,
                ease: "power2.inOut",
            });
        } else {
            gsap.to(snowflakeRef.current, {
                opacity: 0,
                duration: 0.2,
                ease: "power2.inOut",
                onComplete: () => setShowSnow(false),
            });
        }
    }, [isLoading]);

    if (!showSnow) {
        return null;
    }

    return (
        <div className="loading-snow-container">
            <img
                ref={snowflakeRef}
                className="loading-snowflake"
                src={HEAVY_SNOW_FLAKE_URL}
                alt="Loading snowflake"
                style={{ opacity: 0 }}
            />
        </div>
    );
}

export default SnowLoading;
