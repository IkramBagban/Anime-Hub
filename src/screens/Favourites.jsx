import { View, Text, FlatList} from 'react-native';
import React from 'react'
import { useSelector } from 'react-redux'
import AnimeCard from '../components/AnimeCard';

const Favourites = ({ navigation }) => {
    const favourites = useSelector(state => state.favourites)

    return (
        <View>
            <FlatList
                data={favourites}
                renderItem={({ item }) => {
                    item = item.anime
                    return <AnimeCard details={item} navigation={navigation}/>
                }}
                keyExtractor={(item) => item._id}
            />
        </View>
    )
}

export default Favourites