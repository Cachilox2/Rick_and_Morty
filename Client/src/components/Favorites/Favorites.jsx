import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/action";
import { useState } from "react";
import { options } from "../../utils/strings";

const options1 = options.slice(0, 2);
const options2 = options.slice(2, 7);

const Favorites = () => {
  const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <div className="filter" key={101}>
        <select className="filter__select" onChange={handleOrder}>
          {options1.map((op) => (
            <option value={op.value}>
              {op.text}
            </option>
          ))}
        </select>

        <select className="filter__select" onChange={handleFilter}>
          {options2.map((op) => (
            <option value={op.value}>
              {op.text}
            </option>
          ))}
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
