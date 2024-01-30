import PanduanDetail from "../components/Panduan/PanduanDetail";
import PanduanThree from "../pages/Panduan/PanduanThree";
import PanduanTwo from "../pages/Panduan/PanduanTwo";
import Edukasi from "../pages/besti/Edukasi";
import Keluhan from "../pages/besti/Keluhan";
import RemindDokterGigi from "../pages/besti/RemindDokterGigi";
import RemindSikatGigi from "../pages/besti/RemindSikatGigi";
import VideoEdukasi from "../pages/besti/VideoEdukasi";

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
    name: "PanduanDetail",
    component: PanduanDetail,
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
