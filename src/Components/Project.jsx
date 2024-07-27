import React from 'react'
import projects from "./data/projects.json"

const Project = () => {
  return (
    <>
      <div className="container projects my-3" id='project'>
        <h1>PROJECT</h1>
        <div className="row d-flex justify-content-center align-content-center" >
          {projects.map((data) => (
            <>
              <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 mx-3'>
                <div className="card bg-black text-light" style={{ border: "2px solid yellow", boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)" }}
                data-aos="flip-right"
                data-aos-duration="1000"
                >
                  <div className="img">
                    <img src={data.imageSrc} className="card-img-top" alt="..."
                      style={{ border: "1px solid yellow" }} />
                    /

                  </div>
                  <div className="card-body text-center" >
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary m-2">Demo</a>
                    <a href={data.source} className="btn btn-warning">Code</a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

    </>
  )
}

export default Project
