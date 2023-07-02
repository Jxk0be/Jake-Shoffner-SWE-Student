import React from 'react'
import { useState } from 'react'

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
                        <div className='bg-black/90 md:w-full md:max-h-[450px] md:max-w-[650px] z-40 p-5 rounded-xl w-screen h-screen fixed top-0 left-0 md:relative'>
                            <p className='text-lg font-medium'>{data.description}</p>
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