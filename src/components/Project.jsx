import React from 'react'
import  { Swiper,SwiperSlide }  from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import project1 from "../assets/img/project-1.png"
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
import project4 from "../assets/img/project-4.jpg";
import project5 from "../assets/img/project-5.png";
import project_person from "../assets/img/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


// import { Pagination} from "swiper";
// import Swiper core and required modules


export const Project = () => {

    const projects = [
        {
            img: project1,
            name: "Movie App",
            github_link: "https://github.com/Sridhar-C-25",
            live_link: "https://myreactflix.netlify.app",
        },
        {
            img: project2,
            name: "Job search Web App",
            github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
            live_link: "https://myjobsearch.netlify.app",
        },
        {
            img: project3,
            name: "Highking",
            github_link: "https://github.com/Sridhar-C-25/highking",
            live_link: "https://highking01.netlify.app",
        },
        {
            img: project4,
            name: "React Nav",
            github_link:
                "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
            live_link: "https://reacttailwindnavbar.netlify.app",
        },
        {
            img: project5,
            name: "Vue Country",
            github_link: "https://github.com/Sridhar-C-25",
            live_link: "https://vuecountry05.netlify.app",
        },
    ];

    return (
        <section id='project' className='py-[6rem] text-white'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>
                    My <span className='text-cyan-600'>Projects</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
            </div>

            <div className='flex max-w-6xl px-5 mx-auto items-center relative'>
                <div className='lg:w-2/3 w-full'>
                    <Swiper  slidesPerview={2} spaceBetween={20} breakpoints={{768: { slidesPerView: 2,},}}
                            loop = {true}  autoplay={{ delay:2000 }}  pagination = {{clickable: true}}
                            observeParents ={true} observer={true} parallax={true}
                            modules={[Navigation, Pagination]}
                            >
                        {
                            projects.map((pr,index) => (
                                <SwiperSlide>

                                    <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                                        <img src={pr.img} alt="" className='rounded-lg' />    
                                        <h3 className='text-xl my-4'>{pr.name}</h3>
                                        <div className='flex gap-3'>
                                            <a href={pr.github_link} className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>
                                                Github
                                            </a>
                                            <a href={pr.live_link} className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>
                                                Live Demo
                                            </a>
                                        </div>

                                    </div>
                                </SwiperSlide>

                            ))    

                        }        
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>               
                    </Swiper>
                   
                   
                </div>
                <div className='lg:block hidden'>
                    <img src={project_person} alt="" />
                </div>

                <div className="swiper-pagination"></div>        
            </div>
        </section>
    )
}
