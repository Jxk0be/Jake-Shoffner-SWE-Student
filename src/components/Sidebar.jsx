import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);
  const nav = "NAVIGATION";
  const navArray = nav.split("");

  return (
    <>
      <div className={`hidden fluidBG items-center text-[#ed08be] text-[17px] font-bold fixed z-50 drop-shadow-xl bg-[#1a191a] duration-300 h-screen lg:flex justify-center md:w-[170px] ${sidebar ? 'ml-[-120px]' : ''}`}>
        {/* This is the click-able icon that opens the sidebar */}

        <div className={`mr-[40px] z-10 flex noSelect justify-between flex-col h-[300px] ${sidebar ? 'opacity-0' : ''}`}>

          <Link to="/home">
            <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#FAF9F6] hover:bg-[#ed08be] py-2 hover:text-[#FAF9F6] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
              <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="ion:home" />          
              <h1>Home</h1>
            </div>
          </Link>
          
          <Link to="/experience">
            <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#FAF9F6] hover:bg-[#ed08be] py-2 hover:text-[#FAF9F6] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
              <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="cryptocurrency:xp" />
              <h1>Experience</h1>
            </div>
          </Link>

          <Link to="/projects">
            <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#FAF9F6] hover:bg-[#ed08be] py-2 hover:text-[#FAF9F6] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
              <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="file-icons:ionic-project" />
              <h1>Projects</h1>
            </div>
          </Link>

          <a href="https://github.com/Jxk0be" target='_blank' rel="noreferrer">
            <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#FAF9F6] hover:bg-[#ed08be] py-2 hover:text-[#FAF9F6] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
              <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="ri:github-fill" />
              <h1>GitHub</h1>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/jacobshoffner/" target='_blank' rel="noreferrer">
            <div onClick={() => setSidebar(!sidebar)} className='flex group justify-between w-[160px] bg-[#FAF9F6] hover:bg-[#ed08be] py-2 hover:text-[#FAF9F6] rounded-xl pr-2 pl-5 hover:scale-105 cursor-pointer duration-300'>
              <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="uil:linkedin" />
              <h1>Linkedin</h1>
            </div>
          </a>
          
        </div>

        {sidebar ? 
        <div onClick={() => setSidebar(!sidebar)} className='hover:text-[#ed08be] text-[#FAF9F6] font-semibold ml-[-79px] px-1.5 py-1 rounded-xl z-40 cursor-pointer select-none duration-150 items-center flex flex-col text-xl group'>
          {navArray.map((x, index) => <h1 key={index}>{x}</h1>)}
        </div> :
        ``}

      </div>

      {!sidebar ? 
      <div onClick={() => setSidebar(!sidebar)} className='w-full absolute z-40 bg-black/10 h-screen'></div>:
      ''
      }
    </>
  )
}

export default Navbar