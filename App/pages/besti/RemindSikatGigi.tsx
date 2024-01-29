import React from "react";
import LayoutV2 from "../../components/Layout/LayoutV2";
import FeatureHead from "../../components/FeatureHead";
import AppScrollView from "../../components/AppScrollView";
import AppCalendar from "../../components/AppCalendar";

export default function RemindSikatGigi() {
  return (
    <LayoutV2 motherStyle={{ backgroundColor: "#FBA1B7" }}>
      <FeatureHead name="Reminder Sikat Gigi" />
      <AppScrollView style={{ marginTop: 20, padding: 15 }}>
        <AppCalendar />
      </AppScrollView>
    </LayoutV2>
  );
}
