import classNames from 'classnames'
import React from 'react'

function H1(
    { h1Text, h1Ref, isFirstH1 }: { h1Text: string, h1Ref?: React.RefObject<HTMLHeadingElement>, isFirstH1?: boolean }) {
    return (
        <h1
            ref={h1Ref}
            className={classNames(
                'mountains-of-christmas-bold',
                'mountains-o-c-b--h1',
                { 'mountains-o-c-b--1st-h1': isFirstH1 }
            )}
            style={{ opacity: 0 }}
        >
            {h1Text}
        </h1>
    )
}

export default H1
