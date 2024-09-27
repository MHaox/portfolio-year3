import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import github from "../assets/img/github-mark-white.svg";
import linkedin from "../assets/img/linkedin-mark-white.svg";
import instagram from "../assets/img/instagram-mark-white.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/max-robert-hoogeweg/"><img src={linkedin} alt="LinkedIn" /></a>
                            <a href="https://github.com/MHaox"><img src={github} alt="GitHub" /></a>
                            <a href="https://www.instagram.com/mhaox.global"><img src={instagram} alt="Insagram" /></a>
                        </div>
                        <p>Copyright 2024©. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}