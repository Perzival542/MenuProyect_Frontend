import React from 'react';
import { BarLoader } from 'react-spinners';
import "../../css/Spinner.css";

const Loader = () => {
  return (
    <div className="spinner-container">
      <BarLoader color="#007BFF" size={60} />
    </div>
  );
};

export default Loader;
