import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      };
    case REMOVE_FAV:
      const favFilterRemoved = state.allCharacters.filter((char) => char.id !== payload)

      return {
        ...state,
        myFavorites : favFilterRemoved,
        allCharacters: favFilterRemoved
      };
    case FILTER:

      const filterChar = state.allCharacters.filter((char) => {
        return char.gender === payload;
      });

      return {
        ...state,
        myFavorites: payload === "All"
        ? [...state.allCharacters]
        : filterChar
      };
    case ORDER:

      const allCharactersFavCopy = [...state.allCharacters];

      return {
        ...state,
        myFavorites: 
          payload === "A"
          ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
          : allCharactersFavCopy.sort((a,b) => b.id - a.id)
      };

    default: return { ...state };
  }
};

export default reducer;
