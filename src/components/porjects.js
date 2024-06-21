import { Container, Nav, Col, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import SalesForce from "../assets/img/placeholder.jpg"
import labormarket from "../assets/img/placeholder.jpg"
import hulpketen from "../assets/img/placeholder.jpg"

export const Projects = () => {
    //     {
    // title: "name",
    // description: "description",
    // imgUrl: imgUrl,
    //     },
    const projects = [

        {
            title: "SalesForce LwC app",
            description: "an app to scan students and conect them to a activte",
            imgUrl: SalesForce,
        },
        {
            title: "360° labor market; excellent professionals for the (EU)Region",
            description: "A study to bring dutch and german schools togeteher for improved job opertuanties in both countrys",
            imgUrl: labormarket,
        },
        {
            title: "Stichting Hulpketen",
            description: "I was part of a team that made a website for a local foundation that profides food for the people that need it most",
            imgUrl: hulpketen,
        }
    ]
       // {
        //     title: "Inter Finder",
        //     description: "intern finder was a school project that was made to provide companies as wel as schools a easy to use app to find interns and internships",
        //     imgUrl: imgUrl,
        // },

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Here are some of the projects I have worked on</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                                    <Nav.Link eventKey="first">tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
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
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

