import { NavLink } from "react-router-dom";
import { VscClose, VscHeart, VscHeartFilled } from "react-icons/vsc";
import { addFav, removeFav } from "../../redux/actions/action.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();

  const allCharacters = useSelector((state) => state.allCharacters);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    }else {
      setIsFav(true);
      dispatch(
        addFav({ id, name, status, species, gender, origin, image, onClose })
      );
    }
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters, id]);

  return (
    <div className="card" key={id}>
      {isFav ? (
        <VscHeartFilled className="card__heart" onClick={handleFavorite} />
      ) : (
        <VscHeart className="card__heart" onClick={handleFavorite} />
      )}
      
      <VscClose className="card__close" onClick={() => onClose(id)} />
      <img src={image} alt={name} />

      <NavLink className="card__title" to={`/detail/${id}`}>
        <h1>{name}</h1>
      </NavLink>

      <div className="card__information">
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        {/* <p>Location: {origin}</p> */}
      </div>
    </div>
  );
};

export default Card;
