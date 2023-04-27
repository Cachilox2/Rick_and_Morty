import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({})
  }, [id])

  return (
    <div>
      {
        character.name ? (
          <div className="detail">
        
            <div className="detail__information">
              <h2>{character.name}</h2>
              <p>Status | {character.status}</p>
              <p>Gender | {character.gender}</p>
              <p>Specie | {character.species}</p>
              <p>Origin | {character.origin.name}</p>
            </div>

            <img className="detail__img" src={character.image} alt={character.name} />
          </div>
        ) : (
          <h1 className="loading">Loading...</h1>
        )
      }
    </div>
  )
}

export default Detail
