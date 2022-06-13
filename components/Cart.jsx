import React, { useRef } from 'react'
import Link from "next/link"
import {
  AiOutlineLeft,
  AiOutlineShopping
} from "react-icons/ai"

import { useStateContext } from "../context/StateContext"



const Cart = () => {
  const cartRef = useRef()
  const { 
    totalPrice,
    totalQuantity,
    cartItems,
    setShowCart
  } = useStateContext()

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button 
        type='buttons'
        className='cart-heading'
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantity} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn">
                 Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart