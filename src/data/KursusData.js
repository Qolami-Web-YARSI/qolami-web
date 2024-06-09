const KursusData = [
  {
    id: "lessons-one",
    nama: "Pelajaran 1",
    gambar: "img1-1.svg",
    deskripsi: "Huruf Hijaiyah",
    detail: [],
    soalJawaban2: [],
  },
  {
    id: "exercise-one",
    nama: "Latihan 1",
    gambar: "img1-2.svg",
    deskripsi: "Huruf Hijaiyah",
    detail: [
      // Latihan 1 - Gambar
      {
        id: "gambar1",
        gambar: "latihan-gambar.svg",
        nama: "Latihan 1 - Gambar",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Gambar",
        soalJawaban: [
          // Alif
          {
            "id:": "gambar1_alif",
            soal: `Yang manakah huruf <b>"Alif"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ba
          {
            "id:": "gambar1_ba",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ta
          {
            "id:": "gambar1_ta",
            soal: `Yang manakah huruf <b>"Ta"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
            ],
          },
          // Tsa
          {
            "id:": "gambar1_tsa",
            soal: `Yang manakah huruf <b>"Tsa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
            ],
          },
          // Jim
          {
            "id:": "gambar1_jim",
            soal: `Yang manakah huruf <b>"Jim"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Ha
          {
            "id:": "gambar1_ha",
            soal: `Yang manakah huruf <b>"Ha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Kho
          {
            "id:": "gambar1_kho",
            soal: `Yang manakah huruf <b>"Kho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Dal
          {
            "id:": "gambar1_dal",
            soal: `Yang manakah huruf <b>"Dal"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Dzal
          {
            "id:": "gambar1_dzal",
            soal: `Yang manakah huruf <b>"Dzal"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Ra
          {
            "id:": "gambar1_ra",
            soal: `Yang manakah huruf <b>"Ra"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
            ],
          },
          // Zay
          {
            "id:": "gambar1_zay",
            soal: `Yang manakah huruf <b>"Zay"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Sin
          {
            "id:": "gambar1_sin",
            soal: `Yang manakah huruf <b>"Sin"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Syin
          {
            "id:": "gambar1_syin",
            soal: `Yang manakah huruf <b>"Syin"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Shod
          {
            "id:": "gambar1_shod",
            soal: `Yang manakah huruf <b>"Shod"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
            ],
          },
          // Dhod
          {
            "id:": "gambar1_dhod",
            soal: `Yang manakah huruf <b>"Dhod"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
            ],
          },
          // Tho
          {
            "id:": "gambar1_tho",
            soal: `Yang manakah huruf <b>"Tho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Zho
          {
            "id:": "gambar1_zho",
            soal: `Yang manakah huruf <b>"Zho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Ain
          {
            "id:": "gambar1_ain",
            soal: `Yang manakah huruf <b>"Ain"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
            ],
          },
          // Ghain
          {
            "id:": "gambar1_ghain",
            soal: `Yang manakah huruf <b>"Ghain"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
            ],
          },
          // Fa
          {
            "id:": "gambar1_fa",
            soal: `Yang manakah huruf <b>"Fa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Qof
          {
            "id:": "gambar1_qof",
            soal: `Yang manakah huruf <b>"Qof"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
            ],
          },
          // Kaf
          {
            "id:": "gambar1_kaf",
            soal: `Yang manakah huruf <b>"Kaf"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Lam
          {
            "id:": "gambar1_lam",
            soal: `Yang manakah huruf <b>"Lam"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Mim
          {
            "id:": "gambar1_mim",
            soal: `Yang manakah huruf <b>"Mim"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
            ],
          },
          // Nun
          {
            "id:": "gambar1_nun",
            soal: `Yang manakah huruf <b>"Nun"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Wau
          {
            "id:": "gambar1_wau",
            soal: `Yang manakah huruf <b>"Wau"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Ha
          {
            "id:": "gambar1_ha",
            soal: `Yang manakah huruf <b>"Ha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Lam Alif
          {
            "id:": "gambar1_lam-alif",
            soal: `Yang manakah huruf <b>"Lam Alif"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Hamzah
          {
            "id:": "gambar1_hamzah",
            soal: `Yang manakah huruf <b>"Hamzah"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Ya
          {
            "id:": "gambar1_ya",
            soal: `Yang manakah huruf <b>"Ya"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
            ],
          },
        ],
      },
      {
        id: "video1",
        gambar: "latihan-video.svg",
        nama: "Latihan 1 - Video",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Video",
        soalJawaban: [
          {
            "id:": "video1_soal1",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/2-Ba.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          {
            "id:": "video1_soal2",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/7-Kho.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
            ],
          },
          {
            "id:": "video1_soal3",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/12-Sin.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
            ],
          },
          {
            "id:": "video1_soal4",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/17-Zho.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
            ],
          },
        ],
      },
      {
        id: "audio1",
        gambar: "latihan-audio.svg",
        nama: "Latihan 1 - Audio",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Audio",
        soalJawaban: [
          {
            "id:": "audio1_soal1",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/2-Ba.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
            ],
          },
          {
            "id:": "audio1_soal2",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/7-Kho.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
            ],
          },
          {
            "id:": "audio1_soal3",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/12-Sin.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
            ],
          },
          {
            "id:": "audio1_soal4",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/17-Zho.m4a ",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
            ],
          },
        ],
      },
    ],
    soalJawaban2: [],
  },
  {
    id: "exam-one",
    nama: "Ujian 1",
    gambar: "img1-3.svg",
    deskripsi: "Huruf Hijaiyah",
    detail: [],
    soalJawaban2: [
      {
        id: "gambar1_soal1",
        soal: `Yang manakah huruf <b>"Ba"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
        ],
      },
      {
        id: "gambar1_soal2",
        soal: `Yang manakah huruf <b>"Alif"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
        ],
      },
      {
        id: "gambar1_soal3",
        soal: `Yang manakah huruf <b>"Hamzah"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
        ],
      },
      {
        id: "gambar1_soal4",
        soal: `Yang manakah huruf <b>"Ghain"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      {
        id: "video1_soal5",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/12-Sin.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
        ],
      },
      {
        id: "video1_soal6",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/17-Zho.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
        ],
      },
      {
        id: "video1_soal7",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/2-Ba.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
        ],
      },
      {
        id: "audio1_soal8",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/2-Ba.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
        ],
      },
      {
        id: "audio1_soal9",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/12-Sin.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
        ],
      },
      {
        id: "audio1_soal10",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/17-Zho.m4a ",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
        ],
      },
    ],
  },
  {
    id: "lessons-two",
    nama: "Pelajaran 2",
    gambar: "img2-1.svg",
    deskripsi: "Huruf Berharakat Fathah",
    detail: [],
    soalJawaban2: [],
  },
  {
    id: "exercise-two",
    nama: "Latihan 2",
    gambar: "img2-2.svg",
    deskripsi: "Huruf Berharakat Fathah",
    detail: [
      {
        id: "gambar2",
        gambar: "latihan-gambar.svg",
        nama: "Latihan 2 - Gambar",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Gambar",
        soalJawaban: [
          {
            "id:": "gambar2_soal1",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
            ],
          },
          {
            "id:": "gambar2_soal2",
            soal: `Yang manakah huruf <b>"Kho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
            ],
          },
          {
            "id:": "gambar2_soal3",
            soal: `Yang manakah huruf <b>"Sin"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
            ],
          },
          {
            "id:": "gambar2_soal4",
            soal: `Yang manakah huruf <b>"Zho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
            ],
          },
        ],
      },
      {
        id: "video2",
        gambar: "latihan-video.svg",
        nama: "Latihan 2 - Video",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Video",
        soalJawaban: [
          {
            "id:": "video1_soal1",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
          {
            "id:": "video2_soal2",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
          {
            "id:": "video2_soal2",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
          {
            "id:": "video2_soal2",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
        ],
      },
      {
        id: "audio2",
        gambar: "latihan-audio.svg",
        nama: "Latihan 2 - Audio",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Audio",
        soalJawaban: [
          {
            "id:": "audio2_soal1",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
          {
            "id:": "audio2_soal2",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
          {
            "id:": "audio2_soal2",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
          {
            "id:": "audio2_soal2",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://i.pinimg.com/1200x/52/92/00/52920073b5817fe0787666612607ed5a.jpg",
              },
            ],
          },
        ],
      },
    ],
    soalJawaban2: [],
  },
  {
    id: "exam-two",
    nama: "Ujian 2",
    gambar: "img2-3.svg",
    deskripsi: "Huruf Berharakat Fathah",
    detail: [],
    soalJawaban2: [
      {
        id: "gambar1_soal1",
        soal: `Yang manakah huruf <b>"Ba"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
        ],
      },
      {
        id: "gambar1_soal2",
        soal: `Yang manakah huruf <b>"Alif"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
        ],
      },
      {
        id: "gambar1_soal3",
        soal: `Yang manakah huruf <b>"Hamzah"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
        ],
      },
      {
        id: "gambar1_soal4",
        soal: `Yang manakah huruf <b>"Ghain"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.pngg",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      {
        "id:": "video1_soal5",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/7-Kho.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
        ],
      },
      {
        "id:": "video1_soal6",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/12-Sin.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
        ],
      },
      {
        "id:": "video1_soal7",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/video/17-Zho.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
        ],
      },
      {
        "id:": "audio1_soal8",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/2-Ba.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
        ],
      },
      {
        "id:": "audio1_soal9",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/7-Kho.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
        ],
      },
      {
        "id:": "audio1_soal10",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/audio/12-Sin.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
        ],
      },
    ],
  },
];

export default KursusData;
