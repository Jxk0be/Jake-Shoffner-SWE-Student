import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';

const MobileNav = () => {

  const [mobile, setMobile] = useState(true);

  return (
    <div className={`lg:hidden fixed bg-[#121212] flex px-6 justify-between items-center w-full h-[60px] text-[#b3b3b3] z-10`}>
        <h1>Jake Shoffner</h1>
        <div onClick={() => setMobile(!mobile)} className='text-[#59A5D8]'>
          <h1 className='cursor-pointer'><Icon className='text-[35px]' icon="game-icons:multi-directions" /></h1>
      </div>
    </div>
  )
}

export default MobileNav