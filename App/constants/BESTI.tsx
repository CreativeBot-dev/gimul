import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome6,
  AntDesign,
} from "@expo/vector-icons";

export const BESTI_MENU = [
  {
    title: "Edukasi",
    icon: (
      <MaterialCommunityIcons
        name="view-carousel-outline"
        size={30}
        color="#FBA1B7"
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, alias?",
    page: "Edukasi",
    pageText: "Lihat semua",
  },

  {
    title: "Video Edukasi",
    icon: <Entypo name="folder-video" size={25} color="#FBA1B7" />,

    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, alias?",
    page: "VideoEdukasi",
    pageText: "Lihat semua",
  },
  {
    title: "Reminder Sikat Gigi",
    icon: (
      <MaterialCommunityIcons
        name="toothbrush-paste"
        size={25}
        color="#FBA1B7"
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, alias?",
    page: "RemindSikatGigi",
    pageText: "Lihat semua",
  },
  {
    title: "Reminder Dokter Gigi",
    icon: <FontAwesome6 name="user-doctor" size={24} color="#FBA1B7" />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, alias?",
    page: "RemindDokterGigi",
    pageText: "Lihat semua",
  },

  {
    title: "Teledentistry",
    icon: <AntDesign name="customerservice" size={24} color="#FBA1B7" />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, alias?",
    page: "Keluhan",
    pageText: "Lihat semua",
  },
];
