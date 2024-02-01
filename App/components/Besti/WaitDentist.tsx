import { View, Text } from "react-native";
import React from "react";
import FeatureHead from "../FeatureHead";
import LottieView from "lottie-react-native";
import waitDentist from "../../assets/waitDentist.json";

export default function WaitDentist() {
  return (
    <View
      style={{
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <FeatureHead
        name="Yuk Periksa Gigi Rutin"
        textStyle={{
          color: "black",
          fontFamily: "LilitaOne-Regular",
          fontSize: 20,
        }}
      />

      <LottieView
        autoPlay
        source={waitDentist}
        style={{ height: 250, width: 250 }}
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
