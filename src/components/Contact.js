import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Contact.css";

const ContactForm = () => {
    return (
        <div id="contact">

            <Jumbotron className="contact-jumbotron">
                <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:ruben.e.rivera@outlook.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="akjha96@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email
                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://linkedin.com/in/ruben-rivera" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
                            </a>
                        </div>


                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactForm;