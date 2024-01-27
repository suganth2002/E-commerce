import  { useEffect, useState } from 'react'
import Product from './Product'

const Home = () => {
    const [items,setItems]= useState([])
  useEffect(()=>{
    const fetchProduct = async ()=>{
      const result = await fetch('https://fakestoreapi.com/products');
      const json = await result.json();
      setItems(json)
      console.log(items);
    }
    fetchProduct();
  },[])
  return (
   <>
   <div className="px-5 justify-center flex flex-wrap gap-5">
   {items.map((item)=>(
    <Product key={item.id} item={item} />
   ))}
   </div></>
  )
}

export default Home