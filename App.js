// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// // import AnimeInfoComponent from './components/AnimeInfoComponent';
// // import CharacterListComponent from './components/CharacterListComponent';
// // import CharacterDetailComponent from './components/CharacterDetailComponent';
// import HomeScreen from './src/screens/HomeScreen';
// import { createNativeStackNavigator } from '@react-navigation/stack';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         {/* <Stack.Screen name="Character List" component={CharacterListComponent} />
//         <Stack.Screen name="Character Detail" component={CharacterDetailComponent} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import AnimeDetails from "./src/screens/AnimeDetails";
import CharacterDetails from "./src/screens/CharacterDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourites from "./src/screens/Favourites";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
const Stack = createNativeStackNavigator();



const addToFavorites = async (anime) => {
  // try {
  //   const storedFavorites = await AsyncStorage.getItem('favorites');
  //   const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  //   // Check if the anime is already in favorites
  //   if (!favorites.some(favorite => favorite.id === anime.id)) {
  //     const updatedFavorites = [...favorites, anime];
  //     await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  //     console.log('Anime added to favorites');
  //   } else {
  //     console.log('Anime is already in favorites');
  //   }
  // } catch (error) {
  //   console.log('Error adding to favorites', error);
  // }
  console.log("adding to favourite")
};

const HomeNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="anime-details"
        component={AnimeDetails}
        options={({ route }) => ({
          title: route.params.details.title.english,
          headerRight: ({ color, size }) => {
            return (
              <TouchableOpacity
                onPress={() => addToFavorites(route.params.details)}
              >
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};

const FavouritesNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeNavigations"
          component={HomeNavigations}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
            title: "Home",
          }}
        />
        <Tab.Screen
          name="FavouritesNavigations"
          component={FavouritesNavigations}
          options={{
            title: "Favourites",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="heart" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
