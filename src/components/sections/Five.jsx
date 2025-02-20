import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Clipboard2Check, Clipboard2CheckFill, GiftFill } from 'react-bootstrap-icons';

const Five = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'maite.914.rias.mp';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container fluid className="fiveInv">
      <div className='asistenciaFont asisBack text-center pb-4 pt-4'>
        <h2 className='text-decoration-underline fs-1 fw-bold'>Asistencia</h2>
        <p className='fs-6 my-0'>Quiero contar contigo, ¿vienes?</p>
        <p className='fs-6 my-0'>Confírmame, por favor.</p>
        <Button href='https://wa.me/543812035936?text=Hola%20Maíte,%20confirmo%20mi%20presencia.%20Soy%20[tu nombre]' className='my-3 mx-auto cardButton fw-bold'>
          Confirmar Presencia!
        </Button>
      </div>
      <div className='asistenciaFont text-center pb-2 pt-4'>
        <h2 className='fs-1 fw-bold'>Regalos <GiftFill/></h2>
        <p className='fs-6 my-0'>Para mi tu presencia es el mejor regalo,</p>
        <p className='fs-6 my-0'>Pero si quieres regalarme algo y no sabes que</p>
        <p className='fs-6 mb-3'>Te dejo esta opcion...</p>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <Button className="cardButton cardFont fs-5 mx-auto fw-bold">
            {copied ?
              <>
                Cbu Copiado!<Clipboard2CheckFill/>
              </> 
             :
             <>
                Mi Cbu <Clipboard2Check/>
             </> 
            }
          </Button>
        </CopyToClipboard>
        <p className='fs-4 text-decoration-underline mt-3 fst-italic'>Espero no Faltes!!</p>
      </div>
    </Container>
  );
};

export default Five;