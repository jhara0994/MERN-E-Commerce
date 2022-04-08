import { useState } from 'react';
import classes from './ImageUpload.module.css';
import Auth from '../../utils/auth.js'



const ImageUpload = () => {
    const token = Auth.getToken();

    const [image, setImage] = useState();

    const handleImage = (e) =>{
        const {files} = e.target
        setImage(files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', e.target.previousElementSibling.files[0]);

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
        <form className={classes.Form} onChange={handleImage}>
        <input type='file' name='image' />
        <button onClick={handleSubmit} disabled={!image || !token}> Submit Photo </button>
        </form>
        </>
    )
}

export default ImageUpload;