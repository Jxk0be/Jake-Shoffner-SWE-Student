import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);
  const nav = "NAVIGATION";
  const navArray = nav.split("");

  return (
    <div className={`hidden items-center text-black fixed z-30 drop-shadow-xl bg-[#0b0e10]/90 duration-300 h-screen lg:flex justify-center md:w-[170px] ${sidebar ? 'ml-[-120px]' : ''}`}>
      {/* This is the click-able icon that opens the sidebar */}

      <div className={`mr-[40px] z-10 flex justify-between flex-col h-[280px] ${sidebar ? 'opacity-0' : ''}`}>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#59A5DA] hover:bg-white py-2 hover:text-[#59A5DA] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="material-symbols:verified" />
          <h1>About Me</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#59A5DA] hover:bg-white py-2 hover:text-[#59A5DA] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="cryptocurrency:xp" />
          <h1>Experience</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#59A5DA] hover:bg-[#ffffff] py-2 hover:text-[#59A5DA] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="file-icons:ionic-project" />
          <h1>Projects</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#59A5DA] hover:bg-white py-2 hover:text-[#59A5DA] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="mdi:email-open" />
          <h1>Email</h1>
        </div>

        <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#59A5DA] hover:bg-white py-2 hover:text-[#59A5DA] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
          <Icon className='text-2xl group-hover:rotate-90 duration-300' icon="uil:linkedin" />
          <h1>Linkedin</h1>
        </div>

      </div>

      {sidebar ? <div onClick={() => setSidebar(!sidebar)} className='bg-[#59A5DA] font-semibold ml-[-79px] px-1.5 py-1 rounded-xl z-40 cursor-pointer select-none duration-150 items-center flex flex-col text-xl'>
        {navArray.map((x, index) => <h1 key={index}>{x}</h1>)}
      </div> :
       ``}

    </div>
  )
}

export default Navbar