import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lottie from 'lottie-react';
import animationDataTestemony from '../assets/TestemonialsBall.json';

import joana from '../assets/img/Joana.png';
import guilherme from '../assets/img/guilherme.png';
import fabio from '../assets/img/fabio.png';
import andrea from '../assets/img/andrea.png';
import miguel from '../assets/img/miguel.png';

export const Testemony = () => {
    const responsive = {
      superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <section className="testemony" id="testemonys">
            <div className="container">
                <div className="testemony-bx wow zoomIn">
                    <h2>Testimonial Chronicles</h2>
                    <h5>Embark on a journey through my Testimonial Chronicles. Each testimony is a chapter in my shared story, weaving the threads of professional admiration.</h5>
                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={8000} className="testemony-slider">
                        <div className="item">
                            <div className="lottie-container">
                                <Lottie animationData={animationDataTestemony} />
                            </div>
                            <img src={joana} alt="Image" />
                            <h4>Joana Fonseca</h4>
                            <h6>FARFETCH</h6>
                            <p><span>"Carolina is an extremely talented developer with a strong sense of what team work actually means. She brings a really great energy to those who work alongside with her. She has a strong communication capacity and really great front end skills such as html, CSS and specially JavaScript. She speaks fluent English and apart from that she is a resilient and dedicated person which is really important when it comes to meeting deadlines and dealing with unexpected problems (...)."</span></p>
                        </div>
                        <div className="item">
                            <div className="lottie-container">
                                <Lottie animationData={animationDataTestemony} />
                            </div>
                            <img src={guilherme} alt="Image" />
                            <h4>Guilherme Charro</h4>
                            <h6>ASUGO</h6>
                            <p><span>"I had the opportunity to work with Carolina in two different projects in Capgemini, one of which where I was her supervisor and I can attest to her exceptional skillset in HTML, CSS, and JavaScript.
Her mastery of these technologies has allowed her to deliver outstanding projects that met or exceeded our clients' expectations. Additionally, Carolina possesses excellent problem-solving and time management skills, which are essential in meeting tight deadlines and delivering quality work (...)."</span></p>
                        </div>
                        <div className="item">
                            <div className="lottie-container">
                                <Lottie animationData={animationDataTestemony} />
                            </div>
                            <img src={fabio} alt="Image" />
                            <h4>Fábio Ramos</h4>
                            <h6>CAPGEMINI</h6>
                            <p><span>"I highly recommend Carolina Resende as a frontend developer. Carolina is proficient in HTML, CSS, and JavaScript, and has always demonstrated a keen eye for detail and quality in her work. She is not only a skilled developer but also an excellent team member. Carolina is always eager to help and listen to the opinions of others. Whenever we worked together, she proved to be a valuable asset to the team, helping us arrive at solutions faster.
What impresses me most about Carolina is her positive attitude and willingness to learn (...)."</span></p>
                        </div>
                        <div className="item">
                            <div className="lottie-container">
                                <Lottie animationData={animationDataTestemony} />
                            </div>
                            <img src={andrea} alt="Image" />
                            <h4>Andrea Ferreira</h4>
                            <h6>NTT DATA</h6>
                            <p><span>"I had the opportunity to work with Carolina at GM Consultores. I can say that Carolina has an excellent ability to work in a team, she is a pleasant colleague, ready to help her peers, a hardworking professional, open to learning, and very creative. Besides being an excellent coworker, she has become a good friend."</span></p>
                        </div>
                        <div className="item">
                            <div className="lottie-container">
                                <Lottie animationData={animationDataTestemony} />
                            </div>
                            <img src={miguel} alt="Image" />
                            <h4>Miguel Vilhena</h4>
                            <h6>IKEA</h6>
                            <p><span>"I had the opportunity to meet and work with Carolina during the UX/UI and Front-end Development specialization course we took at Flag, for approximately 1 year. Following that experience, I take away two things, a friend and a certainty: that any potential employer seeking an extremely motivated professional, highly skilled in UX/UI (...)."</span></p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

