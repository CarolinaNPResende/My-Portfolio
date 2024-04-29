import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lottie from 'lottie-react';
import animationDataSkills from '../assets/AnimationSkills.json';

import salesforce from '../assets/img/SalesforceLogo.png';
import html from '../assets/img/HtmlLogo.svg';
import css from '../assets/img/CssLogo.svg';
import javascript from '../assets/img/JavascriptLogo.svg';
import lwc from '../assets/img/lwc.png';
import react from '../assets/img/react.svg';
import git from '../assets/img/git.png';
import design from '../assets/img/design.png';
import photoshop from '../assets/img/photoshop.png';
import illustrator from '../assets/img/illustrator.png';
import figma from '../assets/img/figma.svg';
import webdevelopment from '../assets/img/webdevelopment.png';


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
  ];

  const skillIcons = [
    webdevelopment,
    html,
    css,
    javascript,
    react, 
    salesforce,
    lwc,
    git,
    design,
    illustrator,
    photoshop,
    figma,
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>My Skillset</h2>
              <p>Welcome to my digital toolbox, where my technical prowess comes to life!</p>
              <p> Below you can find the instruments I use daily to craft web experiences:</p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="skill-slider">
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <div className="lottie-container">
                      <Lottie animationData={animationDataSkills} />
                    </div>
                    {skillIcons[index] && <img src={skillIcons[index]} alt={skill} />}
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
