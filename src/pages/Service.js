import React from "react";
import '../pages/Service.css';



function Service() {
    return (
        <div className='ServiceSection'>

            <h1><b>Services</b></h1>
            <div className="underline"></div>
            <div className="test">
                <div className="filler"></div>
                <div className='service'>

                    <div className="frt-dev"><h3>Front-End Development</h3></div>
                    <div className="bck-dev"><h3>Back-End Development</h3></div>

                </div>
                <div className="filler"></div>
            </div>
        </div>
    );
}

export default Service;