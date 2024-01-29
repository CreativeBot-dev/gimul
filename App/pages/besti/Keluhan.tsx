import { Text } from "react-native";
import React from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import Teledentistry from "../../components/Besti/Teledentistry";

export default function Keluhan() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Usia 0 - 3 Tahun" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <Teledentistry />
      </AppScrollView>
    </LayoutV2>
  );
}
