import React from 'react';
import data from '../websiteData.json';

const Projects = () => {
  return (
    <div className='w-3/4 h-1/2 flex justify-between flex-col text-[#F5EFED] lg:max-w-[1500px] bg-slate-400 lg:ml-[50px] xlg:ml-0'>
      <div className='grid h-full w-full bg-blue-900 grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20 text-center'>
        {data.projects.map((data) => {
          return (<h1 className='bg-red-300'>{data.title}</h1>);
        })}

        {data.WIPs.map((data) => {
          return (<h1>{data.title}</h1>);
        })}
        {/* <div className='w-full bg-red-400 h-full'>
          yo
        </div>
        <div className='w-full bg-red-500'>
          dude
        </div> */}
      </div>
    </div>
  )
}

export default Projects