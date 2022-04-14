import React from 'react'

function DropdownBtn( props ) {
    var content = props.content
    var handleClick = props.onClick

    return (
        <div>
            <div>
                {content}
            </div>
        </div>
    )
}