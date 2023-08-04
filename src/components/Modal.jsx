import Typed from 'react-typed';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Modal = ({data, onClose}) => {
  const [bsSelector, setBsSelector] = useState(true);
  const [feSelector, setFeSelector] = useState(false);
  const [langSelector, setLangSelector] = useState(false);
  const [toolSelector, setToolSelector] = useState(false);

  /* This code should be refactored later, I don't like how repeated this is.
     Need to research if there's a better way to do this, but this is off
     the ole' brain.
  */
  const bsCleanup = () => {
    setBsSelector(true);
    setFeSelector(false);
    setLangSelector(false);
    setToolSelector(false);
  }

  const feCleanup = () => {
    setFeSelector(true);
    setBsSelector(false);
    setLangSelector(false);
    setToolSelector(false);
  }

  const langCleanup = () => {
    setLangSelector(true);
    setFeSelector(false);
    setBsSelector(false);
    setToolSelector(false);
  }

  const toolCleanup = () => {
    setToolSelector(true);
    setFeSelector(false);
    setBsSelector(false);
    setLangSelector(false);
  }

  return (
    <>
    <div className='flex justify-center items-center z-30 fixed md:w-[600px] w-full h-1/2 md:h-auto'>
      <div className="md:h-auto relative md:w-full w-full h-auto bg-[#6a27b2] rounded-lg flex justify-center items-center flex-col py-5">
        <div className='absolute right-0 top-0 pr-3 pt-3 cursor-pointer' onClick={onClose}>
          <Icon className='text-[30px] hover:text-[#ed08be] duration-150' icon="carbon:close-outline" />
        </div>
        <h1 className="text-3xl font-bold">{data.MoreInfo.title}</h1>

        <Typed className="text-[#ed08be] font-semibold text-xl" strings={['Software engineer...', 'Senior in Computer Science...']} typeSpeed={65} loop backDelay={2000} backSpeed={50}/>
        
        <div className="flex justify-between items-center text-center w-full pb-5 md:px-5 text-[14px] whitespace-nowrap">
          <p className='w-1/3'>Knoxville, TN</p>
          <a className="w-1/3 underline" href="mailto:jshoffn3@vols.utk.edu">jshoffn3@vols.utk.edu</a>
          <p className='w-1/3'>(865) 978-2087</p>
        </div>

        <h1 className='text-2xl font-bold'>{data.MoreInfo.subTitle}</h1>
        <div className='w-9/12 h-[1px] bg-red-50 mb-3'>&nbsp;</div>

        <div className='md:w-9/12 w-full px-2 flex flex-row md:justify-between justify-center items-center h-[145px] rounded-md'>
          <div className='h-full whitespace-nowrap min-w-4/12 text-left'>
            <div className={`duration-300 px-2 cursor-pointer my-2 text-xl md:hover:scale-105 text-center font-semibold noSelect ${bsSelector ? 'bg-[#ed08be] scale-105 rounded-md' : ''}`} onClick={() => bsCleanup()}>
              <h1>Basic Skills</h1>
            </div>
            <div className={`duration-300 cursor-pointer my-2 text-xl md:hover:scale-105 text-center font-semibold noSelect ${feSelector ? 'bg-[#ed08be] scale-105 rounded-md' : ''}`} onClick={() => feCleanup()}>
              <h1>Front-End</h1>
            </div>
            <div className={`duration-300 cursor-pointer my-2 text-xl md:hover:scale-105 text-center font-semibold noSelect ${langSelector ? 'bg-[#ed08be] scale-105 rounded-md' : ''}`} onClick={() => langCleanup()}>
              <h1>Languages</h1>
            </div>
            <div className={`duration-300 cursor-pointer my-2 text-xl md:hover:scale-105 text-center font-semibold noSelect ${toolSelector ? 'bg-[#ed08be] scale-105 rounded-md' : ''}`} onClick={() => toolCleanup()}>
              <h1>Tooling</h1>
            </div>            
          </div>

          <div className='md:w-full w-1/2 h-full text-lg font-bold flex ml-5 pl-3 pt-2 bg-[#ed08be]/60 items-start flex-col rounded-xl'>
            {bsSelector ?
              data.MoreInfo.overallSkills.map((skills, index) => {
                return (
                  <h1 key={index}>- {skills}</h1>
                );
              })
            :
            ''
            }

            {feSelector ?
              data.MoreInfo.techSkills.frontend.map((skills, index) => {
                return(
                  <h1 key={index}>- {skills}</h1>
                );
              }) 
            :
            ''
            }

            {langSelector ?
              data.MoreInfo.techSkills.languages.map((skills, index) => {
                return(
                  <h1 key={index}>- {skills}</h1>
                );
              })
            :
            ''
            }

            {toolSelector ?
              data.MoreInfo.techSkills.toolsOthers.map((skills, index) => {
                return(
                  <h1 key={index}>- {skills}</h1>
                );
              })
            :
            ''
            }
          </div>
        </div>
      </div>
    </div>

    <div onClick={onClose} className='h-screen w-full bg-black/40 fixed z-20'></div>
    </>
  )
}

export default Modal