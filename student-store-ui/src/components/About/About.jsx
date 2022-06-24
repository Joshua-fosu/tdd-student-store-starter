import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="about_page_container" id="about">
      <h1>About</h1>
      <div className="about_page">
        <div className="about_page_half">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="about_page_half background_img"></div>
      </div>
    </div>
  );
}

export default About;
