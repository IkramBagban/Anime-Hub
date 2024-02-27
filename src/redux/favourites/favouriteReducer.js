import { ADD_TO_FAVOURITE } from "./favouriteAction";

const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE: {
      const { favourites } = state;
      if (favourites.length > 0) {
        let animeIdx = favourites.findIndex(
          (f) => f._id === action.payload._id
        );
        console.log("ANIMEIDX", animeIdx);
        if (animeIdx !== -1) {
          const updatedFavourites = favourites.filter(
            (f) => f._id !== action.payload._id
          );
          return { ...state, favourites: updatedFavourites };
        }
      } else {
        return {
          ...state,
          favourites: [...favourites, action.payload],
        };
      }
    }

    default:
      return state;
  }
};

export default favouriteReducer;
