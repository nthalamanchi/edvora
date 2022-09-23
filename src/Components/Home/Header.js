import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../Images/edvora.png'
import { links } from './HeaderLinks';

const Header = () =>{
  return (
        <>
        <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
      <Container>
          <Navbar.Brand href="/">
            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>
            EDVORA
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              links.map((item,index)=>(
                <LinkContainer to={item.linkurl}>
                     <Nav.Link>{item.linkname}</Nav.Link>
                </LinkContainer>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    )
}

export default Header