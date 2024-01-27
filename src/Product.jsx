import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { ShopContext } from "./ShopContext";

const Product = ({item}) => {
    const {id,title,price,image}= item;
    const {addToCart} = useContext(ShopContext)
  return (
   <>
  <div className="shadow-md min-h-[270px] flex justify-center items-center flex-col p-1">
  <Link to={`/product/${id}`}>
   <img className="h-[150px] w-[200px] object-contain" src={image} alt="" />
   <div className="flex flex-col  ml-2 mt-3 w-full justify-center">
    <p className=" text-[10px] w-[180px]">{title}</p>
    <p className="text-[12px] pt-2 text-gray-500">${price}</p>
   </div></Link>
   <button className="p-[7px] border rounded-lg text-sm  hover:bg-[orange] hover:text-[white]" onClick={()=>addToCart(item)}>Add to Cart</button>
   
   </div>
   </>
  )
}

export default Product