import React from 'react'
import Countdown from '../layout/Countdown'
import Container from 'react-bootstrap/Container'

const One = () => {
  return (
    <Container fluid className="sectionM faceInv d-flex flex-column">
      <Container className='mt-auto mb-3'>
        <h3 className='title misXv'>Mis XV</h3>
        <h3 className='title nombre'>Maite</h3>
        <Countdown/>
      </Container>
    </Container>
  )
}

export default One