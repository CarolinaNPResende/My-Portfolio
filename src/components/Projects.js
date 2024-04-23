import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const [activeTab, setActiveTab] = useState("first");
  
        const projects1 = [
        {
        title: "Auchan Project",
        description: "Development",
        imgUrl: projImg2,
        link: "https://github.com/CarolinaNPResende/Auchan-dev"
        },
        {
        title: "OMV Project",
        description: "Development",
        imgUrl: projImg3,
        link: "https://github.com/CarolinaNPResende/OMV-Dev"
        },
        {
        title: "ATC Consulting Project",
        description: "Development",
        imgUrl: projImg4,
        link: "https://github.com/CarolinaNPResende/ATC-Website"
        },
        {
        title: "Formassim Project",
        description: "Development",
        imgUrl: projImg5,
        link: "https://github.com/CarolinaNPResende/Formassim-Website"
        },
    ];

    const projects2 = [
        {
        title: "Recheio Project",
        description: "User Experience & User Interface Design",
        imgUrl: projImg1,
        link: "https://www.figma.com/file/xy84tghiOewHR2bwBVuZy8/Untitled?type=design&mode=design&t=Rgx43PK3bF0UlfxX-1"
        },
        {
        title: "Web Summit Lisbon Prototype",
        description: "UX/UI Design",
        imgUrl: projImg6,
        link: "https://www.behance.net/gallery/104716603/Web-Summit-Lisboa-Project-Mobile-APP-Development-%28UX%29"
        },
        {
        title: "Peça de Fruta Prototype",
        description: "UX/UI Design",
        imgUrl: projImg7,
        link: "https://www.behance.net/gallery/89891611/Peca-de-Fruta-UX-UI-Desktop"
        },
    ];


    const handleTabSelect = (tab) => {
        setActiveTab(tab);
      };
    
      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col xs={12}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Embark on Digital Adventures</h2>
                      <p>Welcome to my portfolio of digital prowess, where each project is a unique and thrilling journey. <br/>Explore, get inspired, and join me on this journey of digital discovery. <br/>Below are some of my most captivating and innovative creations:</p>
                      <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
                        <Nav variant="pills" className="nav-pills mb-5" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Web Development</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">UX/UI Design</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {projects1.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <Row>
                              {projects2.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      );
    };