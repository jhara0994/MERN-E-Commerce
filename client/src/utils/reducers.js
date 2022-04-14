import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
  SEARCH_BAR,
  TOGGLE_DISPLAY_PRODUCT_IMAGE_UPLOAD
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {

      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...action.products],
        };
  
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
  
      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };
  
      case REMOVE_FROM_CART:
        let newState = state.cart.filter((product) => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };
  
      case TOGGLE_CART:
        return {
          ...state,
          cartOpen: !state.cartOpen,
        };
  
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories],
        };
  
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.currentCategory,
        };

      case SEARCH_BAR: 
      return {
        ...state,
        products: [...action.products]
      };
      case TOGGLE_DISPLAY_PRODUCT_IMAGE_UPLOAD:
        return{
          ...state, 
          toggleDisplayProductImageUpload: !state.toggleDisplayProductImageUpload
        };

      default:
        return state;
    }
  };
  
  export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }