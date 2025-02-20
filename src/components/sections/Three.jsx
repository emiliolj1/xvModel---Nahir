import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Flower1, Flower2, GeoAltFill } from 'react-bootstrap-icons'

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
          src='https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.30808-6/332318151_6231917750203070_3659639436726282966_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHPBauLEbRo3e-99GHI_rbURDDFFLyTs_FEMMUUvJOz8YRhPE9fu9oPZAH0rUXDX2yrLi6BIHSo2J5rCqZ0Echq&_nc_ohc=6uGf_CiGdjcQ7kNvgFYNFhU&_nc_ht=scontent.ftuc2-1.fna&_nc_gid=AfIlU2VV9vT32CvYQfI4N0M&oh=00_AYBZKXC1oRvnjFmXI2X3dh2fhoKkufsADOSgjbLaqQ3hlg&oe=66F0407C'
        />
        <h3 className='fw-bold m-0'>Parroquia</h3>
        <h3 className='fw-bold mt-0'>'San Francisco Solano' </h3>
        <p className='mb-2'><GeoAltFill/> Av. San Martin - Bda. Rio Sali</p>
        <p className='fw-bold mb-1'>8 · Octubre · 2024</p>
        <p className='fw-bold mb-1'>20:00hrs</p>
        <Button href='https://maps.app.goo.gl/bsdo7rWtLG2nDoiX8' className='mb-3 mx-auto cardButton fw-bold'>
          Ver mapa!
        </Button>
      </div>
      <div className='pt-4 pb-2 titulo text-center'>
        <h3 className='text-decoration-underline fw-bold fs-1'>¡Fiesta!</h3>
      </div>
      <div className='card cardFont mx-5 px-2 py-2 text-center'>
        <h3 className='fw-bold pt-3'>Salon Felipetti</h3>
        <p className='mb-2'><GeoAltFill/> B° Delfín Gallo - Delfín Gallo</p>
        <p className='fw-bold mb-1'>12 · Octubre · 2024</p>
        <p className='fw-bold mb-1'>22:00hrs</p>
        <p className='fw-bold mb-2'>Sé puntual!!</p>
        <Button href='https://maps.app.goo.gl/gFfn5fsNmRuxGfUw8' className='mb-3 mx-auto cardButton fw-bold'>
          Ver mapa!
        </Button>
      </div>
    </Container>
  )
}

export default Three