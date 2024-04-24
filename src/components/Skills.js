import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lottie from 'lottie-react';
import animationDataSkills from '../assets/AnimationSkills.json';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    'Web Development',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Salesforce',
    'Lightning Web Components',
    'Version Control',
    'UX/UI Design',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Figma',
    'Performance & Optimization'
  ];

  const percentages = [
    '80%',
    '95%',
    '95%',
    '80%',
    '80%',
    '80%',
    '80%',
    '70%',
    '85%',
    '90%',
    '90%',
    '85%',
    '70%'
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Unleashing My Skillset Arsenal</h2>
              <p>
                Welcome to my digital toolbox, where my technical prowess comes to life! Below are the instruments I
                finely tune daily to craft amazing web experiences:
              </p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="skill-slider">
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <div className="lottie-container">
                      <Lottie animationData={animationDataSkills} />
                    </div>
                    <h6>{percentages[index]}</h6>
                    <h5>{skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
