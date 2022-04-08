import Navlinks from './Navlinks';
import classes from './Navbar.module.css';

const LargeNav = () => {
    return (
        <nav className={classes.LargeNav}>
            <Navlinks />
        </nav>    
    );
}

export default LargeNav;