import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

interface IData {
  title: string;
  icon: ReactNode;
  desc: string;
  page: string;
  pageText: string;
}

interface IProps {
  data: IData;
}

export default function BestiMenuBtn(props: IProps) {
  const { data } = props;

  const Navigation = useNavigation();
  function onPressHandle() {
    Navigation.navigate(`${data.page}` as never);
  }
  return (
    <LinearGradient
      colors={["#FFF0F5", "white", "#FFF0F5"]}
      style={{
        elevation: 4,
        height: 200,
        width: "100%",
        borderRadius: 15,
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={onPressHandle}
        style={{ height: 200, position: "relative", justifyContent: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            position: "absolute",
            top: 10,
            left: 10,
          }}
        >
          {data.icon}
          <Text
            style={{
              fontFamily: "LilitaOne-Regular",
              fontSize: 20,
              color: "#FBA1B7",
            }}
          >
            {data.title}
          </Text>
        </View>
        <View style={{ justifyContent: "center", left: 10 }}>
          <Text style={{ fontFamily: "Poppins-Medium", color: "black" }}>
            {data.desc}
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "#FFD1DA",
            width: "150%",
            bottom: 0,
            position: "absolute",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ fontFamily: "Poppins-Medium" }}>{data.pageText}</Text>
          <AntDesign name="arrowright" size={15} color="black" />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
