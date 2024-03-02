import React from 'react';

import GitHubIcon from "../../assets/images/ContactImages/GitHub.png"
import InstergramIcon from "../../assets/images/ContactImages/Instergram.png"
import EmailIcon from "../../assets/images/ContactImages/Email.png"
import PhoneIcon from '../../assets/images/ContactImages/Phone.png'

function Contact() {
  return (
    <div id="contact-me" className="container">
    <div className="row minWidth100">
        <div className="col-md-12 col-lg-2 section-title">
            <h2><span>Contact</span> Me</h2>
        </div>
        <div className="col gap iconHover d-flex justify-content-center flex-wrap p-1 mb-3">
                <a href="https://github.com/RossNE99/"><img className="img-fluid rounded-img" width="95px" src={GitHubIcon} alt="Github"/></a>
                <a href="https://instagram.com/a90_ross"><img className="img-fluid rounded-img" width="95px" src={InstergramIcon} alt="Instergram"/></a>
                <a href="mailto:rossycharlton@googlemail.com"><img className="img-fluid rounded-img" width="95px" src={EmailIcon} alt="Email"/></a>
                <a href="tel:+447951720914"><img className="img-fluid rounded-img" width="95px" src={PhoneIcon} alt="Call"/> </a>
        </div>
        <div className="col d-flex justify-content-center" style={{maxHeight: 390}}>
            <div className="card bg-dark m-2" style={{minWidth: 280}}>
                <div className="card-header">
                  About Me
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark">Email: rossycharlton@googlemail.com</li>
                  <li className="list-group-item bg-dark">Phone: +447951720914</li>
                  <li className="list-group-item bg-dark"></li>
                </ul>
                <div className="card-header">
                    Join my mailing list
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-dark">
                        <form className="form-inline">
                            <div className="form-group">
                              <label htmlFor="inputEmail" className="sr-only">Email</label>
                              <input style={{maxWidth: 170}} type="text" className="form-control mr-2 mb-2" id="inputEmail" placeholder="Email"/>
                              <button type="submit" className="btn btn-primary mb-2">Submit</button>
                            </div>
                          </form>
                    </li>
                </ul>
              </div>
        </div>
    </div>
</div>
  );
}

export default Contact;
