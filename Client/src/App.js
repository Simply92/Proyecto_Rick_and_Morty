// COMPONENTES
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/NavBar/Nav';
import ErrorPage from "./components/Error/Errorpage.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import RutasSeguras from './components/RutasSeguras/RutasSeguras';
import Register from './components/Register/RegisterUser';
//HOOKS
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useLocalStorage from "./components/RutasSeguras/UseLocal";
//ESTILOS
import Swal from 'sweetalert2';

function App() {
   const [access, setAccess] = useLocalStorage("acces", false);
   const [characters, setCharacters] = useState([]);

   const {pathname} = useLocation();
   const navigate = useNavigate();

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   const login = async (userData) => {
      try {
         const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
       access && navigate('/home');
      } catch (error) {
         Swal.fire('Incorrect data', '', 'error')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // const onSearch =  (id) =>{
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          const idExistente = characters.some(char => char.id === data.id);
   //          if(idExistente){
   //             Swal.fire('The id is repeated!','','warning')
   //          } else{
   //         setCharacters((oldChars) => [...oldChars, data])}; 
   //       } else {
   //           Swal.fire('This id was not found!', '', 'error')
   //       }
   //    }).catch();
   // }

   const onSearch = async (id) =>{
      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        if (data.name) {
                  const idExistente = characters.some(char => char.id === data.id);
                  if(idExistente){
                     Swal.fire('The id is repeated!','','warning')
                  } else{
                 setCharacters((oldChars) => [...oldChars, data])}; 
                  }
      } catch (error) {
         Swal.fire('This id was not found!', '', 'error')
      }
}
  
   function onClose(id) {
     const newCharacters = characters.filter((char) => char.id !== (id));
     setCharacters(newCharacters);
  }
  
//   function login(userData) {
//    if (userData.password === PASSWORD && userData.email === EMAIL) {
//       setAccess(true);
//       navigate('/home');
//    }

   return (
      
      <div className='App'>
         {pathname !== '/' && pathname !== '/register' &&<Nav onSearch= {onSearch}/>}
         <Routes>
         <Route path='/' element={<Form login={login} />} />
         <Route path='/register' element={<Register/>}/>

         <Route element={<RutasSeguras access={access}/>}>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Route>

         <Route path='/*' element={<ErrorPage />} />
         </Routes>
      </div>
   );
}

export default App;
