import React from 'react'
import about from '../assets/img/about.png'

export const About = () => {

  const info = [
    {text:'Years experience',count:'04'},
    {text:'Complete Projects',count:'24'},
    {text:'Companies Work',count:'06'}
  ];
  return (
    <section id='about' className='mt-20'>
     
        <div className='text-center mb-8'>
          <h3 className='text-4xl font-semibold'>
            About <span className='text-cyan-600'>Me</span> 
          </h3>
          <p className='text-gray-500 my-3 text-lg'>
            My introduction
          </p>          
        </div>
     
      <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center md:gap-8 gap-20'>
      {/* <div className='flex flex-1 flex-col md:flex-row gap-8 place-items-center'> */}
        <div className='justify-items-center'>
          <p className='text-gray-300 md:text-xl text-base md:text-left text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis amet harum sint cumque quidem minima aut distinctio laudantium nobis ad, recusandae, esse voluptate temporibus dolor debitis veniam. Culpa, saepe.</p>
          
          <div className='flex mt-8 gap-8 md:flex-row flex-col md:justify-start justify-center items-center'>
            {
              info.map(content => (
                <div key={content.text}>
                  <h3 className='text-4xl font-semibold'>
                    {content.count}
                    <span className='text-cyan-600'>+</span>{" "}
                  </h3>
                  <p>{content.text}</p>
                </div>    
              ))
            }
          </div>

          <div className='flex md:justify-start justify-center'>
            <button className='btn-primary mt-8 place-items-start'>
              Download CV
            </button>
          </div>

        </div>

        <div className='justify-self-center relative aboutImg mt-8 -ml-3' >
          <img src={about} alt="" className='bg-cyan-600 rounded-xl max-w-[340px] '/>
        </div>

      </div>

    </section>
  )
}


