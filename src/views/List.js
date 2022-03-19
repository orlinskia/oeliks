import React, {useEffect, useState} from 'react';
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import axios from "axios";

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get('/adverts/');
            setData(response.data);
        }
        fetchData();
        }, []);



    return (
        <div>
            <ListGroup>
                {data.map((advert) => (
                    <ListGroupItem action key={advert.id}>
                        <Row>
                            <Col>
                        <img src={`${advert.image}?t=${advert.id}`}/>
                            </Col>
                            <Col>
                        <h1>{advert.title}</h1>
                        <p>{advert.description}</p>
                        <p>Price: ${advert.price}</p>
                                <p>Negotiation possible: {advert.canNegotiate ? "Yes" : "No"}</p>
                        <h4>Seller info:</h4>
                        <p>Name: {advert.seller}</p>
                        <p>Phone: {advert.sellerPhone}</p>
                            </Col>
                        </Row>


                    </ListGroupItem>
                    )
                )}
            </ListGroup>
        </div>
    )
};

export default List;