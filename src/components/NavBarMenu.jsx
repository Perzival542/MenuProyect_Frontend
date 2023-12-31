import React, { useState } from 'react';
import { Navbar, Container, Nav, Image, Button, Modal, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../css/NavBarMenu.css';
import axios from 'axios';
import logout from '../assets/img/logout.png'

let isLoggedIn = false;
let loggedInUserName = '';

const NavBarMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLinkActive = (path) => {
        return location.pathname === path;
    };

    const navLinkStyle = {
        color: '#fff',
    };

    const activeLinkStyle = {
        textDecoration: 'underline',
        fontWeight: '900',
    };

    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);


    const handleSignUpModalOpen = () => {
        setShowSignUpModal(true);
    };

    const handleLoginModalOpen = () => {
        setShowLoginModal(true);
    };

    const handleModalClose = () => {
        setShowSignUpModal(false);
        setShowLoginModal(false);
    };

    const handleLogout = () => {
        isLoggedIn = false;
        loggedInUserName = '';
        navigate('/');
    };

    return (
        <>
        <Navbar expand="lg" className="barranav">
            <Container>
        <Navbar.Brand href="/" className="enlaces">
            <Image className='img-nav' height={100} width={100} src="https://i.imgur.com/7Q4hkT0.png" rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-center">
                <div className='d-flex justify-content-between align-content-center'>
                    <NavLink className="nav-link" to="/" style={{ ...navLinkStyle, ...(isLinkActive('/') && activeLinkStyle) }}>Home</NavLink>
                    <NavLink className="nav-link" to="/menu" style={{ ...navLinkStyle, ...(isLinkActive('/menu') && activeLinkStyle) }}>Menu</NavLink>
                    <NavLink className="nav-link" to="/acercade" style={{ ...navLinkStyle, ...(isLinkActive('/AboutUs') && activeLinkStyle) }}>Sobre Nosotros</NavLink>
                </div>
            </Nav>
            <div className="d-flex align-items-center justify-content-center">
                {isLoggedIn ? (
                    <>
                        <div className="me-3 text-light">
                            Bienvenido, {loggedInUserName}
                        </div>
                        <Button variant="dark" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center me-3'>
                        <Button variant="dark" onClick={handleLoginModalOpen} className="me-3" >
                            Iniciar Sesión
                        </Button>
                        <Button variant="dark" onClick={handleSignUpModalOpen}>
                            Registrate
                        </Button>
                    </div>
                    <div className='image_container'>
                        <Image className='img-enlace' height={70} width={70} src={logout} rounded />
                    </div>
                </div>
                
                )}
            </div>
        </Navbar.Collapse>
    </Container>
</Navbar>
{/* Modal */}
<SignUpModal showModal={showSignUpModal} closeModal={handleModalClose} />
<LoginModal showModal={showLoginModal} closeModal={handleModalClose}/>

        </>
    );
};

const SignUpModal = ({ showModal, closeModal }) => {
    const [nameSurname, setNameSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const state = 'active';
    const rol = 'client';

    const [nameSurnameError, setNameSurnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleNameSurnameChange = (event) => {
        setNameSurname(event.target.value);
        setNameSurnameError('');
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };

    const handleSubmit = () => {
        let hasErrors = false;

        // Validar campos
        if (!nameSurname) {
            setNameSurnameError('Por favor ingresa tu nombre y apellido.');
            hasErrors = true;
        }
        if (!email) {
            setEmailError('Por favor ingresa tu dirección de email.');
            hasErrors = true;
        }
        if (!password) {
            setPasswordError('Por favor ingresa una contraseña.');
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        const formData = {
            nameSurname,
            email,
            password,
            state,
            rol,
        };

        // Realizar solicitud POST a la API
        axios.post('http://localhost:3000/api/users', formData)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
                closeModal(); // Cierra el modal después de enviar el formulario
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
                // Manejar el error, mostrar mensajes de error, etc.
            });
        closeModal(); // Cierra el modal después de enviar el formulario
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Registro de Usuarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="nameSurname">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control type="text" value={nameSurname} onChange={handleNameSurnameChange} />
                        {nameSurnameError && <Alert variant="danger">{nameSurnameError}</Alert>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleEmailChange} />
                        {emailError && <Alert variant="danger">{emailError}</Alert>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                        {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};


const LoginModal = ({ showModal, closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        const formData = {
            email,
            password,
        };

        // Realiza la solicitud POST a la API de inicio de sesión
        axios.post('http://localhost:3000/api/login', formData)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
                closeModal(); // Cierra el modal después de enviar el formulario
                if(response.data.userState === 'admin') {
                    navigate('/admin');
                    isLoggedIn = true;
                    loggedInUserName = response.data.userName;
                    console.log(loggedInUserName);
                } else {
                    navigate('/Menu');
                    isLoggedIn = true;
                    loggedInUserName = response.data.userName;
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
                // Aquí puedes manejar el error, mostrar mensajes de error, etc.
            });
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Iniciar Sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleEmailChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NavBarMenu;