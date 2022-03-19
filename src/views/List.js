import React, {useEffect, useState} from 'react';
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import axios from "axios";

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
                        <ListGroupItem action key={advert.id}>
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
                    )
                )}
            </ListGroup>
        </div>
    )
};

export default List;