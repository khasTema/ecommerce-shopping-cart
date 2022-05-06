import React, { createContext } from 'react';
// import faker from 'faker'; this i not working at all

const Cart = createContext()

  

const Context = ({children}) => {
  return (
    <Cart.Provider>
        {children}
    </Cart.Provider>
  )
}

export default Context;