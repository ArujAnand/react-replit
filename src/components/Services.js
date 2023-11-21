import 'bootstrap/dist/css/bootstrap.min.css';
import DocImg from "../images/About-3600x1200-centered.webp";
import "../App.css";
import "../css/Services.css";
import HosImg from "../images/Service-Hospital.webp";

function Services() {
    return (
        <div>
            <div className='About-image-container '>
                <img src={DocImg} alt='Smiling Doctor' />
            </div>
            <div className="About-overlay-text">
                <h1>Leading Integrated Healthcare Services Provider in India</h1>
            </div>
            <div className='About-Section'>
                <div className='content-section'>
                    <h3>Specialities & Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tortor ut ex cursus aliquam id eget erat. Proin non elit arcu. Vivamus euismod nec metus a tristique. Vestibulum cursus bibendum justo, ut fermentum est sagittis at. Sed gravida efficitur mi, a cursus urna posuere a. Aliquam erat volutpat.</p>
                </div>
            </div>
            <div className='clear-after-floats list-container'>
                <ul className='List'>
                    <li>Bloodless surgery and medicine</li>
                    <li>Cancer care</li>
                    <li>Cosmetic Lounge</li>
                    <li>Emergency room</li>
                    <li>Endoscopy</li>
                    <li>Heart care services</li>
                </ul>
                {/* Second Unordered List */}
                <ul className='List'>
                    <li>Intensive Care Unit</li>
                    <li>Neonatal Intensive Care Unit</li>
                    <li>Nutrition counseling</li>
                    <li>Orthopedics</li>
                    <li>Stroke care</li>
                    <li>Skilled nursing facility</li>
                </ul>
            </div>
            <div className='info-container'>
            <div className='info-row'>
            <div className='right'>
                    <div className='corousel-section'>
                        <h3>Details About the Hospital</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tortor ut ex cursus aliquam id eget erat. Proin non elit arcu </p>
                        {/* Add more lines as needed */}
                    </div>
                </div>
                <div className='left'>
                    <img src={HosImg} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services;