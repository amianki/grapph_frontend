import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Add() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    let history = useNavigate();

    function handleSubmit() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, name: name, location: location })
        };
        const url = "http://localhost:4000/company/"
        fetch(url, requestOptions)
            .then(console.log)
        history('/')
    }

    return (
        <div>
            <Form className="d-grid gap-2"
                style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Id" required onChange={(e) => setId(e.target.value)}>
                    </Form.Control>
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                    <Form.Control type="text" placeholder="Enter Location" required onChange={(e) => setLocation(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>


    )
}

export default Add;


