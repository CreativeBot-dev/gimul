import React from "react";
import FeatureHead from "../../components/FeatureHead";
import LayoutV2 from "../../components/Layout/LayoutV2";
import AppScrollView from "../../components/AppScrollView";
import Content from "../../components/Panduan/Content";
import { PANDUAN_ONE } from "../../constants/PANDUAN";

export default function PanduanOne() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Usia 0 - 3 Tahun" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        {PANDUAN_ONE?.map((data, idx) => <Content key={idx} data={data} />)}
      </AppScrollView>
    </LayoutV2>
  );
}
