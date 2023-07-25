import { Container } from "react-bootstrap"
import MailChimpForm from "./MailChimpForm"


const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <MailChimpForm />
                </Row>
            </Container>
        </footer>
    )
}

export default Footer