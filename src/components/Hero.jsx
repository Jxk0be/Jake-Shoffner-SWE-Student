import React from 'react'

const Hero = () => {
  return (
    <div className='w-full pt-[70px] h-screen md:pt-[0vh] flex justify-between items-center flex-col text-white'>
      <div className='flex justify-center flex-col items-center w-full h-[35vh] bg-red-300 max-w-[1500px]'>
        <h1>Jake Shoffner</h1>
        <h1>SWE Student</h1>
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