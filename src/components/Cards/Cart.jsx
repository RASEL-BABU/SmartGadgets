import React, { useContext } from 'react';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../../utils/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from '../../App';

const Cart = () => {
    const CartArray=useContext(CartContext)
    console.log(CartArray)

    const hundleRomveFromCart=id=>{
        removeFromDb(id)
    }
    const hundleRemoveAll=()=>{
        deleteShoppingCart()
    }

    let total=0
    if(CartArray.length>0){
        for(const product of CartArray ){
            total=total+product.price*product.quantity;
           
        }
    
    }

  

  
    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
           <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
           <h2 className='text-xl font-semibold'>{CartArray.length?'review Cart item':'cart is empty'}</h2>
           <ul  className='flex flex-col divide-y divide-gray-700'>

         {
               CartArray.map(product=><CartItem key={product.id}
               
                product={product}
                hundleRomveFromCart={hundleRomveFromCart}
               

               ></CartItem>)
         }
           </ul>
           <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
           {(CartArray.length>0?(<button onClick={hundleRemoveAll} className='btn-outlined'>Clear Cart</button>):<Link to='/shop'><button className='btn-outlined'>Back o Home</button></Link>) 
}
           
           <button className='btn-primary'>Place Order</button>
            

        </div>
           </div>
        </div>
    );
};

export default Cart;