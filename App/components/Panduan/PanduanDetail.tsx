import React from "react";
import FeatureHead from "../FeatureHead";
import LayoutV2 from "../Layout/LayoutV2";
import AppScrollView from "../AppScrollView";
import Content from "./Content";
import { View } from "react-native";
import { usePanduanPage } from "../../hooks/zustand";
import { PANDUAN_PAGE } from "../../constants/PANDUAN";
import { IPanduanPage } from "../../interfaces/IPanduanPage";

export default function PanduanDetail() {
  const { activePage } = usePanduanPage();

  const pageTitle = () => {
    if (activePage === "PageOne") {
      return PANDUAN_PAGE.PageOne.map((data: IPanduanPage) => (
        <FeatureHead key={data.name} name={data.name} />
      ));
    } else if (activePage === "PageTwo") {
      return PANDUAN_PAGE.PageTwo.map((data: IPanduanPage) => (
        <FeatureHead key={data.name} name={data.name} />
      ));
    } else {
      return PANDUAN_PAGE.PageThree.map((data: IPanduanPage) => (
        <FeatureHead key={data.name} name={data.name} />
      ));
    }
  };

  const pageActive = () => {
    if (activePage === "PageOne") {
      return PANDUAN_PAGE.PageOne?.map((data: IPanduanPage) => (
        <Content key={data.name} data={data} />
      ));
    } else if (activePage === "PageTwo") {
      return PANDUAN_PAGE.PageTwo?.map((data: IPanduanPage) => (
        <Content key={data.name} data={data} />
      ));
    } else {
      return PANDUAN_PAGE.PageTwo?.map((data: IPanduanPage) => (
        <Content key={data.name} data={data} />
      ));
    }
  };
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      {pageTitle()}
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <View style={{ margin: 15 }}>{pageActive()}</View>
      </AppScrollView>
    </LayoutV2>
  );
}
