import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Nav = ({onSearch}) => {
    function randomCharacter(event) {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        onSearch(randomNumber);
      }
    const {pathname} = useLocation()
    
return(
    <div className={styles.navBar}>
        <div className={styles.btn}>
        <NavLink to= "/about">
            <button className={`${styles.normalButton} ${pathname === "/about"? styles.activeButton : ''}`} >About</button>
            </NavLink>
        <NavLink to= "/home" >
            <button className={`${styles.normalButton} ${pathname === "/home"? styles.activeButton : ''}`} >Home</button>
            </NavLink>
        <NavLink to= "/favorites" >
            <button className={`${styles.normalButton} ${pathname === "/favorites"? styles.activeButton : ''}`}>Favorites</button>
            </NavLink>
        </div> 
        <Link to= "/"><button className={styles.logOut}>Log out</button></Link>
        <div className={styles.search}>
        <button className={styles.random} onClick={randomCharacter}>Random</button>
        <SearchBar onSearch={onSearch} />
        </div>
    </div>
)}

export default Nav;