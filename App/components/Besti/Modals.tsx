import { View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import AppButton from "../AppButton";
import FeatureHead from "../FeatureHead";
import { AntDesign } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";
import {
  dayNames,
  dayNamesShort,
  monthNames,
  today,
} from "../../constants/calendar-config";

LocaleConfig.locales["fr"] = {
  monthNames,
  dayNames,
  dayNamesShort,
  today,
};

LocaleConfig.defaultLocale = "fr";

interface IModal {
  modalOpen: boolean;
  onPress: () => void;
  pernahState: boolean;
  selected: string;
  closeModals: () => void;
  handleDateSelect: (selected: string) => void;
}

export default function DentistModals(props: IModal) {
  const {
    modalOpen,
    selected,
    onPress,
    pernahState,
    closeModals,
    handleDateSelect,
  } = props;
  const DotStyle = {
    width: 30,
    height: 30,
    marginTop: -25,
    borderRadius: 15,
    zIndex: -10,
  };

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
          <Calendar
            // markedDates={riwayatSikatGigi}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,

                // selectedDotColor: "orange",
              },
            }}
            onDayPress={(day) => {
              handleDateSelect(day.dateString);
            }}
            theme={{
              dotStyle: DotStyle,
              todayTextColor: "#FBA1B7",
              // todayBackgroundColor: "#e3f5fc",
              arrowColor: "#9BACF1",
            }}
            style={{ borderBottomWidth: 0.7, borderBottomColor: "#d9d9d9" }}
          />

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
