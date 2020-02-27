import React from "react";
import Splashimg from "../../assets/splash.png";
import "./splash.css";

const Splash = ({}) => {
    return (
      <>
<div className="container min-vh-100">
        <div className="row min-vh-100 justify-content-center align-items-center">
            <div className="col-lg-4 text-center">
                <a href="#" className="hvr-float">
                    <h1 data-aos="fade-right" data-aos-duration="2000">webdesigner</h1>
                    <ul className="hidden">
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                    </ul>
                </a>
            </div>
            <div className="col-lg-4">
                <img data-aos="zoom-in" data-aos-duration="2000" src={Splashimg} alt="" id="splash" />
            </div>
            <div className="col-lg-4 text-center">
                <a href="#" className="hvr-float">
                    <h1 data-aos="fade-left" data-aos-duration="2000">&lt;webutvecklare&gt; </h1>
                    <ul className="hidden">
                        <li>Angular</li>
                        <li>MongoDb</li>
                        <li>Express</li>
                        <li>NodeJS </li>
                    </ul>

                </a>
            </div>
        </div>
    </div>
      </>
    );
  };
  
  export default Splash;