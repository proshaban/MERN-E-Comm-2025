import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({ _id: items, size: item, quantity: cartItems[items][item] })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t pt-14 '>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      {
        cartData.length > 0 ? (<>
          <div>
            {
              cartData.map((item, i) => {
                const productData = products.find((product) => product._id === item._id)
                return (
                  <div key={i} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                    <div className='flex items-start gap-6'>
                      <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                      <div className=''>
                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                        <div className='flex items-center gap-5 mt-2'>
                          <p>{currency}{productData.price}</p>
                          <p className='px-2 sm:px-3 border bg-slate-50'>{item.size}</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex item-center justify-center'>
                      <p className='border border-black max-w-5 sm:max-w-10 px-1 sm:px-2 py-1 text-center bg-gray-700 text-white cursor-pointer' onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}>-</p>
                      <p className='border max-w-5 sm:max-w-10 px-1 sm:px-2 py-1 text-center'>{item.quantity}</p>
                      <p className='border border-black max-w-5 sm:max-w-10 px-1 sm:px-2 py-1 text-center bg-gray-700 text-white cursor-pointer' onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}>+</p>
                    </div>
                    <img src={assets.bin_icon} onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 cursor-pointer' />
                  </div>
                )
              })
            }
          </div>
          <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button onClick={() => navigate('/place-Order')} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'> PROCEED TO CHECKOUT </button>
              </div>
            </div>
          </div>
        </>) : (<EmptyCart />)
      }
    </div>
  )
}

export default Cart
