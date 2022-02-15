import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="row" id="/">
      <NavBar />

      <div className="col-md">
        <div className="mobile-image"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title">MAYANK ARORA</h2>
          <br></br>
          <h2 className="intro">Objective</h2>
          <br></br>
          <h3>
            Designing web development projects according to design requirements
          </h3>
          <br></br>
          <br></br>
          <Link to="about" activeClass="active" spy={true} smooth={true}>
            <button type="button" className="readMore btn btn-info">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="col-md">
        {/* <div className="right-image"></div> */}
        <div className="mobile-image"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title"></h2>
          <br></br>
          <h2 className="intro">Profiles</h2>
          <br></br>
          <div className="row">
            <div className="col-sm" />
            <div className="col-sm text-center pro-link">
              <a href="https://leetcode.com/mayankdv/" target="_blank">
                <img
                  src="https://www.linkpicture.com/q/leetcode.svg"
                  height="50"
                  width="50"
                  class="pro-link"
                />
              </a>
              <a href="https://www.codechef.com/users/mayankdv" target="_blank">
                <img
                  src="https://www.linkpicture.com/q/codechef.a60280cb.svg"
                  height="50"
                  width="50"
                  class="pro-link"
                />
              </a>
              <a href="https://codeforces.com/profile/mayankdv" target="_blank">
                <img
                  src="https://www.linkpicture.com/q/Codeforces.colored.svg"
                  height="50"
                  width="50"
                  class="pro-link"
                />
              </a>
              &nbsp;
              <a href="https://www.hackerearth.com/@mayankdv" target="_blank">
                <img
                  src="https://www.linkpicture.com/q/HE_logo_white.png"
                  height="25"
                  width="75"
                  class="pro-link"
                />
              </a>
            </div>
            <div className="col-sm" />
          </div>
          <br></br>
          <br></br>
          <Link to="about" activeClass="active" spy={true} smooth={true}></Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
