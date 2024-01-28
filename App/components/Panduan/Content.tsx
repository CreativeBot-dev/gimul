import { View } from "react-native";
import React from "react";
import AppULText from "../AppULText";

interface IData {
  pelaksana: string;
  waktu: string;
  alat: any;
  cara: string;
  video: any;
}

interface IContent {
  data: IData;
}

export default function Content(props: IContent) {
  const { data } = props;

  return (
    <View>
      <AppULText title="Pelaksana" data={data.pelaksana} />
      <AppULText title="Waktu" data={data.waktu} />

      {/* {Object.values(data.alat).map((alat, idx) => (
        <AppListText data={alat} />
      ))} */}
    </View>
  );
}
