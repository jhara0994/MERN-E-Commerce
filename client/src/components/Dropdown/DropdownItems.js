import React from 'react'
import { useStoreContext } from '../../utils/GlobalState'
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { propTypes } from 'react-bootstrap/esm/Image';
import classes from './dropdown.module.css'
import {motion} from 'framer-motion';

export default function DropdownItems(props) {
    const [state, dispatch] = useStoreContext()

    const { categories } = state;

    console.log(categories)

    const handleClick = (id) => {
        dispatch({
          type: UPDATE_CURRENT_CATEGORY,
          currentCategory: id,
        });
        props.closeMenu()
      };

    const from = {opacity:0, y: 50}
    const to = {opacity:1, y: 0}

    return(
        <div className={classes.Container}>
            {categories.map((category,index) => {
                return(
                    <div key={category._id}>
                        <motion.li
                        className={classes.MotionLi}
                        initial = {from}
                        animate = {to}
                        transition = {{delay: ((index+1)*.1)}}
                        >
                        <button
                            className={classes.DropdownItems}
                            onClick={() => {
                                handleClick(category._id);
                            }}
                        >
                        {category.name}
                        </button>
                        </motion.li>
                    </div>
                )
            })}
        </div>
    )
}