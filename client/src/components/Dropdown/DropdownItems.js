import React from 'react'
import { useStoreContext } from '../../utils/GlobalState'
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { propTypes } from 'react-bootstrap/esm/Image';


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

    return(
        <div>
            {categories.map((category) => {
                return(
                    <div key={category._id}>
                        <button
                            onClick={() => {
                                handleClick(category._id);
                            }}
                        >
                        {category.name}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}