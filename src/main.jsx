import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  { Toaster } from 'react-hot-toast';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Shop from './components/Shop/Shop.jsx';
import Cart from './components/Cards/Cart.jsx';
import { productsAndCartData } from './loaders/getCartandProducts.js';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:productsAndCartData,
 
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/shop',
        element:<Shop></Shop>
        ,
       
        
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/cart',
        element:<Cart></Cart>,
  
       
   
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
 <Toaster></Toaster>
  </React.StrictMode>,
)
