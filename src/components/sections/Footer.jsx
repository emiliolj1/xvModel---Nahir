import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from "react-bootstrap/Col"
import { Facebook, GeoAltFill, Instagram, TwitterX, Whatsapp } from "react-bootstrap-icons"
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <>
      <Navbar className='bgFooter' data-bs-theme="dark">
        <Container className='flex-column align-items-center'>
          <Col className='container-fluid d-flex justify-content-center'>
            <Nav>
              <p className='text-light cardFont fs-6 mb-1'>Queres una invitacion para tu fiesta?</p>
            </Nav>
          </Col>
          <Col className='container-fluid d-flex justify-content-center p-0'>
            <Nav>
              <p className='text-light text-decoration-underline cardFont fs-6 mb-1'>Presiona debajo!</p>
            </Nav>
          </Col>
          <Col className='container-fluid d-flex justify-content-center'>
            <Nav className='fs-3 text-light gap-3 mb-3'>
              <Nav.Link className='p-0 text-danger-emphasis' href='https://www.instagram.com/emilio.lj2?igsh=MXdkc3o2ZGsyMW81cA=='><Instagram /></Nav.Link>
              <Nav.Link className='p-0 text-success-emphasis ' href='https://wa.me/543816615785?text=Hola,%20como%20estás?%20Estoy%20interesado%20en%20las%20invitaciones%20virtuales!'><Whatsapp/></Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer