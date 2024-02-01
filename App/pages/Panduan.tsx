import React, { useEffect, useState } from "react";

import GradientLayout from "../components/Layout/GradientLayout";
import PanduanHead from "../components/Panduan/PaduanHead";
import PanduanMenuBtn from "../components/Panduan/PanduanMenuBtn";
import { Dimensions, View } from "react-native";
import { Image } from "expo-image";
import { ResizeMode } from "expo-av";
import { ScrollView } from "react-native-gesture-handler";

export default function Panduan() {
  const gradientProps = {
    startColor: "#FBA1B7",
    endColor: "white",
  };

  const [imageHeight, setImageHeight] = useState(0);
  useEffect(() => {
    const screenWidth = Dimensions.get("window").width;
    const calculatedHeight = (1 / 1) * screenWidth; // Adjust the aspect ratio as needed
    setImageHeight(calculatedHeight);
  }, []);
  return (
    <GradientLayout gradientProps={gradientProps}>
      <PanduanHead />

      <ScrollView
        style={{
          height: "100%",
          borderRadius: 20,
          marginBottom: 50,
        }}
      >
        <View style={{ padding: 10, paddingBottom: 230 }}>
          <Image
            source={require("../../assets/image/Edukasi/gimul.png")}
            resizeMode={ResizeMode.CONTAIN}
            style={{ height: imageHeight, width: "auto" }}
          />

          <PanduanMenuBtn />
        </View>
      </ScrollView>
    </GradientLayout>
  );
}
