import { Image, Container, Carousel } from 'react-bootstrap';
import Banner from '../assets/img/milanesas_pure.jpg'
import Banner2 from '../assets/img/pizza.jpg'

import '../css/Carousel.css'

import sanguchevacio from '../assets/img/sanguchevacio.jpg'
import bistec from '../assets/img/bistec.jpg'



const CarouselBanner = () => {

  return (

    <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
    <li data-bs-target="#carouselExample" data-bs-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner} alt="Milanesas con Pure" class="d-block w-100 carousel-img" height={500} />
      <div class="carousel-caption">
        <h3>Milanesas Con Pure</h3>
        <p>Milanesas de carne vacuna fritas, con pure y especias.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Banner2} alt="Pizza" class="d-block w-100 carousel-img" height={500} />
      <div class="carousel-caption">
        <h3>Pizza</h3>
        <p>Pizza Muzzarella con Morrones.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={sanguchevacio} alt="Pizza" class="d-block w-100 carousel-img" height={500} />
      <div class="carousel-caption">
        <h3>Sandwich de Vacio</h3>
        <p>Sandwich de vacio con tomate, pepino, cebolla morada y mayonesa de apio.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={bistec} alt="Pizza" class="d-block w-100 carousel-img" height={500} />
      <div class="carousel-caption">
        <h3>Bistec con papas</h3>
        <p>Bistec premium con una porción abundante de papas.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
  );
}

export default CarouselBanner;