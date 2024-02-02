import React, { useCallback, useRef, useState } from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import AppAlarmBox from "../../components/AppAlarmBox";
import * as SQLite from "expo-sqlite";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { ltrimFirstZero } from "../../helpers/ltrimZero";
import { useFocusEffect } from "@react-navigation/native";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { useReminderSikat } from "../../hooks/zustand";
import { getTodayString } from "../../helpers/getTodayString";
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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RemindSikatGigi() {
  const db = SQLite.openDatabase("gimul.db");

  /**
   * CALENDER
   */
  const { setSikatGigi } = useReminderSikat();
  const DotStyle = {
    width: 30,
    height: 30,
    marginTop: -25,
    borderRadius: 15,
    zIndex: -10,
  };

  const [dataSikatGigi, setdataSikatGigi] = useState([]);

  const [isDisable, setIsDisable] = useState({
    sekali: false,
    duakali: true,
  });
  const sikatGigiSekaliBtn = () => {
    setSikatGigi(1);
    createReport();
  };

  const sikatGigiDuaKaliBtn = () => {
    setSikatGigi(2);
    createReport();
  };

  const [isCrud, setIsCrud] = useState(0);

  function createReport() {
    const todayString = getTodayString();
    return new Promise((resolve: any, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO reports (created_at) VALUES (?)",
          [`${todayString}`],
          (_, { insertId, rowsAffected }) => {
            if (rowsAffected > 0) {
              setIsCrud((oldValue) => oldValue + 1);
              resolve(rowsAffected, insertId);
            } else {
              reject(new Error("Failed to insert user"));
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

  const riwayatSikatGigiArray: any[] = [];

  dataSikatGigi.forEach((data: any) => {
    riwayatSikatGigiArray.push(
      Object.assign({
        [data.date]: {
          marked: data.status !== 0,
          dotColor: `${data.status === 1 ? "#FFF0F5" : "#FBA1B7"}`,
        },
      })
    );
  });
  const riwayatSikatGigi: any = {};
  riwayatSikatGigiArray.forEach((item: any) => {
    for (const date in item) {
      if (item.hasOwnProperty(date)) {
        riwayatSikatGigi[date] = item[date];
      }
    }
  });
  /**
   *
   */

  const [alarmData, setAlarmData] = useState([]);
  function getAlarms() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM alarms",
          [],
          (_, { rows }) => {
            const alarmRows: any = rows._array;
            if (alarmRows.length > 0) {
              setAlarmData(alarmRows);
              resolve(alarmRows);
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

  const notificationListener = useRef<any | null>(null);
  const responseListener = useRef<any | null>(null);

  function getAlarmData() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM alarms",
          [],
          (_, { rows }) => {
            const alarmRows = rows._array;
            resolve(alarmRows);
          },
          (error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  async function initNotification(data: any) {
    await Notifications.scheduleNotificationAsync({
      identifier: `${data.identifier}`,
      content: {
        title: `${data.title}`,
        body: `${data.body}`,
        data: { screen: "default" },
      },
      trigger: {
        hour: data.hour,
        minute: data.minute,
        repeats: true,
      },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      // Learn more about projectId:
      // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "639accfc-d088-455f-9432-c52a462e95b5",
        })
      ).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  useFocusEffect(
    useCallback(() => {
      getAlarms();
      /**
       * CALENDER
       */
      getReports()
        .then((res: any) => {
          setdataSikatGigi(res);
          const todayString = getTodayString();
          const dataNow = res.filter(
            (value: any) => value.date === todayString
          );
          if (dataNow.length > 0 && dataNow[0].status === 1) {
            setIsDisable({ sekali: true, duakali: false });
          }
          if (dataNow.length > 0 && dataNow[0].status >= 2) {
            setIsDisable({ sekali: true, duakali: true });
          }
        })
        .catch((err) => console.log(err));

      /**
       * END CALENDER
       */

      registerForPushNotificationsAsync().then((token) => console.log(token));
      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          console.log(notification);
        });

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {});

      const subscription =
        Notifications.addNotificationResponseReceivedListener((response) => {
          if (response.notification.request.content.data.screen === "default") {
            console.log("Astagfirullah");
          }
        });
      getAlarmData()
        .then((res: any) => {
          res.forEach((element: any) => {
            initNotification({
              title: `${element.tag}`,
              body: `Alarm ${element.tag}`,
              hour: Number(ltrimFirstZero(`${element.hours}`)),
              minute: Number(ltrimFirstZero(`${element.minute}`)),
              identifier: `${element.tag}`,
            });
          });
        })
        .catch((err) => console.log(err));
      // getPermission();

      return () => {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
        subscription.remove();
      };
    }, [isCrud])
  );
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Reminder Sikat Gigi" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 0.5,
            borderColor: "#9BACF1",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Poppins-SemiBold",
                paddingLeft: 20,
                fontSize: 25,
                color: "#FBA1B7",
              }}
            >
              Riwayat Sikat Gigi
            </Text>
          </View>
          <Calendar
            markedDates={riwayatSikatGigi}
            theme={{
              dotStyle: DotStyle,
              todayTextColor: "black",
              todayBackgroundColor: "#e3f5fc",
              arrowColor: "#9BACF1",
            }}
            style={{ borderBottomWidth: 0.7, borderBottomColor: "#d9d9d9" }}
          />

          {/* KETERANGAN */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 7,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: "#FFF0F5",
                  borderRadius: 7,
                }}
              ></View>
              <Text>Sikat Gigi sekali</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  height: 14,
                  width: 14,
                  backgroundColor: "#FBA1B7",
                  borderRadius: 7,
                }}
              ></View>
              <Text>Sikat Gigi dua kali</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              gap: 10,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              disabled={isDisable.sekali}
              onPress={sikatGigiSekaliBtn}
              style={{
                backgroundColor: "#FFF0F5",
                // width: "100%",
                paddingHorizontal: 10,
                maxWidth: 200,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ fontFamily: "Poppins-SemiBold", color: "black" }}>
                Sikat Gigi Sekali
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={isDisable.duakali}
              onPress={sikatGigiDuaKaliBtn}
              style={{
                backgroundColor: "#FBA1B7",
                // width: "100%",
                paddingHorizontal: 10,
                maxWidth: 200,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  color: "black",
                }}
              >
                Sikat Gigi Dua Kali
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {alarmData.map((data: any, key) => (
          <AppAlarmBox
            tittle={data.tag}
            key={key}
            alarmData={data}
            initNotification={initNotification}
            notifications={Notifications}
          />
        ))}
      </AppScrollView>
    </LayoutV2>
  );
}
