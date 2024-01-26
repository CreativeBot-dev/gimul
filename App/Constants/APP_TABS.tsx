import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Panduan from "../pages/Panduan";
import Home from "../pages/Home";
import Besti from "../pages/Besti";

export const APP_TABS = [
  {
    id: "Panduan",
    component: Panduan,
    icon: (
      <MaterialCommunityIcons name="tooth-outline" size={30} color="black" />
    ),
  },
  {
    id: "Home",
    component: Home,
    icon: <AntDesign name="home" size={30} color="black" />,
  },
  {
    id: "Besti",
    component: Besti,
    icon: <AntDesign name="calendar" size={30} color="black" />,
  },
];
