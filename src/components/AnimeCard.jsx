import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking, Touchable } from 'react-native';
import React from 'react'

const AnimeCard = ({ item ,navigation, index}) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.coverImage.large }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {item.title.english || item.title.native}
                </Text>
                <Text style={styles.description}>
                    {item.description.length < 200 ? item.description : `${item.description.slice(0, 120)}...`}
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', gap: 3 }}>

                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.siteUrl)}>
                        <Text style={styles.buttonText}>Visit Site</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('anime-details', { details: item, index: index })}>
                        <Text style={styles.buttonText}>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AnimeCard


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
