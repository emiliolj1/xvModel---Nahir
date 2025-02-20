import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Carrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/WLTSpd1.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/c5mjdnt.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/uaj71jC.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/nMySy23.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/hlM0pbv.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/uP9cfw0.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/RQsHX65.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/kLC9pkv.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/1hhRPN3.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/tDVflKo.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/b2OZWKQ.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/eMnLn9h.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/tHNuM5g.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/cgrspRL.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/vPS3xhG.jpeg'/>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carrousel;