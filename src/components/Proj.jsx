import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Proj = ({data}) => {
  const [modal, setModal] = useState(false);
  return (
    <>
          {/* // drop-shadow-[0_0px_35px_rgba(89,165,216,0.15)] */}
            <div key={data.title} className='w-full h-full rounded-xl bg-black/40 md:hover:scale-105 duration-300 drop-shadow-lg'>
                <img className="cursor-pointer" onClick={() => setModal(!modal)} src={data.image} alt="" />
                <div onClick={() => setModal(!modal)} className='flex justify-center items-center h-[40px]'>
                  <button >Click To Learn More</button>
                </div> 
            </div>
            {modal ?
                <>
                   <div className='w-full h-screen absolute left-0 top-0 flex justify-center items-center'>
                        <div className='bg-black/90 md:w-full md:max-h-[400px] md:max-w-[650px] z-40 p-5 rounded-xl fixed top-0 left-0 md:relative'>
                            <h1 className='font-bold text-2xl pb-3'>{data.title}</h1>
                            <p className='text-xl font-small'>{data.description}</p>
                            <div className='flex flex-row justify-around items-center pt-[10px]'>
                                <div className='flex flex-row items-center'>
                                    <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="ri:github-fill" />
                                    <h1>Github</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setModal(!modal)} className='w-full h-screen absolute left-0 top-0 flex justify-center items-center z-30'></div>
                </>
            :
            ''
            }



    </>

  )
}

export default Proj