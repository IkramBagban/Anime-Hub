import { ADD_TO_FAVOURITE } from "./favouriteAction";

const initialState = {
  favourites: [],
  //   favourites: 0,
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE: {
      if (state.favourites) {
        let animeIdx = state.favourites.findIndex(
          (f) => f._id === action.payload._id
        );
        console.log("ANIMEIDX", animeIdx);
        if (animeIdx !== -1) {
          state.favourites.slice(animeIdx, animeIdx + 1);
          return [...state.favourites];
        }
      }
      return {
        favourites: [...state.favourites, action.payload],
      };
    }

    default:
      return state;
  }
};

export default favouriteReducer;
