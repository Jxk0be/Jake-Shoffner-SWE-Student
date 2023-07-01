import React from 'react';
import data from '../websiteData.json';

const Projects = () => {
  console.log(data);
  return (
    // <div className='flex justify-between flex-col text-[#F5EFED] lg:max-w-[1500px] bg-slate-400 lg:ml-[50px] xlg:ml-0'>
    //   <div className='grid h-screen w-full bg-blue-900 grid-flow-col grid-cols-1 lg:grid-cols-2'>

    //     <div className='drop-shadow-lg bg-red-400 flex flex-row justify-between'>
    //       <div className='w-[400px]'>
    //         <h1>Epic</h1>
    //         <p>{data.projects[0].descriptions[0]}</p>
    //         <p>{data.projects[0].descriptions[1]}</p>
    //         <p>{data.projects[0].descriptions[2]}</p>
    //         <p>{data.projects[0].descriptions[3]}</p>
    //       </div>
    //       <div className='h-[300px] flex justify-center items-center w-full'>
    //         <img src={data.projects[0].image} alt="chcess"></img>
    //       </div>
    //     </div>


    //   </div>
    // </div>

    <div className="container">

    <h1 className="heading">our services</h1>

      <div className="box-container">
        <div className="box">
          <div>
            <h3>{data.projects[0].title}</h3>
            <p>- {data.projects[0].descriptions[0]}</p>
            <p>- {data.projects[0].descriptions[1]}</p>
            <p>- {data.projects[0].descriptions[2]}</p>
            <p>- {data.projects[0].descriptions[3]}</p>
          </div>
        </div>
        <div className="box">
          <img src={data.projects[0].image} alt="" />
        </div>

        <div className="box">
          <div>
            <h3>{data.projects[1].title}</h3>
            <p>- {data.projects[1].descriptions[0]}</p>
            <p>- {data.projects[1].descriptions[1]}</p>
            <p>- {data.projects[1].descriptions[2]}</p>
          </div>
        </div>
        <div className="box test">
          <img src={data.projects[1].image} alt="" />
        </div>

        <div className="box">
          <div>
            <h3>{data.projects[2].title}</h3>
            <p>- {data.projects[2].descriptions[0]}</p>
            <p>- {data.projects[2].descriptions[1]}</p>
            <p>- {data.projects[2].descriptions[2]}</p>
          </div>
        </div>
        <div className="box">
          <img src={data.projects[2].image} alt="" />
        </div>


      </div>
    </div>
  )
}

export default Projects