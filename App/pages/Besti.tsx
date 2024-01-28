import React from "react";
import LayoutV2 from "../components/Layout/LayoutV2";
import FeatureHead from "../components/FeatureHead";
import AppScrollView from "../components/AppScrollView";
import { BESTI_MENU } from "../constants/BESTI";
import BestiMenuBtn from "../components/Besti/BestiMenuBtn";
import { View } from "react-native";

export default function Besti() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="BESTI GIMUL" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <View style={{ gap: 25, margin: 15 }}>
          {BESTI_MENU.map((data, idx) => (
            <BestiMenuBtn key={idx} data={data} />
          ))}
        </View>
      </AppScrollView>
    </LayoutV2>
  );
}
