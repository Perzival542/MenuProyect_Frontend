import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { BarLoader } from "react-spinners";


export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Espera 1 segundo antes de cambiar isLoading a false
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <BarLoader color="#36D7B7" loading={true} size={150} />
      </div>
    );
  }

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
