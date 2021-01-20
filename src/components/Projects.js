import React from "react";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import L_MockUp from "../assets/thumbnails/1st.jpeg";
import L_RonSwansonQuotes from "../assets/thumbnails/swanson.jpeg";
import L_TriviaGame from "../assets/thumbnails/map.jpeg";
import L_APICreation from "../assets/thumbnails/code.jpeg";
import L_PythonCLI from "../assets/thumbnails/api.jpeg";
import L_FullStack from "../assets/thumbnails/project9.jpeg";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import L_REACT from "../assets/skills/react.svg";
import L_NODE_JS from "../assets/skills/nodejs.svg";
import L_EXPRESS from "../assets/skills/express.svg";
import L_POSTGRESQL from "../assets/skills/postgresql.svg";
import L_MONGODB from "../assets/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../assets/skills/html5.png";
import L_CSS3 from "../assets/skills/css3.svg";
import L_BOOTSTRAP4 from "../assets/skills/bootstrap-4.svg";
import L_DJANGO from "../assets/skills/django.svg";
import L_GIT from "../assets/skills/github-api.svg";
import L_Python from "../assets/skills/python.svg";
import L_JAVASCRIPT from "../assets/skills/javascript.svg";
import L_API from "../assets/skills/API.svg";
import "./Projects.css";


