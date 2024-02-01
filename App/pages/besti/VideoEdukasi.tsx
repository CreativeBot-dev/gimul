import React from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import { VIDEO_EDUKASI } from "../../constants/VIDEO_EDUKASI";
import VideoPlayer from "../../components/videoPlayer/videoPlayer";
import { View } from "react-native";

export default function VideoEdukasi() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Video Edukasi" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <View>
          {VIDEO_EDUKASI.map((data, idx) => (
            <VideoPlayer
              key={idx}
              src={data.src}
              sumber={data.sumber}
              title={data.title}
            />
          ))}
        </View>
      </AppScrollView>
    </LayoutV2>
  );
}
