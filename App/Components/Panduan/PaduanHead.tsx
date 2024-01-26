import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function PanduanHead() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "pink",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          backgroundColor: "red",
          fontFamily: "LilitaOne-Regular",
          color: "white",
        }}
      >
        BESTI
      </Text>
    </View>
  );
}
