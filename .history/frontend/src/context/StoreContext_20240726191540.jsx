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
import { createContext, useState } from 'react';
import { food_list } from '../assets/assets'; // Ensure this path is correct and food_list is correctly exported

export const StoreContext = createContext(null);




const StoreContextProvider = (props) => {

const [cartItems , setCartItoms] = useState({})

const addToCart = (itemId) =>
{
  if(!cartItems[itemId])
    {
      setCartItom((prev)=>({...prev,[itemId]:1}))
    }

    else
    {
      setCartItom((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}


const removeFromCart = (itemId) =>
  {
    setCartItoms((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }



  const contextValue = {
    food_list,
    cartItems,
    setCartItoms,
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
