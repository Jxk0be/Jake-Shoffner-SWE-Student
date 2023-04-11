import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);
  const nav = "NAVIGATION";
  const navArray = nav.split("");

  return (
    <div className={`hidden duration-300 bg-[#17181a] drop-shadow-md h-screen relative lg:flex justify-center md:w-[250px] ${sidebar ? 'ml-[-196px]' : ''}`}>
      {/* This is the click-able icon that opens the sidebar */}
      <div className='right-1.5 duration-300 absolute hover:text-[#b3b3b3] text-[#59A5D8] top-[50px] hover:rotate-90'>
          <h1 className='cursor-pointer' onClick={() => setSidebar(!sidebar)}><Icon className='text-[35px]' icon="game-icons:multi-directions" /></h1>
      </div>

      <div className='absolute top-[152px] ml-[-30px] left-4 flex justify-between flex-col h-[280px]'>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#212121] hover:bg-[#59A5D8] py-2 rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="material-symbols:verified" />
          <h1>About Me</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#212121] hover:bg-[#59A5D8] py-2 rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="cryptocurrency:xp" />
          <h1>Experience</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#212121] hover:bg-[#59A5D8] py-2 rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="file-icons:ionic-project" />
          <h1>Projects</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#212121] hover:bg-[#59A5D8] py-2 rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="mdi:email-open" />
          <h1>Email</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#212121] hover:bg-[#59A5D8] py-2 rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="uil:linkedin" />
          <h1>Linkedin</h1>
        </div>

      </div>

      {/* This is the click-able "NAVBAR" horizontal text along the sidebar... it also opens the sidebar*/} 
      <div onClick={() => setSidebar(!sidebar)} className={`absolute bg-[#212121] px-1.5 py-1 rounded-xl top-[150px] cursor-pointer select-none  duration-300 items-center flex flex-col text-xl right-[9.7px] ${sidebar ? '' : 'ml-[-133px]'}`}>
        {navArray.map((x, index) => <h1 key={index}>{x}</h1>)}
      </div>

    </div>
  )
}

export default Navbar