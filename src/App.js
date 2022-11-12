import './App.css';
import Skill from'./pages/Skill.js';
import Foot from './pages/Footer.js';
import About from'./pages/About.js';
import Service from'./pages/Service';

function App() {
  return (
    <div className="main">
      <nav>
        <div className="Navlogo">

        </div>
        <div className="Navbutton">
          <button className='home' id='home' onClick="about" >Home</button>
          <button className='about' >About Us</button>
          <button className='services' >Services</button>
          <button className='contact' >Contact</button>
        </div>
      </nav>
      <section className="FirstSection">

        <div className="top-left">

          <div className="a pl">
            <p>Hello</p>
          </div>

          <div className="aa pl">

            <h2>I'm Nikhil</h2>

          </div>

          <div className="aaa aab pl">

            <p>Web Developer</p>
          </div>

          <div className="aaaa pl">

            <button>HIRE ME</button>

          </div>

        </div>

        <div className="top-reight">

          <div className="img1 pos ">

          </div>

        </div>

      </section>

     
      <About id="about"/>
      
      
      <Service/>

     <Skill/>

     <Foot/>

    </div>
  );
}

export default App;
