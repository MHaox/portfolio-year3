// src/pages/C1Detail.js
import { Container, Row, Col } from "react-bootstrap";
import C1Cert from "../assets/img/c1-certificate.png";
import React from "react";

const C1Detail = () => {
  return (
    <Container className="page">
      <Row>
        <Col xs={12}>
          <h1>C1 English Certification</h1>
          <p>
            I have successfully obtained a C1 level diploma from Cambridge
            Assessment English. This means that I have demonstrated an advanced
            level of proficiency in the English language. Through rigorous
            testing, I have proven my ability to understand and use complex
            language structures in various contexts. This achievement signifies
            not only my strong command of English but also my capability to
            communicate effectively in professional and academic settings. The
            diploma, often associated with exams like Cambridge English:
            Advanced (CAE), is widely recognized by educational institutions and
            employers, showcasing my language skills at an advanced level.
          </p>
        </Col>
      </Row>

      <Row className="media-content">
        <Col xs={12} md={6}>
          <img src={C1Cert} alt="C1 Certificate" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default C1Detail;
