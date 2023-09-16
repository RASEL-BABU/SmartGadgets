import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

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
import { productsAndCartData } from './loaders/getCartandProducts.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/shop',
        element:<Shop></Shop>,
        loader:productsAndCartData
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/cart',
        element:<Cart></Cart>,
       loader:productsAndCartData
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
