import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';

const CharacterDetails = ({ route }) => {
    const { character } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: character.image.medium }} style={styles.image} />
            <Text style={styles.name}>{character.name.full || character.name.native}</Text>
            <Text style={styles.details}>Gender: {character.gender || 'N/A'}</Text>
            <Text style={styles.details}>Age: {character.age || 'N/A'}</Text>
            <Text style={styles.description}>{character.description || 'No description available.'}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    details: {
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        marginHorizontal: 10,
        textAlign: 'justify',
    },
});

export default CharacterDetails;
