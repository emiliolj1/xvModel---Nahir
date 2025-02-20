import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Carrousel from '../layout/Carrousel'

const Four = () => {
  return (
    <>
      <Container fluid className='py-4 text-center'>
        <h3 className='pb-3 text-decoration-underline text-center titulo' style={{'color':"var(--skyBlue)"}}>Mis fotos!</h3>
        <Carrousel/>
      </Container>
    </>
  )
}

export default Four