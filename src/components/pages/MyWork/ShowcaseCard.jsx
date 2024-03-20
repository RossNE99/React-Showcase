import React, { useState } from 'react';
import PorjectModal from './PorjectPage';
import { Link } from 'react-router-dom';

function ShowcaseCard({showcaseProject}) {
  return (
    <>
      <div className="col-12 pb-md-3 pb-3">  
      <Link to={showcaseProject.title} className="card bg-dark text-white CardImgContainer ">
          <img src={showcaseProject.image} className="card-img" alt={showcaseProject.title}/>
          <div className="card-img-overlay d-flex flex-wrap flex-column justify-content-end p-0">
              <div className="CardTextOverlay">
                  <h3 className="m-sm-0 m-md-1">{showcaseProject.title}</h3>
                  <p className="">{showcaseProject.subTitle}</p>
              </div>
          </div>
      </Link>
  </div>
  </>
  )
}

export default ShowcaseCard