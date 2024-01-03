import React, { useDebugValue, useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const [sticky,setSticky] = useState(false)
  const menuLink = [
    {name:'Home',link:'/'},
    {name:'About',link:'/about'},
    {name:'Skills',link:'/skills'},
    {name:'Projects',link:'/projects'},
    {name:'Contact',link:'/contact'},

  ];

  useEffect(
    () => {
      window.addEventListener('scroll',() => {
        const nav = document.querySelector('nav');
        window.scrollY > 0 ? setSticky(true) : setSticky(false)
      })
    }
  ,[]);

  return (
    <nav className={`fixed w-full left-0 top-0 z-20 font-semibold
    ${sticky ? 'bg-white/60 text-gray-900':'text-white'}` }>
      <div className='flex items-center justify-between h-20 mx-auto px-8'>
        <div>
          <h4 className="text-4xl uppercase font-bold">
            A<span className="text-cyan-600">le</span>x
          </h4>
        </div>
        
        <div className = {` ${sticky ? 'md:bg-white/0 bg-white':'bg-white'}
         text-gray-900 md:block hidden px-7 py-2 
        font-medium bg-white rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
              {
                // bat buoc phai co index
                menuLink.map((m,index) => (          
                  <li key ={index} className='px-6'>
                    {/* <a href={m.link} className={`relative hover:text-cyan-600 
                    hover:before:content-[attr(before)] 
                    hover:before:absolute 
                    hover:before:left-1/2 
                    hover:before:w-[5px]
                    hover:before:h-[5px]
                    hover:before:bg-cyan-600 
                    hover:before:-bottom-2
                    hover:before:rounded-full
                    ]` }>
                      {m.name}
                      
                    </a> */}

                    <a href={m.link} className='nav__link relative hover:text-cyan-600' >
                      {m.name}
                    </a>
                  </li> 
                ))
              }
          </ul>
        </div>

        {/* Toggle button  */}
        <div 
        onClick={() => setOpen(!open)}
        className={`text-3xl text-gray-900 z-20 md:hidden 
        ${open ? 'text-gray-900': 'text-gray-100'} `}>
          <ion-icon name='menu'> </ion-icon>
        </div>

        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen duration-300
        font-medium bg-white top-0 right-0 py-14 ${open ? 'right-0':'right-[-100%]'}`}>
          <ul className='flex flex-col h-full gap-[3rem] text-lg'>
          {
                // bat buoc phai co index
                menuLink.map((m,index) => (                  
                  <li key ={index} className='px-6'>
                    {/* <a href={m.link} className={`relative hover:text-cyan-600 
                    hover:before:content-[attr(before)] 
                    hover:before:absolute 
                    hover:before:left-1/2 
                    hover:before:w-[5px]
                    hover:before:h-[5px]
                    hover:before:bg-cyan-600 
                    hover:before:-bottom-2
                    hover:before:rounded-full
                    ]` }>
                      {m.name}
                      
                    </a> */}
                    <a href={m.link} className='relative nav__link'>
                    {m.name}
                    </a>
                  </li> 
                ))
              }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
