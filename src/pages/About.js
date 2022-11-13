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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Leo duis ut diam
                        quam nulla porttitor massa id. Scelerisque eu ultrices vitae auctor eu augue. Sed odio morbi
                        quis commodo
                        odio. Convallis convallis tellus id interdum. Eu tincidunt tortor aliquam nulla. Sed blandit
                        libero volutpat sed cras ornare arcu dui vivamus. Mauris in aliquam sem fringilla.
                        Nulla facilisi nullam vehicula ipsum a. Tempor commodo ullamcorper a lacus vestibulum sed
                        arcu non.</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        quam nulla porttitor massa id. Scelerisque eu ultrices vitae auctor eu augue. Sed odio morbi
                        quis commodo</p>
                    <div className="aaab p2">

                        <button className="vwb" onClick={() => openInNewTab('https://github.com/nik9599')}>VIEW
                            WORKS
                        </button>
                        <a  href="https://drive.google.com/file/d/15MRO_BtQMpxHYjoHjnsTMookETOXblnt/view?usp=sharing"  target="_blank" className='dcb'>DOWNLOAD CV</a>

                    </div>

                </div>
            </div>

        </div>
    );

}

export default About;