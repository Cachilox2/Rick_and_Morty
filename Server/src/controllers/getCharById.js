const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const STATUS_OK = 200;
const STATUS_ERR = 404;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios(`${URL}${id}`);

    if (!data.name) throw new Error(`Faltan datos del personaje con id ${id}`);

    const character = {
      id: id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };
    return res.status(STATUS_OK).json(character);

  } catch (error) {
    return error.message.includes("Character")
    ? res.status(STATUS_ERR).send(error.message)
    : res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
