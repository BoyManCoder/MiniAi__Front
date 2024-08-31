import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import MiniSVG from '../assets/MiniAiLong.png'
import Socials from './Socials';

function NavBar() {
    const onUpdateActiveLink = (item:string)=>{
        setActiveLink(item)
        console.log(activeLink)
    }  
    const handleActive = (item: string)=>{
        if (item == activeLink){
            return "active navbar-link"
        } else {
            return "navbar-link"
        }
    }
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    const email = "mailto:miniai.toronto@gmail.com"
    useEffect(()=>{
        const onScroll = ()=>{
            if (window.scrollY > 50){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return window.removeEventListener("scroll", onScroll)
        }, [])

  return (
    <Navbar expand="lg" className= {scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home"><img src={MiniSVG}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="index.html" className={handleActive("home")} onClick={()=>{onUpdateActiveLink("home")}} >Home</Nav.Link>
            <Nav.Link href="mission.html" className={handleActive("mission")} onClick={()=>{onUpdateActiveLink("mission")}} >Mission</Nav.Link>
            <Nav.Link href="executives.html" className={handleActive("exec")} onClick={()=>{onUpdateActiveLink("exec")}} >Executives</Nav.Link>
            </Nav>
          <span className="navbar-text">
            <Socials/>      
          </span>
          <button className="navbar-link btn-contact" onClick={()=>{window.location.href = email}}>Contact Us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;