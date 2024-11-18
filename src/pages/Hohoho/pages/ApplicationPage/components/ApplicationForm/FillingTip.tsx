import React from 'react'
import Collapsible from 'react-collapsible'

function FillingTip({ text }: { text: string }) {
    return (
        <Collapsible trigger={<div><span className='cursor-pointer font-size--step--1'>💬</span></div>} transitionTime={300}>
            <div className="margin-top--space-2xs">{text}</div>
        </Collapsible>
    )
}

export default FillingTip
