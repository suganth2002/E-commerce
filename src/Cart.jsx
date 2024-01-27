import  { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { MdDelete } from "react-icons/md";


const Cart = () => {
    const TotalItems = useContext(ShopContext);
    const {items}= TotalItems;
    console.log(items.length);
    const totalPrice = items.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);
    // console.log(typeof(items[0].price));
    const {clearCart} = useContext(ShopContext)
    const {removeItem} = useContext(ShopContext)

  return (
    <div className="flex  flex-col  w-full">
      {items.length>0? <>
     <h1>Cart Items</h1>
     
     {items.map((e)=>{
        const total = e.quantity*e.price;
        return(
            <div className='mt-[100px] flex gap-5  p-2  w-[80%] relative max-[600px]:flex-col self-center' key={e.id}>
                <div className='h-[220px] flex justify-center items-center shadow-md w-[220px] '>
                 <img className='h-[200px] w-[200px]' src={e.image}></img>
                 </div>
                 <div>
                 <h1 className='mt-4 font-bold text-blue-500'>{e.title}</h1>
                 <p className='font-bold mt-5 text-gray-500'>${e.price}</p>
                 <p className='mt-6 text-blue-500'>Quantity:<span className='font-bold text-black'>{e.quantity}</span></p>
                 <p className='mt-5'>Total:${total}</p>
                 <MdDelete className='' size={25} onClick={()=>removeItem(e.id)}/>
                 </div>
                 </div>
        )
           
     })}
     <p className='font-bold mt-10 text-center'>Total Amount: ${totalPrice.toFixed(2)}</p>
     <button className='p-2 mb-6 mt-6 w-56 border  bg-red-400 font-extrabold flex justify-center self-center cursor-pointer' onClick={()=>clearCart()}>clear cart</button>
     </>:<p className='flex items-center justify-center h-screen  text-lg'>Your Cart Is Empty</p>}
     
     </div>
  )
}

export default Cart