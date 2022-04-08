import { useState } from 'react';
import classes from './ImageUpload.module.css';
import Auth from '../../utils/auth.js'



const ImageUpload = (props) => {
    const token = Auth.getToken();

    const [image, setImage] = useState();

    const handleImage = (e) =>{
        const {files} = e.target
        setImage(files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', e.target.previousElementSibling.children[0].files[0]);

        const options = {
            method: 'POST',
            body: formData,
            headers: {
                authorization: `Bearer ${token}`
            }
        };
        fetch('/api/images', options)
    }

    return (
        <>
        {props.display && <div className={classes.Container}>
        <div className={classes.Card}>
            <h2>Upload profile picture</h2>
            <form className={classes.Form} onChange={handleImage}>
                <label className={classes.ImageUpload}>
                 <input type='file' name='image' />
                 Select Photo   
                </label>
                
                <button onClick={handleSubmit} disabled={!image || !token}> Submit Photo </button>
            </form>
        </div>
      </div>}
      </> 
        
        
    )
}

export default ImageUpload;