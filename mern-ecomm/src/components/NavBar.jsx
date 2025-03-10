import React , {useState} from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='flex justify-between items-center py-4 font-medium relative'>
            <Link to='/'><img src={assets.logo} alt='logo' className='w-24' /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-t-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/collections" className='flex flex-col items-center gap-1'>
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-t-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/about" className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-t-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-t-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className='flex flex-center gap-6'>
                <img src={assets.search_icon} className='w-5 h-5 object-contain cursor-pointer' alt='search' ></img>
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 h-5 object-contain cursor-pointer' alt="profile" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 p-4 rounded-lg shadow-lg text-gray-500 rounded'>
                            <Link to="" className='cursor-pointer hover:text-black'>Profile</Link>
                            <Link to="" className='cursor-pointer hover:text-black'>Orders</Link>
                            <Link to="" className='cursor-pointer hover:text-black'>Logout</Link>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5 h-5 object-contain' alt='cart' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white text-[8px] rounded-full'>10</p>
                </Link>
                <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} className='w-5 min-w-5 sm:hidden' alt="" />
            </div>
            
            {/* Mobile Menu */}
            <div className={`fixed h-screen top-0 right-0 bottom-0 bg-white transition-all duration-300 ${showMenu ? 'w-full' : 'w-0 overflow-hidden'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setShowMenu(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='back'></img>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setShowMenu(false)} to="/" className='py-2 pl-6 border-t cursor-pointer'>
                        Home
                    </NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to="/collections" className='py-2 pl-6 border-t cursor-pointer'>
                        Collections
                    </NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to="/about" className='py-2 pl-6 border-t cursor-pointer'>
                        About
                    </NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to="/contact" className='py-2 pl-6 border-t cursor-pointer'>
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar
