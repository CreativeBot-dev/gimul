import { View } from "react-native";
import React from "react";
import AppULText from "../AppULText";
import AppLIText from "../AppLIText";
import { IPanduanPage } from "../../interfaces/IPanduanPage";

export interface IContent {
  data: IPanduanPage;
}

export default function Content(props: IContent) {
  const { data } = props;

  return (
    <View style={{ gap: 10 }}>
      <AppULText title="Pelaksana" data={data.pelaksana} />
      <AppULText title="Waktu" data={data.waktu} />
      <AppULText title="Alat" />
      {Object.values(data.alat).map((alat, idx) => (
        <AppLIText key={idx} data={alat} />
      ))}
      <AppULText title="Cara" data={data.cara} />
    </View>
  );
}
