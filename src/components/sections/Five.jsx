import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Clipboard2Check, Clipboard2CheckFill, GiftFill, Whatsapp } from 'react-bootstrap-icons';

const Five = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'nahirsaracho';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container fluid className="fiveInv px-0">
      <div className='asistenciaFont asisBack text-center pb-4 pt-4'>
        <h2 className='fs-1 fw-bolder'>Asistencia</h2>
        <p className='fs-6 my-0'>Deseo que vengas, ¿me confirmas?</p>
        <Button href='https://wa.me/543813289820?text=Hola%20Nahir,%20confirmo%20mi%20presencia.%20Soy%20[tu nombre]' className='mt-3 mx-auto cardButton fw-medium'>
          <Whatsapp className='fs-1 mx-1'/> Nahir!
        </Button>
        <p className='py-1' style={{'color':'GrayText', 'fontSize':'0.75rem'}}>Presiona para ir a Whatsapp!</p>
        <p className='fs-6 my-0'>¡Espero puedas compartir conmigo</p>
        <p className='fs-6 my-0'>este momento!</p>
      </div>
      <div translate='no'className='asistenciaFont text-center pb-2 pt-2'>
        <h2 className='py-2' style={{'fontSize':'4rem'}}><GiftFill/></h2>
        <p translate='no' className='fs-4 my-0'>¡El mejor regalo</p>
        <p translate='no' className='pb-4 fs-4 my-0'>es tu presencia!</p>
        <p translate='no' className='fs-6 my-0'>Pero si deseas hacerme un obsequio</p>
        <p translate='no' className='fs-6 mb-3'>y no sabes que, te dejo esta opcion...</p>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <Button className="cardButton cardFont fs-5 mx-auto fw-bold">
            {copied ?
              <>
                CBU Copiado!<Clipboard2CheckFill className='mx-1 fs-2'/>
              </> 
             :
             <>
                CBU Nahir<Clipboard2Check className='mx-1 fs-1'/>
             </> 
            }
          </Button>
        </CopyToClipboard>
        <p className='py-2' style={{'color':'graytext', 'fontSize':'0.75rem'}}>Presiona arriba para copiar mi cbu!</p>
      </div>
    </Container>
  );
};

export default Five;