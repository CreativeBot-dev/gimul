import { View, Text } from "react-native";
import React from "react";

import GradientLayout from "../components/Layout/GradientLayout";
import PanduanHead from "../components/Panduan/PaduanHead";

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
