import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";


const Project = () => {

    const projects = [
        {
            title: "Milestone",
            description: "lorem4",
            imgUrl: "",
            url: "",
        },
        {
            title: "Milestone2",
            description: "lorem4",
            imgUrl: "",
            url: "",
        },
        {
            title: "Milestone3",
            description: "lorem4",
            imgUrl: "",
            url: "",
        },
        {
            title: "Milestone4",
            description: "lorem4",
            imgUrl: "",
            url: "",
        },

    ]
    return (
        <section className="project" id="project"> 
            <h1>Project</h1>
            <Container>
                <Row>
                    <Col>
                        <h2> Projects</h2>
                        <p> Lorem ipsum dolor sit.</p>
                        <Tab.Container id="project-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCards key={index}> {project.title}</ProjectCards>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'> Lorem.</Tab.Pane>
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