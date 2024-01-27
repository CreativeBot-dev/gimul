import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { APP_TABS } from "../constants/APP_TABS";

export default function AppTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          elevation: 2,
          backgroundColor: "#FFD1DA",
          borderRadius: 10,
          height: 70,
        },
      }}
    >
      {APP_TABS.map((data, index) => (
        <Tab.Screen
          key={index}
          name={data.id}
          component={data.component}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View
                    style={
                      focused
                        ? {
                            backgroundColor: "#FBA1B7",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            borderWidth: 4,
                            elevation: 2,
                            borderColor: "white",
                            shadowRadius: 3.84,
                            shadowOpacity: 0.3,
                            marginBottom: 2,
                          }
                        : {}
                    }
                  >
                    {data.icon}
                  </View>
                  <Text
                    style={
                      focused
                        ? { paddingBottom: 31, fontFamily: "Poppins-Medium" }
                        : { display: "none" }
                    }
                  >
                    {data.id}
                  </Text>
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
