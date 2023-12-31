import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const Home = () => {
    let history = useNavigate();

    const [Employee, setCompanies] = useState([]);
    const url = "http://localhost:4000/companies";
    const fetchCompanies = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if (data.length > 0) {
                setCompanies(data);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCompanies(url);
    }, [])
    console.warn(Employee);

    const handleEdit = (id, name, location) => {
        history('/update',{state:{id:id, name:name, location:location}});
    }

    const handleDelete = (id) => {
        const requestOptions = {
            method: 'DELETE'
        };
        const url = "http://localhost:4000/company/" + id
        fetch(url, requestOptions)
            .then(console.log)
        
        alert("Deleted!")
        history("/")
    }
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Location
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0
                                ?
                                Employee.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.location}
                                            </td>
                                            <td>
                                                <Button onClick={() => handleEdit(item.id, item.name, item.location)}>Edit</Button>
                                                &nbsp;
                                                <a href="/">
                                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className="d-grid gap-2" to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>

    );
}

export default Home;