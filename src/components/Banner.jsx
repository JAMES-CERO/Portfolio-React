import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import ImageIcon from "../assets/images/header-img.svg";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";

const Banner = () => {

    const toRotate = ["Full-Stack Developer", "UX/UI Designer", "Cyber-Security"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {

        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let upddatedText = isDelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(upddatedText);

            if (isDelete) {
                setDelta(prevDelta => prevDelta / 2)
            }
            if (!isDelete && upddatedText == fullText) {
                setIsDelete(true);
                setDelta(period);
            }
            else if (!isDelete && upddatedText == '') {
                setIsDelete(false);
                setLoopNum(loopNum + 1);
                setDelta(500)
            }
        };



        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }

    }, [text])

    return (
        <section className="banner" id="Home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animate__fadeInLeft' : ""}>
                                    <span className="tagline">
                                        My Portfolio
                                    </span>
                                    <h1>{"James A Rojas "}<span> {text}</span></h1>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore! Numquam quis dolorem odit vel sit mollitia? Doloremque ipsum unde commodi a impedit.</p>
                                    <button onClick={() => console.log('connect')}>
                                        Lets Connect!
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
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