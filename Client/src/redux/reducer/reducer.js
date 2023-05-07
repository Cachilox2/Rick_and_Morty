import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  REMOVE_CARD
} from "../action-types/action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload
      };
    case REMOVE_CARD:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char => char.id !== payload)),
        allCharactersFav: state.myFavorites.filter((char => char.id !== payload)),
  
      }
    case FILTER:
      const filterChar = state.allCharactersFav.filter((char) => {
        return char.gender === payload;
      });

      return {
        ...state,
        myFavorites: payload === "All" ? [...state.allCharactersFav] : filterChar,
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];

      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
