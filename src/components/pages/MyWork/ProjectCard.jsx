import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({project}) {
  return (
        <div className="col-md-6 col-sm-12 pb-3 pr-md-2">
        <Link to={project.title} className="card bg-dark text-white CardImgContainer">
            <img src={project.image} className="card-img" alt={project.title}/>
            <div className="card-img-overlay d-flex flex-wrap flex-column justify-content-end p-0">
                <div className="CardTextOverlay">
                    <h3 className="m-sm-0 m-md-1">{project.title}</h3>
                    <p>{project.subTitle}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProjectCard