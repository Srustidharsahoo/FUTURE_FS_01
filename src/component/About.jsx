import '../css/About.css'
import { FaCode } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";


export const About = () => {
    return(
        <>
        
            <div className="about-section">

                <div className="about-head"><h1>About <span>Me</span></h1></div>

                <div className="about-body">

                    <div className="body1">

                        <div className="body1-body">

                            <h1>Passonate <span>Web Developer</span> & Tech Creator</h1>

                        <p>With over 5 years of experience in web development, specialize in creating responsive, accessible, and performant web applications using modern technologies.</p>

                        <p>I'm passionate about creating elegant solutions to complex problems, and I'm constantly learring new technologies and technigues to stay at the forefront of the ever-evolving web landscape</p>

                        <div className="hero-btn">
                            <button className='btn1'>Get In Touch</button>
                            <button className='btn2'>Download CV</button>
                        </div>

                        </div>

                    </div>

                    <div className="body2">

                        <div className="body2-infm">
                            <div className="body2-logo"><FaCode /></div>
                            <div className="body2-logo-infm">
                                <p>Web Development</p>
                                <span>Creating responsive website and web applications with morden freamworks </span>
                            </div>
                        </div>

                        <div className="body2-infm">
                            <div className="body2-logo"><FaRegUser /></div>
                            <div className="body2-logo-infm">
                                <p>UI/UX Design</p>
                                <span>Designing intuitive user interfaces and seamless user experiences</span>
                            </div>
                        </div>

                        <div className="body2-infm">
                            <div className="body2-logo"><FaLaptopCode /></div>
                            <div className="body2-logo-infm">
                                <p>Project Menagement</p>
                                <span>Leading projects from conception to completion with agile methodologies,</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        
        </>
    )
}