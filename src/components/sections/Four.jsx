import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Carrousel from '../layout/Carrousel'
import dresscode from '../resources/dressCode.png'

const Four = () => {
  return (
    <>
      <Container fluid className='py-3 text-center'>
        <h3 translate='no' className=' text-decoration-underline text-center titulo' style={{'color':"var(--skyBlue)", 'fontSize':'1.5rem'}}>DressCode</h3>
        {/* <Carrousel/> */}
        <Image
        className=''
        style={{'width':"9rem",}}
        src={dresscode}
        />
        <h3 translate='no' className='pt-2 text-center titulo' style={{'color':"var(--charcoal)","fontStyle":'normal', 'fontSize':'1.3rem'}}>Elegante Sport</h3>
      </Container>
    </>
  )
}

export default Four