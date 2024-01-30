import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PANDUAN_MENU } from "../../constants/PANDUAN";
import { useNavigation } from "@react-navigation/native";
import { usePanduanPage } from "../../hooks/zustand";

export default function PanduanMenuBtn() {
  const Navigation = useNavigation();
  const { activePage, setActivePage } = usePanduanPage();
  console.log(activePage);
  return (
    <View style={{ gap: 10 }}>
      {PANDUAN_MENU.map((data, idx) => (
        <TouchableOpacity
          onPress={() => {
            setActivePage(`${data.page}`);
            Navigation.navigate("PanduanDetail" as never);
          }}
          key={idx}
          style={{
            width: "100%",
            backgroundColor: "white",
            paddingVertical: 15,
            borderRadius: 10,
            padding: 20,
            elevation: 4,
          }}
        >
          <Text style={{ fontSize: 17 }}>{data.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
