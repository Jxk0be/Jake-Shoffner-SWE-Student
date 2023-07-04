import React from 'react'
import data from '../websiteData.json';

const Experience = () => {

  return (
    <div className='w-full h-screen md:h-3/4 flex justify-center flex-col items-center bg-slate-500 md:max-w-[1500px] max-h-[1080px] md:ml-[80px] md:mr-[80px] lg:mx-[85px]'>
      <div className='h-auto max-h-[600px] bg-red-500 w-7/12 flex items-center my-2 flex-col'>
        <div className='w-full flex justify-between items-center px-3'>
          <h1>{data.experiences[0].jobTitle}</h1>
          <h1>{data.experiences[0].location}</h1>
        </div>

        <div className='w-full flex justify-between items-center px-3'>
          <h1>{data.experiences[0].company}</h1>
          <h1>{data.experiences[0].date}</h1>
        </div>
      </div>

      <div className='h-auto max-h-[600px] bg-red-500 w-7/12 flex items-center my-2 flex-col'>
        <div className='w-full flex justify-between items-center px-3'>
          <h1>{data.experiences[1].jobTitle}</h1>
          <h1>{data.experiences[1].location}</h1>
        </div>

        <div className='w-full flex justify-between items-center px-3'>
          <h1>{data.experiences[1].company}</h1>
          <h1>{data.experiences[1].date}</h1>
        </div>
      </div>

      <div className='h-auto max-h-[600px] bg-red-500 w-7/12 flex items-center my-2 flex-col'>
        <div className='w-full flex justify-between items-center px-3'>
          <h1>{data.experiences[2].jobTitle}</h1>
          <h1>{data.experiences[2].location}</h1>
        </div>

        <div className='w-full flex justify-between items-center px-3'>
          <h1>{data.experiences[2].company}</h1>
          <h1>{data.experiences[2].date}</h1>
        </div>
      </div>

    </div>
  )
}

export default Experience