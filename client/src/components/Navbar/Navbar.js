import MobileNav from "./MobileNav";
import LargeNav from "./LargeNav";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <LargeNav />
          <MobileNav />
        </div>

    );

}

export default Navbar;