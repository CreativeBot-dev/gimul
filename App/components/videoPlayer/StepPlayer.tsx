import React, { useRef, useEffect } from "react";
import { ResizeMode, Video } from "expo-av";
import { Text, View, ViewStyle } from "react-native";

interface IStepPlayer {
  style?: ViewStyle;
  source: any;
  name?: string;
  sumber?: string;
}

const StepPlayer = (props: IStepPlayer) => {
  const { name, source, style, sumber } = props;

  const videoRef = useRef<Video>(null);

  useEffect(() => {
    (async () => {
      if (videoRef.current) {
        await videoRef.current.loadAsync(source);
        await videoRef.current.playAsync();
        await videoRef.current.setIsLoopingAsync(true);
        await videoRef.current.setIsMutedAsync(true);
      }
    })();
  }, [source]);

  return (
    <View
      style={{
        backgroundColor: "white",
        elevation: 3,
        overflow: "hidden",
        borderRadius: 15,
        marginVertical: 20,
      }}
    >
      <Video
        ref={videoRef}
        style={{ ...style }}
        resizeMode={ResizeMode.CONTAIN}
      />

      <Text
        style={{
          padding: 15,
          color: "black",
          fontSize: 14,
          textAlign: "center",
          fontFamily: "Poppins-SemiBold",
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          paddingHorizontal: 10,
          backgroundColor: "#FFF0F5",
          color: "black",
          fontSize: 11,
          textAlign: "center",
          // fontFamily: "Poppins-SemiBold",
        }}
      >
        {sumber}
      </Text>
    </View>
  );
};

export default StepPlayer;
