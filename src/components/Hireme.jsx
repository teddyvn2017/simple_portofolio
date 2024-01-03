import React from 'react'
import hireme from '../assets/img/hireMe.png'


export const Hireme = () => {
  return (
    <section id='hireme' className='py-[6rem] px-3 text-white'>
        <div className='text-center'>
            <h3 className='text-4xl font-semibold'>
                Hire <span className='text-cyan-600'>Me</span>
            </h3>
            <p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
        </div>

        <div className='bg-gray-700 px-8 py-8 rounded-2xl mt-8 relative'>
            <div className='flex md:flex-row items-center gap-8  flex-col-reverse '>
                <div>
                    <h2 className="text-2xl font-semibold z-20 relative">
                        Do you want any work from me?
                    </h2>

                    <p className='lg:text-left md:text-left text-center max-w-lg text-sm mt-4 text-gray-200 leading-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
                    soluta quos tempore eos accusamus cupiditate, amet in similique
                    sapiente obcaecati odio deleniti architecto corporis ratione.
                    Consequatur a quidem maiores!
                    </p>
                    <button className="btn-primary mt-10 px-2">Say Hello</button>
                </div>
                <div>
                    <img src={hireme} alt="" className='object-cover md:absolute lg:absolute bottom-0 -right-3 h-80 
                    lg:h-[32rem] md:h-[24rem] z-0'/>
                </div>
            </div>
        </div>
        
    </section>
  )
}
