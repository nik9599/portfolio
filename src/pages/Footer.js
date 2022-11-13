import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import './Footer.css'
import location from '../img/icons8-location-64.png';
import contact from '../img/icons8-phone-64.png';
import mail from '../img/icons8-mail-32.png';




    function Footer() {
        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_c4vgxp7', 'template_zsojv6s', form.current, 'UkgMYdjEuLRyWyZq1')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };
        return (
            <div className="foot">
                <div className="left-div">
                    <h4>ADDRESS</h4>
                    <div className="addres-div">
                        <div className="location dis">
                            <img src={location} alt=""/>
                            <h4>Shadhra Delhi-110053</h4>
                        </div>
                        <div className="number dis">
                            <img src={contact}/>
                            <h4>9599094256</h4>
                        </div>
                        <div className="email dis ">
                            <img src={mail}/>
                            <h4>nk9599094257@gmail.com</h4>
                        </div>
                    </div>
                </div>
                <div className="right-div">
                    <h3> CONTACT ME</h3>

                    <div className="contact-div">
                        <div className="filler1"></div>
                        <form id="contact-info" ref={form} onSubmit={sendEmail}>
                            <label><b>Name</b></label>
                            <input type="text" name="user_name"/>
                            <label><b>E-mail</b></label>
                            <input type="email" name="user_email"/>
                            <label><b>Contact</b></label>
                            <input type="number" name="user_contact"/>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    export default Footer;