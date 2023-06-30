import React from 'react'
import data from '../websiteData.json';

const Experience = () => {
  console.log(data.projects[0].title);
  return (
    <div>Experience Page
      
      {/* Testing */}
      {/* <img src={data.projects[2].image} alt="asdf" /> */}
    </div>

  )
}

export default Experience