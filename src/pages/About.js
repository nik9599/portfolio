import React from "react";
import '../pages/About.css';


function openInNewTab(url) {

    window.open(url, '_blank', 'noopener,noreferrer');

}

function About() {

    return (

        <div className="AboutDiv">
            <div className="left-about about-width">
                <h1>About Me</h1>
                <div className="underline"></div>
            </div>
            <div className="reight-about about-width">
                <div className="about-text">
                    <p>Hi My Self Nikhil i am 3-Year Cse Student .I pursuing my Btech from IPU University at Delhi Technical Campus
                        Currently I am Passionate about web development for achieving a great carrier in web development i learn new technology  like MERN Stack  </p>
                    <br></br>

                    <div className="aaab p2">

                        <button className="vwb" onClick={() => openInNewTab('https://github.com/nik9599')}>VIEW
                            WORKS
                        </button>
                        <a href="https://drive.google.com/file/d/15MRO_BtQMpxHYjoHjnsTMookETOXblnt/view?usp=sharing"
                           target="_blank" className='dcb'>DOWNLOAD CV</a>

                    </div>

                </div>
            </div>

        </div>
    );

}

export default About;