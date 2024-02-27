export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'


export const addToFavourite = (anime)=>{
    return {
        type : ADD_TO_FAVOURITE,
        payload : anime
    }
} 