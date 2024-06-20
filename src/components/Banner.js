import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/headerImg.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const toRotate = ["Web Developer", "Student", "Full-Stack Developer", "Problem Solver", "Digital Creator"];
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tegline">
                            welkome to my Portfolio
                        </span>
                        <h1>{'hi im Max Hoogeweg'}
                            <br />
                            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Student", "Full-Stack Developer", "licenced drone pilot", "Digital Creator" ]'><span className="wrap">{text}</span></span></h1>
                        <p>Flibberty floo, wibble wibble wabble. Snarfle garfle barfle yibble yabble. Wizzle wazzle frobble fribble, gloop glorp glibber globber. Zibber zib zabber dabber, foofle fiffle foffle. Mizzle mizzle mozzy mozzle, quibble quabble squibber squobble.ingle bangle bungle, zizzle zazzle zuggle. Trizzle traz trizzle troz, gribble grabble grozzy groz. Fibble fobble fubble fum, nizzle nozzy num num num. Snizzle snazzle snoozle snarp, dizzle dozzle dapple dark.</p>
                        <button onClick={() => console.log('connect Banners')}>Let’s Connect<ArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}