import React from "react";
import NavBar from "../components/Navbar";
import Countdown from "react-countdown";
import "../css/InProgress.css";

const InProgress = () => {
    // Fecha de finalización del temporizador (cambiar a la fecha deseada)
    const countdownDate = new Date("2023-12-31T00:00:00").getTime();

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Aquí podrías mostrar algo una vez que el temporizador llegue a cero
          return <div>¡El tiempo ha terminado!</div>;
        } else {
          // Muestra el temporizador
          return (
            <div className="countdown-wrapper">
            <div className="countdown-item">
              <span className="large-text">{days}</span>
              <p className="large-text">Días</p>
            </div>
            <div className="countdown-item">
              <span className="large-text">{hours}</span>
              <p className="large-text">Horas</p>
            </div>
            <div className="countdown-item">
              <span className="large-text">{minutes}</span>
              <p className="large-text">Minutos</p>
            </div>
            <div className="countdown-item">
              <span className="large-text">{seconds}</span>
              <p className="large-text">Segundos</p>
            </div>
          </div>
          );
        }
      };

    return (
        <div>
        <NavBar />
        <div className="container text-center mt-5 justify-content-center align-items-center">
          <div className="coming-soon p-100">
            <h5 className="large-text">¡Próximamente!</h5>
            <p className="large-text">Estamos trabajando en algo genial. ¡Muy pronto estará listo!</p>
            <Countdown date={countdownDate} renderer={renderer} />
          </div>
        </div>
      </div>
    );
}

export default InProgress;