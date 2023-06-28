import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
const Update = () => {
    const use_location = useLocation();
    const id = use_location.state.id;
    let name = use_location.state.name;
    let location = use_location.state.location;

    function handleSubmit(id,name,location) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id:id, name:name, location:location })
        };
        const url = "http://localhost:4000/company/"+id
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        
    }
    let state = {
        id:"",
        name:"",
        location:""
    }
    return ( 
        <Form className="d-grid gap-2"
        style={{margin:"15rem"}}>
           <Form.Group className="mb-3" controlId="formName">
               <Form.Control type="text" defaultValue={name} required >
               </Form.Control>
               <Form.Control type="text" defaultValue={location} required >
               </Form.Control>
           </Form.Group>
           <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
       </Form>
     );
}
 
export default Update;