import React, { useCallback, useState } from "react";
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
import * as SQLite from "expo-sqlite";
import { useFocusEffect } from "@react-navigation/native";

export default function RemindDokterGigi() {
  const [showModal, setShowModal] = useState(false);
  const [isQuestion, setIsQuestion] = useState<boolean>(true);
  const [dateSelect, setDateSelect] = useState<string>("");
  const [pernah, setPernah] = useState(false);
  const { Dentist, setDentist } = useDentist();
  const [scheduleTime, setScheduleTime] = useState<{
    id: number;
    date: string;
  }>({
    id: 0,
    date: "",
  });

  const db = SQLite.openDatabase("gimul.db");

  function handleDateSelect(selected: string) {
    setDateSelect(selected);
  }

  function editSchedule(payload: any) {
    return new Promise((resolve: any, reject: any) => {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE schedule SET date = ? WHERE id = ?",
          [payload.date, payload.id],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
              getSchedules();
              resolve();
            } else {
              reject(new Error("User not found"));
            }
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  function createSchedule() {
    let dentisDate: string = "";
    if (pernah) {
      const currentDate = new Date(dateSelect);

      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      const nextMonth = (currentMonth + 6) % 12;

      const nextYear = currentYear + Math.floor((currentMonth + 6) / 12);

      const nextDate = new Date(nextYear, nextMonth, currentDate.getDate());
      const year = new Date(nextDate).getFullYear();
      const month = new Date(nextDate).getMonth() + 1;
      const day = new Date(nextDate).getDate();
      dentisDate = `${year}-${month.toString().length === 1 ? "0" + month : month}-${day.toString().length === 1 ? "0" + day : day}`;
    } else dentisDate = dateSelect;
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO schedule (date) values (?)`,
          [dentisDate],
          (_, { insertId, rowsAffected }) => {
            getSchedules();
            resolve({ insertId, rowsAffected });
          },
          (error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  function getSchedules() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM schedule",
          [],
          (_, { rows }) => {
            const scheduleRows: any = rows._array;
            if (scheduleRows.length > 0) {
              console.log(scheduleRows);
              setScheduleTime({
                id: scheduleRows[0].id,
                date: scheduleRows[0].date,
              });
              const givenDate = new Date(scheduleRows[0].date);

              // Current date and time
              const currentDate = new Date();
              if (
                givenDate.getFullYear() === currentDate.getFullYear() &&
                givenDate.getMonth() + 1 === currentDate.getMonth() + 1 &&
                givenDate.getDate() === currentDate.getDate()
              ) {
                setDentist(true);
              } else {
                setDentist(false);
              }
              setIsQuestion(false);
              resolve(scheduleRows);
            }
          },
          (error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  function setSchedule() {
    createSchedule()
      .then((res: any) => {
        if (res.rowsAffected === 1) {
          setIsQuestion(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    setIsQuestion(false);
    setSchedule();
    setDentist(true);
  }

  function closeModals() {
    setShowModal(false);
  }

  function dentistDone() {
    const currentDate = new Date(scheduleTime.date);

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const nextMonth = (currentMonth + 6) % 12;

    const nextYear = currentYear + Math.floor((currentMonth + 6) / 12);

    const nextDate = new Date(nextYear, nextMonth, currentDate.getDate());
    const year = new Date(nextDate).getFullYear();
    const month = new Date(nextDate).getMonth() + 1;
    const day = new Date(nextDate).getDate();

    editSchedule({
      id: scheduleTime.id,
      date: `${year}-${month.toString().length === 1 ? "0" + month : month}-${day.toString().length === 1 ? "0" + day : day}`,
    });
  }

  useFocusEffect(
    useCallback(() => {
      getSchedules();
      editSchedule({ id: 1, date: "2024-02-02" });
    }, [])
  );
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Reminder Dokter Gigi" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        {isQuestion ? (
          <View>
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
          </View>
        ) : (
          <View style={{ margin: 20 }}>
            {Dentist ? (
              <ToDentist onPress={dentistDone} />
            ) : (
              <WaitDentist waitingTime={scheduleTime.date} />
            )}
          </View>
        )}
        <DentistModals
          selected={dateSelect}
          handleDateSelect={handleDateSelect}
          modalOpen={showModal}
          onPress={onPressInsideModal}
          pernahState={pernah}
          closeModals={closeModals}
        />
        <Teledentistry />
      </AppScrollView>
    </LayoutV2>
  );
}
