import PanduanOne from "../pages/Panduan/PanduanOne";
import PanduanThree from "../pages/Panduan/PanduanThree";
import PanduanTwo from "../pages/Panduan/PanduanTwo";
import Edukasi from "../pages/besti/Edukasi/Edukasi";
import Keluhan from "../pages/besti/Keluhan";
import RemindDokterGigi from "../pages/besti/ReminderDokterGigi/RemindDokterGigi";
import RemindSikatGigi from "../pages/besti/ReminderSikatGigi/RemindSikatGigi";
import VideoEdukasi from "../pages/besti/VideoEdukasi/VideoEdukasi";

export const STACK_SCREEN = [
  {
    name: "Edukasi",
    component: Edukasi,
  },

  {
    name: "Keluhan",
    component: Keluhan,
  },
  {
    name: "RemindDokterGigi",
    component: RemindDokterGigi,
  },

  {
    name: "RemindSikatGigi",
    component: RemindSikatGigi,
  },
  {
    name: "VideoEdukasi",
    component: VideoEdukasi,
  },

  {
    name: "PanduanOne",
    component: PanduanOne,
  },
  {
    name: "PanduanTwo",
    component: PanduanTwo,
  },

  {
    name: "PanduanThree",
    component: PanduanThree,
  },
];
