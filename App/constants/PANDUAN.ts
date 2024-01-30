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
          src: "",
          title: "Cara Membersihkan Gigi Bayi dengan Finger Brushes",
          sumber: "YouTube: Asahid Taehyung",
        },
        {
          src: "",
          tittle:
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
        1: "Kasa atau waslap bersih yang dibasahi & dililitkan pada telunjuk ibu atau",
        2: "Infant soft toothbrush (finger brushes)",
        3: "Tanpa pasta gigi atau menggunakan pasta gigi yang tidak mengandung fluoride",
      },

      cara: "Posisi bayi berada di pangkuan orang tua, salah satu tangan orang tua menyangga kepala bayi dan tangan lainnya membersihkan gigi dan mulut",
      video: [
        {
          src: "",
          title: "Cara Membersihkan Gigi Bayi dengan Finger Brushes",
          sumber: "YouTube: Asahid Taehyung",
        },
        {
          src: "",
          tittle:
            "Cara Membersihkan Gigi Bayi dengan Waslap dan Sikat Gigi Khusus Bayi",
          sumber: "YouTube: Yukito Mama",
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
        1: "Kasa atau waslap bersih yang dibasahi & dililitkan pada telunjuk ibu atau",
        2: "Infant soft toothbrush (finger brushes)",
        3: "Tanpa pasta gigi atau menggunakan pasta gigi yang tidak mengandung fluoride",
      },

      cara: "Posisi bayi berada di pangkuan orang tua, salah satu tangan orang tua menyangga kepala bayi dan tangan lainnya membersihkan gigi dan mulut",
      video: [
        {
          src: "",
          title: "Cara Membersihkan Gigi Bayi dengan Finger Brushes",
          sumber: "YouTube: Asahid Taehyung",
        },
        {
          src: "",
          tittle:
            "Cara Membersihkan Gigi Bayi dengan Waslap dan Sikat Gigi Khusus Bayi",
          sumber: "YouTube: Yukito Mama",
        },
      ],
    },
  ],
};
