import React from 'react'
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
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                <strong>&nbsp;My name is Ruben Rivera</strong>
                                <p>Hello everyone! I'm a retired Marine pursuing my goal as a software Engineer I currently live in
                               Virginia, just outside washington DC. I have always been curious about designing websites; thus I decided to become a Web Developer.</p><br />

                                <p>During my search I discovered Software Development. I enrolled in a coding boot camp out of
                                Washington DC with General Assembly and it was the best decision I ever made. I can confidently
                                say I can build full stack applications using my own API and can either use Python Django or
                                Express MongoDB to build a backend. I am very excited about creating more projects and continue learning along the way.</p>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="mailto:ruben.e.rivera@outlook.com">
                                            <Button className="m-2" variant="outline-primary">
                                                Email
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/rksd0923" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/ruben-rivera?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BW22%2B7NMMTreF9skkl4hoNg%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
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