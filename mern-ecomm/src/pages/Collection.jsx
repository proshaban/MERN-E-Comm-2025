import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategories = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategories(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubCategories = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategories(prev => [...prev, e.target.value]);
    }
  }

  const applyFilters = () => {
    let productsCopy = products.slice();
  
    if (categories.length > 0) {
      productsCopy = productsCopy.filter(item => categories.includes(item.category));
    }
  
    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter(item => 
        subCategories.includes(item.subCategory)
      );
    }
    setFilteredProducts(productsCopy);
  };
  
  const sortProducts = (e)=>
  {
    let copyProducts = filteredProducts.slice();
    switch (sortType)
    {
      case 'low-high':
        setFilteredProducts(copyProducts.sort((a,b)=>a.price - b.price));
        break;
      case 'high-low':
        setFilteredProducts(copyProducts.sort((a,b)=>b.price - a.price));
        break;
      default:
        applyFilters();
        break
    }
  }

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useEffect(() => {
    applyFilters();
    console.log(categories, subCategories)
  }, [categories, subCategories])

  useEffect(() => {
    sortProducts();
  }
  , [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t text-gray-600'>
      {/* text filter options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilters(!showFilters)}>Filters
          <img className={`h-3 sm:hidden transition duration-300 ease-in-out ${showFilters ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Categories Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Men'} onChange={toggleCategories} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Women'} onChange={toggleCategories} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Kids'} onChange={toggleCategories} /> Kids
            </p>
          </div>
        </div>
        {/* Sub categories */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB-CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Topwear'} onChange={toggleSubCategories} /> Topware
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategories} /> Bottomware
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Winterwear'} onChange={toggleSubCategories} /> Winterware
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'Collections'} />
          {/* sorting filter */}
          <select className='border-2 border-gray-300 text-sm px-2' onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Mapped Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5'>
          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection