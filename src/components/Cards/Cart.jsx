import React from 'react';
import { getStoredCart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const {cartArray}=useLoaderData()
    console.log(cartArray)
  

  
    return (
        <div>
            this is cart page 
        </div>
    );
};

export default Cart;