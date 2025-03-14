import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
import Hero from '../components/Hero'
const About = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-2xl text-center pt-8 w-full flex border-t'>
        <Title text1={'ABOUT'} text2={'ME'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}></img>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <h1>H!</h1>
          <p>I am <span className='font-medium'>Shaban Khan</span>, A full stack developer with expertise in MERN Stack. <br/> <span className='font-medium'>MERN E-COMM</span> is my independent projects.
          <br />Here I demonstrated my ability to create an industry ready web application. 
          </p>
          <h2 className='text-base md:text-xl'>Tech Stack</h2>
          <table>
            <tr>
              <td>Front End</td>
              <td>ReactJs, Tailwind CSS</td>
            </tr>
            <tr>
              <td>Backend</td>
              <td>Node JS, Express Js, MongoDB</td>
            </tr>
            <tr>
              <td>Tools</td>
              <td>Zustand, Docker, Vercel</td>
            </tr>
          </table>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <NewsLetter />
      </div>  
    </div>
  )
}

export default About
