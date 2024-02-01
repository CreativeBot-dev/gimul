import { Keyboard } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useUser } from "../hooks/zustand";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";
import * as SQLite from "expo-sqlite";

export default function NewUser() {
  const { setUser } = useUser();
  const [userName, setUserName] = useState("");

  const db = SQLite.openDatabase("gimul.db");

  const Navigation = useNavigation();

  function createUser() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO users (name) values (?)`,
          [userName],
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

  function handleSubmit() {
    Keyboard.dismiss();
    createUser()
      .then((res: any) => {
        if (res.rowsAffected === 1) {
          setUser(userName);
          Navigation.navigate("AppTabs" as never);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleTextInput(value: string) {
    setUserName(value);
  }

  return (
    <Layout
      motherStyle={{ backgroundColor: "#FFF0F5" }}
      childStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppTextInput
        tittle="Masukkan Nama :"
        placeholder="masukkan nama"
        onChange={handleTextInput}
        onSubmit={handleSubmit}
        style={{ backgroundColor: "white", elevation: 4 }}
      />
    </Layout>
  );
}
