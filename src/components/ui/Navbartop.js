import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Navbartop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav" fixed="top" >
            <Container>
            <Navbar.Brand as={Link} to="/">
                <img
                    src="./assets/logo_golazzos.png"
                    width="140"
                    height="55"
                    className="d-inline-block align-top img-fluid"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
                <Nav.Link as={Link} to="/partidos" >Partidos</Nav.Link>
                <Nav.Link as={Link} to="/torneos" >Torneos</Nav.Link>
                <Nav.Link as={Link} to="/premios" >Premios</Nav.Link>
                <Nav.Link as={Link} to="/comojugar" >Cómo Jugar</Nav.Link>
                <Nav.Link as={Link} to="/apoyado" >Apoyado por</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link className="white">Marcas</Nav.Link>
                <Nav.Link className="aqua">Registrarme</Nav.Link>
                <Nav.Link className="aqua">Iniciar Sesión</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

