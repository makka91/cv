import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = ({ }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top" data-aos="fade-down" data-aos-duration="2000">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={Logo} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Hem
                            <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Om mig</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                        </ul>
                        <a className="social p-2 " href="#">
                            <ion-icon size="large" name="mail"></ion-icon>

                        </a>
                        <a className="social p-2" href="#">
                            <ion-icon size="large" name="logo-twitter"></ion-icon>
                        </a>
                        <a className="social p-2" href="#">
                            <ion-icon size="large" name="logo-linkedin"></ion-icon>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
