import { IPanduanPages } from "../interfaces/IPanduanPage";

export const PANDUAN_MENU = [
  {
    name: "Usia 0 - 1 Tahun",
    page: "PanduanOne",
  },
  {
    name: "Usia 1 - 3 Tahun",
    page: "PanduanTwo",
  },
  {
    name: "Usia 3 - 6 Tahun",
    page: "PanduanThree",
  },
];

export const PANDUAN_PAGE: IPanduanPages = {
  PageOne: [
    {
      name: "Usia 0 - 1 Tahun",
      pelaksana: "Dibantu Orang Tua",
      waktu: "2x Sehari (pagi dan malam)",
      alat: {
        1: "Kasa atau waslap bersih yang dibasahi & dililitkan pada telunjuk ibu atau",
        2: "Infant soft toothbrush (finger brushes)",
        3: "Tanpa pasta gigi atau menggunakan pasta gigi yang tidak mengandung fluoride",
      },
      cara: "Posisi bayi berada di pangkuan orang tua, salah satu tangan orang tua menyangga kepala bayi dan tangan lainnya membersihkan gigi dan mulut",
      video: [
        {
          src: require("../../assets/video/panduan/panduan1.mp4"),
          title: "Cara Membersihkan Gigi Bayi dengan Finger Brushes",
          sumber: "YouTube: Asahid Taehyung",
        },
        {
          src: require("../../assets/video/panduan/panduan2.mp4"),
          title:
            "Cara Membersihkan Gigi Bayi dengan Waslap dan Sikat Gigi Khusus Bayi",
          sumber: "YouTube: Yukito Mama",
        },
      ],
    },
  ],

  PageTwo: [
    {
      name: "Usia 1 - 3 Tahun",
      pelaksana: "Dibantu Orang Tua",
      waktu: "2x Sehari (pagi dan malam)",
      alat: {
        1: "Sikat Gigi Anak",
        2: "Mulai diperkenalkan dengan pasta gigi (yang tidak mengandung fluoride atau mengandung fluoride) sebesar kacang polong",
      },
      cara: "Kedua orang tua duduk berhadapan dengan lutut saling bersentuhan, anak berbaring di pangkuan orang tua, ayah memegang tangan dan kaki anak kemudian ibu membersihkan rongga mulut anak atau sebaliknya",
      video: [
        {
          src: require("../../assets/video/panduan/panduan3.mp4"),
          title: "Posisi Sikat Gigi Anak Usia 1-3 Tahun",
          sumber: "YouTube: Vancouver Coastal Health",
        },
        {
          src: require("../../assets/video/panduan/panduan4.mp4"),
          title: "Cara Sikat Gigi Anak Usia 1-3 Tahun",
          sumber: "YouTube: Vancouver Coastal Health",
        },
      ],
    },
  ],

  PageThree: [
    {
      name: "Usia 3 - 6 Tahun",
      pelaksana: "Dibantu Orang Tua",
      waktu: "2x Sehari (pagi dan malam)",
      alat: {
        1: "Sikat Gigi Anak",
        2: "Mulai diperkenalkan dengan pasta gigi yang mengandung fluoride sebesar kacang polong",
      },
      cara: "Anak berdiri didepan orang tua dengan belakang kepala bersandar pada orang tua, kemudian tangan kiri ibu memeluk kepala anak dengan jari menarik pipi dan bibir, dan tangan kanan ibu menyikat gigi anak",
      video: [
        {
          src: require("../../assets/video/panduan/panduan5.mp4"),
          title: "Posisi Menyikat Gigi Anak Usia 3-6 Tahun",
          sumber: "YouTube: LNKTV Health",
        },
      ],
    },
  ],
};
