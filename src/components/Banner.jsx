import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import ImageIcon from "../assets/images/header-img.svg";

const Banner = () => {

    return (
        <section className="banner" id="Home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">
                            James Portfolio
                        </span>
                        <h1>{"James A Rojas"}<span>  Full-stack</span></h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore! Numquam quis dolorem odit vel sit mollitia? Doloremque ipsum unde commodi a impedit.</p>
                        <button onClick={() => console.log('connect')}>
                            Lets Connect!
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={ImageIcon} alt="HeaderImg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;