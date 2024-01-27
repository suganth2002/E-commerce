import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from './ShopContext';
const Description = () => {
    const params = useParams();
    const [result,setResult]= useState([])
    const paramId = params.id;
    const context = useContext(ShopContext);
    const {cartItem,setCartItem,addToCart}= context;
    useEffect(() => {
      const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${paramId}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setResult(json);
          })
          .catch((error) => {
            console.error('Error fetching product:', error);
          });
      };
  
      fetchProduct();
    }, []);

  return (
    <div className="flex  mt-[100px] justify-around bg-white max-[728px]:flex-col">
     <img className='w-[30%] max-[728px]:w-[70%] flex self-center' src={result.image} alt="" />
     <div className='mt-[50px]  p-4'>
     <h1 className='font-bold text-[24px]'>{result.title}</h1>
     <p className='w-[550px] mt-4 text-black'>{result.description}</p>
     <p className='text-blue-500 text-[24px]'>${result.price}</p>
     <button onClick={()=>addToCart(result)} className='bg-yellow-500 text-white hover:text-yellow-500 text-sm mt-4 hover:bg-white p-2 rounded-md hover:border-yellow-500 hover:border-2'>Add to Cart</button>
     </div>
     </div>
  )
}

export default Description