import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import * as yup from 'yup';
import {Formik} from "formik";
import {Button, Col, InputGroup, Row, Form, ListGroupItem} from "react-bootstrap";
import axios from "axios";
import {useFetchData} from "../hooks/useFetchData";

const schema = yup.object().shape({
    title: yup.string().required().max(50),
    price: yup.number().required().min(0),
    description: yup.string().required(),
    seller: yup.string().required(),
    sellerPhone: yup.string().required(),
    canNegotiate: yup.bool(),
});

const initialValues = {
    title: '',
    price: '',
    description: '',
    image: 'http://placeimg.com/400/400/business',
    seller: '',
    sellerPhone: '',
    canNegotiate: false,
    createdOn: '',
    categoryId: 0
}

const Edit = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const data = useFetchData(`/adverts/${id}`, {});
    const categories = useFetchData(`/categories/`, []);

    const handleFormSubmit = async(values) => {
        const response = await axios.patch(`/adverts/${data.id}`, values);
        const id = response.data.id;
        navigate(`/details/${id}`)
    }

    console.log(data);
    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleFormSubmit}
            initialValues={{...initialValues, ...data}}
            enableReinitialize
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                isInvalid={!!errors.price}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.price}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                            <Form.Label>Description</Form.Label>
                            <InputGroup hasValidation>

                                <Form.Control
                                    type="text"
                                    as="textarea"
                                    aria-describedby="inputGroupPrepend"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>Seller</Form.Label>
                            <Form.Control
                                type="text"
                                name="seller"
                                value={values.seller}
                                onChange={handleChange}
                                isInvalid={!!errors.seller}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.seller}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik04">
                            <Form.Label>Seller phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="sellerPhone"
                                value={values.sellerPhone}
                                onChange={handleChange}
                                isInvalid={!!errors.sellerPhone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.sellerPhone}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Select
                            aria-label="Default select example"
                            name="categoryId"
                            value={values.categoryId}
                            onChange={handleChange}>

                            {categories.map((advert) => (
                                    <option value={advert.id} key={advert.id}>{advert.title}</option>


                                )
                            )}
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Check
                            name="canNegotiate"
                            label="Can negotiate the price"
                            onChange={handleChange}
                            isInvalid={!!errors.canNegotiate}
                            feedback={errors.canNegotiate}
                            feedbackType="invalid"
                            id="validationFormik0"
                        />
                    </Form.Group>


                    <Button type="submit">Edit</Button>

                </Form>
            )}
        </Formik>
    );
};

export default Edit;