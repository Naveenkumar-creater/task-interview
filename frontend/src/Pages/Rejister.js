import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {RiHeartsFill} from "react-icons/ri";
import "./register.css"

function Register(props){
  let Navigate = useNavigate()
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const[password,setpassword]=useState("");
  const[confrim_password,setconfrim_password]=useState("");
  //Nawe
  const handelChange = (e)=>{
    setusername(e.target.value)
  }
  //email
  const handelChange1 = (e)=>{
    setEmail(e.target.value)
  }
  //date
  //
  const handelChange5 = (e)=>{
    setpassword(e.target.value)
  }
   const handelChange6 = (e)=>{
    setconfrim_password(e.target.value)
  }

   const handleSubmit = async(e)=>{
    e.preventDefault()
    const arr = {"name":username,"email":email,"password":password,"confrim_password":confrim_password}
     axios.post("https://login-logout-apps.herokuapp.com/register",arr).then((res)=>{
          console.log(res)
            if(true){
                alert("sucessfully registered")
                Navigate("/")
            }
            else{
               alert(res["data"]) 
            }
        })
  }
  return(
    <>
     {["sm"].map((expand) => (
        <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><RiHeartsFill color='red' size="20px"/><span>ECGST</span></Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handleSubmit}>
        <h1 className="text-center">Register</h1>
        <Form.Group className="mb-3" controlId="username">
        <Form.Label>Uername</Form.Label>
        <Form.Control type="text" placeholder="Enter username"
        value={username}
        onChange={handelChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email}
        onChange={handelChange1}/>
        </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={handelChange5}
    name="password"
    value= {password}/>
      </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label> Confrim Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handelChange6}
    name="confrim_password"
    value= {confrim_password}/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Save Passwords" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
    <Container fluid  className="footer">
    <Row>
        <Col sm={3}><h6 style={ {color:"black"} }>©2022 ECGST</h6></Col>
        <Col sm={7}></Col>
        <Col sm={2}><h6>developed by <RiHeartsFill color='red' /><span>EC</span><span style={ {color:"blue"}}>File</span></h6></Col>
      </Row>
      </Container>
    </>  
  )
}

export default Register;