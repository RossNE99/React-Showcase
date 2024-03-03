import React from 'react';

import HorinseonScreenshot from "../../assets/images/myWorkImgs/HorinseonScreenshot.jpeg"
import PreworkStudyGuid from "../../assets/images/myWorkImgs/preworkStudyGuid.jpeg"
import ReactProject from "../../assets/images/myWorkImgs/reactProject.jpeg"

function MyWork() {
  return (
    <div id="my-work" className="container mt-4">
    <div className="row">
        <div className="col-md-12 col-lg-2 section-title">
            <h2><span>My</span> Work</h2>
        </div>
        <div className="col">
            <div className="row">
                <div className="col-12 pb-md-3 pb-3">  
                    <a href="https://rossne99.github.io/Horiseon-Marketing-Agency/" className="card bg-dark text-white CardImgContainer ">
                        <img src={HorinseonScreenshot} className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex flex-wrap flex-column justify-content-end p-0">
                            <div className="CardTextOverlay">
                                <h3 className="m-sm-0 m-md-1">Horineon</h3>
                                <p className="">HTML/css</p>
                            </div>
                        </div>
                    </a>

                </div>
                <div className="col-md-6 col-sm-12 pb-3 pr-md-2">
                    <a href="https://rossne99.github.io/prework-study-guide/" className="card bg-dark text-white CardImgContainer">
                        <img src={PreworkStudyGuid} className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex flex-wrap flex-column justify-content-end p-0">
                            <div className="CardTextOverlay">
                                <h3 className="m-sm-0 m-md-1">Prework</h3>
                                <p>HTML/css/js</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 col-sm-12 pb-3 pl-md-2">
                    <a href="https://github.com/RossNE99/" className="card bg-dark text-white CardImgContainer">
                        <img src={ReactProject} className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex flex-wrap flex-column justify-content-end p-0">
                            <div className="CardTextOverlay">
                                <h3 className="m-sm-0 m-md-1">Coming Soon</h3>
                                <p>React/JS</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default MyWork;
