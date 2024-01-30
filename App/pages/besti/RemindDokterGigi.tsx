import React, { useState } from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import DualButton from "../../components/DualButton";
import { useDentist } from "../../hooks/zustand";
import WaitDentist from "../../components/Besti/WaitDentist";
import { View } from "react-native";
import ToDentist from "../../components/Besti/ToDentist";
import Teledentistry from "../../components/Besti/Teledentistry";
import DentistModals from "../../components/Besti/Modals";

export default function RemindDokterGigi() {
  const [showModal, setShowModal] = useState(false);
  const [pernah, setPernah] = useState(false);
  const { Dentist, setDentist } = useDentist();

  function pernahBtn() {
    setShowModal(true);
    setPernah(true);
  }

  function tidakPernahBtn() {
    setShowModal(true);
    setPernah(false);
  }

  function onPressInsideModal() {
    setShowModal(false);
  }

  function closeModals() {
    setShowModal(false);
  }

  function dentistDone() {
    setDentist(false);
  }
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Reminder Dokter Gigi" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <FeatureHead
          name="Apakah Anak Anda Sudah Pernah Periksa Gigi ??"
          textStyle={{
            color: "black",
            fontSize: 20,
            fontFamily: "Poppins-SemiBold",
          }}
        />
        <DualButton
          Lname="Tidak Pernah"
          LonPress={tidakPernahBtn}
          Rname="Pernah"
          RonPress={pernahBtn}
        />
        <DentistModals
          modalOpen={showModal}
          onPress={onPressInsideModal}
          pernahState={pernah}
          closeModals={closeModals}
        />
        <View style={{ margin: 20 }}>
          {Dentist ? <ToDentist onPress={dentistDone} /> : <WaitDentist />}
        </View>
        <Teledentistry />
      </AppScrollView>
    </LayoutV2>
  );
}
