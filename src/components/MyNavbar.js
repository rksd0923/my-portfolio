import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './MyNavbar.css'

const MyNavbar = () => {
    return (
        <>
            <Navbar fixed="top"
                variant="dark"
                expand="md"
                className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">Ruben Rivera</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Skills</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar