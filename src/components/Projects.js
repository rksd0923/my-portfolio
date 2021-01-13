import React from "react";
import L_MockUp from "../assets/thumbnails/pic1.jpg";
import L_RonSwansonQuotes from "../assets/thumbnails/pic2.jpg";
import L_TriviaGame from "../assets/thumbnails/pic3.jpg";
import L_APICreation from "../assets/thumbnails/pic4.jpg";
import L_PythonCLI from "../assets/thumbnails/pic5.jpg";
import L_FullStack from "../assets/thumbnails/pic6.jpg";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import L_REACT from "../assets/skills/react.svg";
import L_NODE_JS from "../assets/skills/nodejs.svg";
import L_EXPRESS from "../assets/skills/express.svg";
import L_POSTGRESQL from "../assets/skills/postgresql.svg";
import L_MONGODB from "../assets/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../assets/skills/html-5.svg";
import L_CSS3 from "../assets/skills/css3.svg";
import L_BOOTSTRAP4 from "../assets/skills/bootstrap-4.svg";
import L_DJANGO from "../assets/skills/django.svg";
import L_GIT from "../assets/skills/github-api.svg";
import L_Python from "../assets/skills/python.svg";
import L_JAVASCRIPT from "../assets/skills/javascript.svg";
import L_API from "../assets/skills/API.svg";
import "./Projects.css";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date="12/18/2020"
                        className="text-center"
                        text="HTML Mock Up"
                        src={L_MockUp}
                        alt="HTML Mock Up"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Mock Up created using HTML, CSS, Adobe XD
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Created with HTML, CSS</li>
                                                    <li>Adobe XD</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              CSS3
                            </span>

                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://rksd0923.github.io/Project_1/#blog"
                                    target="_blank"
                                >
                                    SEE LIVE
                </UrlButton>
                                <UrlButton
                                    href="https://github.com/rksd0923/Project_1"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>


                    {/* Project: MERN Tip Calculator */}
                    <ImageEvent
                        date="12/18/2020"
                        className="text-center"
                        text="Ron Swanson Quotes"
                        src={L_RonSwansonQuotes}
                        alt="Ron Swanson Quotes"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> App created using external API to show random quotes.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Four buttons for diferent quotes</li>
                                                    <li>Real-time API calls</li>
                                                    <li>Created with Javascript, HTML, CSS, external API</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_API}
                                                                alt="API"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              API
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Javascript
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              CSS3
                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://rksd0923.github.io/project-3/"
                                    target="_blank"
                                >
                                    LIVE
                </UrlButton>
                                <UrlButton
                                    href="https://github.com/rksd0923/project-3"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Get GitHub Info */}
                    <ImageEvent
                        date="12/18/2020"
                        className="text-center"
                        text="Trivia Game"
                        src={L_TriviaGame}
                        alt="Triviagame"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> An app where a user will be presented with several trivia games about countries around the world.  It will keep a count and give the user a chance to
                                                 a final score at the end.<hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Creted with HTML5, CSS3, Javascript</li>
                                                    <li></li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              CSS3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Javascript
                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://rksd0923.github.io/Project-4/"
                                    target="_blank"
                                >
                                    PLAY THE GAME
                </UrlButton>
                                <UrlButton
                                    href="https://github.com/rksd0923/Project-4"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Smart Brain */}
                    <ImageEvent
                        date="12/18/2020"
                        className="text-center"
                        text="Countries API Creation"
                        src={L_APICreation}
                        alt="Countries API"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Created API using express, MongoDB, Mongoose.  Deployed to Heroku.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Countries of the world API</li>
                                                    <li>Created with Node JS, Mongo DB, Express</li>
                                                    <li>Deployed to Heroku</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_API}
                                                                alt="API"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              API
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Node.js
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Express
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt="Mongo DB"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Mongo DB
                            </span>
                                                    </li>
                                                </ul>
                                                <hr />

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://project-6-api.herokuapp.com/"
                                    target="_blank"
                                >
                                    SEE LIVE
                </UrlButton>
                                <UrlButton
                                    href="https://github.com/rksd0923/api-project-6"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: RoboFriends */}

                    <ImageEvent
                        date="12/18/2020"
                        className="text-center"
                        text="Contact Book"
                        src={L_PythonCLI}
                        alt="Contact Book"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Contact book created with Python and PostgresSQL.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Contact book with full CRUD functionality using CLI and Python</li>

                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Python}
                                                                alt="Python"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              Python
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_API}
                                                                alt="API"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              API
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_POSTGRESQL}
                                                                alt="PostgresSQL"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              PostgresSQL
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GIT}
                                                                alt="Github"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Github
                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton
                                    href="https://github.com/rksd0923/project-9"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Product_Hunt_Clone */}

                    <ImageEvent
                        date="12/18/2020"
                        className="text-center"
                        text="Full Stack App"
                        src={L_FullStack}
                        alt="Full Stack App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Full Stack app about a soccer team. Used Pythin Django for backend.  React for FrontEnd.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Python Django for backend</li>
                                                    <li>React for Frontend</li>
                                                    <li>DEployed with Firebase</li>

                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              CSS3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap 4"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              Bootstrap 4
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_DJANGO}
                                                                alt="Django"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              Django
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              React
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_POSTGRESQL}
                                                                alt="PostgreSQL"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              PostgreSQL
                            </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/rksd0923/capstone-project"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="https://selectaxsiempre.net/"
                                    target="_blank"
                                >
                                    Live
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Portfolio using Django */}

                </Events>
            </Timeline>
        </div>
    );
};

export default Projects;