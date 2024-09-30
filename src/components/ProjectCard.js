import { Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router

export const ProjectCard = ({ title, description, imgUrl, detailPage }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                {/* Use Link for navigation */}
                <Link to={detailPage} className="text-light">
                    <img src={imgUrl} alt={title} className="img-fluid"  style={{width: 450}}/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </Link>
            </div>
        </Col>
    );
};

