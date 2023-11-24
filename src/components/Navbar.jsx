import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
//import { ButtonLink } from "./ui/ButtonLink";
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
//import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
                <div className="dropdown">
                  <button class="btn btn-success dropdown-toggle d-flex align-items-center" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"/><path d="M16.807 19.011A8.46 8.46 0 0 1 12 20.5a8.46 8.46 0 0 1-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15c3.09 0 4.59.83 5.318 2.163c.35.643.093 1.433-.511 1.848ZM12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/></g></svg>
                    </div>
                    <span>{user.username}</span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="/my-account">Mi Cuenta</a></li>
                    { user.rol && user.rol === "admin"  ? (
                      <>
                      <li><a class="dropdown-item" href="/admin">Panel de Administrador</a></li>
                      </>
                    ) : (<>  </>)}
                    <li><a class="dropdown-item" href="/" onClick={() => logout()}>Cerrrar Sesión</a></li>
                  </ul>
                </div>
                {/* <div className="me-3 text-light">
                  Bienvenido, {user.username}
                </div>
                  <NavLink className="btn btn-danger me-4" onClick={() => logout()} to="/">
                    Logout
                  </NavLink> */}
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