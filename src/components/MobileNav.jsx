import React from 'react'
import { Icon } from '@iconify/react';

const MobileNav = () => {
  return (
    <div className='lg:hidden fixed bg-[#17181a] flex px-6 justify-between items-center w-full h-[70px] text-white z-10'>
        <h1>Jake Shoffner</h1>
        <div className='duration-300 hover:text-[#b3b3b3] text-[#59A5D8] hover:rotate-90'>
          <h1 className='cursor-pointer'><Icon className='text-[35px]' icon="game-icons:multi-directions" /></h1>
      </div>
    </div>
  )
}

export default MobileNav