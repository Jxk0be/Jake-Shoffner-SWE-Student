import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='w-full pt-[70px] h-screen md:pt-[0vh] flex justify-between items-center flex-col text-white'>
      <div className='flex justify-center flex-col items-center w-full h-[35vh] max-w-[1500px] md:text-5xl text-4xl font-bold text-black'>
        
        <div className='drop-shadow-2xl flex flex-col justify-center items-center'>
          <h1>Jake Shoffner</h1>
          <Typed className="md:text-3xl text-2xl font-semibold" strings={['software engineer...', 'problem solver...', 'self-proclaimed comedian...']} typeSpeed={65} loop backDelay={1800} backSpeed={50}/>
        </div>

       </div>

      <div className='grid md:grid-rows-1 h-[65vh] bg-red-400 max-w-[1500px] grid-flow-col w-full grid-rows-2'>
        <div className='bg-blue-300'>
          Hi, I'm Jake.
        </div>

        <div>
          3D render
        </div>
      </div>
    </div>
  )
}

export default Hero