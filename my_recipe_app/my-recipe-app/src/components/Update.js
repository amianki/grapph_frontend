import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
const Update = () => {
    const use_location = useLocation();
    const id = use_location.state.id;
    let dname = use_location.state.name;
    let dlocation = use_location.state.location;
    const history = useNavigate();

    function handleSubmit() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, name: name, location: location })
        };
        const url = "http://localhost:4000/company/" + id
        fetch(url, requestOptions)
            .then(console.log)
        history('/')
    }
    
    const[name, setName] = useState(dname);
    const [location, setLoc] = useState(dlocation);
    return (
        <Form className="d-grid gap-2"
            style={{ margin: "15rem" }}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                >
                </Form.Control>
                <Form.Control
                    type="text"
                    value={location}
                    required
                    onChange={(e) => setLoc(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
    );
}

export default Update;