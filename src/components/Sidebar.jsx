import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className={`hidden duration-300 bg-[#121212] text-white drop-shadow-2xl h-screen w- relative md:flex justify-center ${sidebar ? 'w-[0vw] md:w-[50px]' : 'w-[0vw] md:w-[185px]'}`}>
        <div className='top-[150px] absolute'>
          <div className={`w-full h-1/2 flex flex-col select-none ${sidebar ? 'text-[0px]' : 'text-lg font-semibold'}`}>
            <h1 className='my-6 hover:scale-105 ease-linear duration-150'><span className='text-[#1db954]'>0000: </span>About</h1>
            <h1 className='my-6 hover:scale-105 ease-linear duration-150'><span className='text-[#1db954]'>0001: </span>Experience</h1>
            <h1 className='my-6 hover:scale-105 ease-linear duration-150'><span className='text-[#1db954]'>0010: </span>Projects</h1>
            <h1 className='my-6 hover:scale-105 ease-linear duration-150'><span className='text-[#1db954]'>0011: </span>Skills</h1>
            <h1 className='my-6 hover:scale-105 ease-linear duration-150'><span className='text-[#1db954]'>0100: </span>Contact</h1>
          </div>
        </div>

        <div className='right-1.5 duration-300 absolute text-[#1db954] font-bold top-[50px] hover:text-[#188b40] hover:rotate-90'>
            <h1 className='cursor-pointer' onClick={() => setSidebar(!sidebar)}><Icon className='text-[35px]' icon="game-icons:multi-directions" /></h1>
        </div>

      <div className={`absolute top-[150px] select-none items-center flex flex-col text-xl ${sidebar ? '' : 'opacity-0'}`}>
        <h1>N</h1>
        <h1>A</h1>
        <h1>V</h1>
        <h1>I</h1>
        <h1>G</h1>
        <h1>A</h1>
        <h1>T</h1>
        <h1>I</h1>
        <h1>O</h1>
        <h1>N</h1>
      </div>
    </div>
  )
}

export default Navbar