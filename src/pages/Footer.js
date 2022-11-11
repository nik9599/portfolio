import React from "react";
import './Footer.css'
import location from '../img/icons8-location-64.png';
import contact from '../img/icons8-phone-64.png';
import mail from '../img/icons8-mail-32.png';

function Footer() {
    return (
        <div className="foot">
            <div className="left-div">
                <h4>ADDRESS</h4>
                <div className="addres-div">
                    <div className="location dis">
                        <img src={location} alt="" />
                        <h4>Shadhra Delhi-110053</h4>
                    </div>
                    <div className="number dis">
                        <img src={contact} />
                        <h4>9599094256</h4>
                    </div>
                    <div className="email dis ">
                        <img src={mail} />
                        <h4>nk9599094257@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className="right-div">
                <h3> CONTACT ME</h3>
              
                <div className="contact-div">
                <div className="filler1"></div>
                    <form id="contact-info">
                        <label><b>Name</b></label>
                        <input type="text" />
                        <label><b>E-mail</b></label>
                        <input type="email" />
                        <label><b>Contact</b></label>
                        <input type="number" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;