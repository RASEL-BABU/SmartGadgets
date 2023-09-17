import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Header from './components/Header';
export const ProductContext = createContext([])
export const CartContext = createContext([])

const App = () => {
 
  let [isOpen, setIsOpen] = useState(false)
  const { products, initialCart } = useLoaderData()
 
  const cartAlert = sessionStorage.getItem('alert')

  if (initialCart.length > 0 && cartAlert !== 'true') {
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }
  
  const [cart, setCart] = useState(initialCart)
  return (
    <div>
       <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
       
        <div className='md:min-h-[calc(100vh-341px)]'>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
      
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
    </div>
    
  );
};

export default App;