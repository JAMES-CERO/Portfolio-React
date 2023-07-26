import { Container, Col, Row } from "react-bootstrap"
import MailChimpForm from "./MailChimpForm"
import logo from "../assets/images/logo.svg"
import LinkedinLogo from "../assets/images/nav-linkedin.svg"
import FBLogo from "../assets/images/nav-Fb.svg"
import IGLogo from "../assets/images/nav-ig.svg"

const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <MailChimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt='Logo' />
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="https://github.com/JAMES-CERO"><img src={LinkedinLogo} alt="inLOGO" /></a>
                            <a href="#"><img src={FBLogo} alt="FBlogo" /></a>
                            <a href="#"><img src={IGLogo} alt="IGlogo" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;