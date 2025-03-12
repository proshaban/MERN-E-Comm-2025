import React, { useContext } from 'react'
import { ShopContext } from '../contex/ShopContext'

const EmptyCart = () => {
    const {navigate} = useContext(ShopContext);
  return (
    <div className='w-full flex flex-col items-center gap-4'>
        <h2>Your cart is empty</h2>
        <button className='bg-black text-white text-center px-16 py-4 cursor-pointer' onClick={()=>navigate('/collections')}>SHOP NOW</button>
    </div>
  )
}

export default EmptyCart
