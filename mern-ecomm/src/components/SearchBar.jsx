import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../contex/ShopContext'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const { showSearch, setShowSearch, products } = useContext(ShopContext);
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        if (e.target.value === '') {
            setFilteredProducts([]);
            return;
        }

        const copyProducts = products.slice();
        setFilteredProducts(copyProducts.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    const handleCloseSearch = () => {
        setSearch('');
        setFilteredProducts([])
        setShowSearch(false)
    }

    return showSearch && (
        <div className='w-full border-t border-b flex flex-col items-center gap-3 relative'>
            <div className='w-full bg-gray-50 text-center'>
                <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                    <input
                        type='text'
                        placeholder='Search'
                        value={search}
                        onChange={handleSearch}
                        className='flex-1 outline-none bg-inherit text-sm'
                    />
                    <img src={assets.search_icon} className='w-4' alt="" />
                </div>
                <img onClick={handleCloseSearch} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
            </div>
            {/* search results */}
            {
                (filteredProducts.length > 0) ?
                    (
                        <div className='w-3/4 sm:w-1/2 max-h-[300px] overflow-y-auto p-4 flex flex-col gap-2 shadow-sm absolute top-[60px] bg-white text-xl'>
                            {
                                filteredProducts.map((item, index) => (
                                    <Link key={index} to={`product/${item._id}`} onClick={handleCloseSearch} className='hover:bg-[#f2f2f2] hover:underline flex gap-2 items-center'>
                                        <img src={item.image} className='w-10 h-10 object-cover' width={10} alt="" />
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </div>
                    ) : (search != '') ? (
                        <div className='w-3/4 sm:w-1/2 max-h-[300px] overflow-y-auto p-4 flex flex-col gap-2 shadow-sm absolute top-[60px] bg-white text-xl'>
                            <div className='hover:bg-[#f2f2f2] flex gap-2 items-center'>
                                Sorry! No Match Found
                            </div>
                        </div>
                    ) : ('')
            }
        </div>
    )
}

export default SearchBar