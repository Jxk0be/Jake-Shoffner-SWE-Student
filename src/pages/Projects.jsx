import React from 'react';
import data from '../websiteData.json';

const Projects = () => {
  console.log(data);
  return (
    <div className='w-3/4 h-full flex justify-between flex-col text-[#F5EFED] lg:max-w-[1500px] bg-slate-400 lg:ml-[50px] xlg:ml-0'>
      <div className='grid h-full w-full bg-blue-900 grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20'>
        <h1>Go here when you start back working:</h1>
        <a href="https://www.youtube.com/watch?v=ZPb10kOQv0c&ab_channel=Mr.WebDesigner" target='_blank' rel="noreferrer">https://www.youtube.com/watch?v=ZPb10kOQv0c&ab_channel=Mr.WebDesigner</a>
      </div>
    </div>
  )
}

export default Projects