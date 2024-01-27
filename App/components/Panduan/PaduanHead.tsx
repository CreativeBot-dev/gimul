import { View, Text } from "react-native";
import React from "react";

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
          fontFamily: "LilitaOne-Regular",
          color: "white",
        }}
      >
        BESTI
      </Text>
    </View>
  );
}
