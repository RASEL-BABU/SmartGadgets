import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const productsData=useLoaderData()
    console.log(productsData)
    return (
        <div>
            this is shop page
        </div>
    );
};

export default Shop;