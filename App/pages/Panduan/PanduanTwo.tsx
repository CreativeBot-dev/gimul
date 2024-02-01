import { View } from "react-native";
import React from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import Content from "../../components/Panduan/Content";
import { PANDUAN_PAGE } from "../../constants/PANDUAN";

export default function PanduanTwo() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Usia 1 - 3 Tahun" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <View style={{ margin: 15 }}>
          {PANDUAN_PAGE.PageTwo?.map((data, idx) => (
            <Content key={idx} data={data} />
          ))}
        </View>
      </AppScrollView>
    </LayoutV2>
  );
}
