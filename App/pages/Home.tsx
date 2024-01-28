import React from "react";
import HomeHead from "../components/Home/HomeHead";
import GradientLayout from "../components/Layout/GradientLayout";
import Name from "../components/Home/Name";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../hooks/zustand";
import AppScrollView from "../components/AppScrollView";

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
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <Name name={user} />
        <AppButton name="New User" onPress={newUserBtn} />
      </AppScrollView>
      <HomeHead />
    </GradientLayout>
  );
}
