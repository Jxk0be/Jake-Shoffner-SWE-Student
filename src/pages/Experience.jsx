import React from 'react'
import data from '../websiteData.json';

const Experience = () => {

  return (
    <div className='w-full h-full text-black flex justify-center flex-col items-center md:max-w-[1500px] md:ml-[80px] md:mr-[80px] lg:mx-[85px] md:pt-[90px] lg:pt-0 px-3 md:px-0 pt-[70px]'>
      {data.experiences.map((exp) => {
        return(
          <div className='h-auto max-h-[600px] bg-[#b3b3b3] drop-shadow-xl md:w-7/12 md:min-w-[700px] w-full flex items-center my-2 flex-col rounded-xl py-2 md:hover:bg-[#59A5D8] hover:text-white duration-150' key={exp.jobTitle}>
            <div className='w-full flex justify-between items-center px-3 flex-col md:flex-row'>
              <h1 className='underline'>{exp.jobTitle}</h1>
              <h1>{exp.location}</h1>
            </div>

          <div className='w-full flex justify-between items-center px-3 pb-2' key={exp.company}>
            <h1>{exp.company}</h1>
            <h1>{exp.date}</h1>
          </div>

          <div className='px-3 min-w-full'>
            <ul className='text-left'>
              {exp.descriptions.map((p, index) => {
                return (<li key={index} ><p>- {p}</p></li>);
              })}
            </ul>
          </div>
        </div>
        );
      })}

      <div className='mb-5 md:hidden'>&nbsp;</div>
    </div>
  )
}

export default Experience