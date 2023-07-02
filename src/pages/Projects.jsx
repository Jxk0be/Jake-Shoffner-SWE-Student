import React from 'react';
import data from '../websiteData.json';

const Projects = () => {
  return (
    <div className='w-full h-full flex justify-center items-center md:pl-[80px] md:pr-[50px] md:max-w-[1500px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-y-[20px] gap-y-[40px] gap-x-10 w-full h-full px-10 pt-[90px] lg:pt-[30px]'>
        {data.projects.map((projects) => {
          return(
            <div key={projects.title} className='w-full h-full rounded-xl bg-black'>
              <img className="" src={projects.image} alt="" />
              <div className='bg-black rounded-xl p-3'>
                {projects.descriptions.map((desc) => {
                  return(
                    <p key={desc}>- {desc}</p>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className='lg:mb-[30px]'>&nbsp;</div>
      </div>
    </div>
  )
}

export default Projects