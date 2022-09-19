import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {RiHeartsFill} from "react-icons/ri";
import "./login.css"

function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let Navigate = useNavigate()
  const handelChange = (e)=>{
    setemail(e.target.value)
  }
  const handelChange1 = (e)=>{
    setpassword(e.target.value)
  }

  const handlesubmit = (e)=>{
    e.preventDefault()
    const arr={"email":email,"password":password}
    axios.post("https://login-logout-apps.herokuapp.com/login",arr).then((res)=>{
            console.log(res)
            if(true){
                alert("sucessfully Logged in")
                Navigate("/home")
        }
        else{
               alert(res) 
            }
    })
    }
    return (
      <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><RiHeartsFill color='red' size="20px"/><span>ECGST</span></Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    <Form className="col-lg-6 offset-lg-3 login" autoComplete="off" onSubmit={handlesubmit} >
      <h1 className="text-center">Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" className="myInput" placeholder="Enter email"
      value={email}
        onChange={handelChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={handelChange1} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="log">
        Submit
      </Button>
      <h6>Create Account <Link to="/register">Register</Link></h6>
               </Form>
     <Container fluid  className="footer">
     <Row>
        <Col sm={3}><h6 style={ {color:"black"} }>©2022 ECGST</h6></Col>
        <Col sm={7}></Col>
        <Col sm={2}><h6>developed by <RiHeartsFill color='red' /><span>EC</span><span style={ {color:"blue"}}>File</span></h6></Col>
      </Row>
      </Container>
               </>      
  );
}

export default Login;
