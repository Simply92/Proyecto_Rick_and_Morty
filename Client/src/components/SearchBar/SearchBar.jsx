import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   
   const handleChange = (event) => {
      let input = event.target.value;
      setId(input)   
   };
   
    const handleSubmit = (event) => {
      event.preventDefault()
      setId("")
    };


   return (
         <form  onSubmit={handleSubmit}>
         <input
         type='search'
         placeholder='Enter id'
         value={id}
         onChange={handleChange}
         className= {styles.input}  />
         <button className={styles.butSear} onClick={() =>onSearch(id)}>ADD</button>
         </form>
   );
}
