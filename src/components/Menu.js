import React, {useContext} from 'react';
import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../logo.svg";
import {User} from "../providers/UserProvider";

const Menu = () => {

    const user = useContext(User);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>


                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image src={logo} width={40} height={40}/>
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/list">
                        <Nav.Link>List</Nav.Link>
                    </LinkContainer>


                    <LinkContainer to="/add">
                        <Nav.Link>Add</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>

                        <Navbar.Text>
                            Signed in as: {user ? user.name : ""}
                        </Navbar.Text>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;