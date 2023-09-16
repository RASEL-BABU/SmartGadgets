import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToDB,  } from '../../utils/fakeDB';


const Shop = () => {
    const productsData=useLoaderData()
    const hundleAddToCart=(id)=>{
   
    addToDB(id)
  
    }

  
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
            {
                productsData.map(product=><ProductCard key={product.id} 

                    product={product} hundleAddToCart={hundleAddToCart}
                >

                </ProductCard>)
            }
        </div>
    );
};

export default Shop;