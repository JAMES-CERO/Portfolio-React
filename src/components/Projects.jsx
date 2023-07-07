import { Col, Container, Row, Tab, Nav } from "react-bootstrap";


const Projects = () => {

    const projects = [
        {
            title: "Milestone",
            description: "lorem4",
            imgUrl: "",
            url: "",
        },

    ]

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2> Projects</h2>
                        <p> Lorem ipsum dolor sit.</p>
                        <Tab.Container>
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>
                                        Tab3
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Nav.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            // projects.map((project, index) => {
                                            //     return (
                                            //         // <p key={index}> {project.title}</p>
                                            //     )
                                            // })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Nav.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;





