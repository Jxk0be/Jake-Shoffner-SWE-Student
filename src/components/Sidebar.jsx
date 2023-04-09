import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className={`hidden duration-300 bg-[#121212] h-screen relative md:flex justify-center ${sidebar ? 'w-[0vw] md:w-[15vw]' : 'w-[0vw] md:w-[5vw]'}`}>
        <div className='top-[15vh] absolute'>
          <div className={`w-full duration-300 h-1/2  flex flex-col ${sidebar ? 'text-lg font-semibold' : 'text-[0px]'}`}>
            <h1 className='my-6'><span className='text-[#1db954]'>0000: </span>About</h1>
            <h1 className='my-6'><span className='text-[#1db954]'>0001: </span>Experience</h1>
            <h1 className='my-6'><span className='text-[#1db954]'>0010: </span>Projects</h1>
            <h1 className='my-6'><span className='text-[#1db954]'>0011: </span>Skills</h1>
            <h1 className='my-6'><span className='text-[#1db954]'>0100: </span>Contact</h1>
          </div>
        </div>

        <div className='duration-300 right-0 absolute text-[#1db954] font-bold top-16'>
          {sidebar ? <h1 className="cursor-pointer" onClick={() => setSidebar(!sidebar)}><Icon className="text-[35px]" icon="line-md:menu-fold-left" /></h1>
            : <h1 className="cursor-pointer" onClick={() => setSidebar(!sidebar)}><Icon className="text-[35px]" icon="line-md:menu-fold-right" /></h1>
          }
          
        </div>
    </div>
  )
}

export default Navbar