import React, { useState } from 'react'
import classes from './dropdown.module.css'
import {FaWindowClose} from 'react-icons/fa';
import {RiMenu5Fill} from 'react-icons/ri';
import DropdownItems from './DropdownItems';

export default function Dropdown( props ) {
    const [expanded, setExpanded] = useState(false);
    const closeMenu = () => setExpanded(false);

    

    return (
        <div className="dropdownContainer">
            {!expanded && <RiMenu5Fill className={classes.Hamburger} color='black' size='40px'
            onClick={()=>setExpanded(!expanded)} />}
            {expanded && <FaWindowClose className={classes.Hamburger} color='black' size='40px'
            onClick={()=>setExpanded(!expanded)} />}
            {expanded && <DropdownItems closeMenu={closeMenu}/>}
        </div>
    )
}

