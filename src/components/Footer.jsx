import { Container } from "react-bootstrap"
import MailChimpForm from "./MailChimpForm"
import logo from "../assets/images/logo.svg"


const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <MailChimpForm />
                    <Col sm={6}>
                        <img src={logo} alt='Logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="" ><img src={""}  /></a>
                            <a href="" ><img src={""}  /></a>
                            <a href="" ><img src={""}  /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer