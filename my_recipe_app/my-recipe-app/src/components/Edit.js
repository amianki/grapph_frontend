// import React, { useState, useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Employee from './Employee';
// import { v4 as uuid } from "uuid";
// import { Link, useNavigate } from "react-router-dom";

// const Edit = () => {
//     const [ID, setId] = useState("");
//     const [name, setName] = useState("");
//     const [location, setLocation] = useState("");

//     let history = useNavigate();

//     var index = Employee.map(function (e) {
//         return e.ID
//     }).indexOf(ID);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         let a = Employee[index];
//         a.Name = name;
//         a.Location = location;

//         history("/");
//     }

//     useEffect(() =>{
//     setId(localStorage.getItem('id'))
//     setName(localStorage.getItem('name'))
//     setLocation(localStorage.getItem('location'))
//     },[])
//     return ( 
    
        //     <Form className="d-grid gap-2"
        //  style={{margin:"15rem"}}>
        //     <Form.Group className="mb-3" controlId="formName">
        //         <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
        //         </Form.Control>
        //         <Form.Control type="text" placeholder="Enter Location" required onChange={(e) => setLocation(e.target.value)}>
        //         </Form.Control>
        //     </Form.Group>
        //     <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        // </Form>
        
//      );
// }

// export default Edit;