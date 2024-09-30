// src/pages/InternshipDetail.js
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import React from 'react';
import intIntern from "../assets/img/placeholder.jpg"


const InternshipDetail = ({ title, description, imgUrl, videoUrl, iframeUrl }) => {
  return (
      <Container className="page">
          <Row>
              <Col xs={12}>
                  <h1>International internship</h1>
                  <p>{description}</p>
              </Col>
          </Row>
          
          <Row className="media-content">
              {/* Image section, if imgUrl is provided */}
              {imgUrl && (
                  <Col xs={12} md={6}>
                      <img src={imgUrl} alt={title} className="img-fluid" />
                  </Col>
              )}
              
              {/* Video section, if videoUrl is provided */}
              {videoUrl && (
                  <Col xs={12} md={6}>
                      <div className="video-container">
                          <video controls className="video-fluid">
                              <source src={videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                          </video>
                      </div>
                  </Col>
              )}

              {/* Iframe section, if iframeUrl is provided */}
              {iframeUrl && (
                  <Col xs={12} className="iframe-container">
                      <iframe 
                          src={iframeUrl} 
                          width="100%" 
                          height="400px" 
                          title={title} 
                          allowFullScreen
                          frameBorder="0"
                      ></iframe>
                  </Col>
              )}
          </Row>
      </Container>
  );
};

export default InternshipDetail;
