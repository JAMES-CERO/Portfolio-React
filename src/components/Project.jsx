import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import githublogo from "../assets/images/githublogo.png"


const Project = () => {

    const projects = [
        {
            title: "Milestone",
            description: "lorem1",
            imgUrl: "https://www.waca.associates/en/wp-content/uploads/2021/02/1_WY7ELhXIVxbGlUwmhA1PSw.jpeg",
            url: "",
        },
        {
            title: "Milestone2",
            description: "lorem2",
            imgUrl: "https://www.waca.associates/en/wp-content/uploads/2021/02/1_WY7ELhXIVxbGlUwmhA1PSw.jpeg",
            url: "",
        },
        {
            title: "Milestone3",
            description: "lorem3",
            imgUrl: "https://www.waca.associates/en/wp-content/uploads/2021/02/1_WY7ELhXIVxbGlUwmhA1PSw.jpeg",
            url: "",
        },
        {
            title: "Milestone4",
            description: "lorem4",
            imgUrl: "https://www.waca.associates/en/wp-content/uploads/2021/02/1_WY7ELhXIVxbGlUwmhA1PSw.jpeg",
            url: "",
        },

    ]
    return (
        <section className="project" id="project">
            <h1>Project</h1>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2> Projects</h2>
                                    <p> Lorem ipsum dolor sit.</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCards key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='section'> Lorem.</Tab.Pane>
                                <Tab.Pane eventKey='third'> Lorem.</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Project;