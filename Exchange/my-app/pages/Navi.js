import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
export default function Navi() {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container style={{fontFamily: 'fantasy'}}>
          <Link href='./Mainh'><Navbar.Brand style={{font:'bold'}}>EXCHANGE</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Link href='./Mainh'><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link href='./Home'><Nav.Link href="#features">DeFi</Nav.Link></Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
    
  )
}

