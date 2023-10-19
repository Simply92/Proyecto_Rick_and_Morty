import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"

const Detail = () => {
const {id} = useParams()

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

 const [character, setCharacter] = useState({});

    return(
        <div className={styles.Detail}>
         <div className={styles.Info}>
            <h2>Id: {character.id}</h2>
            <h2>Name: {character.name}</h2>
            <h2>Specie: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Origin: {character.origin?.name}</h2>
         </div>
            <div className={styles.image}>
            <img className={styles.img} src={character.image} alt=""/>
            </div>
        </div>
           
    );
}

export default Detail;