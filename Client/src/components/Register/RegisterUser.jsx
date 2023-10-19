import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterUser.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/rickandmorty/register', formData);
    
          if (response) {
            Swal.fire(
              'Successful registration!',
              '',
              'success'
            )
              navigate('/');}
    
        } catch (error) {
          console.error('Error:', error);
        }
      };
      const handleGoBack = () => {
        navigate("/");
      };

  return (
    <div className={styles.contenedor}>
    <form onSubmit={handleSubmit} className={styles.form} >
      <label>
        Name:
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
         <label>
        Last Name:
      </label>
       <input
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />
         <label>
        Email:
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />  
       <label>
      Password:
    </label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className={styles.Btns}>
      <button>Sing in</button>
      <button onClick={handleGoBack}>Back</button>
      </div>
    </form>
    </div>
  );
}

export default Register;




// import styles from './RegisterUser.module.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3001/rickandmorty/register', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Maneja la respuesta del servidor
//       if (response.status === 200) {
//         window.alert('Registro exitoso');
//         navigate('/');
//       } else {
//         console.error('Error al realizar la solicitud');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//      return(
//       <div className={styles.contenedor}>
//       <form onSubmit={handleSubmit} className={styles.form}  action="">
//        <label htmlFor="">Name</label>
//        <input type="text" name='name' value={formData.name} onChange={handleInputChange} />
//        <label htmlFor="">Last name</label>
//        <input type="text" name='lastName' value={formData.lastName} onChange={handleInputChange} />
//        <label htmlFor="email">E-mail</label>
//        <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
//        <label htmlFor="password">Password</label>
//        <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
//        <Link to= "/">
//        <button>sign in</button>
//        </Link>
//        </form>
//        </div>
//      )
// }

// export default Register;