import React from 'react'

export const Skills = () => {

  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expect",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "Intermediate",
      count: 80,
    },
  ];


  return (
    <section id='skills' className='py-20 mt-[6rem] bg-gray-800 relative'>
      <div className='mt-8 text-gray-100'>
        <h3 className='text-4xl font-semibold text-center'>
          My <span className='text-cyan-600'>Skills</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>
          My knowledge
        </p>
        <div className='flex flex-1 flex-row items-center justify-center gap-8 mt-12 flex-wrap'>
          {
            skills.map((content,index) => (
              <div className='flex items-center flex-col rounded-xl gap-4 border-2 text-6xl border-cyan-600 px-6 min-w-[200px] py-6'>
                <div key={index} style={{
                  background: `conic-gradient(rgb(8,145,170) ${content.count}%,#ddd ${content.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full">
                  
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
                    <ion-icon name={content.logo}></ion-icon>                
                  </div>
                </div>
                  <p className='text-xl pt-4'>
                    {content.level}
                  </p>               
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}