const Projects = () => {
    return (

        <div id="projects">
            <div className="projects-body">
                <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>

                <Container className="container-projects">
                    <Row className="justify-content-center projects">

                        <Col>
                            <Row className="justify-content-center project">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={L_MockUp} />
                                    <Card.Body>
                                        <Card.Title>HTML Mock Up</Card.Title>
                                        <Accordion>
                                            <Card>
                                                <Card.Header className="card-header">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        <p className="details">Details</p>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <h4>Description</h4><p>This mock up was created from an Adobe X example.  Flexbox and Grid was used as well.</p>

                                                        <h4>Tech used</h4>
                                                        <Container className="container-icons">


                                                            <Row className="justify-content-center icons">
                                                                <Col>
                                                                    <Row>
                                                                        <Image className="justify-content-end project-image" alt="profile" src={L_HTML5} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="mock-html5">HTML5</h5>

                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-center" alt="profile" src={L_CSS3} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="mock-css3">CSS3</h5>
                                                                </Col>

                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_GIT} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="mock-git">Github</h5>
                                                                </Col>

                                                            </Row>

                                                        </Container>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button href="https://rksd0923.github.io/Project_1/" target="_blank" variant="primary">See Live</Button>
                                        <Button href="https://github.com/rksd0923/Project_1" target="_blank" variant="primary">Source Code</Button>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                        <Col>
                            <Row className="justify-content-center project">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={L_RonSwansonQuotes} />
                                    <Card.Body>
                                        <Card.Title>Ron Swanson Quotes</Card.Title>
                                        <Accordion>
                                            <Card>
                                                <Card.Header className="card-header">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        <p className="details">Details</p>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <h4>Description</h4><p>Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>

                                                        <h4>Tech used</h4>
                                                        <Container className="container-icons">

                                                            <Row className="justify-content-center icons">
                                                                <Col>
                                                                    <Row>
                                                                        <Image className="project-image justify-content-center" alt="profile" src={L_HTML5} thumbnail fluid />
                                                                        <h5 className="swanson-html5">HTML5</h5>
                                                                    </Row>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_CSS3} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="swanson-css3">CSS3</h5>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_JAVASCRIPT} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="swanson-javascript">Javascript</h5>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_API} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="swanson-api">API</h5>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_GIT} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="swanson-git">Github</h5>
                                                                </Col>

                                                            </Row>

                                                        </Container>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button href="https://rksd0923.github.io/project-3/" target="_blank" variant="primary">See Live</Button>
                                        <Button href="https://github.com/rksd0923/project-3" target="_blank" variant="primary">Source Code</Button>

                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                        <Col>
                            <Row className="justify-content-center project">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={L_TriviaGame} />
                                    <Card.Body>
                                        <Card.Title>Trivia Game</Card.Title>
                                        <Accordion>
                                            <Card>
                                                <Card.Header className="card-header">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        <p className="details">Details</p>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <h4>Description</h4><p>Game where users can test their knowledge on countries capitals.
                                                        It keeps a score and wil give you a final score when the game is finished.</p>

                                                        <h4>Tech used</h4>
                                                        <Container>

                                                            <Row>
                                                                <Col>
                                                                    <Row>
                                                                        <Image className="project-image justify-content-center" alt="profile" src={L_HTML5} thumbnail fluid />
                                                                        <h5 className="game-html5">HTML5</h5>
                                                                    </Row>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_CSS3} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="game-css3">CSS3</h5>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_JAVASCRIPT} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="game-javascript">Javascript</h5>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_GIT} thumbnail fluid />

                                                                    </Row>
                                                                    <h5 className="game-api">Github</h5>
                                                                </Col>

                                                            </Row>

                                                        </Container>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button href="https://rksd0923.github.io/Project-4/" target="_blank" variant="primary">See Live</Button>
                                        <Button href="https://github.com/rksd0923/Project-4" target="_blank" variant="primary">Source Code</Button>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>


                    </Row>
                </Container>

                <Container className="container-projects">
                    <Row className="justify-content-center projects">

                        <Col>
                            <Row className="justify-content-center project">
                                <Card className="card" style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={L_APICreation} />
                                    <Card.Body>
                                        <Card.Title>Api Creation</Card.Title>
                                        <Accordion className="accordion">
                                            <Card>
                                                <Card.Header className="card-header">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        <p className="details">Details</p>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <h4>Description</h4><p>API created to fetch countries information.  The app was deployed to Heroku.</p>

                                                        <h4>Tech used</h4>
                                                        <Container>

                                                            <Row>
                                                                <Col>
                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_HTML5} thumbnail fluid />

                                                                    </Row>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_CSS3} thumbnail fluid />

                                                                    </Row>
                                                                </Col>

                                                            </Row>

                                                        </Container>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button href="https://project-6-api.herokuapp.com/" target="_blank" variant="primary">See Live</Button>
                                        <Button href="https://github.com/rksd0923/api-project-6" target="_blank" variant="primary">Source Code</Button>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                        <Col>
                            <Row className="justify-content-center project">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={L_PythonCLI} />
                                    <Card.Body>
                                        <Card.Title>Python Contact Book</Card.Title>
                                        <Accordion>
                                            <Card>
                                                <Card.Header className="card-header">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        <p className="details">Details</p>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>

                                                        <h4>Description</h4><p>App can be used to add contacts, user ca also upadate the information and also delete contacts as well.  It uses the CLI with Python.
                                                </p>

                                                        <h4>Tech used</h4>
                                                        <Container>

                                                            <Row>
                                                                <Col>
                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_HTML5} thumbnail fluid />

                                                                    </Row>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_CSS3} thumbnail fluid />

                                                                    </Row>
                                                                </Col>

                                                            </Row>

                                                        </Container>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Card.Text>

                                        </Card.Text>

                                        <Button href="https://github.com/rksd0923/project-9" target="_blank" variant="primary">Source Code</Button>

                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                        <Col>
                            <Row className="justify-content-center project">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={L_FullStack} />
                                    <Card.Body>
                                        <Card.Title>Full Stack</Card.Title>
                                        <Accordion>
                                            <Card>
                                                <Card.Header className="card-header">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        <p className="details">Details</p>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>

                                                        <h4>Description</h4><p>Backend server done with Python Django.  The frontend was done with React.  It has authentication, Facebook plugin for comments.
                                                </p>

                                                        <h4>Tech used</h4>
                                                        <Container>

                                                            <Row>
                                                                <Col>
                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_HTML5} thumbnail fluid />

                                                                    </Row>
                                                                </Col>
                                                                <Col>

                                                                    <Row>
                                                                        <Image className="project-image justify-content-end" alt="profile" src={L_CSS3} thumbnail fluid />

                                                                    </Row>
                                                                </Col>

                                                            </Row>

                                                        </Container>

                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button href="https://selectaxsiempre.net/" target="_blank" variant="primary">See Live</Button>
                                        <Button href="https://github.com/rksd0923/selecta-frontend" target="_blank" variant="primary">Source Code</Button>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>


                    </Row>
                </Container>



            </div >
        </div>
    );
};

export default Projects;