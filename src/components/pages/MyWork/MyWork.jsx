import React from 'react';

import "./MyWork.css"

import porjects from "../../../assets/data/projectShowcase.json"
import ShowcaseCard from './ShowcaseCard';
import ProjectCard from './ProjectCard';

function MyWork() {
  return (
    <div id="my-work" className="container mt-4">
        <div className="row">
            <div className="col-md-12 col-lg-2 section-title">
                <h2><span>My</span> Work</h2>
            </div>
            <div className="col">
                <div className="row">
                    <ShowcaseCard showcaseProject={porjects[0]}/> 
                    {porjects.filter(porject => porject.id > 1).map(project => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyWork;
