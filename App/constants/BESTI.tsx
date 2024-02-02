import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome6,
  AntDesign,
} from "@expo/vector-icons";

// interface IBestiMenu {
//   title: string;
//   icon: ReactNode;
//   desc: string;
//   page: string;
//   pageText: string;
// }

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
    desc: "Cegah risiko kejadian stunting dimulai dari gigi, yuk!",
    page: "Edukasi",
    pageText: "Lihat semua",
  },

  {
    title: "Video Edukasi",
    icon: <Entypo name="folder-video" size={25} color="#FBA1B7" />,

    desc: "Kenali cara bersihkan gigi bayi yang baru tumbuh serta cara merawat gigi bayi dan balita!",
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
    desc: "Sudahkah anak Anda sikat gigi 2 kali sehari? Yuk, pasang alarm agar selalu ingat! :)",
    page: "RemindSikatGigi",
    pageText: "Lihat semua",
  },
  {
    title: "Reminder Dokter Gigi",
    icon: <FontAwesome6 name="user-doctor" size={24} color="#FBA1B7" />,
    desc: "Jangan lupa periksa ke dokter gigi 6 bulan sekali, ya! Yuk, pasang alarm agar selalu ingat! :)",
    page: "RemindDokterGigi",
    pageText: "",
  },

  {
    title: "Teledentistry",
    icon: <AntDesign name="customerservice" size={24} color="#FBA1B7" />,
    desc: "Anda atau anak Anda punya keluhan gigi? Yuk, konsultasikan ke dokter gigi!",
    page: "Keluhan",
    pageText: "Lihat semua",
  },
];
