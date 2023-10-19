import styles from "./card.module.css"
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = (props) => {
  const {
    id,
    name,
    status,
    species,
    gender,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const { pathname } = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
     setIsFav(!isFav);
  };
 
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={status === "Alive" ? styles.divAlive :
    status === "Dead" ? styles.divDead : styles.divUnknown}>
      <div className={styles.fav}>
      {isFav ? (
        <button className={styles.btnFav} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.btnFav} onClick={handleFavorite}>🤍</button>
      )}
      </div>
      <img className={styles.imagen} src={image} alt="" />
      {pathname !== "/favorites" && (
        <button className={styles.btn} onClick={() => onClose(id)}>X</button>
      )}
      <div className={styles.datos}>
      <Link to={`/detail/${id}`}>
        <h2  className={styles.name} >
          {name.split(' ').length > "2" ? name.split(' ').slice(0, 2).join(' ') + "..." : name}
          </h2>
      </Link>
      <h2 className={styles.status}>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
