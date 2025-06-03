import image1 from '../assets/project1.png'
import image2 from '../assets/project2.png'
import image3 from '../assets/project3.png'
import image4 from '../assets/project4.png'
import { IoLogoGithub } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import '../css/Projects.css'


export const Project = () => {
    return(
        <>
        
            <div className="project-section">

                <div className="project-head">
                    <h1>Featured <span>Project</span></h1>
                    <p>Here are some of my recent projects. Each project was carefully crafted with attention to
                    detail, performance, and user experience.</p>
                </div>

                <div className="project-body">

                    <div className="project-box">

                        <div className="project-image">
                            <img src={image1} alt="" />
                        </div>

                        <div className="project-tech">
                            <button>React</button>
                            <button>Tailwind css</button>
                            <button>Node js</button>
                        </div>

                        <div className="project-name">
                            <p>Freshcart Project</p>
                            <span>A Beautiful website create using react and tailwind css</span>
                        </div>

                        <div className="project-btn">
                            <IoLogoGithub />
                            <IoOpenOutline />
                        </div>

                    </div>


                    <div className="project-box">

                        <div className="project-image">
                            <img src={image2} alt="" />
                        </div>

                        <div className="project-tech">
                            <button>React</button>
                            <button>Tailwind css</button>
                            <button>Node js</button>
                        </div>

                        <div className="project-name">
                            <p>Pokemon Search Project</p>
                            <span>A Beautiful website create using react and tailwind css</span>
                        </div>

                        <div className="project-btn">
                            <IoLogoGithub />
                            <IoOpenOutline />
                        </div>

                    </div>


                    <div className="project-box">

                        <div className="project-image">
                            <img src={image3} alt="" />
                        </div>

                        <div className="project-tech">
                            <button>Html</button>
                            <button>Tailwind css</button>
                            <button>Javascript</button>
                        </div>

                        <div className="project-name">
                            <p>Geek Start Project</p>
                            <span>A Beautiful learning website create using javascript and tailwind css</span>
                        </div>

                        <div className="project-btn">
                            <IoLogoGithub />
                            <IoOpenOutline />
                        </div>

                    </div>


                    <div className="project-box">

                        <div className="project-image">
                            <img src={image4} alt="" />
                        </div>

                        <div className="project-tech">
                            <button>Html</button>
                            <button>Css</button>
                            <button>Javascript</button>
                        </div>

                        <div className="project-name">
                            <p>Paytm Clone Project</p>
                            <span>A Beautiful website create using html,css and javascript</span>
                        </div>

                        <div className="project-btn">
                            <IoLogoGithub />
                            <IoOpenOutline />
                        </div>

                    </div>

                </div>

                <div className="project-footer">
                    <button>Check My Github 👈</button>
                </div>

            </div>

        </>
    )
}