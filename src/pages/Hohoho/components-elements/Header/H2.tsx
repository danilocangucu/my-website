import React from 'react'

function H2({ h2Text, h2Ref }: { h2Text: string, h2Ref?: React.RefObject<HTMLHeadingElement> }) {
    return (
        <h2
            ref={h2Ref}
            className="merriweather-regular merriweather-r--h2"
            style={{ opacity: 0 }}>
            {h2Text}
        </h2>
    )
}

export default H2
