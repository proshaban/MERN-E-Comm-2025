import React, { useState } from 'react'

const Login = () => {

  const [current, setCurrent] = useState('Sign Up')
  const onSubmit =async(e)=>
  {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 !mx-auto mt-14 gap-4 text-gray-800">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{current}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {
        (current === 'Sign Up')&&(<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>)
      }
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="Password" className='w-full px-3 py-2 border border-gray-800' placeholder='Pasword' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget Password?</p>
        {
          (current === 'Sign Up')?
          (<p className='cursor-pointer' onClick={()=>setCurrent('Login')}>Login</p>):
          (<p className='cursor-pointer' onClick={()=>setCurrent('Sign Up')}>Sign Up</p>)
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{current}</button>
    </form>
  )
}

export default Login
