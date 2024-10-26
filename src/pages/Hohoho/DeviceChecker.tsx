import React from 'react';
import { deviceChecker } from '../../utils/HohohoUtils';

const DeviceChecker = () => {
    const couldBeMobileOrTablet = deviceChecker.mayBeMobileOrTablet();
    const touchSupported = deviceChecker.isTouchDevice();

    return (
        <div style={styles.overlay}>
            <h1 style={styles.text as React.CSSProperties}>
                {couldBeMobileOrTablet ? "This could be a mobile or tablet device." : "This could be a desktop device."}<br />
                {touchSupported ? "Touch is supported." : "Touch is not supported."}
            </h1>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '2px solid #333',
        borderRadius: '8px',
        padding: '20px',
        zIndex: 9999,
    },
    text: {
        fontSize: `${Math.min(window.innerWidth, window.innerHeight) / 20}px`,
        textAlign: 'center',
        color: '#333',
    },
};

export default DeviceChecker;
