import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeHead() {
  const Navigation = useNavigation();

  function goToProfile() {
    Navigation.navigate("Profile" as never);
  }
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "LilitaOne-Regular",
          color: "white",
        }}
      >
        BESTI
        <Text style={{ fontWeight: "500" }}> GIMUL</Text>
      </Text>
      <TouchableOpacity onPress={goToProfile}>
        <MaterialIcons name="person" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
