import { Image, ImageStyle } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

interface IAppImage {
  style?: ImageStyle;
  source: string;
  title?: string;
}

const AppImage = (props: IAppImage) => {
  const { source, style, title } = props;
  return (
    <View
      style={{
        marginVertical: 20,
        margin: 10,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 15,
      }}
    >
      <Image source={source} style={[style]} contentFit="contain" />
      <Text style={{ textAlign: "center", padding: 10 }}>{title}</Text>
    </View>
  );
};

export default AppImage;
