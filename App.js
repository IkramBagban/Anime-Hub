import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourites from "./src/screens/Favourites";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/redux/store";
import HomeNavigations from "./src/navigations/HomeNavigation";
const Stack = createNativeStackNavigator();


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
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
