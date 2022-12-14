import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TripScreen } from "./src/screens/TripScreen";
import { FavoritesScreen } from "./src/screens/FavoritesScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { Colors } from "./src/Values/Colors";
import { PlaceProvider } from "./src/Contexts/PlaceContext";
import { StartProvider } from "./src/Contexts/StartContext";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <StartProvider>
      <PlaceProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor={Colors.primary}
            inactiveColor={Colors.themeContrast}
            barStyle={{
              backgroundColor: Colors.theme,
            }}
            sceneAnimationEnabled={true}
            style={{ backgroundColor: Colors.theme }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: "home",
                title: "",
              }}
            />
            <Tab.Screen
              name="Trip"
              component={TripScreen}
              options={{
                tabBarIcon: "bag-suitcase",
                title: "",
              }}
            />

            <Tab.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                tabBarIcon: "cards-heart",
                title: "",
              }}
            />

            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: "account",
                title: "",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PlaceProvider>
    </StartProvider>
  );
}
