import React from 'react';
import { getStoredCart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const Pdata=useLoaderData()
  

    const cart=getStoredCart()

    const CartData=localStorage.getItem('shopping-cart')
   
    return (
        <div>
            this is cart page 
        </div>
    );
};

export default Cart;