//../Template/DetailPage

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import placeholder from "../assets/img/placeholder.jpg"
import placeholdermp4 from "../assets/img/videoplaceholder.mp4"

const DetailPage = ({ title, description, imgUrl, videoUrl, iframeUrl }) => {
    return (
        <Container className="detail-page">
            <Row>
                <Col xs={12}>
                    <h1>title</h1>
                    <p>description</p>
                </Col>
            </Row>
            
            <Row className="media-content">
        
          
                    <Col xs={12} md={6}>
                        <img src={placeholder} alt="placeHolder" className="img-fluid" />
                    </Col>
             
                
                    <Col xs={12} md={6}>
                        <div className="video-container">
                            <video controls className="video-fluid">
                                <source src={placeholdermp4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                
                    <Col xs={12} className="iframe-container">
                        <iframe 
                            src="https://miro.medium.com/v2/1%2AKuGlXZjyTw7q38uzY_aZRA.png"
                            width="100%" 
                            height="400px" 
                            title={title} 
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </Col>
            </Row>
        </Container>
    );
};

export default DetailPage;
