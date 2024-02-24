import { View, Text, FlatList } from 'react-native';
import React from 'react'
import { useSelector } from 'react-redux'
import AnimeCard from '../components/AnimeCard';

const Favourites = ({ navigation }) => {
    const favourites = useSelector(state => state.favourites)

    return (
        <View>
            <Text>Favourites</Text>
            <FlatList
                data={favourites}
                renderItem={({ item, index }) => {
                    item = item.anime
                    return <AnimeCard item={item} navigation={navigation} index={index} />
                }}
                keyExtractor={(item, index) => `${item?.title?.english}${index}`}
            />
        </View>
    )
}

export default Favourites