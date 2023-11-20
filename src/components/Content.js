// Has the homepage content without nav-bar

import React from "react";
import bgImage from "../images/background.webp";
import "../css/BckgndStyles.css";

function Content() {
    return (
        <div className="content-container">
            <img src={bgImage} alt="background" className="bg-iamge" />
            {/* For content over the image */}
            <div className="overlay-text">
                <h1>Your Health Is<br />Our Priority</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    );
}

export default Content;