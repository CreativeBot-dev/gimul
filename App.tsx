import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./App/pages/AppTabs";
import { useFonts } from "expo-font";
import NewUser from "./App/pages/NewUser";
import Profile from "./App/pages/Profile";
import { STACK_SCREEN } from "./App/constants/STACK_SCREEN";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "LilitaOne-Regular": require("./assets/fonts/LilitaOne-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
          <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="newUser"
            component={NewUser}
            options={{ headerShown: false }}
          />

          {STACK_SCREEN.map((data, idx) => (
            <Stack.Screen
              key={idx}
              name={data.name}
              component={data.component}
              options={{
                headerTitleStyle: { display: "none" },
                headerTransparent: true,
                headerBackImage: () => (
                  <Ionicons name="arrow-back-outline" size={35} color="white" />
                ),
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
