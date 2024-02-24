export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'


export const addToFavourite = (anime)=>{
    console.log('add to favourite', anime)
    return {
        type : ADD_TO_FAVOURITE,
        payload : anime
    }
} 