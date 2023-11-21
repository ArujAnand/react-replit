import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import "../css/About.css";
import Logo from "../images/logo.png";
import CentriImg from "../images/Patient Centricity.svg";
import IntegImg from "../images/Integrity.svg";
import TeamImg from "../images/Team Work.svg";
import OwnImg from "../images/Ownership.svg";


function About() {
    return (
        <div>
            <section className='about' id='about'>
                {/* <h1 className='heading'> <span>About</span>us</h1> */}
                <div className='about-row'>
                    <div className='image'>
                        <img src={Logo} alt=''></img>
                    </div>
                    <div className='content'>
                        <h2>About Us</h2>
                        <h3>Multiple Ways One Vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tortor ut ex cursus aliquam id eget erat. Proin non elit arcu. Vivamus euismod nec metus a tristique. Vestibulum cursus bibendum justo, ut fermentum est sagittis at.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tortor ut ex cursus aliquam id eget erat. Proin non elit arcu. Vivamus euismod nec metus a</p>
                    </div>
                </div>
            </section>

            {/* Bach k */}
            <div className='values'>
                <h3 class="heading2">Our Values</h3>
            </div>
            <div className='Parent-Container'>
                <div className='Child-1'>
                    <span class="value-icon">  <img src={CentriImg} alt="Icon" />
                        <span class="value-heading">Patient Centricity</span>
                    </span>
                    <div className='points'>
                        <ul><li>Commit to ‘best outcomes and experience’ for our patients</li><li>Treat patients and their caregivers with compassion, care</li><li>Our patients’ needs will come first</li></ul>
                    </div>
                </div>
                <div className='Child-2'>
                    <span class="value-icon">  <img src={IntegImg} alt="Icon" />
                        <span class="value-heading">Integrity</span>
                    </span>
                    <div className='points'>
                        <ul><li>Be principled, open and honest</li><li>Model and live our ‘Values’</li><li>Demonstrate moral courage to speak up and do the right things</li></ul>
                    </div>
                </div>
            </div>

            {/* Second Part */}
            <div className='Parent-Container-2'>
                <div className='Child-1'>
                    <span class="value-icon">  <img src={TeamImg} alt="Icon" />
                        <span class="value-heading">Teamwork</span>
                    </span>
                    <div className='points'>
                        <ul><li>Proactively support each other and operate as one team</li><li>Respect and value people at all levels with different</li><li>Demonstrate moral courage to speak up and do the right</li></ul>
                    </div>
                </div>
                <div className='Child-2'>
                    <span class="value-icon">  <img src={OwnImg} alt="Icon" />
                        <span class="value-heading">Ownership</span>
                    </span>
                    <div className='points'>
                        <ul><li>Be responsible and take pride in our actions</li><li>Take initiative and go beyond the call of duty</li><li>Deliver commitment and agreement made.</li></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;