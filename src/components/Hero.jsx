import React from 'react'
import hero from '../assets/img/hero.png'

export const Hero = () => {
  const social_media = [
    'logo-instagram',
    'logo-facebook',
    'logo-linkedin',
    'logo-twitter'
  ];
  
  return (
    <section id='home' className='flex mt-32 items-center flex-col md:flex-row gap-8'>
      <div className='flex-1 flex h-full'>
        <img src={hero} alt="" className='md:w-11/12 h-full object-cover'/>
      </div>
      <div className='flex-1'>
        <div className=' md:text-left'>
          <h1 className='text-cyan-600 md:text-6xl text-5xl font-bold mb-4'>
              Hello!             
          </h1>
          <h2 className='md:text-4xl text-2xl text-white font-semibold mb-4 text-nowrap'>
            My name is  <span>John Alex</span>
          </h2>
          <h3 className='md:text-2xl text-lg text-white font-semibold'>
            Fullstack Developer
          </h3>
          <div>
            <button className='btn-primary mt-8'>Contact Me</button>
          </div>
          <div className='flex justify-center md:justify-start'>
            <div className='mt-8 flex gap-4 text-xl'>
              {            
                social_media.map(ico => (
                  <div key = {ico} className='text-gray-400 hover:-translate-y-1 duration-300 hover:text-white cursor-pointer'>
                    <ion-icon name={ico}></ion-icon>
                  </div>  
                ))            
              }
            </div>

          </div>

          
        </div>
      </div>
    </section>
  )
}
