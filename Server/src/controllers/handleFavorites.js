let myFavorites = [];

const postFav = (req, res) => {
  try {
    const character = req.body;
    const charFind = myFavorites.find(fav => fav.id === character.id)

    if (charFind) throw Error("El personaje ya existe en favoritos")

    myFavorites.push(character);
    return res.status(200).json(myFavorites);

  } catch (error) {
    return res.status(404).send(error.message);
  }
};

const deleteFav = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "id not found" });
    }

    myFavorites = myFavorites.filter((fav) => fav.id !== id);

    res.json(myFavorites);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  postFav,
  deleteFav,
};
