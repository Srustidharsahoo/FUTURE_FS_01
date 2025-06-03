import { About } from "./About"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { Nav } from "./Navbar"
import { Project } from "./Projects"
import {Skills} from "./Skills"

export const Home = () => {
    return (
        <>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        </>
    )
}