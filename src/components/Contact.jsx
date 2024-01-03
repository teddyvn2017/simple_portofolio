import React from 'react'

export const Contact = () => {

    const contact_info = [
        { logo: "mail", text: "codeaprogram@gmail.com" },
        { logo: "logo-whatsapp", text: "123 456 780" },
        {
            logo: "location",
            text: "demo location",
        },
    ];

    return (
        <section id='contact' className='py-[6rem]'>
            <h3 className='text-4xl font-semibold'>Contact <span className='text-cyan-600'>Me</span></h3>
            <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
            <div className='flex md:flex-row mt-16 flex-col max-w-5xl bg-gray-800 rounded-lg mx-auto py-8 px-8 gap-8'>
                <form action="" className='flex flex-col flex-1 gap-5'>
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email Address' />
                    <textarea placeholder='Your message' row={10}></textarea>
                    <div className='flex md:items-start items-center flex-col w-full'>
                        <button className='btn-primary w-fit'>Send Message</button>
                    </div>
                    
                </form>
                <div className='flex flex-col gap-4'>
                {
                    contact_info.map((contact,index) => (
                        <div key={index} className='flex gap-4 w-fit items-center'>
                            <div className='min-w-[3rem] min-h-[3rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                                <ion-icon name={contact.logo}></ion-icon> 
                            </div>                            
                            <p className='md:text-base text-sm break-words'>
                                {contact.text}
                            </p>                            
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}
