import { useEffect, useState } from "react";
import {Navbar, Container, Nav} from "react-bootstrap"


const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll())

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return(
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img src="" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle>
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse  >
                    <Nav className="me-auto">
                        <Nav.Link> HOME</Nav.Link>
                        <Nav.Link> SKILLS</Nav.Link>
                        <Nav.Link> PROJECTS</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a><img/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Contact Me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;