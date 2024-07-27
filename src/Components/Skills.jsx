import React from 'react'
import skills from "./data/skills.json"

const Skills = () => {
  return (
    <>
      <div className="container skills" id='skills'>
        <h1 style={{textAlign:"left"}}>Skills</h1>
        <div className="items" >
        {skills.map((data) => (
          <>
            <div className="item" key={data.id}
            data-aos="flip-left"
                data-aos-duration="1000"
            >
                <img src={`/src/assets/${data.imageSrc}`} alt="" />
                <h3>{ data.title}</h3>
              </div>
          
          </>
        ))}
      </div>
      </div>
      
    </>
  )
}

export default Skills
