import { View, Text } from "react-native";
import React from "react";
import FeatureHead from "../FeatureHead";

export default function WaitDentist() {
  return (
    <View style={{ backgroundColor: "white", elevation: 4, borderRadius: 10 }}>
      <FeatureHead
        name="Yuk Periksa Gigi Rutin"
        textStyle={{
          color: "black",
          fontFamily: "LilitaOne-Regular",
          fontSize: 20,
        }}
      />
      <Text style={{ fontSize: 15, textAlign: "center" }}>
        Jadwal Periksa Gigi Selanjutnya
      </Text>

      <FeatureHead
        name="2 Juli 2024"
        textStyle={{
          color: "black",
          fontFamily: "Poppins-Bold",
          fontSize: 20,
        }}
      />
    </View>
  );
}
