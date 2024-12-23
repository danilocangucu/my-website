import React from 'react';

function H3({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="merriweather-regular merriweather-r--h3">
            {children}
        </h3>
    );
}

export default H3;
