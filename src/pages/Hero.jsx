import React from 'react'
import Typed from 'react-typed';
import { useState } from 'react';
import Modal from '../components/Modal';
import data from '../websiteData.json';

const Hero = () => {
  const [openModal, setModal] = useState(false);

  return (
    <>
      {/* This section of the code is the home page */}
      <div className='w-full h-screen flex justify-center items-center text-[#FAF9F6] lg:pl-[80px] lg:pr-[50px] md:px-[50px] md:max-w-[1500px]'>
        <div className='flex flex-col justify-center items-center max-w-[900px] md:px-0 px-[10px] drop-shadow-lg'>

          <div className='flex flex-col justify-center items-center drop-shadow-xl pb-1'>
              <h1 className='capitalize font-[700] md:text-5xl text-5xl'>Jake Shoffner</h1>
              <Typed className="text-[#ed08be] md:text-2xl font-[500] text-2xl" strings={['Software engineer...', 'Problem solver...', 'Self-proclaimed comedian...', 'Senior in Computer Science...']} typeSpeed={65} loop backDelay={1800} backSpeed={50}/>
          </div>

          <div className=' rounded-lg p-3 font-[400] drop-shadow-lg font-sans text-md md:text-lg mb-2'>
            <p>
            As a rising senior in Computer Science at the <a rel="noreferrer" className="text-[#9584f0] hover:text-[#6757c4] duration-150" href="https://www.eecs.utk.edu/undergraduate/computer-science/" target='_blank'>University of Tennessee, Knoxville</a>, 
            and a Software Engineering intern at <a rel="noreferrer" className='text-[#9584f0] hover:text-[#6757c4] duration-150' href="https://www.kub.org/about/about-kub" target='_blank'>KUB</a>, I am passionate about problem-solving. With a strong 
            passion for front-end development, I also possess valuable experience in the middle and lower layers of software. My greatest 
            joy comes from utilizing my skills to craft practical solutions for everyday challenges.
            </p>
          </div>

          <button onClick={() => setModal(!openModal)} className='bg-[#ed08be] hover:bg-[#FAF9F6] hover:text-[#ed08be] duration-150 py-1 px-6 rounded-[20px] text-xl font-bold'>More Here</button>
        </div>
      </div>

      {/* Once modal is activated, this appears */}
      {openModal ? 
        <Modal data={data} onClose={() => setModal(!openModal)} />
        :
        ''
      }
    </>
    );
}

export default Hero