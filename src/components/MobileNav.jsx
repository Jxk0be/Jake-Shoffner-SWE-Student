import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {

  const [mobile, setMobile] = useState(false);
  const navOptions = ["Home", "Experience", "Projects"];

  return (
    <>
      <div className={`lg:hidden fixed bg-[#121212] flex px-6 justify-between items-center w-full h-[60px] text-[#b3b3b3] z-50`}>
        <Link to="/home">
          <h1>Jake Shoffner</h1>
        </Link>
        <div onClick={() => setMobile(!mobile)} className='text-[#59A5D8]'>
          <h1 className='cursor-pointer hover:rotate-90 duration-300'><Icon className='text-[35px]' icon="game-icons:multi-directions" /></h1>
        </div>
      </div>
      {mobile ? 
      <div className='w-full h-screen text-2xl font-bold fixed bg-[#212121] z-40 flex justify-center flex-col items-center lg:hidden text-[#59A5D8]'>
        {navOptions.map((opt) => {
          return (
            <Link to={"/" + opt.toLowerCase()}>
              <h1 onClick={() => setMobile(!mobile)} className='my-4 cursor-pointer'>{opt}</h1>
            </Link>
          );
        })}
        <a href="https://github.com/Jxk0be" target='_blank' rel="noreferrer">
          <h1 onClick={() => setMobile(!mobile)} className='my-2 cursor-pointer'>Github</h1>
        </a>

        <a href="https://www.linkedin.com/in/jacobshoffner/" target='_blank' rel="noreferrer">
          <h1 onClick={() => setMobile(!mobile)} className='my-2 cursor-pointer'>Linkedin</h1>
        </a>
      </div> :
      ''
      }
      
    </>
  )
}

export default MobileNav