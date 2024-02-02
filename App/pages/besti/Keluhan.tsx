import React, { useState } from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import Teledentistry from "../../components/Besti/Teledentistry";
import { TextInput } from "react-native-gesture-handler";
import AppButton from "../../components/AppButton";
import { Linking } from "react-native";

export default function Keluhan() {
  const [message, setMessage] = useState("");
  const noWhatsApp: string = "81234952273";
  function messageText(value: string) {
    setMessage(value);
  }

  function sendMessage() {
    Linking.openURL(
      // eslint-disable-next-line prettier/prettier
      `https://api.whatsapp.com/send?phone=62${noWhatsApp}&text=${message}`
    );
  }
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Teledentistry" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <FeatureHead
          name="Masukkan Keluhan Anda :"
          textStyle={{
            color: "black",
            fontSize: 17,
            fontFamily: "Poppins-SemiBold",
          }}
        />
        <TextInput
          onChangeText={messageText}
          style={{
            minHeight: 250,
            borderWidth: 0.5,
            borderRadius: 10,
            textAlignVertical: "top",
            padding: 10,
          }}
        />
        <AppButton
          onPress={sendMessage}
          name="Kirim Keluhan Via Whatsapp"
          BtnStyle={{
            backgroundColor: "#FBA1B7",
            marginTop: 20,
            marginHorizontal: 25,
          }}
        />
        <Teledentistry />
      </AppScrollView>
    </LayoutV2>
  );
}
