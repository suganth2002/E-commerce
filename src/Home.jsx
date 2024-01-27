import { useEffect, useState } from 'react';
import Product from './Product';
import Logo from '../src/assets/493.jpg';

const Display = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await fetch('https://fakestoreapi.com/products');
      const json = await result.json();
      setItems(json);
    };

    fetchProduct();
  }, []);

  // Function to get a random subset of items
  const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomItems = getRandomItems(items, 5);

  return (
    <div className="bg-[#c3c5c6]">
      <img
        src={Logo}
        className="w-full h-[50vh] object-contain"
        alt="E-commerce"

      />
      <h1 className='text-center font-semibold text-lg'>Exclusive Offers</h1>
      <div className="px-4 justify-around flex flex-wrap gap-5 bg-[#eaeaea] mb-2 mt-2" >
        {randomItems.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Display;