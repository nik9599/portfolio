import './App.css';
import Skill from './pages/Skill.js';
import Foot from './pages/Footer.js';
import About from './pages/About.js';
import Service from './pages/Service';
import {useRef} from "react";
import Front from'./img/nikhil.png'

function App() {
    const Services = useRef(null);
    const home = useRef(null);
    const contact = useRef(null);
    const skill = useRef(null);
    const about = useRef(null);
    const Scroll = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className="main">
            <nav>
                <div className="Navlogo">

                </div>
                <div className="Navbutton">
                    <ul>
                        <li onClick={() => Scroll(home)} className='home link' id='home'>Home</li>
                        <li onClick={() => Scroll(about)} className='contact link'>About</li>
                        <li onClick={() => Scroll(Services)} className='services link'>Services</li>
                        <li onClick={() => Scroll(skill)} className='about link '>Skill</li>
                        <li onClick={() => Scroll(contact)} className='contact link'>Contact</li>

                    </ul>
                </div>
            </nav>
            <section ref={home} className="FirstSection">

                <div className="top-left">

                    <div className="a pl">
                        <p>Hello</p>
                        <h2>I'm Nikhil</h2>
                        <h4>Web Developer</h4>
                    </div>

                    <div className="aaaa pl">

                        <button>HIRE ME</button>

                    </div>

                </div>

                <div className="top-reight">
                    <img src={Front} />

                </div>

            </section>

            <div ref={about}>
                <About/>
            </div>

            <div ref={Services}>
                <Service/>
            </div>

            <div ref={skill}>
                <Skill/>
            </div>

            <div ref={contact}>
                <Foot id="contact"/>
            </div>

        </div>
    );
}

export default App;
