import React, { useContext } from 'react'
import { ShopContext } from '../contex/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price }) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} className='hover:scale-110 transition duration-300 ease-in-out'></img>
        </div>
        <p className='pt-3 pb-1 text-base'>{name}</p>
        <p className='text-small font-medium'>{currency}{price}</p>
    </Link>
  )
}
export default ProductItem
