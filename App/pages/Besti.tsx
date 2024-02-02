import React, { useCallback, useState } from "react";
import LayoutV2 from "../components/Layout/LayoutV2";
import FeatureHead from "../components/FeatureHead";
import AppScrollView from "../components/AppScrollView";
import BestiMenuBtn from "../components/Besti/BestiMenuBtn";
import { View } from "react-native";
import { BESTI_MENU } from "../constants/BESTI";
import { useDentist } from "../hooks/zustand";
import * as SQLite from "expo-sqlite";
import { useFocusEffect } from "@react-navigation/native";

export default function Besti() {
  const { Dentist, setDentist } = useDentist();
  const db = SQLite.openDatabase("gimul.db");
  const [schedule, setSchedule] = useState<string>("");
  const [countTeeth, setCountTeeth] = useState<string | undefined>();
  function getSchedules() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM schedule",
          [],
          (_, { rows }) => {
            const scheduleRows: any = rows._array;
            if (scheduleRows.length > 0) {
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
              const year = new Date(scheduleRows[0].date).getFullYear();
              const month = new Date(scheduleRows[0].date).toLocaleString(
                "id-ID",
                {
                  month: "long",
                }
              );
              // const month = new Date(scheduleRows[0].date).getMonth() + 1;
              const day = new Date(scheduleRows[0].date).getDate();

              const customWaitingTime = `${day.toString().length === 1 ? "0" + day : day} ${month} ${year}`;
              setSchedule(customWaitingTime);
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

  function getReports() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT created_at AS date, COUNT(*) as status FROM reports GROUP BY created_at",
          [],
          (tx, { rows }) => {
            const reportRows = rows._array;
            resolve(reportRows);
          },
          (tx, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  useFocusEffect(
    useCallback(() => {
      getSchedules();
      getReports().then((res: any) => {
        if (res.length > 0) {
          setCountTeeth(res[0].status);
        }
      });
    }, [])
  );
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="BESTI GIMUL" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <View style={{ gap: 25, margin: 15 }}>
          {BESTI_MENU.map((data, i) => {
            if (data.title === "Reminder Dokter Gigi" && Dentist) {
              data.pageText = "Yuk segera periksa gigi";
            }
            if (data.title === "Reminder Dokter Gigi" && !Dentist) {
              data.pageText = `Periksa gigi pada ${schedule}`;
            }

            if (data.title === "Reminder Sikat Gigi" && !countTeeth) {
              data.pageText = `Anda belom sikat gigi hari ini`;
            }

            if (
              data.title === "Reminder Sikat Gigi" &&
              countTeeth !== undefined
            ) {
              data.pageText = `Anda sudah sikat gigi ${countTeeth}x`;
            }
            return <BestiMenuBtn key={i} data={data} />;
          })}
        </View>
      </AppScrollView>
    </LayoutV2>
  );
}
