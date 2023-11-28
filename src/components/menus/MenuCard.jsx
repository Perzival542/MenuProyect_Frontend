import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useState, useEffect } from "react";
//import { Card } from "react-bootstrap";
//import "../../css/MenuCard.css";

const MenuCard = ({ menu }) => {
  console.log(menu);
  const { menu_img, menu_name, menu_detail} = menu;
  const [ buttonStatus, setButtonStatus ] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated, user);
    if(isAuthenticated){
      if(user.rol === "client"){
        setButtonStatus(false);
      } else {
        setButtonStatus(true);
      }
    } else {
      setButtonStatus(false);
    }
  }, [isAuthenticated, user])

  const handleAddclick = () => {
    if(!isAuthenticated) {
      navigate("/login");
    } else {
      console.log("Pedido agregado al carrito");
    }
  }

  return (
    <div key={menu._id} className="card bg-dark h-100 d-flex flex-column" style={{width: "18rem", height: "16rem"}}>
      <img
        className="card-img-top"
        src={menu_img.url}
        alt={menu_img.title}
        style={{ width: "100%", height: "200px"}}
      />
      <div className="card-body text-center text-light d-flex flex-column">
        <h5 className="card-title font-weight-bold" style={{ fontSize: "1.25rem" }}>{menu_name}</h5>
        <hr /> {/* Línea divisoria */}
        <p className="card-text mb-4">{menu_detail}</p>
        <div className="mt-auto mb-4">
        <button className="btn btn-primary w-50 font-weight-bold" disabled={buttonStatus} onClick={handleAddclick}>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;