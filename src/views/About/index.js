import React from "react";
import Portrait from "../../img/portrait.jpg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <img src={Portrait} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="bio"><span className="skillHeader">Lorem ipsum dolor sit amet, consectetur</span>
                            <ul className=" skillList text-center">
                                <li className="skill">Lorem ipsum</li>
                                <li className="skill">Lorem ipsum</li>
                                <li className="skill">Lorem ipsum</li>
                                <li className="skill">Lorem ipsum & Lorem ipsum</li>
                                <li className="skill">Lorem ipsum</li>
                                <li className="skill">Lorem ipsum</li>
                                <li className="skill">Lorem ipsum</li>
                                <li className="skill">Lorem ipsum & Lorem ipsum</li>
                                <li className="skill">Lorem ipsum</li>
                            </ul>
                        </p>
                        <p className="bio">Lorem ipsum!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;