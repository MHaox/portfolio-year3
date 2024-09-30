import { Container, Nav, Col, Row, Tab, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import SalesForce from "../assets/img/Salesforce.svg";
import labormarket from "../assets/img/bewijsdeelname.jpg";
import hulpketen from "../assets/img/hulpketen.png";
import c1 from "../assets/img/c1-certificate.png"
import drone from "../assets/img/dji-mini-2.png"
import intIntern from "../assets/img/placeholder.jpg"
import 'animate.css';

export const Projects = () => {
    //     {
    // title: "name",
    // description: "description",
    // imgUrl: imgUrl,
    //     },
    const projects = [
        {
            title: "SalesForce LwC app",
            description: "An app to scan students and connect them to an activity",
            imgUrl: SalesForce,
            detailPage: "/salesforce",
        },
        {
            title: "360° labor market",
            description: "A study to bring Dutch and German schools together for improved job opportunities in both countries",
            imgUrl: labormarket,
            detailPage: "/labormarket",
        },
        {
            title: "Stichting Hulpketen",
            description: "I was part of a team that made a website for a local foundation that provides food for the people that need it most",
            imgUrl: hulpketen,
            detailPage: "/hulpketen",
        }
    ]
    const acomplisments = [
        {
            title: "C1 English",
            description: "I obtained my Cambridge C1 certificate.",
            imgUrl: c1,
            detailPage: "/c1",  // Add the path for the detail page
        },
        {
            title: "Drone Flying License",
            description: "I obtained my licence to fly a drone.",
            imgUrl: drone,
            detailPage: "/drone",  // Add the path for the detail page
        },
        {
            title: "International Internship",
            description: "I completed an international internship in Malta at the European School of English (ESE).",
            imgUrl: intIntern,
            detailPage: "/internship",  // Add the path for the detail page
        }
    ];
    

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div >
                            <h2>Projects And acomplisments</h2>
                            <p>Here are some of the projects I have worked on</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Projects</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Acomplisments</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" disabled>under construction</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className="">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                acomplisments.map((acomplisments, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...acomplisments}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
