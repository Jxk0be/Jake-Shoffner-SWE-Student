import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);
  const nav = "NAVIGATION";
  const navArray = nav.split("");

  return (
    <div className={`hidden duration-300 bg-[#121212] text-white drop-shadow-2xl h-screen w- relative md:flex justify-center md:w-[185px] ${sidebar ? 'ml-[-133px]' : ''}`}>
        {/* This is the click-able icon that opens the sidebar */}
        <div className='right-1.5 duration-300 absolute text-[#1db954] font-bold top-[50px] hover:text-[#188b40] hover:rotate-90'>
            <h1 className='cursor-pointer' onClick={() => setSidebar(!sidebar)}><Icon className='text-[35px]' icon="game-icons:multi-directions" /></h1>
        </div>

      {/* This is the click-able "NAVBAR" horizontal text along the sidebar... it also opens the sidebar*/} 
      <div onClick={() => setSidebar(!sidebar)} className={`absolute top-[150px] cursor-pointer select-none hover:scale-105 duration-300 items-center flex flex-col text-xl right-4 ${sidebar ? '' : 'ml-[-133px]'}`}>
        {navArray.map((x, index) => <h1 key={index}>{x}</h1>)}
      </div>

    </div>
  )
}

export default Navbar