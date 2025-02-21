import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Clipboard2Check, Clipboard2CheckFill, GiftFill } from 'react-bootstrap-icons';

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
        <h2 className='text-decoration-underline fs-1 fw-bold'>Asistencia</h2>
        <p className='fs-6 my-0'>Deseo que vengas, ¿vienes?</p>
        <p className='fs-6 my-0'>Confírmame, por favor.</p>
        <Button href='https://wa.me/543813289820?text=Hola%20Nahir,%20confirmo%20mi%20presencia.%20Soy%20[tu nombre]' className='mt-3 mx-auto cardButton fw-medium'>
          Confirmar a Nahir!
        </Button>
        <p className='py-2' style={{'color':'GrayText', 'fontSize':'0.85rem'}}>Presiona para ir a Whatsapp!</p>
      </div>
      <div translate='no'className='asistenciaFont text-center pb-2 pt-2'>
        <h2 className='fw-bold py-2' style={{'fontSize':'3rem'}}><GiftFill/></h2>
        <p translate='no' className='fs-6 my-0'>Tenerte aquí es lo que más valoro,</p>
        <p translate='no' className='fs-6 my-0'>pero si buscas un detalle y no sabes cual</p>
        <p translate='no' className='fs-6 mb-3'>Te dejo esta opcion...</p>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <Button className="cardButton cardFont fs-5 mx-auto fw-bold">
            {copied ?
              <>
                Cbu Copiado!<Clipboard2CheckFill className='px-1 fs-2'/>
              </> 
             :
             <>
                Mi Cbu <Clipboard2Check className='px-1 fs-1'/>
             </> 
            }
          </Button>
        </CopyToClipboard>
        <p className='py-2' style={{'color':'slategray', 'fontSize':'0.9rem'}}>Presiona arriba para copiarlo!</p>
        <p className='fs-4 text-decoration-underline fst-italic'>Espero no Faltes!!</p>
      </div>
    </Container>
  );
};

export default Five;