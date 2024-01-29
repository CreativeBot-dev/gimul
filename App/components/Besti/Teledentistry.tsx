import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import FeatureHead from "../FeatureHead";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../AppButton";

export default function Teledentistry() {
  function HospitalAddress() {
    Linking.openURL("https://maps.app.goo.gl/ntK8p5bRXZJF9fEH6");
  }

  function webRegister() {
    Linking.openURL("https://ehealth.surabaya.go.id/pendaftaranv2/");
  }
  return (
    <View style={{ gap: 5, marginTop: 50 }}>
      <FeatureHead
        name="Yuk periksakan gigi anak anda ke fasilitas kesehatan terdekat"
        textStyle={{
          color: "black",
          fontFamily: "Poppins-SemiBold",
          fontSize: 17,
          borderBottomWidth: 0.5,
        }}
      />

      <TouchableOpacity
        onPress={HospitalAddress}
        style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
      >
        <MaterialCommunityIcons
          name="hospital-marker"
          size={30}
          color="#FBA1B7"
        />
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 20,
          }}
        >
          PUSKESMAS JEMURSARI
        </Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "flex-start",
          marginHorizontal: 30,
        }}
      >
        <TouchableOpacity onPress={HospitalAddress}>
          <Text style={{ fontFamily: "Poppins-Medium" }}>
            Alamat: Jl. Jemursari Sel. IV No.5, Jemur Wonosari, {"\n"}Kec.
            Wonocolo, Surabaya, Jawa Timur 60237
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            gap: 10,
          }}
        >
          <AppButton
            name="Pendaftaran Periksa Gigi"
            onPress={webRegister}
            BtnStyle={{ width: 300, backgroundColor: "#FFD1DA" }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 10,
            marginTop: 30,
            color: "red",
          }}
        >
          Note: {"\n"}
          <Text style={{ color: "black" }}>
            Jika, fasilitas kesehatan tersebut terlalu jauh dari tempat anda,
            silahkan kunjungi Puskesmas atau Klinik Gigi Terdekat.
          </Text>
        </Text>
      </View>
    </View>
  );
}
