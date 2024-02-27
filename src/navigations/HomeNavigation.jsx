import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AnimeDetails from "../screens/AnimeDetails";
import CharacterDetails from "../screens/CharacterDetails";
import FavouriteHeartButton from "../components/FavouriteHeartButton";

const Stack = createNativeStackNavigator();

const HomeNavigations = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="anime-details"
                component={AnimeDetails}
                options={({ route }) => ({
                    title: route.params.details.title.english,
                    headerRight: () => <FavouriteHeartButton details={route.params.details} _id={route.params._id} />
                })}
            />
            <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        </Stack.Navigator>
    );
};

export default HomeNavigations