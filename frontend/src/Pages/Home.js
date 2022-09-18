import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsFillBellFill } from 'react-icons/bs';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { AiOutlineFileText } from "react-icons/ai";
import { AiFillFileText} from "react-icons/ai";
import {AiFillCreditCard} from "react-icons/ai";
import {AiOutlineCreditCard} from "react-icons/ai";
import {FaFilePowerpoint} from "react-icons/fa";
import {RiHeartsFill} from "react-icons/ri";
import "./Home.css"

function Home(){

  const navigate=useNavigate();

  const navigateLogin=()=>{
    navigate("/")
  }

  
  return(
  
    <>
    {[false].map((expand) => (
        <Navbar key={expand} bg="primary" expand={expand} className="mb-3" >
          <Container fluid>
            <Navbar.Brand href="#"><RiHeartsFill color='red' size="20px"/><span>ECGST</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={ { color:"white"} } />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" className="content"><BsFillBellFill color='black' size="50px"/></Nav.Link>
            <Nav.Link href="#action2" className="content"><BsFillHouseDoorFill color='black' size="50px"/></Nav.Link>
            <Nav.Link href="#action1" className="content"> <Button variant="outline-success" onClick={navigateLogin} >LogOut</Button></Nav.Link>
            </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  
    <Container className="pt-3 ">
    <Row className="pl-10 subcontent" >
        <Col s={1}>CREATE</Col>
        <Col s={1}>INVOICES</Col>
        <Col s={1}>ESTIMATES</Col>
        <Col s={1}>INCOME</Col>
        <Col s={1}>VOUCHERS</Col>
        <Col s={1}>CASH/BANK</Col>
        <Col s={1}>PAYROLL</Col>
        <Col s={1}>REPORT</Col>
      </Row>
     <Row className="pt-3">
     <Col sm={1} className="subcontent">FINALAC</Col>
     <Col sm={1} className="ms-4 invoice">
          <Nav className="flex-column   invoice2">
            <Nav.Item>
            <Nav.Link eventKey="second"><AiOutlineFileText className='circle-icon' /><p className='d-flex invoice1'>Sales<br/>Invoice</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" ><AiFillFileText className='circle-icon' /><p className='d-flex invoice1'>Delivery<br/>Chellan</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="first"><AiFillCreditCard className='circle-icon' /><p className='d-flex invoice1'>Credit<br/>Notes(Sales Return)</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">< FaFilePowerpoint className='circle-icon' /><p className='d-flex invoice1'>Purchase<br/>Invoice</p></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="first"><AiOutlineCreditCard className='circle-icon' /><p className='d-flex invoice1 '>Debit<br/>Note(Purchase Return)</p></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
     </Row>
     
    </Container>
    <Container fluid  className="footer">
    <Row className="text-center">
        <Col sm={2}><p style={ {color:"black"} }>©2022 ECGST</p></Col>
        <Col sm={8}></Col>
        <Col sm={2}>developed by <RiHeartsFill color='red' /><span>EC</span><span style={ {color:"blue"}}>File</span></Col>
      </Row>
      </Container>
    
      
</>
   
)}
export default Home