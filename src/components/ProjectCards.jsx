import { Col } from "react-bootstrap";

const ProjectCards = (title, description, imgUrl) => {
    return (
        <Col sm={6} md={4}>
            <div className="project-imgbox">
                <img src={imgUrl} />
                <div className="project-hov">
                    <h4> {title} </h4>
                    <span> {description} </span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCards;