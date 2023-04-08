import { NavLink } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

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
  return (
    <div className="card" key={id}>
      <VscClose className="card__close" onClick={() => onClose(id)} />
      <img src={image} alt={name} />

      <NavLink className="card__title" to={`/detail/${id}`}>
        <h1>{name}</h1>
      </NavLink>

      <div className="card__information">
         <p>Status: {status}</p>
         <p>Species: {species}</p>
         <p>Gender: {gender}</p>
         <p>Location: {origin}</p>
      </div>

    </div>
  );
};

export default Card;
