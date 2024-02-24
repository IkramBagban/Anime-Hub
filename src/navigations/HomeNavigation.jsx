import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { ADD_TO_FAVOURITE, addToFavourite } from "../redux/favourites/favouriteAction";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import AnimeDetails from "../screens/AnimeDetails";
import CharacterDetails from "../screens/CharacterDetails";

const Stack = createNativeStackNavigator();

const HomeNavigations = () => {
    const dispatch = useDispatch();

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
                                onPress={() => {
                                    dispatch(addToFavourite({
                                        anime: route.params.details, _id: route.params.details.bannerImage + route.params.index.toString()
                                    }))
                                }
                                }
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

export default HomeNavigations