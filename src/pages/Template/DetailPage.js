//../Template/DetailPage

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DetailPage = ({ title, description, imgUrl, videoUrl, iframeUrl }) => {
    return (
        <Container className="detail-page">
            <Row>
                <Col xs={12}>
                    <h1>{title}</h1>
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

export default DetailPage;
