import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} variant="success" style={ { backgroundColor:"white",color:"red" } } />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" bg="red"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" className="content"><BsFillBellFill color='black' size="50px"/></Nav.Link>
            <Nav.Link href="#action2" className="content"><BsFillHouseDoorFill color='black' size="50px"/></Nav.Link>
            <Nav.Link href="#action1" className="content"> <Button variant="success" onClick={navigateLogin} >LogOut</Button></Nav.Link>
            </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  
    <Container className="pt-3 ">
    <Row className="pl-10 subcontent" >
        <Col s={1}>CREATE</Col>
        <Col s={1} >
         <NavDropdown title="INVOICE" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1"> <AiOutlineFileText className='circle-icon' /><p>Sales<br/>Invoice</p></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <AiFillFileText className='circle-icon' /><p>Delivery<br/>Chellan</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><AiFillCreditCard className='circle-icon' /><p>Credit<br/>Notes(Sales <br/> Return)</p></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              < FaFilePowerpoint className='circle-icon' /><p >Purchase<br/>Invoice</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
              <AiOutlineCreditCard className='circle-icon' /><p>Debit<br/>Note(Purchase<br/>Return)</p>
              </NavDropdown.Item>
            </NavDropdown></Col>
        <Col s={1}>ESTIMATES</Col>
        <Col s={1}>INCOME</Col>
        <Col s={1}>VOUCHERS</Col>
        <Col s={1}>CASH/BANK</Col>
        <Col s={1}>PAYROLL</Col>
        <Col s={1}>REPORT</Col>
        <Col s={1} className="subcontent">FINALAC</Col>
      </Row>
     
    </Container>
    <Container fluid  className="footer">
    <Row>
        <Col sm={3}><h6 style={ {color:"black"} }>©2022 ECGST</h6></Col>
        <Col sm={7}></Col>
        <Col sm={2}><h6>developed by <RiHeartsFill color='red' /><span>EC</span><span style={ {color:"blue"}}>File</span></h6></Col>
      </Row>
      </Container>
    
      
</>

   
)}
export default Home