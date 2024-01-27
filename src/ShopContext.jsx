import { createContext, useState } from "react";
export const ShopContext = createContext();
const ShopContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = items.find((cartItem) => cartItem.id === item.id);

        if (!existingItem) {
            // If the item is not in the cart, add it with quantity 1
            setItems([...items, { ...item, quantity: 1 }]);
        } else {
            // If the item is already in the cart, update its quantity
            setItems(
                items.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        }
    };
const clearCart =()=>{
    setItems([])
}
const removeItem = (itemid)=>{
    const removeditems = items.filter((item)=>item.id !== itemid) 
    setItems(removeditems)
}
    console.log(items);

    return (
        <ShopContext.Provider value={{ items, setItems, addToCart,clearCart,removeItem}}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
