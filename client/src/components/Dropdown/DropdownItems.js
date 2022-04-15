import React from 'react'
import { useStoreContext } from '../../utils/GlobalState'
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';


export default function DropdownItems() {
    const [state, dispatch] = useStoreContext()

    const { categories } = state;

    console.log(categories)

    const handleClick = (id) => {
        dispatch({
          type: UPDATE_CURRENT_CATEGORY,
          currentCategory: id,
        });
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