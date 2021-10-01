import React from 'react'
import {Link} from 'react-router-dom'
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
import Ujwal from '../images/ujwal.jpg'
const Homepage = () => {
    return (
        <>
        <div className="home-text">
            <h1>Hello ! I'm Ujwal, <br/>
            a Budding Developer.....</h1>
            <p>
                 FullStack Developer , Problem solver and definately
                 Indian ! <br />  Glad you're here ! Do check my projects . 
            </p>
            <Link to="contact-me"> SAY HELLO</Link>
            <Link id="more" to="projects"> SEE PROJECTS</Link>
        </div>
        <div className="icon">
            <a href="https://www.linkedin.com/in/ujwal-danta-038509203/" target="_blank">
        <FaLinkedin className="ireact"/>
            </a>
            <a href="https://github.com/ujwal-danta" target="_blank">
        <FaGithub className="ireact"/>
            </a>
            <a href="https://www.instagram.com/ujwaldanta09/" target="_blank">
        <FaInstagram className="ireact"/>
            </a>
        </div>
        <img className="ujwal-img" src={Ujwal} alt="ujwal-img" />
        <div className="box">

        </div>

        </>
    )
}

export default Homepage
