import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import papascerveceras from '../assets/Entradas/papascerveceras.png';
import papasyaros from '../assets/Entradas/papasyaros.png'
import bastones from '../assets/Entradas/bastones.png'
import picadagrande from '../assets/Entradas/picadagrande.png'
import empanadascarne from '../assets/Entradas/empandascarne.jpg'
import sandwichmiga from '../assets/Entradas/sandwichmiga.jpg'
import picadafria from '../assets/Entradas/picadafria.jpg'
import rabas from '../assets/Entradas/rabas.jpg'

function CardEntradas(props) {

  const {title, imageSrc, description } = props;

  return (
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={imageSrc} alt={title} height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>{title}</Card.Title>
          <Card.Text className='text-center'>{description}</Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          </div>
        </Card.Body>
      </Card>
      </div>
  );
}

export default CardEntradas;