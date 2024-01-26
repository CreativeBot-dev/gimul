import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeHead() {
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
      <TouchableOpacity>
        <MaterialIcons name="person" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
