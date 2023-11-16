import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import NavBar from '../components/Navbar.jsx';
import '../css/HomePage.css';
import CarouselBanner from "../components/Carousel.jsx";
import MenuSection from "../components/menus/MenuSection.jsx";
import terraza from "../assets/img/terraza.jpg";


const HomePage = () => {
  return (
  <div className='Home'>
    <NavBar/>
  <div className="container">
   <div className='Carusel'>
    <CarouselBanner/>
   </div>
  </div>

    <div className='bg- mb-3'>
      <MenuSection/>
    </div>

    <div className='d-none d-sm-block '>
      <h1 className='bg-dark text-light text-center p-3 mb-0'>Disfruta de una hermosa vista de la ciudad.</h1>
      <Image src={terraza} fluid />;
    </div>

    <div className='container-fluid bg-dark mt-3'>
      {/* <Footer/> */}
    </div>
  </div>
  );
}

export default HomePage;
