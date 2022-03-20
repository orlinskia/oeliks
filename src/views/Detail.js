import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Collapse, Modal, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import {useNavigate} from 'react-router-dom';


const Detail = () => {

    const [data, setData] = useState({});
    const {id} = useParams();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    function Example() {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button
                    variant={"link"}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Show seller info
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <Card body style={{width: '400px'}} className="mx-auto">
                            <p>Name: {data.seller}</p>
                            <p>Phone: {data.sellerPhone}</p>
                        </Card>
                    </div>
                </Collapse>
            </>
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/adverts/${id}`);
            setData(response.data);
        }
        fetchData();
    }, [id]);

    const deleteData = async () => {
        const response = await axios.delete(`/adverts/${id}`);
        handleClose();
        navigate(`/list`)
    }

    return (
        <div>
            <Card className="text-center">
                <Card.Header><h1>{data.title}</h1>
                    <LinkContainer to={`/details/${data.id}/edit`} key={data.id}>
                        <Button type="submit">Edit advert</Button>
                    </LinkContainer>

                    <Button variant="danger" onClick={handleShow}>
                        Delete
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Do you want to delete the advert?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={deleteData}>
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col xs={"auto"}>
                                <img src={`${data.image}?t=${data.id}`} height="300px"/>
                            </Col>
                            <Col>
                                <p>{data.description}</p>
                                <p>Price: ${data.price}</p>
                                <p>Negotiation possible: {data.canNegotiate ? "Yes" : "No"}</p>
                                <Example/>

                            </Col>
                        </Row>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">Created
                    on: {new Date(data.createdOn).toLocaleString()}</Card.Footer>
            </Card>


        </div>
    );
};

export default Detail;