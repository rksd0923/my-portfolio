import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Profile from '../assets/myimage1.jpg'
import Resume from '../assets/RubenRiveraResume.pdf'
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";
import './About.css'

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <q className="pt-3 text-center font-details pb-3">I have not failed.  I've just found 10,000 ways that won't work.</q>
                <p className="thomas">Thomas Edison</p>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="img justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                <strong>My Name is Ruben Rivera</strong>

                                <p className="my-details">Hello everyone! I'm a retired Marine pursuing my goal as a software Engineer I currently live in
                               Virginia, just outside washington DC. I have always been curious about designing websites; thus I decided to become a Web Developer.</p>

                                <p className="my-details">During my search I discovered Software Development. I enrolled in a coding boot camp out of
                                Washington DC with General Assembly and it was the best decision I ever made. I can confidently
                                say I can build full stack applications using my own API and can either use Python Django or
                                Express MongoDB to build a backend. I am very excited about creating more projects and continue learning along the way.</p>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="mailto:ruben.e.rivera@outlook.com">
                                            <Button className="m-2" variant="outline-info">
                                                <h4 className="about-icons">Email</h4>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                <h4 className="about-icons">My Resume</h4>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/rksd0923" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                <h4 className="about-icons">Github</h4>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://linkedin.com/in/ruben-rivera" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                <h4 className="about-icons">Linkedin</h4>
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About