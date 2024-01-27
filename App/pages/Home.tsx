import React from "react";
import HomeHead from "../components/Home/HomeHead";
import { ScrollView } from "react-native";
import GradientLayout from "../components/Layout/GradientLayout";
import Name from "../components/Home/Name";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../hooks/zustand";

export default function Home() {
  const { user } = useUser();
  const gradientProps = {
    startColor: "#FBA1B7",
    endColor: "white",
  };

  const navigation = useNavigation();
  const newUserBtn = () => {
    navigation.navigate("newUser" as never);
  };
  return (
    <GradientLayout gradientProps={gradientProps}>
      <HomeHead />
      <ScrollView
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "100%",
          borderRadius: 15,
          elevation: 5,
          marginTop: 20,
          padding: 10,
        }}
      >
        <Name name={user} />
        <AppButton name="New User" onPress={newUserBtn} />
      </ScrollView>
    </GradientLayout>
  );
}
