import Navlinks from './Navlinks';
import classes from './Navbar.module.css';
import {FaWindowClose} from 'react-icons/fa';
import {RiMenu5Fill} from 'react-icons/ri';
import { useState } from 'react';

const MobileNav = () => {

    const [expanded, setExpanded] = useState(false);
    const closeMenu = () => setExpanded(false);

    return (
        <nav className={classes.MobileNav}>
            
            {!expanded && <RiMenu5Fill className={classes.Hamburger} color='white' size='40px'
            onClick={()=>setExpanded(!expanded)} />}
            {expanded && <FaWindowClose className={classes.Hamburger} color='white' size='40px'
            onClick={()=>setExpanded(!expanded)} />}
            {expanded && <Navlinks mobile={true} closeMenu={closeMenu}/>}
        </nav>
    );
}

export default MobileNav;