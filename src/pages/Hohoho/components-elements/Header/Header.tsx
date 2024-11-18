import React, { RefObject } from 'react'

import H1 from './H1'
import H2 from './H2'

interface HeaderProps {
    h1Text?: string;
    h2Text?: string;
    h1Ref?: RefObject<HTMLHeadingElement>;
    h2Ref?: RefObject<HTMLHeadingElement>;
    isFirstH1?: boolean;
}

const Header: React.FC<HeaderProps> = ({ h1Ref, h2Ref, h1Text, h2Text, isFirstH1 }) => {
    return (
        <header>
            {h1Text && <H1 h1Text={h1Text} h1Ref={h1Ref} isFirstH1={isFirstH1} />}
            {h2Text && <H2 h2Text={h2Text} h2Ref={h2Ref} />}
        </header>
    )
}

export default Header
