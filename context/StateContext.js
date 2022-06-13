import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id  === product._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantity((prevTotalQuantities) => prevTotalQuantities + quantity)
    
    if(checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updateCartItems);

    } else {
      product.quantity = quantity
      setCartItems([...cartItems, {...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart`)
  }

  const onRemove = (id) => {
    foundProduct = cartItems.find((item) => item._id === id)
    const newCartItems = cartItems.filter((item) => item._id !== id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantity((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
    setCartItems(newCartItems)
  }

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)

    if(value === 'inc') {
      setCartItems(cartItems.map((item) => {
        if(item._id == id) {
          return {...item, quantity: foundProduct.quantity + 1}
        } else return item
      }))
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantity((preveTotalQuantity) => preveTotalQuantity + 1)
    } else if(value === 'dec') {
        if(foundProduct.quantity > 1) {
          setCartItems(cartItems.map((item) => {
            if(item._id == id) {
              return {...item, quantity: foundProduct.quantity - 1}
            } else return item
          }))
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
          setTotalQuantity((preveTotalQuantity) => preveTotalQuantity - 1)
        }
      }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
      return prevQty - 1;
    })
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);