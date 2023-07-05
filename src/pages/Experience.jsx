import React from 'react'
import data from '../websiteData.json';

const Experience = () => {

  return (
    <div className='w-full h-screen md:h-3/4 flex justify-center flex-col items-center bg-slate-500 md:max-w-[1500px] md:ml-[80px] md:mr-[80px] lg:mx-[85px] md:pt-[90px] lg:pt-0 max-h-[1080px]'>
      {data.experiences.map((exp) => {
        return(
          <div className='h-auto max-h-[600px] bg-red-500 w-7/12 flex items-center my-2 flex-col rounded-xl pt-2' key={exp.title}>
          <div className='w-full flex justify-between items-center px-3 flex-col md:flex-row'>
            <h1>{exp.jobTitle}</h1>
            <h1>{exp.location}</h1>
          </div>

          <div className='w-full flex justify-between items-center px-3 pb-2'>
            <h1>{exp.company}</h1>
            <h1>{exp.date}</h1>
          </div>

          <div className='px-3'>
            <ul>
              {exp.descriptions.map((p, index) => {
                return (<li className='py-1' key={index} ><p>{p}</p></li>);
              })}
            </ul>
          </div>
        </div>
        );
      })}


    </div>
  )
}

export default Experience