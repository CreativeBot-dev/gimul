/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./App/pages/AppTabs";
import { useFonts } from "expo-font";
import NewUser from "./App/pages/NewUser";
import Profile from "./App/pages/Profile";
import { STACK_SCREEN } from "./App/constants/STACK_SCREEN";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { useUser } from "./App/hooks/zustand";
import WaterMark from "./App/components/waterMark";

const Stack = createStackNavigator();
export default function App() {
  const [isAlarmTable, setIsAlarmTable] = useState(false);
  const { user, setUser } = useUser();
  const db = SQLite.openDatabase("gimul.db");
  const [fontsLoaded] = useFonts({
    "LilitaOne-Regular": require("./assets/fonts/LilitaOne-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  function initDatabase() {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL);",
        [],
        () => console.log("Users Table created successfully"),
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
          return false;
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS childs (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, birthday datetime(6) NOT NULL, is_active BOOLEAN default false);",
        [],
        () => console.log("Childs Table created successfully"),
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
          return false;
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS alarms (id INTEGER PRIMARY KEY AUTOINCREMENT, tag VARCHAR(255) NOT NULL, hours VARCHAR(255) NOT NULL, minute VARCHAR(255) NOT NULL);",
        [],
        () => {
          setIsAlarmTable(true);
          console.log("Reports Table created successfully");
        },
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
          return false;
        }
      );

      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at VARCHAR(255) NOT NULL);",
        [],
        () => console.log("Reports Table created successfully"),
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
          return false;
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS schedule (id INTEGER PRIMARY KEY AUTOINCREMENT, date VARCHAR(255) NOT NULL);",
        [],
        () => console.log("Schedule Table created successfully"),
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
          return false;
        }
      );
    });
  }

  function getDefaultAlarm() {
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

  function createDefaultAlarm() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO alarms (tag, hours, minute) values (?, ?, ?)`,
          ["Sikat Gigi Pagi", "23", "46"],
          (_, { insertId, rowsAffected }) => {
            resolve({ insertId, rowsAffected });
          },
          (error) => {
            reject(error);
            return false;
          }
        );
        tx.executeSql(
          `INSERT INTO alarms (tag, hours, minute) values (?, ?, ?)`,
          ["Sikat Gigi Malam", "23", "45"],
          (_, { insertId, rowsAffected }) => {
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

  function getUserData() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM users",
          [],
          (_, { rows }) => {
            const userRows = rows._array;
            resolve(userRows);
          },
          (error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  const emptyTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM alarms",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
          return false;
        }
      );
      tx.executeSql(
        "DELETE FROM users",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
          return false;
        }
      );
      tx.executeSql(
        "DELETE FROM childs",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
          return false;
        }
      );
      tx.executeSql(
        "DELETE FROM reports",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
          return false;
        }
      );
      tx.executeSql(
        "DELETE FROM schedule",
        [],
        (_, result) => {
          console.log("Table schedule emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
          return false;
        }
      );
    });
  };

  const dropTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE childs",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
          return false;
        }
      );
    });
  };

  async function initAlarmDefault() {
    const defaultAlarm: any = await getDefaultAlarm();
    console.log(defaultAlarm);
    if (defaultAlarm.length === 0) {
      createDefaultAlarm();
    }
  }

  useEffect(() => {
    // emptyTable();
    getUserData()
      .then((userRows: any) => {
        if (userRows.length > 0) {
          setUser(userRows[0].name);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    initDatabase();
  }, []);

  if (isAlarmTable) {
    initAlarmDefault();
  }
  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={`${user !== "" ? "AppTabs" : "newUser"}`}
        >
          <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="newUser"
            component={NewUser}
            options={{ headerShown: false }}
          />

          {STACK_SCREEN.map((data, idx) => (
            <Stack.Screen
              key={idx}
              name={data.name}
              component={data.component}
              options={{
                title: "",
                headerTitleStyle: { display: "none" },
                headerTitle: "",
                headerTransparent: true,
                headerBackImage: () => (
                  <Ionicons name="arrow-back-outline" size={35} color="white" />
                ),
              }}
            />
          ))}
        </Stack.Navigator>
        <WaterMark />
      </NavigationContainer>
    </View>
  );
}
