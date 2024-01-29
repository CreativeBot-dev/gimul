import { Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import AppButton from "../AppButton";
import FeatureHead from "../FeatureHead";
import { AntDesign } from "@expo/vector-icons";

interface IModal {
  modalOpen: boolean;
  onPress: () => void;
  pernahState: boolean;
  closeModals: () => void;
}

export default function DentistModals(props: IModal) {
  const { modalOpen, onPress, pernahState, closeModals } = props;

  return (
    <Modal
      isVisible={modalOpen}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      backdropTransitionOutTiming={0}
      animationInTiming={700}
      backdropOpacity={0.8}
      onBackdropPress={closeModals}
    >
      <View
        style={{
          elevation: 10,
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <AntDesign
          name="close"
          size={24}
          color="black"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            padding: 5,
          }}
          onPress={closeModals}
        />
        <View style={{ margin: 20 }}>
          <FeatureHead
            name={
              pernahState
                ? "Kapan terakhir kali periksa gigi ??"
                : "Kapan anda akan periksa gigi ??"
            }
            textStyle={{ color: "black", fontSize: 17 }}
          />
          <Text>
            Show Date Picker to set when last time go to dentist or set whem
            will go to dentist
          </Text>
          <AppButton
            BtnStyle={{ backgroundColor: "#FFC5C5" }}
            name="Simpan"
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
}
