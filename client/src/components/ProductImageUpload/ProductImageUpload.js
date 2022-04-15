import { useState } from 'react';
import classes from './ProductImageUpload.module.css';
import Auth from '../../utils/auth.js'
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_DISPLAY_PRODUCT_IMAGE_UPLOAD } from '../../utils/actions';



const ProductImageUpload = (props) => {
    console.log(props.productId)
    const [state, dispatch] = useStoreContext();
    const token = Auth.getToken();

    const [image, setImage] = useState();


    const handleImage = (e) =>{
        const {files} = e.target
        setImage(files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: TOGGLE_DISPLAY_PRODUCT_IMAGE_UPLOAD
        });
        const formData = new FormData();
        formData.append('file', e.target.previousElementSibling.children[0].files[0]);

        const options = {
            method: 'POST',
            body: formData,
            headers: {
                authorization: `Bearer ${token}`
            }
        };
        fetch(`/api/images/product/${props.productId}`, options);
        setImage('');
    }

    if(!state.toggleDisplayProductImageUpload){
        return(
            <>
            
            </>
        )
    }
    
    return (
        <>
         <div className={classes.Container}>
        <div className={classes.Card}>
            <h2>Upload Product Image</h2>
            <form className={classes.Form} onChange={handleImage}>
                <label className={classes.ImageUpload}>
                 <input type='file' name='image' />
                 Select Photo   
                </label>
                
                <button onClick={handleSubmit} disabled={!image || !token}> Submit Photo </button>
            </form>
        </div>
      </div>
      </> 
        
        
    )
}

export default ProductImageUpload;