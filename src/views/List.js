import React, {useEffect, useMemo, useState} from 'react';
import {Button, Card, Col, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import axios from "axios";
import {LinkContainer} from "react-router-bootstrap";
import {useFetchData} from "../hooks/useFetchData";

const List = () => {
    const [titleSearch, setTitleSearch] = useState("");
    const [searchForm, setSearchForm] = useState();

    const config = useMemo( () => (
        {params: {title_like: searchForm, _sort:'createdOn', _order:'desc'}}
    ), [searchForm]);

    const data = useFetchData('/adverts', [], config);
    const handleTitleSearchChange = (e) =>
    {
        setTitleSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchForm(titleSearch);
    }

    return (
        <div>

            <Card body className="my-3">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Control
                            value={titleSearch}
                            type="text"
                            placeholder="Search title..."
                            onChange={handleTitleSearchChange}
                        />
                    </Form.Group>
                        </Col>

                        <Col>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <ListGroup>
                {data.map((advert) => (
                    <LinkContainer to={`/details/${advert.id}`} key={advert.id}>
                        <ListGroupItem action>
                            <Row>
                                <Col xs={"auto"} className="my-auto" ys={"auto"}>
                                    <img src={`${advert.image}?t=${advert.id}`} height="120px"/>
                                </Col>
                                <Col className="my-3" ys={"auto"}>
                                    <h1>{advert.title}</h1>
                                    <p>Price: {advert.price? `$${advert.price}` : "For free"}</p>
                                </Col>
                            </Row>


                        </ListGroupItem>
                    </LinkContainer>
                    )
                )}
            </ListGroup>
        </div>
    )
};

export default List;