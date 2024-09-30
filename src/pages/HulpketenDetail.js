// src/pages/hulpketenDetail.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hulpketen from "../assets/img/hulpketen.png";

const hulpketenDetail = () => {
  return (
    <Container className="page">
      <Row>
        <Col xs={12}>
          <h1>Stichting Hulpketen</h1>
          <p>
            I was involved in a project with "Stichting Hulpketen", a local
            foundation dedicated to assisting individuals in need, particularly
            in providing essential items like food and other basic necessities.
            Moreover, the foundation extends its support to include provisions
            for animals, offering not just food but also various essentials for
            them. In addition to this, "Stichting Hulpketen" actively participates
            in animal rescue efforts, underscoring its commitment to both human
            and animal welfare.
          </p>
        </Col>
      </Row>

      <Row className="media-content">
        <Col xs={12} md={6}>
          <img src={hulpketen} alt="Hulpketen Logo" className="img-fluid" />
        </Col>

        {/* Iframe section, if iframeUrl is provided */}

        <Col xs={12} className="iframe-container">
          <iframe
            src="https://www.stichtingdehulpketen.nl/"
            width="100%"
            height="400px"
            title="stichtingdehulpketen"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default hulpketenDetail;
