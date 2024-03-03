import React from 'react';

import LinuxIcon from"../../assets/images/otherSkillsImgs/Linux.png" 
import TypeScriptIcon from"../../assets/images/otherSkillsImgs/typeScript.png"
import NextJSIcon from"../../assets/images/otherSkillsImgs/nextJS.png"
import NodeIcon from"../../assets/images/otherSkillsImgs/node.png"
import ExpressIcon from"../../assets/images/otherSkillsImgs/express.png"
import DockerIcon from"../../assets/images/otherSkillsImgs/docker.png"
import ArduinoIcon from"../../assets/images/otherSkillsImgs/arduino.jpg"
import MysqlIcon from"../../assets/images/otherSkillsImgs/mysql.png" 
import JavaIcon from"../../assets/images/otherSkillsImgs/Java.jpg"
import SpringIcon from"../../assets/images/otherSkillsImgs/spring.png"
import ServerIcon from"../../assets/images/otherSkillsImgs/server.png"




function About() {
  return (
    <div id="about-me" className="container">
    <div className="row">
        <div className="col-md-12 col-lg-2 section-title">
            <h2>About <span>Me</span></h2>
        </div>
        <div className="col mb-3">
            {/* <!-- My background --> */}
            <h3>My background</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            </p>
            {/* <!-- My Skills --> */}
            <h3>My Skills</h3>
            <div className="row my-skill justify-content-center mb-3">
                <div className="col-xl-3 col-lg-6 col-sm-6 d-flex justify-content-center p-0">
                  <label className="" style={{"--p":70}}> HTML <p>70%</p> <progress max="100" value="70">70%</progress></label>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-6 d-flex justify-content-center p-0">
                  <label className="" style={{"--p":40}}> CSS <p>40%</p> <progress max="100" value="40">40%</progress></label>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-6 d-flex justify-content-center p-0">
                  <label className="" style={{"--p":60}}> JavaScript <p>60%</p> <progress max="100" value="60">60%</progress></label>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-6 d-flex justify-content-center p-0">
                    <label className="" style={{"--p":80}}> React <p>80%</p> <progress max="100" value="80">80%</progress></label>
                </div>
            </div>
            {/* <!-- Other Skills --> */}
            <h3>Other Skills</h3>
            <div className="about-me-other-skills w-75 m-auto d-flex flex-wrap w-75 justify-content-center gap">
              <img className="rounded-img" src={LinuxIcon} alt="Linux"/>
              <img className="rounded-img" src={TypeScriptIcon} alt="typeScript"/>
              <img className="rounded-img" src={NextJSIcon} alt="nextJS"/>
              <img className="rounded-img" src={NodeIcon} alt="node"/> 
              <img className="rounded-img" src={ExpressIcon} alt="ExpressJS"/>
              <img className="rounded-img" src={DockerIcon} alt="Docker"/>
              <img className="rounded-img" src={ArduinoIcon} alt="Arduino"/>
              <img className="rounded-img" src={MysqlIcon} alt="MySQL"/>
              <img className="rounded-img" src={JavaIcon} alt="Java"/>
              <img className="rounded-img" src={SpringIcon} alt="Spring"/>
              <img className="rounded-img" src={ServerIcon} alt="Server Infrastructure"/>
            </div>
        </div>
    </div>
</div>
  );
}

export default About;
