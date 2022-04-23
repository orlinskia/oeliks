import logo from './logo.svg';
import './App.css';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./views/Detail";
import List from "./views/List";
import Add from "./views/Add";
import Edit from "./views/Edit";
import UserProvider from "./providers/UserProvider";
import Menu from "./components/Menu";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
            <Menu/>



                <Container>
                    <Routes>
                        <Route path="/" element={<h1>Hello</h1>}/>
                        <Route path="/list" element={<List/>}/>
                        <Route path="/details">
                            <Route path={':id/edit'} element={<Edit/>}/>
                            <Route path={':id'} element={<Detail/>}/>
                        </Route>
                        <Route path="/add" element={<Add/>}/>

                    </Routes>
                </Container>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;