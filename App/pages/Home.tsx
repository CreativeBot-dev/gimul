/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from "react";
import HomeHead from "../components/Home/HomeHead";
import GradientLayout from "../components/Layout/GradientLayout";
import Name from "../components/Home/Name";
// import AppButton from "../components/AppButton";
// import { useNavigation } from "@react-navigation/native";
import { useUser } from "../hooks/zustand";
import AppScrollView from "../components/AppScrollView";
import { Image } from "expo-image";
import { Dimensions, Text } from "react-native";
import { ResizeMode } from "expo-av";

export default function Home() {
  const titlePgae: string =
    "Bebas Stunting dengan Jaga Kesehatan Gigi dan Mulut";
  const { user } = useUser();
  const gradientProps = {
    startColor: "#FBA1B7",
    endColor: "white",
  };
  const [imageHeight, setImageHeight] = useState(0);

  // const [imageHeight2, setImageHeight2] = useState(0);
  useEffect(() => {
    const screenWidth = Dimensions.get("window").width;
    const calculatedHeight = (1 / 1) * screenWidth; // Adjust the aspect ratio as needed
    setImageHeight(calculatedHeight);

    // const calculatedHeight2 = (3 / 7) * screenWidth; // Adjust the aspect ratio as needed
    // setImageHeight2(calculatedHeight2);
  }, []);
  // const navigation = useNavigation();
  // const newUserBtn = () => {
  //   navigation.navigate("newUser" as never);
  // };
  return (
    <GradientLayout gradientProps={gradientProps}>
      <HomeHead />
      <AppScrollView style={{ marginTop: 20, padding: 15 }} backcolor="#FFF0F5">
        <Name name={user} />
        <Image
          source={require("../../assets/image/Edukasi/gimul.png")}
          resizeMode={ResizeMode.CONTAIN}
          style={{ height: imageHeight, width: "auto" }}
        />
        {/* <FeatureHead
          name={titlePgae}
          textStyle={{
            color: "black",
            fontFamily: "Poppins-SemiBold",
            // paddingHorizontal: 15,
            fontSize: 20,
          }}
        /> */}
        <Text
          style={{
            color: "black",
            fontFamily: "Poppins-SemiBold",
            // paddingHorizontal: 15,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {'"'}
          {titlePgae}
          {'"'}
        </Text>
        <Image
          source={require("../../assets/image/Edukasi/bottomLogo.png")}
          resizeMode={ResizeMode.CONTAIN}
          style={{ minHeight: 200 }}
        />
      </AppScrollView>
      <HomeHead />
    </GradientLayout>
  );
}
