import { Text } from "react-native";
import React from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";

export default function VideoEdukasi() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Video Edukasi" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <Text>RRRRR </Text>
      </AppScrollView>
    </LayoutV2>
  );
}
