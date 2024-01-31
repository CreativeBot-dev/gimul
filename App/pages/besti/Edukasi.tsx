import React from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import AppImage from "../../components/AppImage";
import { EDUKASI } from "../../constants/EDUKASI";

export default function Edukasi() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Edukasi" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        {EDUKASI.map((data, idx) => (
          <AppImage
            key={idx}
            source={data.src}
            style={{ height: 200 }}
            title={data.note}
          />
        ))}
      </AppScrollView>
    </LayoutV2>
  );
}
