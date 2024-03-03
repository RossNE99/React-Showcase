import React from 'react';
import BioPhoto from "../../assets/images/bioPhoto.jpg"

function Home() {
  return (
    <header id="home" className="container">
    <div className="jumbotron">
        <div className="row">
            <div className="col-md-6">
                <img src={BioPhoto} className="rounded-img"/>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <h1>Hi there, i'm <span>Ross</span> and i'm <b>your</b> future <span> Full-Stack Web Developer</span></h1>
            </div>
        </div>
      </div>
</header>
  );
}

export default Home;
