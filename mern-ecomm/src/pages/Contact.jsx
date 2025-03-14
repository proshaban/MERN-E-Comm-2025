import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={'CONTACT'} text2={'ME'} />
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-4'>
                <p className='font-semibold text-xl text-gray-600'>You can contact via</p>
                <a href={'tel:+917070921343'} className='text-gray-500'>+91 70709 21343</a>
                <a href={'mailto:shaban.khan.self@gmail.com'} className='text-gray-500'>shaban.khan.self@gmail.com</a>
                <a href={'https://linkedin.com/in/proshaban/'} className='text-gray-500'>Linkedin : @proshaban </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
