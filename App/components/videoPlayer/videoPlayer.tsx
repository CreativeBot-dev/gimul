import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

interface IVideoPlayer {
  src?: any;
  title?: string;
  sumber?: string;
}
export default function VideoPlayer(props: IVideoPlayer) {
  const { src, sumber, title } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState({});

  function setOrientation() {
    if (Dimensions.get("window").height > Dimensions.get("window").width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        elevation: 3,
        overflow: "hidden",
        borderRadius: 15,
        marginVertical: 30,
      }}
    >
      <Text
        style={{
          paddingHorizontal: 10,
          backgroundColor: "#FFF0F5",
          color: "black",
          fontSize: 17,
          textAlign: "center",
          fontFamily: "Poppins-SemiBold",
        }}
      >
        {title}
      </Text>
      <Video
        style={{ minHeight: 205 }}
        source={src}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={setStatus}
        onFullscreenUpdate={setOrientation}
      />

      <Text
        style={{
          padding: 2,
          backgroundColor: "#FFF0F5",
          color: "black",
          fontSize: 12,
          textAlign: "center",
        }}
      >
        {sumber}
      </Text>
    </View>
  );
}
