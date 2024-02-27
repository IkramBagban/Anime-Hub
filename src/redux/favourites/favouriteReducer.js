import { ADD_TO_FAVOURITE } from "./favouriteAction";

const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE: {
      const { favourites } = state;
      const animeIdx = favourites.findIndex(
        (f) => f._id === action.payload._id
      );
      if (animeIdx === -1) {
        return { ...state, favourites: [...favourites, action.payload] };
      } else {
        const updatedFavourites = favourites.filter(
          (f) => f._id !== action.payload._id
        );
        return { ...state, favourites: updatedFavourites };
      }
    }

    default:
      return state;
  }
};

export default favouriteReducer;
