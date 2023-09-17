import React, { createContext, useState } from 'react';
import Home from './components/Home';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

export const ProductContext=createContext([])
export const CartContext=createContext([])

const App = () => {
  const {cartArray,products}=useLoaderData()
  
  
  return (
   
 <ProductContext.Provider value={products}>
     <CartContext.Provider value={[cartArray,products]}>
     <Header></Header>
   <div className='md:min-h-[calc(100vh-341px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
     </CartContext.Provider>
  
 </ProductContext.Provider>
  );
};

export default App;