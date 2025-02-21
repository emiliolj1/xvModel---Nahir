import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Flower1, Flower2, GeoAltFill } from 'react-bootstrap-icons'
import iglesia from '../resources/iglesia.png'

const Three = () => {
  return (
    <Container fluid className='threeInv pb-4'>
      <div className='pt-4 pb-3 titulo text-center'>
        <h3 className='text-decoration-underline fw-bold fs-1'>¡Misa!</h3>
      </div>
      <div className='card cardFont mx-5 px-3 py-3 text-center'>
        <Image
          rounded
          className='p-3'
          src={iglesia}
        />
        <h3 className='fw-bold m-0'>Parroquia</h3>
        <h3 className='fw-bold mt-0'>'San Francisco Solano' </h3>
        <p className='mb-2'><GeoAltFill/> Av. San Martin - Bda. Rio Sali</p>
        <p className='fw-bold mb-1'>2 · Marzo · 2025</p>
        <p className='fw-bold mb-1'>11:00hrs</p>
        <Button href='https://maps.app.goo.gl/bsdo7rWtLG2nDoiX8' className='mb-3 mx-auto cardButton fw-bold'>
          Ver mapa!
        </Button>
      </div>
      <div className='pt-4 pb-2 titulo text-center'>
        <h3 className='text-decoration-underline fw-bold fs-1'>¡Fiesta!</h3>
      </div>
      <div className='card cardFont mx-5 px-2 py-2 text-center'>
        <h3 className='fw-bold pt-3'>Quincho</h3>
        <h3 className='fw-bold'>'El majestuoso'</h3>
        <p className='mb-2'><GeoAltFill/> Colombres </p>
        <p className='fw-bold mb-1'>08 · Marzo · 2025</p>
        <p className='fw-bold mb-1'>22:00hrs</p>
        <p className='fw-bold mb-2'>Sé puntual!!</p>
        <Button href='https://maps.app.goo.gl/EMqvMogvHZ6qB9957' className='mb-3 mx-auto cardButton fw-bold'>
          Ver mapa!
        </Button>
      </div>
    </Container>
  )
}

export default Three