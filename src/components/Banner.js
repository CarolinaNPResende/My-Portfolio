import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1713216237667.json";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [text, setText] = React.useState('');
    const [delta, setDelta] = React.useState(300 - Math.random() * 100);
    const [index, setIndex] = React.useState(1);
    const toRotate = ["Frontend Developer", "Web Developer", "Web Designer"];
    const period = 2000;
  
    React.useEffect(() => {
      const ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text]);
  
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };
  
    const handleConnectScroll = () => {
      const connectSection = document.getElementById('connect');
      connectSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hello! I'm Carol,`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                            <p>
                                I bridge imagination with innovation, pushing boundaries to redefine user interfaces.
                                I thrive on curiosity, constantly evolving to shape the future of web experiences.
                                As a frontend developer, I don't just write code; I create immersive digital landscapes,
                                inviting users on unforgettable digital adventures.
                            </p>
                            <button onClick={handleConnectScroll}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="lottie-animation">
                            <Lottie
                                animationData={animationData} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

