import { Keyboard, Text, View } from "react-native";
import React, { useState } from "react";
import { useUser } from "../hooks/zustand";
import AppTextInput from "../components/AppTextInput";
import GradientLayout from "../components/Layout/GradientLayout";
import AppButton from "../components/AppButton";

export default function Profile() {
  const { user, setUser } = useUser();
  const [userName, setUserName] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  function ChangeNamBtn() {
    setIsEdit(true);
  }

  function handleSubmit() {
    setUser(userName);
    Keyboard.dismiss();
    setIsEdit(false);
  }

  function handleTextInput(value: string) {
    setUserName(value);
  }

  const gradientProps = {
    startColor: "white",
    endColor: "#FBA1B7",
  };

  return (
    <GradientLayout
      gradientProps={gradientProps}
      childStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          padding: 10,
          width: "100%",
          height: 250,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "space-around",
            height: "100%",
            display: isEdit ? "none" : "flex",
            elevation: 4,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 25 }}>Nama :</Text>
          <Text style={{ textAlign: "center", fontSize: 25 }}>{user}</Text>
          <AppButton
            name="Ubah Nama"
            onPress={ChangeNamBtn}
            BtnStyle={{ paddingHorizontal: 40, backgroundColor: "#FFD1DA" }}
          />
        </View>
        <AppTextInput
          tittle="Masukkan Nama :"
          placeholder="Masukkan Nama"
          onChange={handleTextInput}
          onSubmit={handleSubmit}
          style={{ display: isEdit ? "flex" : "none" }}
        />
      </View>
    </GradientLayout>
  );
}
