import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='w-full pt-[70px] h-screen md:pt-[0vh] flex justify-between items-center flex-col text-[#F5EFED]'>
      <div className='grid md:grid-rows-1 h-screen max-w-[1500px] grid-flow-col w-full grid-rows-2 m-[5vh] gap-x-10 gap-y-4 p-5'>
                  
        <div className='flex flex-col w-full md:min-w-[600px] justify-center'>
            <h1 className='md:text-4xl grad font-[400] text-3xl drop-shadow-lg'>Hello, I'm</h1>
            <h1 className='capitalize font-[700] md:text-6xl text-5xl drop-shadow-lg'>Jake Shoffner</h1>
            <Typed className="text-[#59A5D8] md:text-4xl font-[500] text-2xl" strings={['Software engineer...', 'Problem solver...', 'Self-proclaimed comedian...']} typeSpeed={65} loop backDelay={1800} backSpeed={50}/>
        </div>  

        <div className='flex items-center w-full text-xl text-[#d8dad9] justify-center md:min-h-full'>
          <div className='bg-[#2d363f] p-6 rounded-xl hover:scale-105 duration-300 bg-opacity-60'>
            <h1 className='font-bold text-4xl text-[#59A5D8] mb-6'>About Me</h1>
            <p className='grad'>
              Hi, my name is Jake! I am currently a software engineering intern at <a rel="noreferrer" className="text-[#59A5D8] font-[500] hover:text-[#F5EFED] duration-300" target="_blank" href="https://www.kub.org">KUB</a> where 
              I'm learning more about web development. In addition, I'm going into my final year of computer science at 
              the <a rel="noreferrer" className="text-[#59A5D8] font-[500] hover:text-[#F5EFED] duration-300" href="https://www.eecs.utk.edu" target='_blank'>University of Tennessee, Knoxville</a>, 
              where I plan to graduate in May 2024!
            </p>
            <p className='mt-5 grad'>
            As a software enthusiast with a passion for web development, I find joy in building web applications 
            during my free time. My fascination with software engineering constantly fuels my desire to learn and 
            explore more about this ever-evolving field.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero