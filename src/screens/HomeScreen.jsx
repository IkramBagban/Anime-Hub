import React from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch';
import AnimeCard from '../components/AnimeCard';

const HomeScreen = ({ navigation }) => {
    const { data } = useFetch('/anime');

    return (
        <View style={styles.container}>
            <FlatList
                data={data?.data}
                renderItem={({ item, }) => {
                    return (
                        <AnimeCard details={item} navigation={navigation}/>
                    )
                }}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f0f0f0',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },

    button: {
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%',
        backgroundColor: '#1e90ff',
    },

    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

});

export default HomeScreen;
