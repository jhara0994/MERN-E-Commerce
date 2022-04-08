import { useState } from 'react';
import classes from './ImageUpload.module.css';



const ImageUpload = () => {
    const [image, setImage] = useState();

    const handleImage = (e) =>{
        const {value} = e.target
        setImage(value)
    }

    return (
        <>
        <form className={classes.Form} action='/api/images' method="post" encType="multipart/form-data" onChange={handleImage}>
        <input type='file' name='image' />
        <button type='submit' disabled={!image}> Submit Photo </button>
        </form>
        </>
    )
}

export default ImageUpload;