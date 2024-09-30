// src/pages/labormarketDetail.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import labormarket from "../assets/img/bewijsdeelname.jpg";

const labormarketDetail = () => {
  return (
    <Container className="page">
      <Row>
        <Col xs={12}>
          <h1>360° labor market</h1>
          <p>
            As part of the national project "360° labor market; excellent
            professionals for the (EU)Region," I participated in binational
            field labs held from 25-09-2023 to 20-10-2023 at the IT Hub in
            Hoogeveen. These field labs were organized by the Rijnland Institute
            in collaboration with German and Dutch partners. During this
            project, I delved into the topic of "KYC" (Know Your Customer). My
            activities included gathering information, conducting interviews
            with domain experts, exploring technical connections with systems,
            and drafting an AO-Processplaat process description. Additionally, I
            developed, tested, and documented a Robotic Process Automation (RPA)
            script, delivering it as part of my contribution to the project.
            Through this collaboration with German students, teachers, and
            industry representatives, I acquired various skills and
            competencies, such as intercultural communication, the ability to
            switch perspectives, and handling differences in language, culture,
            and societal values. This project was funded by the Regiodeal South
            and East Drenthe under the name "360° labor market; excellent
            professionals for the (EU)Region."
          </p>
        </Col>
      </Row>

      <Row className="media-content">
        <Col xs={12} md={6}>
          <img
            src={labormarket}
            alt="labor market proof of participation"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default labormarketDetail;
