import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
//import { ButtonLink } from "./ui/ButtonLink";
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
//import { useLocation } from 'react-router-dom';
//import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import '../css/Navbar.css';

const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  //const [ shopCart, setShopCart ] = useState([]);
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
                <div className="dropdown">
                  <button className="btn btn-success dropdown-toggle d-flex align-items-center" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"/><path d="M16.807 19.011A8.46 8.46 0 0 1 12 20.5a8.46 8.46 0 0 1-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15c3.09 0 4.59.83 5.318 2.163c.35.643.093 1.433-.511 1.848ZM12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/></g></svg>
                    </div>
                    <span>{user.username}</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="/my-account">Mi Cuenta</a></li>
                    { (user.rol === "admin" || user.rol === "root" ) && (
                      <li><a className="dropdown-item" href="/admin">Panel de Administrador</a></li>
                    )}
                    <li><a className="dropdown-item" href="/" onClick={() => logout()}>Cerrrar Sesión</a></li>
                  </ul>
                </div>
                {/* {isAuthenticated && user && user.rol === "client" && (
                    <div className="m-2">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cartModal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 20c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2s-.89-2-2-2m.2-3.37l-.03.12c0 .14.11.25.25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2h3.27l.94 2H20c.55 0 1 .45 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63M8.5 11H10V9H7.56l.94 2M11 9v2h3V9h-3m3-1V6h-3v2h3m3.11 1H15v2h1l1.11-2m1.67-3H15v2h2.67l1.11-2M6.14 6l.94 2H10V6H6.14Z"/></svg>
                    </button>
                    <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5 text-dark" id="cartModalLabel">Pedidos</h1>
                          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-danger" data-bs-dismiss="modal">Cancelar Pedido</button>
                          <button className="btn btn-primary">Completar Pedido</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  )} */}
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