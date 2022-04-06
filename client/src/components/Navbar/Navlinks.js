import {motion} from 'framer-motion';

const Navlinks = (props) => {
    const from = {opacity:0, y: 50}
    const to = {opacity:1, y: 0}

    return (
        <ul>
            <motion.li
            initial = {from}
            animate = {to}
             onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#home">Home</a>
            </motion.li>
            <motion.li
            initial = {from}
            animate = {to}
            transition = {{delay: .1}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#about">About Me</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .2}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#skills">Skills</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .3}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#work">My Work</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .4}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#resume">Resume</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .5}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#contact">Contact Me</a>
            </motion.li>
        </ul>
    );
}

export default Navlinks;