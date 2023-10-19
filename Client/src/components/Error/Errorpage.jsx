import React from "react";
import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";
import ErrorImage from "./5203299.jpg";

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div className={styles.allpage}>
        <button className={styles.button} onClick={handleGoBack}>
        Go back!
        </button>
      <img src={ErrorImage} alt="error-page" className={styles.imagen}/>    
    </div>

  )
};

export default ErrorPage;