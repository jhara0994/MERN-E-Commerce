import ProductImageUpload from '../../components/ProductImageUpload/ProductImageUpload';
import classes from './Dashboard.module.css';
import { useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import {MUTATION_ADD_PRODUCT} from '../../utils/mutations';
import { useEffect, useState } from 'react';
import Auth from '../../utils/auth.js';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_DISPLAY_PRODUCT_IMAGE_UPLOAD } from '../../utils/actions';
import MyProducts from '../../components/MyProducts/MyProducts';


const SellerDashboard = () => {
   const [queryCategories] = useLazyQuery(QUERY_CATEGORIES);
   const [categories, setCategories] = useState([]);
   const [productId, setProductId] = useState('');
   const [addProduct, { loading, error}] = useMutation(MUTATION_ADD_PRODUCT);
    const [state, dispatch] = useStoreContext();
   
   useEffect(() => {
    const getCategoryData = async() => {
      const  { data } = await queryCategories()
      

      if (data.categories) {
        setCategories(data.categories)
    }} 
    getCategoryData()
    
  }, [queryCategories, setCategories]);

if(loading){
       return `Adding Product...`
   }
   if(error){
       return `Error adding product: ${error}`
   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = parseFloat(document.getElementById('price').value);
    const categoryId = document.getElementById('category').options[document.getElementById('category').selectedIndex].id;
    const {data: profileData} = Auth.getProfile();
    const {_id: sellerId} = profileData;
    const {data: productData} = await addProduct({variables:{title,description,price,category: categoryId, sellerId}});
    const newProductId = productData.addProduct._id;
    setProductId(newProductId);
    dispatch({ type: TOGGLE_DISPLAY_PRODUCT_IMAGE_UPLOAD });
   
    

  }

    
    return (
        Auth.loggedIn() ? <div className={classes.SellerDashboard}>
            <div className={classes.Container}>
                <h1> Seller Dashboard </h1>
                
                        <form className={classes.ProductForm}>
                            <label htmlFor="title"> Title </label>
                            <input name='title' id='title' placeholder='Title of Artwork' />
                            <label htmlFor="description"> Description </label>
                            <input name='description' id='description' placeholder='Describe your work' />
                            <label htmlFor="price"> Price </label>
                            <input name='price' id='price' placeholder='49.99' />
                            <select id='category'>
                                {categories.map((category)=> {
                                    return(
                                        <option id={category._id} key={category._id}> {category.name} </option>
                                    )
                                })}
                            </select>
                            <button onClick={handleSubmit} disabled={state.toggleDisplayProductImageUpload} > Upload Picture</button>
                        </form>
                        <ProductImageUpload productId={productId}/>
                
                {Auth.loggedIn()&& <MyProducts userId={Auth.getProfile().data._id} />}
                
            </div>
        </div>: 
        <div className={classes.SellerDashboard}>
            <div className={classes.Container}>
                <h1> Seller Dashboard </h1>
                <p className={classes.LoginError}>Please log in!</p>
                </div>
        </div>
    )
}

export default SellerDashboard;