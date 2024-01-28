import { ScrollView, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

interface IScrollView {
  children: ReactNode;
  style?: ViewStyle;
}
export default function AppScrollView(props: IScrollView) {
  const { children, style } = props;
  return (
    <ScrollView
      style={[
        style,
        {
          backgroundColor: "white",
          height: "100%",
          borderRadius: 20,
          marginBottom: 50,
        },
      ]}
    >
      <View style={{ paddingBottom: 230 }}>{children}</View>
    </ScrollView>
  );
}
