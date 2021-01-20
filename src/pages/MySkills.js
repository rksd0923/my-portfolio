import React from "react";
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import L_HTML5 from "../assets/skills/html5.png";
import L_CSS3 from "../assets/skills/css3.svg";
import L_BOOTSTRAP from "../assets/skills/bootstrap-4.svg";
import L_REACT from "../assets/skills/react.svg";
import L_REACT_ROUTER from "../assets/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../assets/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../assets/skills/styled-components.svg";
import L_NODE_JS from "../assets/skills/nodejs.svg";
import L_EXPRESS from "../assets/skills/express.svg";
import L_DJANGO from "../assets/skills/django.svg";
import L_MONGODB from "../assets/skills/mongodb.svg";
import L_POSTGRESQL from "../assets/skills/postgresql.svg";
import L_GIT from "../assets/skills/git-icon.svg";
import L_HEROKU from "../assets/skills/heroku.svg";
import L_GITHUB_PAGES from "../assets/skills/github.svg";
import L_JAVASCRIPT from "../assets/skills/javascript.svg";
import L_FIREBASE from "../assets/skills/Firebase.svg";
import L_PYTHON from "../assets/skills/python.svg";
import L_API from "../assets/skills/API.svg";

// skills
import { skills } from "./SkillsData";

import "./MySkills.css";

const MySkills = () => {
    return (

        <div id="skills">

            <div className="skills-container">
                <h1 className="text-center font-details-b pb-4">SKILLS</h1>

                <Container>

                    <Row className="justify-content-center Frontend">


                        <Col>

                            <h3>Frontend</h3>
                        </Col>

                    </Row>
                </Container>

                <Container className="container">





                    <Row className="justify-content-center skills">

                        <Col>

                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_HTML5} thumbnail fluid />

                            </Row>
                            <p>HTML 5</p>

                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_CSS3} thumbnail fluid />
                            </Row>
                            <p>CSS3</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_BOOTSTRAP} thumbnail fluid />
                            </Row>
                            <p>Bootstrap</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_PYTHON} thumbnail fluid />
                            </Row>
                            <p>Python</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_REACT} thumbnail fluid />
                            </Row>
                            <p>React</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_JAVASCRIPT} thumbnail fluid />
                            </Row>
                            <p>Javascript</p>
                        </Col>

                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_REACT_ROUTER} thumbnail fluid />
                            </Row>
                            <p>React Router</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_REACT_BOOTSTRAP} thumbnail fluid />
                            </Row>
                            <p>React Bootstrap</p>
                        </Col>

                    </Row>
                </Container>

                <Container>

                    <Row className="justify-content-center Frontend">


                        <Col>

                            <h3>Backend</h3>
                        </Col>

                    </Row>
                </Container>
                <Container>



                    <Row className="justify-content-center skills">

                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_NODE_JS} thumbnail fluid />
                            </Row>
                            <p>NODE JS</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_EXPRESS} thumbnail fluid />
                            </Row>
                            <p>Express</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_DJANGO} thumbnail fluid />
                            </Row>
                            <p>Django</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_API} thumbnail fluid />
                            </Row>
                            <p>Api</p>
                        </Col>

                    </Row>
                </Container>
                <Container>

                    <Row className="justify-content-center Frontend">


                        <Col>

                            <h3>Hosting</h3>
                        </Col>

                    </Row>
                </Container>
                <Container>


                    <Row className="justify-content-center skills">
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_HEROKU} thumbnail fluid />
                            </Row>
                            <p>Heroku</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_GITHUB_PAGES} thumbnail fluid />
                            </Row>
                            <p>Github Pages</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_FIREBASE} thumbnail fluid />
                            </Row>
                            <p>Firebase</p>
                        </Col>


                    </Row>
                </Container>
                <Container>

                    <Row className="justify-content-center Frontend">


                        <Col>

                            <h3>Programming Languages</h3>
                        </Col>

                    </Row>
                </Container>
                <Container>



                    <Row className="justify-content-center skills">

                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_JAVASCRIPT} thumbnail fluid />
                            </Row>
                            <p>Javascript</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_PYTHON} thumbnail fluid />
                            </Row>
                            <p>Python</p>
                        </Col>

                    </Row>
                </Container>
                <Container>

                    <Row className="justify-content-center Frontend">


                        <Col>

                            <h3>Databases</h3>
                        </Col>

                    </Row>
                </Container>
                <Container>



                    <Row className="justify-content-center skills">

                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_POSTGRESQL} thumbnail fluid />
                            </Row>
                            <p>Postgres SQL</p>
                        </Col>
                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_MONGODB} thumbnail fluid />
                            </Row>
                            <p>MongoDB</p>
                        </Col>

                    </Row>
                </Container>
                <Container>

                    <Row className="justify-content-center Frontend">


                        <Col>

                            <h3>Version Control</h3>
                        </Col>

                    </Row>
                </Container>
                <Container>



                    <Row className="justify-content-center skills">


                        <Col>
                            <Row>
                                <Image className="image justify-content-end" alt="profile" src={L_GIT} thumbnail fluid />
                            </Row>
                            <p>Git</p>
                        </Col>

                    </Row>
                </Container>


            </div>

        </div>




    );
};

export default MySkills;