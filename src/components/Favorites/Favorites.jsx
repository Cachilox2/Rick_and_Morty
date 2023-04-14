import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import { useState } from "react";

const Favorites = () => {
  const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(true)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
    <>
      <div className="filter">
        <select className="filter__select" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select className="filter__select" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      <div className="cardContainer container">
        {myFavorites.map((char) => {
          const { id, name, status, species, gender, origin, image, onClose } = char;
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
