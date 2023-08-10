import Typed  from 'react-typed';
import React, { useState } from 'react'
import data from '../websiteData.json';

const Experience = () => {
  const [sweSelector, setSweSelector] = useState(true);
  const [taSelector, setTaSelector] = useState(false);
  const [raSelector, setRaSelector] = useState(false);

  const sweCleanup = () => {
    setSweSelector(true);
    setTaSelector(false);
    setRaSelector(false);
  }

  const taCleanup = () => {
    setTaSelector(true);
    setSweSelector(false);
    setRaSelector(false);
  }

  const raCleanup = () => {
    setRaSelector(true);
    setTaSelector(false);
    setSweSelector(false);
  }

  return (
    <>
      {/* This section of the code is the home page */}
      <div className='w-full h-screen flex justify-center items-center text-[#FAF9F6] lg:pl-[80px] lg:pr-[50px] md:px-[50px] md:max-w-[1500px]'>
        <div className='flex flex-col justify-center items-center w-[900px] md:px-0 px-[10px] drop-shadow-lg'>


          <div className=' rounded-lg p-3 font-[400] drop-shadow-lg text-md md:text-lg mb-2 w-full'>
            <div className='flex justify-center items-center z-30 w-full md:h-auto'>
              <div className="md:h-auto relative w-full h-auto bg-[#2f0a56] rounded-lg flex justify-center items-center flex-col py-5">
                <h1 className='capitalize font-[700] md:text-5xl text-5xl mb-1'>My Experience</h1>

                <Typed className="text-[#ed08be] md:text-2xl font-[500] text-2xl pb-3" strings={['Software engineer...', 'Research Assistant...', 'Teaching Assistant...']} typeSpeed={65} loop backDelay={1800} backSpeed={50}/>

                <div className='md:w-9/12 w-full px-2 flex flex-row md:justify-between justify-center items-center h-[145px] rounded-md'>
                  <div className='h-full whitespace-nowrap min-w-4/12 text-left'>
                    <div className={`duration-300 px-2 cursor-pointer my-2 text-xl md:hover:scale-105 text-center font-semibold noSelect ${sweSelector ? 'bg-[#ed08be] scale-105 rounded-md' : ''}`} onClick={() => sweCleanup()}>
                      <h1>SWE Intern</h1>
                    </div>
                    <div className={`duration-300 px-2 cursor-pointer my-2 text-xl md:hover:scale-105 text-center font-semibold noSelect ${taSelector ? 'bg-[#ed08be] scale-105 rounded-md' : ''}`} onClick={() => taCleanup()}>
                      <h1>Teaching Assistant</h1>
                    </div>
                    <div className={`duration-300 px-2 cursor-pointer my-2 text-xl md:hover:scale-105 text-center font-semibold noSelect ${raSelector ? 'bg-[#ed08be] scale-105 rounded-md' : ''}`} onClick={() => raCleanup()}>
                      <h1>Research Assistant</h1>
                    </div>         
                  </div>

                  <div className='md:w-full w-1/2 h-full text-lg font-bold flex ml-5 pl-3 pt-2 bg-[#ed08be]/60 items-start flex-col rounded-xl'>
                    {sweSelector ?
                      data.MoreInfo.overallSkills.map((skills, index) => {
                        return (
                          <h1 key={index}>- {skills}</h1>
                        );
                      })
                    :
                    ''
                    }

                    {taSelector ?
                      data.MoreInfo.techSkills.frontend.map((skills, index) => {
                        return(
                          <h1 key={index}>- {skills}</h1>
                        );
                      }) 
                    :
                    ''
                    }

                    {raSelector ?
                      data.MoreInfo.techSkills.languages.map((skills, index) => {
                        return(
                          <h1 key={index}>- {skills}</h1>
                        );
                      })
                    :
                    ''
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience