import { useState } from 'react';
import styles from '../components/styles/SearchBar.module.css'

export default function SearchBar(props) {
   
   const { onSearch } = props;
   const [character, setCharacter] = useState('');
   const handleChange = (e) => {
      setCharacter(e.target.value)
   };

   return (
      <div className={styles.search}>
         <input type='search' value={character} onChange={handleChange}/>
         <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}
