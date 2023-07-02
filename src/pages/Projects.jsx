import React from 'react';
import data from '../websiteData.json';
import Proj from '../components/Proj';

const Projects = () => {
  return (
    <div className='w-full h-full flex justify-center items-center md:pl-[80px] md:pr-[50px] md:max-w-[1500px] max-h-[1080px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-y-[20px] gap-y-[40px] gap-x-10 w-full h-full px-10 pt-[90px] lg:pt-[38px]'>
        {data.projects.map((proj) => {
          return(<Proj data={proj} key={proj.title} />);
        })}
        <div className='lg:mb-[60px]'>&nbsp;</div>
      </div>
    </div>
  )
}

export default Projects