import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToDB,  } from '../../utils/fakeDB';
import { ProductContext } from '../../App';


const Shop = () => {
const products=useContext(ProductContext)


   
    const hundleAddToCart=(id)=>{
   
    addToDB(id)
  
    }

  
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
            {
                products.map(products=><ProductCard key={products.id} 
                   

                    products={products} hundleAddToCart={hundleAddToCart}
                >
                   

                </ProductCard>)
            }
        </div>
    );
};

export default Shop;