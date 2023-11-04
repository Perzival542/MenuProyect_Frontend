import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <>
    <Navbar expand="lg" className="barranav">
      <Container>
        <Navbar.Brand href="/" className="enlaces">
          <Image className="img-nav" height={100} width={100} src="https://i.imgur.com/7Q4hkT0.png" rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-center">
            <div className="d-flex justify-content-between align-content-center">
              <NavLink className="nav-link text-light me-2" to="/">Inicio</NavLink>
              <NavLink className="nav-link me-2" to="/menu">Menu</NavLink>
              <NavLink className="nav-link me-2" to="/aboutUs">Sobre Nosotros</NavLink>
            </div>
          </Nav>
          <div className="d-flex align-items-center justify-content-center">
            {isAuthenticated ? (
              <>
                <div className="me-3 text-light">
                  Bienvenido, {user.username}
                </div>
                  <NavLink className="btn btn-danger me-4" onClick={() => logout()} to="/">
                    Logout
                  </NavLink>
              </>
            ) : (
              <div className="d-flex">
                  <NavLink className="btn btn-primary me-4" to="/login">Login</NavLink>
                  <NavLink className="btn btn-primary me-4" to="/register">Register</NavLink>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;