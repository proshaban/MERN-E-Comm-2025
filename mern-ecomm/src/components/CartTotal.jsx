import React, { useContext } from 'react'
import { ShopContext } from '../contex/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency, deliveryCharge , getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className="textf-2xl">
            <Title text1={'CART'} text2={'TOTAL'} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between '>
                <p className=''>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between '>
                <p className=''>Shipping Charges</p>
                <p>{currency}{deliveryCharge}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between '>
                <p className=''>Total</p>
                <p>{currency} {getCartAmount() === 0? 0 : getCartAmount()+deliveryCharge}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
