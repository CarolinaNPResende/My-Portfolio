import { Container } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="social-box">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/carolinanpresende/" target="_blank"><img src={navIcon2} alt="LinkedIn" /></a>
          <a href="https://www.behance.net/carolinanpresende" target="_blank"><img src={navIcon1} alt="Behance" /></a>
          <a href="https://github.com/CarolinaNPResende" target="_blank"><img src={navIcon3} alt="GitHub" /></a>
        </div>
        <p>Copyright 2024. All Rights Reserved</p>
      </Container>
    </footer>
  );
};
