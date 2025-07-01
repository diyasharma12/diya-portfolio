import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/diya-sharma-7b4463285/" target="blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/diyasharma12" target="blank"><img src={navIcon2} alt="Github" /></a>
              <a href="mailto: diyarsharma12@gmail.com"><img src={navIcon3} alt="Mail" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
