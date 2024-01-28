import React from "react";
import LayoutV2 from "../../../components/Layout/LayoutV2";
import FeatureHead from "../../../components/FeatureHead";
import AppScrollView from "../../../components/AppScrollView";

export default function RemindDokterGigi() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Usia 0 - 3 Tahun" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <FeatureHead
          name="Apakah Anak Anda Sudah Pernah Periksa Gigi ??"
          textStyle={{
            color: "black",
            fontSize: 20,
            fontFamily: "Poppins-SemiBold",
          }}
        />
      </AppScrollView>
    </LayoutV2>
  );
}
