import React from "react";

import GradientLayout from "../components/Layout/GradientLayout";
import PanduanHead from "../components/Panduan/PaduanHead";
import PanduanMenuBtn from "../components/Panduan/PanduanMenuBtn";

export default function Panduan() {
  const gradientProps = {
    startColor: "#FBA1B7",
    endColor: "white",
  };
  return (
    <GradientLayout gradientProps={gradientProps}>
      <PanduanHead />
      <PanduanMenuBtn />
    </GradientLayout>
  );
}
