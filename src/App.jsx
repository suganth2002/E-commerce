import { useContext, useState } from 'react'
import { useEffect } from 'react';
import Display from './Home';
import './App.css'
import Home from './Products'
// import Product from './Product'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Description from './Description';
import Logo from './assets/37328.jpg';
import { FaOpencart } from "react-icons/fa6";
import Cart from './Cart';
import { ShopContext } from './ShopContext';
function App() {
const {items} = useContext(ShopContext)
  return (
    <BrowserRouter>
    <>
    <nav className='flex text-lg bg-yellow-400 hover:bg-yellow-500 text-white p-4 font-semibold items-center justify-between w-full'>

{/* Logo */}
<img src={Logo} className='h-12 w-12 object-contain' />

{/* Navigation Links */}
<div className=' md:flex space-x-4'>
  <Link to='/'>Home</Link>
  <Link to='/product'>Products</Link>
</div>

{/* Cart Link */}
<Link to='/cart' className='relative'>
  {items.length > 0 ? (
    <div className='absolute right-0 top-0 bg-red-600 w-4 h-4 rounded-full text-sm flex items-center justify-center'>
      <p>{items.length}</p>
    </div>
  ) : null}
  <FaOpencart size={35} />
</Link>
</nav>
     
    </>
    <Routes>
    <Route path='/' element={<Display />} />
    <Route path='/product' element={<Home/>} />
    <Route path='/product/:id' element={<Description/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
