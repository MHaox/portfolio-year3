import { Container, Row, Col,  } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import wheel80 from "../assets/img/wheel80.svg"
import wheel90 from "../assets/img/wheel90.svg"
import wheel95 from "../assets/img/wheel95.svg"

// import imgs for items


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2></h2>
                            <p>Flibberty floo, wibble wibble wabble. Snarfle garfle barfle yibble yabble. Wizzle wazzle frobble fribble, gloop glorp glibber globber. Zibber zib zabber dabber, foofle fiffle foffle. Mizzle mizzle mozzy mozzle, quibble quabble squibber squobble.ingle bangle bungle, zizzle zazzle zuggle. Trizzle traz trizzle troz, gribble grabble grozzy groz. Fibble fobble fubble fum, nizzle nozzy num num num. Snizzle snazzle snoozle snarp, dizzle dozzle dapple dark.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={wheel95} alt="Image" />
                                    <h5>forn-end Development</h5>
                                </div>
                                <div className="item">
                                    <img src={wheel90} alt="Image" />
                                    <h5>Back-end Development</h5>
                                </div>
                                <div className="item">
                                    <img src={wheel80} alt="Image" />
                                    <h5>Mobile App Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={wheel80} alt="Image"/>
                                    <h5>UX/UI Designer</h5>
                                </div>
                                <div className="item">
                                    <img src={wheel90} alt="Image"/>
                                    <h5>Scrum</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}