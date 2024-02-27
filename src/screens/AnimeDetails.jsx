import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const AnimeDetails = ({ route, navigation }) => {
  const { details } = route.params;
//   const favourites = useSelector(state => state.favourites)


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: details.coverImage.extraLarge }} style={styles.image} />
      <Text style={styles.title}>{details.title.english || details.title.native}</Text>
      <Text style={styles.description}>{details.description.replace(/<br><br>/g, '\n\n')}</Text>
      <View style={styles.charactersContainer}>
        <Text style={styles.sectionTitle}>Characters</Text>
        <FlatList
          data={details.characters.nodes}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> navigation.navigate('CharacterDetails', {character : item})} style={styles.characterItem}>
              <Image source={{ uri: item.image.medium }} style={styles.characterImage} />
              <Text style={styles.characterName}>{item.name.full || item.name.native}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
          horizontal={true}
        />
      </View>
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
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 10,
    textAlign: 'justify',
  },
  charactersContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  characterName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default AnimeDetails;
