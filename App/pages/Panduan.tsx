import { View, Text } from "react-native";
import React from "react";

import GradientLayout from "../Components/Layout/GradientLayout";
import PanduanHead from "../Components/Panduan/PaduanHead";

export default function Panduan() {
  const gradientProps = {
    startColor: "#FFD1DA",
    endColor: "white",
  };
  return (
    <GradientLayout gradientProps={gradientProps}>
      <PanduanHead />
    </GradientLayout>
  );
}
