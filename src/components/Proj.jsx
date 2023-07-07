import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Proj = ({data}) => {
  const [modal, setModal] = useState(false);
  return (
    <>
          {/* // drop-shadow-[0_0px_35px_rgba(89,165,216,0.15)] */}
            <div key={data.title} className='h-full w-full flex flex-col justify-center items-center rounded-xl md:hover:scale-105 duration-300 drop-shadow-lg'>
                <img className="cursor-pointer rounded-sm" onClick={() => setModal(!modal)} src={data.image} alt="" />
                <div onClick={() => setModal(!modal)} className='flex justify-center items-center bg-black/40 w-full p-2 rounded-lg'>
                  <button >Click To Learn More</button>
                </div> 
            </div>
            {modal ?
                <>
                   <div className='w-full h-screen absolute left-0 top-0 flex justify-center items-center'>
                        <div className='bg-black/90 md:w-full md:max-h-[400px] md:max-w-[650px] z-40 p-5 rounded-xl fixed top-0 left-0 md:relative h-screen w-screen md:h-auto md:block flex justify-center items-center flex-col'>
                            <h1 className='font-bold text-2xl text-center'>{data.title}</h1>
                            <div className='bg-[#59A5D8] md:h-[1px] h-[2px] mb-3 md:w-auto w-full'>&nbsp;</div>
                            <p className='text-xl font-small'>{data.description}</p>
                            <div className='flex flex-row justify-around items-center pt-[10px] md:w-auto w-3/4'>
                              <a href={data.link} target='_blank' rel="noreferrer">
                                <div className='flex flex-row items-center rounded-2xl border-white outline-1 outline pl-2 pr-3 hover:text-black hover:bg-white duration-300'>
                                  <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="ri:github-fill" />
                                  <h1>Github</h1>
                                </div>
                                </a>
                                <div onClick={() => setModal(!modal)} className='cursor-pointer flex flex-row items-center outline-1 outline duration-300 text-[#59A5D8] hover:text-black hover:bg-[#59A5D8] rounded-2xl justify-center font-bold md:hidden px-2'>
                                  <Icon className='text-3xl group-hover:rotate-90 duration-300' icon="iconamoon:close" />
                                  <h1>EXIT MODAL</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setModal(!modal)} className='w-full h-screen absolute left-0 top-0 flex justify-center items-center z-30 bg-black/30'></div>
                </>
            :
            ''
            }



    </>

  )
}

export default Proj