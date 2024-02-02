import { View, Text } from "react-native";
import React from "react";
import FeatureHead from "../FeatureHead";
import LottieView from "lottie-react-native";
import waitDentist from "../../assets/waitDentist.json";

type TProps = {
  waitingTime: string;
};

export default function WaitDentist(props: TProps) {
  const { waitingTime } = props;
  const year = new Date(waitingTime).getFullYear();
  const month = new Date(waitingTime).toLocaleString("id-ID", {
    month: "long",
  });
  // const month = new Date(waitingTime).getMonth() + 1;
  const day = new Date(waitingTime).getDate();

  const customWaitingTime = `${day.toString().length === 1 ? "0" + day : day} ${month} ${year}`;
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
        name={customWaitingTime}
        textStyle={{
          color: "black",
          fontFamily: "Poppins-Bold",
          fontSize: 20,
        }}
      />
    </View>
  );
}
