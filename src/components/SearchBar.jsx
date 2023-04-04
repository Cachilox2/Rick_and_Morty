import styles from "../stylesheets/SearchBar.module.css"

const SearchBar = ({onSearch}) => {

   return (
      <div className={styles.searchContainer}>
         <input className={styles.inputSearch} type='search' />
         <button className={styles.buttonSearch} onClick={onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar
