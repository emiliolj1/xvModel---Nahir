import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Carrousel from '../layout/Carrousel'
import dresscode from '../resources/dressCode.png'

const Four = () => {
  return (
    <>
      <Container fluid className='py-4 text-center'>
        <h3 className='pb-3 text-decoration-underline text-center titulo' style={{'color':"var(--skyBlue)"}}>DressCode</h3>
        {/* <Carrousel/> */}
        <Image
        className=''
        style={{'width':"25rem"}}
        src={dresscode}
        />
        <h3 className='pt-3 text-center titulo' style={{'color':"var(--charcoal)","fontStyle":'normal'}}>Elegante Sport</h3>
      </Container>
    </>
  )
}

export default Four