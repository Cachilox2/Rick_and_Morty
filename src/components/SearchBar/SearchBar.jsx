// import styles from "../../stylesheets/SearchBar.module.css"
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        className="search-input"
        onChange={handleChange}
        value={id}
        type="search"
      />

      <button
        className="add-button"
        onClick={() => onSearch(id)}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
