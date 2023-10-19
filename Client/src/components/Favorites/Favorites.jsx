import { connect, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import Card from "../card/Card";
import { filterCards, orderCards, resetFav } from "../../redux/actions/action";
import { useState } from "react";

function Favorites(props) {
    const {myFavorites} = props
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const [opcion1, setOpcion1] = useState('');
    const [opcion2, setOpcion2] = useState('');

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value))
      setOpcion1(e.target.value)
      setAux(!aux)
    }

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value))
      setOpcion2(e.target.value)
    }

    const handleReset = (e) =>{
      dispatch(resetFav())
      setOpcion1('')
      setOpcion2('')
    } 

   return <div>
      <div className={styles.Order}>
         <select value={opcion1} className={styles.favFilter} onChange={handleOrder}>
            <option value=""disabled>Select an option</option>
            <option value="A">Ascendant</option>
            <option value="D">Descending</option>
         </select>
         <select value={opcion2} className={styles.favFilter} onChange={handleFilter}>
            <option value="" disabled>Select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
         </select>
         <button className={styles.favReset} onClick={handleReset}>Reset Filters</button>
      </div>
      <div className={styles.fav}>
            {myFavorites.map((char) => {
               return(
                <Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                image={char.image}
                />
                )
               })}
         </div>;
            </div>;
}

const mapStateToProps = (state) => {
    return{
       myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps, null)(Favorites);