import React from 'react';
import data from '../websiteData.json';
import Proj from '../components/Proj';

const Projects = () => {
  return (
    <div className='w-full h-full flex justify-center items-center md:pl-[80px] md:pr-[80px] md:max-w-[1500px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-y-[20px] gap-y-[40px] gap-x-10 lg:w-5/6 w-full h-full lg:h-5/6 px-10 md:pt-[80px] pt-[90px] lg:pt-0'>
        {data.projects.map((proj) => {
          return(<Proj data={proj} key={proj.title} />);
        })}
        <div className='lg:mb-[60px]'>&nbsp;</div>
      </div>
    </div>
  )
}

export default Projects