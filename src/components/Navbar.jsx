import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

export function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle onClick={toggleNavbar} aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/aboutUs">Acerca de</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/menus">Menu</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Servicio 2</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Servicio 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
          <ul className="flex gap-x-2">
           {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    // <nav className="navbar navbar-expand-lg nabvar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       <img className="img-nav" height={100} width={100} src="https://i.imgur.com/7Q4hkT0.png" rounded/>
    //     </a>
    //     <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //       <i className="fas fa-bars"></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <a className="nav-link active" aria-current="page" href="/">Home</a>
    //         <a className="nav-link" href="/menus">Menu</a>
    //         <a className="nav-link" href="/aboutUs">Sobre Nosotros</a>
    //       </div>
    //     </div>
    //   </div>
    //   <ul className="flex gap-x-2">
    //     {isAuthenticated ? (
    //       <>
    //         <li>
    //           Welcome {user.username}
    //         </li>
    //         <li>
    //           <Link to="/" onClick={() => logout()}>
    //             Logout
    //           </Link>
    //         </li>
    //       </>
    //     ) : (
    //       <>
    //         <li>
    //           <ButtonLink to="/login">Login</ButtonLink>
    //         </li>
    //         <li>
    //           <ButtonLink to="/register">Register</ButtonLink>
    //         </li>
    //       </>
    //     )}
    //   </ul>
    // </nav>
  );
}
