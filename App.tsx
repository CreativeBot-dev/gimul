import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./App/pages/AppTabs";
import { useFonts } from "expo-font";

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
            name="App"
            component={AppTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
