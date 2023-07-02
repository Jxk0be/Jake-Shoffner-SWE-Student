import React from 'react';
import data from '../websiteData.json';
import { useState } from 'react';

const Projects = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className='w-full h-full flex justify-center items-center md:pl-[80px] md:pr-[50px] md:max-w-[1500px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-y-[20px] gap-y-[40px] gap-x-10 w-full h-full px-10 pt-[90px] lg:pt-[30px]'>
        {data.projects.map((projects) => {
          // drop-shadow-[0_0px_35px_rgba(89,165,216,0.15)]
          return(
            <div key={projects.title} className='w-full h-full rounded-xl bg-black/40 md:hover:scale-105 duration-300 drop-shadow-lg'>
              <a href={projects.link} target='_blank' rel="noreferrer">
                <img src={projects.image} alt="" />
              </a>
              {modal ? 
                <div className='rounded-xl p-5 text-lg text-[#b3b3b3]'>
                  <p className='my-1'>{projects.description}</p>
                </div> 
                :
                <div onClick={() => setModal(!modal)} className='flex justify-center items-center'>
                  <button >HIT ME BRO</button>
                </div> 
              }

            </div>
          );
        })}
        <div className='lg:mb-[30px]'>&nbsp;</div>
      </div>
    </div>
  )
}

export default Projects