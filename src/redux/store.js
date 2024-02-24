import { createStore } from "redux";
import favouriteReducer from "./favourites/favouriteReducer";

export const store = createStore(favouriteReducer)

