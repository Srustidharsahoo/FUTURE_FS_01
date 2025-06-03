import image from '../assets/hero image.JPG';
import '../css/Hero.css'

export const Hero = () => {
    return(
        <>
        
            <div className="hero-section">

                <div className="hero-infm">
                    <div className="hero-infm-box">
                        <p>Hello 👋 I'm</p>
                        <h1>Srustidhar Sahoo</h1>
                        <span>Full Stack Developer</span>
                        <p>2 Year of experience in Web Development</p>
                    </div>

                    <div className="hero-btn">
                        <button className='btn1'>Get In Touch</button>
                        <button className='btn2'>Download CV</button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={image} alt="" />
                </div>

            </div>
        
        </>
    )
}