import logo from './logo.svg';
import './App.css';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./views/Detail";
import List from "./views/List";
import Add from "./views/Add";

function App() {
    return (
        <BrowserRouter>


            <Navbar bg="dark" variant="dark">
                <Container>

                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <Image src={logo} width={40} height={40}/>
                        </Navbar.Brand>
                    </LinkContainer>

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
                </Container>
            </Navbar>

            <Container>
                <Routes>
                    <Route path="/" element={<h1>Hello</h1>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/details">
                        <Route path={':id'} element={<Detail/>}/>
                    </Route>
                    <Route path="/add" element={<Add/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;