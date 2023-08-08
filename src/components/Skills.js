import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import circle from "../assets/images/circleBorder.svg"
import circle150 from "../assets/images/circleBorder150.svg"
import circle98 from "../assets/images/circleBorder98.svg"
import circle43 from "../assets/images/circleBorder43.svg"



const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>
                SKILLS
              </h2>
              <p> Lorem ipsum dolor sit amet consectetur.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={circle} alt="porcentage1" />
                  <h5>Lorem, ipsum.</h5>
                </div>
                <div className="item">
                  <img src={circle150} alt="porcentage2" />
                  <h5>Lorem, ipsum.</h5>
                </div>
                <div className="item">
                  <img src={circle98} alt="porcentage3" />
                  <h5>Lorem, ipsum.</h5>
                </div>
                <div className="item">
                  <img src={circle43} alt="porcentage4" />
                  <h5>Lorem, ipsum.</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;