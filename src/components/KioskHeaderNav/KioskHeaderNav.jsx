import React from 'react';
// import { Link } from "react-router-dom";
import { useHistory, Link } from 'react-router-dom';
import './KioskHeaderNav.css';
// import history from "../../history";

const KioskHeaderNav = ({ title }) => {
    const back = () => {
        history.goBack();
    };
    let history = useHistory();

    const forward = () => {
        history.goForward();
    };
    return (
        <React.Fragment>
            <div className="header-pointer">
                <div className="header-pointer__navigator">
                    <a
                        href="http://localhost:3000/"
                        aria-label="back button"
                        className="navigator-icon"
                        onClick={back}>
                        <img src="/arrow.svg" className="left" ></img>                 
                    </a>
                    <a
                        href="#"
                        aria-label="forward button"
                        className="navigator-icon"
                        onClick={forward}>
                             <img src="/right-arrow.svg" className="right" ></img>
 
                    </a>
                    <a
                        href="http://localhost:3000/"
                        aria-label="Home button"
                        className="navigator-home navigator-icon">
                        <img src="/home1.svg" className="home" ></img>
                        
                    </a>
                </div>
                <div className="navigator-page">
                    <span>{title}</span>
                </div>
                <div className="navigator-setting">
                    <a
                        href="#"
                        aria-label="Settings button"
                        className="navigator-setting">
                        <img src="/gear.svg" className="gear" ></img>
 
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default KioskHeaderNav;
