// import './StoreContext.css';
// import { createContext } from 'react';
// import { food_list } from '../assets/assets';
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const contextValue = {};
//   food_list
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

import './StoreContext.css';
import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets'; // Ensure this path is correct and food_list is correctly exported

export const StoreContext = createContext(null);




const StoreContextProvider = (props) => {

const [cartItems , setCartItems] = useState({})

const addToCart = (itemId) =>
{
  if(!cartItems[itemId])
    {
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }

    else
    {
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}


const removeFromCart = (itemId) =>
  {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

useEffect(() =>
  {
console.log(cartItems)
  },[cartItems])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart // Assign food_list to contextValue
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
