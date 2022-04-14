import React, { useState } from 'react'
import { DropdownBtn } from './DropdownBtn'

function Dropdown( props ) {
    const [ display, setDisplay ] = useState( 'none' )

    function handleClick() {
        if ( display === 'none' ) {
            setDisplay( 'block' )
        } else {
            setDisplay ( 'none' )
        }
    }

    return (
        <div className="dropdown-container">
            <DropdownBtn />
            <div className="dropdown" style={{display:display}}>
                { props.children }
            </div>
        </div>
    )
}

export { Dropdown }