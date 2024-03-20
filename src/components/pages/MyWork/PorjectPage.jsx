import React from 'react'

import porjects from "../../../assets/data/projectShowcase.json"

import "./PorjectPage.css"
import { useParams } from 'react-router-dom'

function PorjectPage() {

  const { title } = useParams()

  const project = porjects.find((project) => project.title===title)

  return (
    <div className="container">
      <div className="row width100">
        <div className="col-md-7 col-sm-12 height100">
          <div className='left-section shadow-lg p-2 rounded-lg'>
            <div className='mb-2'>
              <h1 className='m-2'>{project.title}</h1>
              <a href={project.repoLink} className='btn btn-primary m-2'>View Repo</a>
              {project.deployedLink && <a href={project.deployedLink} className='btn btn-primary m-2'>Visit Site</a>}
            </div>
            <div className="p-3 rounded-lg mr-md-1 h-100">
              <h2>Description</h2>
              <p>{project.description}</p>
              <h2>Credits</h2>
              <ul>
                {project.credits.map((credit, i) => (
                  <li key={i}>{credit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='col-md-5 col-sm-12 height100'>
          <div className=" right-section shadow-lg rounded-lg p-2">
              <h2 className='m-2'>Features</h2>
                <ul className='pl-1'>
                  {project.features.map((feature, i) => (
                    <li key={i} className='m-1 my-2 p-2 rounded-lg'>{feature}</li>
                  ))}
              </ul>
            <div className='m-2'>
              <h2>Screen Shots</h2>
              <img className='my-1 w-100 shadow-lg rounded-lg' src={`.${project.image}`}></img>
            </div>
            <div className='m-2 mt-4'>
              <h2>Tags</h2>
              <div className='flex flex-wrap'>
                {project.tags.map((tag, i) => (
                  <span key={i} className="badge badge-pill badge-secondary m-1 shadow-lg">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PorjectPage