//import react from "React";
import NavBar from "../components/Navbar";
import "../css/ProfilePage.css";
import profilePicture from "../assets/img/foto_perfil.jpeg"

const ProfilePage = () => {
    return (
        <>
        <NavBar/>
        <div className="d-flex row w-100 mb-4">
            <div className="col-md-3 m-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center mt-2 mb-2">
                        <img className="rounded-circle" src={profilePicture} alt="profile picture" width="150"/>
                        <div className="mt-3">
                            <h4 className="fw-bold fs-4">Franco Espinoza</h4>
                            <p className="text-muted">francojiseespinoza@gmail.com</p>
                        </div>
                    </div>
                    <a role="button" className="btn btn-light d-flex row p-3" href="/working">
                        <div className="col flex-grow-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M11.5 5c0 2.49-4.5 8.5-4.5 8.5S2.5 7.49 2.5 5a4.5 4.5 0 0 1 9 0Z"/><circle cx="7" cy="5" r="1.5"/></g></svg>
                        </div>
                        <div className="col text-start">
                            <span>Mis Direcciones</span>
                        </div>
                    </a>
                    <a role="button" className="btn btn-light d-flex row p-3" href="/working">
                        <div className="col flex-grow-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2l-2 2l-2-2l-2 2l-2-2l-3 2M9 7h6m-6 4h6m-2 4h2"/></svg>
                        </div>
                        <div className="col text-start">
                            <span>Mis Pedidos</span>
                        </div>
                    </a>
                    <a role="button" className="btn btn-light d-flex row p-3" href="/working">
                        <div className="col flex-grow-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"/></svg>
                        </div>
                        <div className="col text-start">
                            <span>Mis Favoritos</span>
                        </div>
                    </a>
                    <a role="button" className="btn btn-light d-flex row p-3" href="/working">
                        <div className="col flex-grow-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4a352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"/></svg>
                        </div>
                        <div className="col text-start">
                            <span>Ayuda en Línea</span>
                        </div>
                    </a>
                </div>
            </div>
            </div>
            <div className="col-md-8">
                <div className="card b-none p-4" style={{background: "transparent", border: "none"}}>
                    <h5 className="card-title fs-2 fw-bold">Mi Cuenta</h5>
                    <div className="card-body">
                        <h5 className="fw-bold">Perfil</h5>
                        <div className="container mb-4">
                            <button type="button" className="row mt-2 mb-2 bg-white p-3 w-75" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                <div className="col flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"/></svg>
                                </div>
                                <div className="col text-start">
                                    <h6>Informacion Personal</h6>
                                </div>
                                <div className="col flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg>
                                </div>
                            </button>
                            <div className="modal fade" id="staticBackdrop2" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                <div className="modal-dialog d-flex justify-content-center">
                                    <div className="modal-content w-100">
                                        <div class="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel2">Datos Personales</h5>
                                            <button type="button" className="btn-close bg-danger d-flex justify-content-center align-items-center text-white" data-bs-dismiss="modal" aria-label="Close">X</button>
                                        </div>
                                        <div className="modal-body p-4">
                                            <form>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="name">Nombre</label>
                                                    <input type="text" id="name" className="form-control" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="email">E-mail</label>
                                                    <input type="email" id="email" className="form-control" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="password">Contraseña</label>
                                                    <input type="password" id="password" className="form-control" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="confirmPassword">Confirmar Contraseña</label>
                                                    <input type="password" id="confirmPassword" className="form-control" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="image">Foto de Perfil</label>
                                                        <input
                                                            type="file"
                                                            id="image"
                                                            className="form-control"
                                                            accept="image/*"  // Limitar a archivos de imagen
                                                            //onChange=""
                                                        />
                                                </div>

                                                <button type="submit" className="btn btn-primary active">Sign up</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="fw-bold">Soporte</h5>
                        <div className="container mb-4">
                            <a role="button" className="btn btn-light d-flex row mt-2 mb-2 p-3 w-75" href="/working">
                                <div className="col flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                                </div>
                                <div className="col text-start">
                                    <h6>Términos y Condiciones</h6>
                                </div>
                                <div className="col flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg>
                                </div>
                            </a>
                            <a role="button" className="btn btn-light d-flex row mt-2 mb-2 p-3 w-75" href="/working">
                                <div className="col flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13Zm5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3ZM9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"/></svg>
                                </div>
                                <div className="col text-start">
                                    <h6>Políticas de Privacidad</h6>
                                </div>
                                <div className="col flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">

            </div>
        </div>
        </>
    )
}

export default ProfilePage;