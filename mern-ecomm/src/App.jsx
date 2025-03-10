import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import NavBar from './components/NavBar'
import FooterNode from './components/FooterNode'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='w-full px-6 sm:px-12'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={ <Collection /> } />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-Order' element={ <PlaceOrder /> } />
        <Route path='/orders' element={ <Orders /> } />
      </Routes>
      <Footer />
      <FooterNode />
    </div>
  )
}

export default App
