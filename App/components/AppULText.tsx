import { View, Text } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

interface IProps {
  title?: string;
  data?: string;
}

export default function AppULText(props: IProps) {
  const { title, data } = props;
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <Octicons name="dot" size={20} color="black" />
      <Text style={{ fontFamily: "Poppins-SemiBold" }}>
        {title + ":"}
        <Text style={{ fontFamily: "Poppins-Regular" }}>{data}</Text>
      </Text>
    </View>
  );
}
