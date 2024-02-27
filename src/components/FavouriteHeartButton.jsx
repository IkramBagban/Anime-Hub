import {TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from '../redux/favourites/favouriteAction';
import {  AntDesign } from "@expo/vector-icons";


const FavouriteHeartButton = ({ details, _id }) => {
    const dispatch = useDispatch();

    const favourites = useSelector(state => state.favourites);
    const isFavourite = favourites.some(f => f._id === _id);

    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(addToFavourite({ anime: details, _id: _id }));
            }}
        >
            <AntDesign name={isFavourite ? "heart" : "hearto"} size={24} color={isFavourite ? "red" : "black"} />
        </TouchableOpacity>
    )
}

export default FavouriteHeartButton