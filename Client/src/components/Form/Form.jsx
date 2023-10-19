import styles from "./Form.module.css";
import loginImagen from "./imagen_login.jpg";
import { useState } from "react";
import validation from "./validation";
import { Link } from "react-router-dom";

const Form = (props) => {
    const {login} = props;
    const [errors, setErrors] = useState({})
    const [userData, setuserData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        setuserData({...userData, [event.target.name] : event.target.value })
        setErrors(validation({...userData, [event.target.name] : event.target.value}))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }
    
    return(
        <div className={styles.contenedor}>
           <form onSubmit={handleSubmit} className={styles.form}  action="">
           <img className={styles.image} src={loginImagen} alt="Imagen Login" />
            <label htmlFor="email">E-mail</label>
            <input 
            value={userData.email} 
            type="email"
            onChange={handleChange}
            name="email"
             />
             {errors.email && (
             <p style={{color: "red"}}>
                <span>{errors.email}</span>
             </p>
             )}
            <label htmlFor="password">Password</label>
            <input 
            value={userData.password} 
            type="password"
            onChange={handleChange}
            name="password" 
            />
             {errors.password && (
             <p style={{color: "red"}}>
                <span>{errors.password}</span>
             </p>
             )}
            <button>Login</button>
            <Link to='/register'>
            <button>Register</button>
            </Link>
           </form>
        </div>
)
}

export default Form;