import React, {useEffect, useState} from 'react';
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import axios from "axios";
import {LinkContainer} from "react-router-bootstrap";

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/adverts/');
            setData(response.data);
        }
        fetchData();
    }, []);


    return (
        <div>
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
                                    <p>Price: ${advert.price}</p>
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