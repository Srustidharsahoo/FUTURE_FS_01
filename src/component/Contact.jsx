import '../css/Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";


export const Contact = () => {
    return(
        <>
        
            <div className="contact-section">

                <div className="contact-head">
                    <h1>Get In <span>Touch</span></h1>
                    <p>Have a project in mind or want to collaborate? Feel free to reachout, I'm always open to
                    discussing new opportunities</p>
                </div>

                <div className="contact-body">

                    <div className="contact-infm">

                        <div className="contact-infm-head">
                            <p>Contact <span>Information</span></p>
                        </div>

                        <div className="contact-infm-body">

                            <div className="contact-infm-box">
                                <div className="contact-infm-logo"><MdOutlineEmail /></div>
                                <div className="contact-infm-name">srustidharsahoo64@gaml.com</div>
                            </div>

                            <div className="contact-infm-box">
                                <div className="contact-infm-logo"><IoCallOutline /></div>
                                <div className="contact-infm-name">91+ 7684023210</div>
                            </div>

                            <div className="contact-infm-box">
                                <div className="contact-infm-logo"><IoLocationOutline /></div>
                                <div className="contact-infm-name">Bhubaneswar,Odisha,India</div>
                            </div>

                        </div>

                        <div className="contact-infm-footer">
                            <div className="footer-head"><p>Connect with me</p></div>
                            <div className="footer-logo">
                                <FaInstagram />
                                <FaFacebookSquare />
                                <FaSquareXTwitter />
                                <FaLinkedin />
                            </div>
                        </div>

                    </div>




                    <div className="messaage-section">

                        <div className="message-head">
                            <p>Send a <span>Messagae</span></p>
                        </div>

                        <div className="form-section">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Enter your name'/>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Enter your email address'/>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" placeholder='Write the message for us'></textarea>
                        </div>

                        <div className="message-btn">
                            <button>Send Message <FiSend /></button>
                        </div>

                    </div>

                </div>

            </div>
        
        </>
    )
}