import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER
} from "../action-types/action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
        // myFavorites: [...state.myFavorites, action.payload],
        // allCharacters: [...state.myFavorites, action.payload]
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      };
    case FILTER:
      const filterChar = state.allCharacters.filter((char) => {
        return char.gender === action.payload;
      });

      return {
        ...state,
        myFavorites: action.payload === "All" ? [...state.allCharacters] : filterChar,
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharacters];

      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
