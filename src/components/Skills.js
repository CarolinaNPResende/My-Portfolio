import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lottie from "lottie-react";
import animationDataSkills from "../assets/AnimationSkills.json";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Unleashing My Skillset Arsenal</h2>
              <p>Welcome to my digital toolbox, where my technical prowess comes to life! Below are the instruments I finely tune daily to craft amazing web experiences:</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>80%</h6>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>95%</h6>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>95%</h6>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>85%</h6>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>85%</h6>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>80%</h6>
                  <h5>Salesforce</h5>
                </div>        
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>85%</h6>
                  <h5>Lightning Web Components</h5>
                </div>           
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>90%</h6>
                  <h5>Version Control</h5>
                </div>
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>90%</h6>
                  <h5>UX/UI Design</h5>
                </div>           
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>95%</h6>
                  <h5>Adobe Illustrator</h5>
                </div> 
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>90%</h6>
                  <h5>Adobe Photoshop</h5>
                </div>          
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>95%</h6>
                  <h5>Figma</h5>
                </div>          
                <div className="item">
                  <div className="lottie-container">
                    <Lottie animationData={animationDataSkills} />
                  </div>
                  <h6>80%</h6>
                  <h5>Performance & Optimization</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
