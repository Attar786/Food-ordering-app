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
import { createContext } from 'react';
import { food_list } from '../assets/assets'; // Ensure this path is correct and food_list is correctly exported

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Define the context value, including food_list
  const contextValue = {
    food_list, // Assign food_list to contextValue
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
