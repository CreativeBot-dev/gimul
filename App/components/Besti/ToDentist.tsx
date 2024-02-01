import { View, Text } from "react-native";
import React from "react";
import FeatureHead from "../FeatureHead";
import AppButton from "../AppButton";
import LottieView from "lottie-react-native";
import toDentist from "../../assets/toDentist.json";

interface IProps {
  onPress: () => void;
}

export default function ToDentist(props: IProps) {
  const { onPress } = props;
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
        name="Udah Waktunya Periksa Gigi Nih"
        textStyle={{
          color: "black",
          fontFamily: "LilitaOne-Regular",
          fontSize: 20,
        }}
      />
      <LottieView
        autoPlay
        source={toDentist}
        style={{ height: 250, width: 250 }}
      />
      <Text style={{ fontSize: 15, textAlign: "center" }}>
        Yuk Periksa Gigimu Sekarang
      </Text>
      <AppButton
        name="Saya Sudah Periksa Gigi"
        onPress={onPress}
        BtnStyle={{ backgroundColor: "#FBA1B7", margin: 25, width: 250 }}
      />
    </View>
  );
}
