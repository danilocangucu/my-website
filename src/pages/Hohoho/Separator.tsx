import React, { RefObject } from 'react';

const Separator = ({ separator, separatorRef }: { separator: string, separatorRef: RefObject<HTMLHeadingElement> }) => {
    const imageSrc = `https://danilocangucu.net/my-website/assets/hohoho/separators/${separator}.png`

    // TODO separator is not resized properly in small screens, height should go as smaller as possible
    return (
        <div className='img-grid' ref={separatorRef} style={{ opacity: 0 }}>
            <img
                src={imageSrc}
                alt="separator"
            />
        </div>
    );
};

export default Separator;
