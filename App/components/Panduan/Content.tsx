import { View } from "react-native";
import React from "react";
import AppULText from "../AppULText";
import AppLIText from "../AppLIText";
import { IPanduanPage } from "../../interfaces/IPanduanPage";
import StepPlayer from "../videoPlayer/StepPlayer";

export interface IContent {
  data: IPanduanPage;
}

export default function Content(props: IContent) {
  const { data } = props;

  return (
    <View style={{ gap: 30 }}>
      <AppULText
        title="Pelaksana"
        titleStyle={{
          padding: 3,
          paddingHorizontal: 10,
          backgroundColor: "#FBA1B7",
          borderRadius: 5,
          fontWeight: "bold",
        }}
        data={data.pelaksana}
      />
      <AppULText
        titleStyle={{
          padding: 3,
          paddingHorizontal: 10,
          backgroundColor: "#FBA1B7",
          borderRadius: 5,
          fontWeight: "bold",
        }}
        title="Waktu"
        data={data.waktu}
      />
      <View>
        <AppULText
          titleStyle={{
            padding: 3,
            paddingHorizontal: 10,
            backgroundColor: "#FBA1B7",
            borderRadius: 5,
            fontWeight: "bold",
          }}
          title="Alat"
        />
        {Object.values(data.alat).map((alat, idx) => (
          <AppLIText key={idx} data={alat} />
        ))}
      </View>
      <AppULText
        titleStyle={{
          padding: 3,
          paddingHorizontal: 10,
          backgroundColor: "#FBA1B7",
          borderRadius: 5,
          fontWeight: "bold",
        }}
        title="Cara"
        data={data.cara}
      />
      {data.video.map((video, idx) => (
        <StepPlayer
          key={idx}
          style={{ height: 200 }}
          source={video.src}
          name={video.title}
          sumber={video.sumber}
        />
      ))}
    </View>
  );
}
