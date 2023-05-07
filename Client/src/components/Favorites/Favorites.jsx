import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, removeCard } from "../../redux/actions/action";
import { useState } from "react";
// import { options } from "../../utils/strings";

// const options1 = options.slice(0, 2);
// const options2 = options.slice(2, 7);

const Favorites = () => {
  const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(removeCard(id))
  }

  const handleOrder = (event) => {
    if(!aux) {
      dispatch(orderCards(event.target.value));
      setAux(true);
    }else {
      dispatch(orderCards(event.target.value));
      setAux(false);
    }
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const characters = myFavorites.map(char => {
    return (
      <Card
      key={char.id}
      id={char.id}
      name={char.name}
      status={char.status}
      species={char.species}
      gender={char.gender}
      origin={char.origin}
      image={char.image}
      onClose={onClose}
    />
    )
  })

  return (
    <>
      <div className="filter">
      <section >
            <select className="filter__select" onChange={handleOrder} >
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
            </select>
            <select className="filter__select"  onChange={handleFilter}>
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </select>
        </section>
      </div>
      
      <div className="cardContainer container">
        {characters}
      </div>
    </>
  );
};

export default Favorites;
