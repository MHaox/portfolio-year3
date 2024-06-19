import { useState, useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import git from "../assets/img/github-mark-white.svg"
import linked from "../assets/img/linkedin-mark-white.svg"
import insta from "../assets/img/instagram-mark-white.svg"
import logo from "../assets/img/logo.svg"

export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },    [])

    const onUpdateActivelink = (value) => {
        setActiveLink(value)
    }
    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbarlink'} onClick={() => onUpdateActivelink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbarlink'} onClick={() => onUpdateActivelink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbarlink'} onClick={() => onUpdateActivelink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/max-robert-hoogeweg/"><img src={linked} alt="LinkedIn" /></a>
                            <a href="https://github.com/MaxHoogeweg"><img src={git} alt="GitHub" /></a>
                            <a href="https://www.instagram.com/mhaox.global"><img src={insta} alt="Insagram" /></a>
                        </div>
                        <div className="vvd" onClick={() => console.log('Connect')}><span>Let's Connect</span></div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
