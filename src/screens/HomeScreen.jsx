import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import useFetch from '../hooks/useFetch';

const HomeScreen = ({ navigation }) => {
    const { data } = useFetch('/Page');

    return (
        <View style={styles.container}>
            <FlatList
                data={data?.data?.media}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.coverImage.large }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                {item.title.english || item.title.native}
                            </Text>
                            <Text style={styles.description}>
                                {item.description.length < 200 ? item.description : `${item.description.slice(0, 120)}...`}
                            </Text>
                            <View style={{flex:1, flexDirection : 'row', gap:3}}>

                                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.siteUrl)}>
                                    <Text style={styles.buttonText}>Visit Site</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('anime-details', { details: item })}>
                                    <Text style={styles.buttonText}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => `${item?.title.english}${index}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f0f0f0', // Updated background color for the whole container
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff', // Background color for each item
        borderRadius: 10, // Rounded corners for the item container
        shadowColor: '#000', // Shadow for elevation effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 5, // Rounded corners for the image
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5, // Margin bottom for title
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10, // Add space above the buttons
    },

    button: {
        marginTop: 5, // Reduce if buttons are side by side
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%', // If side by side, adjust width
        backgroundColor: '#1e90ff', // Consider different colors for each button
    },

    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

});

export default HomeScreen;
