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
            id: "gambar1_alif",
            soal: `Yang manakah huruf <b>"Alif"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ba
          {
            id: "gambar1_ba",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ta
          {
            id: "gambar1_ta",
            soal: `Yang manakah huruf <b>"Ta"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
            ],
          },
          // Tsa
          {
            id: "gambar1_tsa",
            soal: `Yang manakah huruf <b>"Tsa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
            ],
          },
          // Jim
          {
            id: "gambar1_jim",
            soal: `Yang manakah huruf <b>"Jim"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Ha
          {
            id: "gambar1_ha",
            soal: `Yang manakah huruf <b>"Ha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
            ],
          },
          // Kho
          {
            id: "gambar1_kho",
            soal: `Yang manakah huruf <b>"Kho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Dal
          {
            id: "gambar1_dal",
            soal: `Yang manakah huruf <b>"Dal"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Dzal
          {
            id: "gambar1_dzal",
            soal: `Yang manakah huruf <b>"Dzal"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Ra
          {
            id: "gambar1_ra",
            soal: `Yang manakah huruf <b>"Ra"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
            ],
          },
          // Zay
          {
            id: "gambar1_zay",
            soal: `Yang manakah huruf <b>"Zay"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Sin
          {
            id: "gambar1_sin",
            soal: `Yang manakah huruf <b>"Sin"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Syin
          {
            id: "gambar1_syin",
            soal: `Yang manakah huruf <b>"Syin"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Shod
          {
            id: "gambar1_shod",
            soal: `Yang manakah huruf <b>"Shod"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
            ],
          },
          // Dhod
          {
            id: "gambar1_dhod",
            soal: `Yang manakah huruf <b>"Dhod"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
            ],
          },
          // Tho
          {
            id: "gambar1_tho",
            soal: `Yang manakah huruf <b>"Tho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Zho
          {
            id: "gambar1_zho",
            soal: `Yang manakah huruf <b>"Zho"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Ain
          {
            id: "gambar1_ain",
            soal: `Yang manakah huruf <b>"Ain"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
            ],
          },
          // Ghain
          {
            id: "gambar1_ghain",
            soal: `Yang manakah huruf <b>"Ghain"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
            ],
          },
          // Fa
          {
            id: "gambar1_fa",
            soal: `Yang manakah huruf <b>"Fa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Qof
          {
            id: "gambar1_qof",
            soal: `Yang manakah huruf <b>"Qof"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
            ],
          },
          // Kaf
          {
            id: "gambar1_kaf",
            soal: `Yang manakah huruf <b>"Kaf"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Lam
          {
            id: "gambar1_lam",
            soal: `Yang manakah huruf <b>"Lam"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Mim
          {
            id: "gambar1_mim",
            soal: `Yang manakah huruf <b>"Mim"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
            ],
          },
          // Nun
          {
            id: "gambar1_nun",
            soal: `Yang manakah huruf <b>"Nun"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Wau
          {
            id: "gambar1_wau",
            soal: `Yang manakah huruf <b>"Wau"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Ha
          {
            id: "gambar1_ha",
            soal: `Yang manakah huruf <b>"Ha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Lam Alif
          {
            id: "gambar1_lam-alif",
            soal: `Yang manakah huruf <b>"Lam Alif"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Hamzah
          {
            id: "gambar1_hamzah",
            soal: `Yang manakah huruf <b>"Hamzah"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Ya
          {
            id: "gambar1_ya",
            soal: `Yang manakah huruf <b>"Ya"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
            ],
          },
        ],
      },
      // Latihan 1 - Video
      {
        id: "video1",
        gambar: "latihan-video.svg",
        nama: "Latihan 1 - Video",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Video",
        soalJawaban: [
          // Alif
          {
            id: "video1_alif",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/1-Alif.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ba
          {
            id: "video1_ba",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/2-Ba.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ta
          {
            id: "video1_ta",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/3-Ta.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
            ],
          },
          // Tsa
          {
            id: "video1_tsa",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/4-Tsa.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
            ],
          },
          // Jim
          {
            id: "video1_jim",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/5-Jim.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Ha
          {
            id: "video1_ha",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/6-Ha.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
            ],
          },
          // Kho
          {
            id: "video1_kho",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/7-Kho.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Dal
          {
            id: "video1_dal",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/8-Dal.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Dzal
          {
            id: "video1_dzal",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/9-Dzal.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Ra
          {
            id: "video1_ra",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/10-Ra.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
            ],
          },
          // Zay
          {
            id: "video1_zay",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/11-Zay.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Sin
          {
            id: "video1_sin",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/12-Sin.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Syin
          {
            id: "video1_syin",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/13-Syin.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Shod
          {
            id: "video1_shod",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/14-Shod.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
            ],
          },
          // Dhod
          {
            id: "video1_dhod",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/15-Dhod.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
            ],
          },
          // Tho
          {
            id: "video1_tho",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/16-Tho.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Zho
          {
            id: "video1_zho",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/17-Zho.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Ain
          {
            id: "video1_ain",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/18-Ain.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
            ],
          },
          // Ghain
          {
            id: "video1_ghain",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/19-Ghain.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
            ],
          },
          // Fa
          {
            id: "video1_fa",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/20-Fa.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Qof
          {
            id: "video1_qof",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/21-Qof.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
            ],
          },
          // Kaf
          {
            id: "video1_kaf",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/22-Kaf.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Lam
          {
            id: "video1_lam",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/23-Lam.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Mim
          {
            id: "video1_mim",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/24-Mim.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
            ],
          },
          // Nun
          {
            id: "video1_nun",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/25-Nun.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Wau
          {
            id: "video1_wau",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/26-Wau.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Ha
          {
            id: "video1_ha",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/27-Ha.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Lam Alif
          {
            id: "video1_lam-alif",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/28-Lam-Alif.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Hamzah
          {
            id: "video1_hamzah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/29-Hamzah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Ya
          {
            id: "video1_Ya",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/30-Ya.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
            ],
          },
        ],
      },
      // Latihan 1 - Audio
      {
        id: "audio1",
        gambar: "latihan-audio.svg",
        nama: "Latihan 1 - Audio",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Audio",
        soalJawaban: [
          // Alif
          {
            id: "audio1_alif",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/1-Alif.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ba
          {
            id: "audio1_ba",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/2-Ba.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
            ],
          },
          // Ta
          {
            id: "audio1_ta",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/3-Ta.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
              },
            ],
          },
          // Tsa
          {
            id: "audio1_tsa",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/4-Tsa.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
            ],
          },
          // Jim
          {
            id: "audio1_jim",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/5-Jim.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Ha
          {
            id: "audio1_ha",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/6-Ha.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
              },
            ],
          },
          // Kho
          {
            id: "audio1_kho",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/7-Kho.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Dal
          {
            id: "audio1_dal",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/8-Dal.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Dzal
          {
            id: "audio1_dzal",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/9-Dzal.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
            ],
          },
          // Ra
          {
            id: "audio1_ra",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/10-Ra.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
              },
            ],
          },
          // Zay
          {
            id: "audio1_zay",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/11-Zay.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Sin
          {
            id: "audio1_sin",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/12-Sin.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Syin
          {
            id: "audio1_syin",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/13-Syin.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
            ],
          },
          // Shod
          {
            id: "audio1_shod",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/14-Shod.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
            ],
          },
          // Dhod
          {
            id: "audio1_dhod",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/15-Dhod.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
            ],
          },
          // Tho
          {
            id: "audio1_tho",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/16-Tho.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Zho
          {
            id: "audio1_zho",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/17-Zho.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
            ],
          },
          // Ain
          {
            id: "audio1_ain",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/18-Ain.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
            ],
          },
          // Ghain
          {
            id: "audio1_ghain",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/19-Ghain.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
            ],
          },
          // Fa
          {
            id: "audio1_fa",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/20-Fa.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Qof
          {
            id: "audio1_qof",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/21-Qof.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
            ],
          },
          // Kaf
          {
            id: "audio1_kaf",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/22-Kaf.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
            ],
          },
          // Lam
          {
            id: "audio1_lam",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/23-Lam.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Mim
          {
            id: "audio1_mim",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/24-Mim.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
            ],
          },
          // Nun
          {
            id: "audio1_nun",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/25-Nun.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
            ],
          },
          // Wau
          {
            id: "audio1_wau",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/26-Wau.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
            ],
          },
          // Ha
          {
            id: "audio1_ha",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/27-Ha.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
            ],
          },
          // Lam Alif
          {
            id: "audio1_lam-alif",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/28-Lam-Alif.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Hamzah
          {
            id: "audio1_hamzah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/29-Hamzah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
              },
            ],
          },
          // Ya
          {
            id: "audio1_ya",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/30-Ya.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
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
      // Alif
      {
        id: "gambar1_alif",
        soal: `Yang manakah huruf <b>"Alif"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
        ],
      },
      // Ba
      {
        id: "gambar1_ba",
        soal: `Yang manakah huruf <b>"Ba"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
        ],
      },
      // Ta
      {
        id: "gambar1_ta",
        soal: `Yang manakah huruf <b>"Ta"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
        ],
      },
      // Tsa
      {
        id: "gambar1_tsa",
        soal: `Yang manakah huruf <b>"Tsa"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
        ],
      },
      // Jim
      {
        id: "gambar1_jim",
        soal: `Yang manakah huruf <b>"Jim"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Ha
      {
        id: "gambar1_ha",
        soal: `Yang manakah huruf <b>"Ha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
        ],
      },
      // Kho
      {
        id: "gambar1_kho",
        soal: `Yang manakah huruf <b>"Kho"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Dal
      {
        id: "gambar1_dal",
        soal: `Yang manakah huruf <b>"Dal"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
        ],
      },
      // Dzal
      {
        id: "gambar1_dzal",
        soal: `Yang manakah huruf <b>"Dzal"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
        ],
      },
      // Ra
      {
        id: "gambar1_ra",
        soal: `Yang manakah huruf <b>"Ra"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
        ],
      },
      // Zay
      {
        id: "gambar1_zay",
        soal: `Yang manakah huruf <b>"Zay"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
        ],
      },
      // Sin
      {
        id: "gambar1_sin",
        soal: `Yang manakah huruf <b>"Sin"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
        ],
      },
      // Syin
      {
        id: "gambar1_syin",
        soal: `Yang manakah huruf <b>"Syin"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
        ],
      },
      // Shod
      {
        id: "gambar1_shod",
        soal: `Yang manakah huruf <b>"Shod"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
        ],
      },
      // Dhod
      {
        id: "gambar1_dhod",
        soal: `Yang manakah huruf <b>"Dhod"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
        ],
      },
      // Tho
      {
        id: "gambar1_tho",
        soal: `Yang manakah huruf <b>"Tho"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
        ],
      },
      // Zho
      {
        id: "gambar1_zho",
        soal: `Yang manakah huruf <b>"Zho"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
        ],
      },
      // Ain
      {
        id: "gambar1_ain",
        soal: `Yang manakah huruf <b>"Ain"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
        ],
      },
      // Ghain
      {
        id: "gambar1_ghain",
        soal: `Yang manakah huruf <b>"Ghain"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
        ],
      },
      // Fa
      {
        id: "gambar1_fa",
        soal: `Yang manakah huruf <b>"Fa"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
        ],
      },
      // Qof
      {
        id: "gambar1_qof",
        soal: `Yang manakah huruf <b>"Qof"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
        ],
      },
      // Kaf
      {
        id: "gambar1_kaf",
        soal: `Yang manakah huruf <b>"Kaf"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
        ],
      },
      // Lam
      {
        id: "gambar1_lam",
        soal: `Yang manakah huruf <b>"Lam"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
        ],
      },
      // Mim
      {
        id: "gambar1_mim",
        soal: `Yang manakah huruf <b>"Mim"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
        ],
      },
      // Nun
      {
        id: "gambar1_nun",
        soal: `Yang manakah huruf <b>"Nun"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Wau
      {
        id: "gambar1_wau",
        soal: `Yang manakah huruf <b>"Wau"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
        ],
      },
      // Ha
      {
        id: "gambar1_ha",
        soal: `Yang manakah huruf <b>"Ha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
        ],
      },
      // Lam Alif
      {
        id: "gambar1_lam-alif",
        soal: `Yang manakah huruf <b>"Lam Alif"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      // Hamzah
      {
        id: "gambar1_hamzah",
        soal: `Yang manakah huruf <b>"Hamzah"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      // Ya
      {
        id: "gambar1_ya",
        soal: `Yang manakah huruf <b>"Ya"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
        ],
      },
      // Alif
      {
        id: "video1_alif",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/1-Alif.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
        ],
      },
      // Ba
      {
        id: "video1_ba",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/2-Ba.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
        ],
      },
      // Ta
      {
        id: "video1_ta",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/3-Ta.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
        ],
      },
      // Tsa
      {
        id: "video1_tsa",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/4-Tsa.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
        ],
      },
      // Jim
      {
        id: "video1_jim",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/5-Jim.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Ha
      {
        id: "video1_ha",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/6-Ha.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
        ],
      },
      // Kho
      {
        id: "video1_kho",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/7-Kho.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Dal
      {
        id: "video1_dal",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/8-Dal.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
        ],
      },
      // Dzal
      {
        id: "video1_dzal",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/9-Dzal.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
        ],
      },
      // Ra
      {
        id: "video1_ra",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/10-Ra.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
        ],
      },
      // Zay
      {
        id: "video1_zay",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/11-Zay.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
        ],
      },
      // Sin
      {
        id: "video1_sin",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/12-Sin.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
        ],
      },
      // Syin
      {
        id: "video1_syin",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/13-Syin.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
        ],
      },
      // Shod
      {
        id: "video1_shod",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/14-Shod.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
        ],
      },
      // Dhod
      {
        id: "video1_dhod",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/15-Dhod.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
        ],
      },
      // Tho
      {
        id: "video1_tho",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/16-Tho.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
        ],
      },
      // Zho
      {
        id: "video1_zho",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/17-Zho.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
        ],
      },
      // Ain
      {
        id: "video1_ain",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/18-Ain.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
        ],
      },
      // Ghain
      {
        id: "video1_ghain",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/19-Ghain.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
        ],
      },
      // Fa
      {
        id: "video1_fa",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/20-Fa.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
        ],
      },
      // Qof
      {
        id: "video1_qof",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/21-Qof.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
        ],
      },
      // Kaf
      {
        id: "video1_kaf",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/22-Kaf.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
        ],
      },
      // Lam
      {
        id: "video1_lam",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/23-Lam.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
        ],
      },
      // Mim
      {
        id: "video1_mim",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/24-Mim.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
        ],
      },
      // Nun
      {
        id: "video1_nun",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/25-Nun.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Wau
      {
        id: "video1_wau",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/26-Wau.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
        ],
      },
      // Ha
      {
        id: "video1_ha",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/27-Ha.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
        ],
      },
      // Lam Alif
      {
        id: "video1_lam-alif",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/28-Lam-Alif.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      // Hamzah
      {
        id: "video1_hamzah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/29-Hamzah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      // Ya
      {
        id: "video1_Ya",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/video/30-Ya.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
        ],
      },
      // Alif
      {
        id: "audio1_alif",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/1-Alif.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
        ],
      },
      // Ba
      {
        id: "audio1_ba",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/2-Ba.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
        ],
      },
      // Ta
      {
        id: "audio1_ta",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/3-Ta.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/2-Ba.png",
          },
        ],
      },
      // Tsa
      {
        id: "audio1_tsa",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/4-Tsa.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/4-Tsa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/3-Ta.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
        ],
      },
      // Jim
      {
        id: "audio1_jim",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/5-Jim.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Ha
      {
        id: "audio1_ha",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/6-Ha.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/1-Alif.png",
          },
        ],
      },
      // Kho
      {
        id: "audio1_kho",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/7-Kho.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/7-Kho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/5-Jim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/6-Ha.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Dal
      {
        id: "audio1_dal",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/8-Dal.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
        ],
      },
      // Dzal
      {
        id: "audio1_dzal",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/9-Dzal.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
        ],
      },
      // Ra
      {
        id: "audio1_ra",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/10-Ra.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/8-Dal.png",
          },
        ],
      },
      // Zay
      {
        id: "audio1_zay",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/11-Zay.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/11-Zay.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/9-Dzal.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/10-Ra.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
        ],
      },
      // Sin
      {
        id: "audio1_sin",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/12-Sin.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
        ],
      },
      // Syin
      {
        id: "audio1_syin",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/13-Syin.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/13-Syin.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
        ],
      },
      // Shod
      {
        id: "audio1_shod",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/14-Shod.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/12-Sin.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
        ],
      },
      // Dhod
      {
        id: "audio1_dhod",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/15-Dhod.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
        ],
      },
      // Tho
      {
        id: "audio1_tho",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/16-Tho.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/14-Shod.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
        ],
      },
      // Zho
      {
        id: "audio1_zho",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/17-Zho.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/17-Zho.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/15-Dhod.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/16-Tho.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
        ],
      },
      // Ain
      {
        id: "audio1_ain",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/18-Ain.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
        ],
      },
      // Ghain
      {
        id: "audio1_ghain",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/19-Ghain.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/18-Ain.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
        ],
      },
      // Fa
      {
        id: "audio1_fa",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/20-Fa.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/19-Ghain.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
        ],
      },
      // Qof
      {
        id: "audio1_qof",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/21-Qof.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/21-Qof.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/20-Fa.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
        ],
      },
      // Kaf
      {
        id: "audio1_kaf",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/22-Kaf.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
        ],
      },
      // Lam
      {
        id: "audio1_lam",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/23-Lam.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
        ],
      },
      // Mim
      {
        id: "audio1_mim",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/24-Mim.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/22-Kaf.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
        ],
      },
      // Nun
      {
        id: "audio1_nun",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/25-Nun.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/24-Mim.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/23-Lam.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
        ],
      },
      // Wau
      {
        id: "audio1_wau",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/26-Wau.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
        ],
      },
      // Ha
      {
        id: "audio1_ha",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/27-Ha.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
        ],
      },
      // Lam Alif
      {
        id: "audio1_lam-alif",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/28-Lam-Alif.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      // Hamzah
      {
        id: "audio1_hamzah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/29-Hamzah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/29-Hamzah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/28-Lam-Alif.png",
          },
        ],
      },
      // Ya
      {
        id: "audio1_ya",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/audio/30-Ya.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/26-Wau.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/27-Ha.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/25-Nun.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran1-huruf-hijaiyah/image/30-Ya.png",
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
      //Latihan 2 - Gambar
      {
        id: "gambar2",
        gambar: "latihan-gambar.svg",
        nama: "Latihan 2 - Gambar",
        deskripsi: "Huruf Berharakat Fathah",
        nama2: "Gambar",
        soalJawaban: [
          // Alif Fathah
          {
            id: "gambar2_alif-fathah",
            soal: `Yang manakah huruf <b>"A"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
            ],
          },
          // Ba Fathah
          {
            id: "gambar2_ba-fathah",
            soal: `Yang manakah huruf <b>"Ba"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
            ],
          },
          // Ta Fathah
          {
            id: "gambar2_ta-fathah",
            soal: `Yang manakah huruf <b>"Ta"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
            ],
          },
          // Tsa Fathah
          {
            id: "gambar2_tsa-fathah",
            soal: `Yang manakah huruf <b>"Tsa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
            ],
          },
          // Jim Fathah
          {
            id: "gambar2_jim-fathah",
            soal: `Yang manakah huruf <b>"Ja"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
              },
            ],
          },
          // Ha Fathah
          {
            id: "gambar2_ha-fathah",
            soal: `Yang manakah huruf <b>"Ha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
              },
            ],
          },
          // Kho Fathah
          {
            id: "gambar2_kho-fathah",
            soal: `Yang manakah huruf <b>"Kha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Dal Fathah
          {
            id: "gambar2_dal-fathah",
            soal: `Yang manakah huruf <b>"Da"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
            ],
          },
          // Dzal Fathah
          {
            id: "gambar2_dzal-fathah",
            soal: `Yang manakah huruf <b>"Dza"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
            ],
          },
          // Ra Fathah
          {
            id: "gambar2_ra-fathah",
            soal: `Yang manakah huruf <b>"Ra"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
            ],
          },
          // Zay Fathah
          {
            id: "gambar2_zay-fathah",
            soal: `Yang manakah huruf <b>"Za"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
            ],
          },
          // Sin Fathah
          {
            id: "gambar2_sin-fathah",
            soal: `Yang manakah huruf <b>"Sa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
            ],
          },
          // Syin Fathah
          {
            id: "gambar2_syin-fathah",
            soal: `Yang manakah huruf <b>"Sya"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
            ],
          },
          // Shod Fathah
          {
            id: "gambar2_shod-fathah",
            soal: `Yang manakah huruf <b>"Sha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
            ],
          },
          // Dhod Fathah
          {
            id: "gambar2_dhod-fathah",
            soal: `Yang manakah huruf <b>"Dha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
            ],
          },
          // Tho Fathah
          {
            id: "gambar2_tho-fathah",
            soal: `Yang manakah huruf <b>"Tha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
            ],
          },
          // Zho Fathah
          {
            id: "gambar2_zho-fathah",
            soal: `Yang manakah huruf <b>"Zha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
            ],
          },
          // Ain Fathah
          {
            id: "gambar2_ain-fathah",
            soal: `Yang manakah huruf <b>"'A"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
            ],
          },
          // Ghain Fathah
          {
            id: "gambar2_ghain-fathah",
            soal: `Yang manakah huruf <b>"Gha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
            ],
          },
          // Fa Fathah
          {
            id: "gambar2_fa-fathah",
            soal: `Yang manakah huruf <b>"Fa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
            ],
          },
          // Qof Fathah
          {
            id: "gambar2_qof-fathah",
            soal: `Yang manakah huruf <b>"Qa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
            ],
          },
          // Kaf Fathah
          {
            id: "gambar2_kaf-fathah",
            soal: `Yang manakah huruf <b>"Ka"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
            ],
          },
          // Lam Fathah
          {
            id: "gambar2_lam-fathah",
            soal: `Yang manakah huruf <b>"La"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
            ],
          },
          // Mim Fathah
          {
            id: "gambar2_mim-fathah",
            soal: `Yang manakah huruf <b>"Ma"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
            ],
          },
          // Nun Fathah
          {
            id: "gambar2_nun-fathah",
            soal: `Yang manakah huruf <b>"Na"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Wau Fathah
          {
            id: "gambar2_wau-fathah",
            soal: `Yang manakah huruf <b>"Wa"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
            ],
          },
          // Ha Fathah
          {
            id: "gambar2_ha-fathah",
            soal: `Yang manakah huruf <b>"Ha"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
            ],
          },
          // Ya Fathah
          {
            id: "gambar2_ya-fathah",
            soal: `Yang manakah huruf <b>"Ya"</b>?`,
            audio: "",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
            ],
          },
        ],
      },
      //Latihan 2 - Video
      {
        id: "video2",
        gambar: "latihan-video.svg",
        nama: "Latihan 2 - Video",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Video",
        soalJawaban: [
          // Alif Fathah
          {
            id: "video2_alif-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/1-Alif-Fathah.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
            ],
          },
          // Ba Fathah
          {
            id: "video2_ba-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/2-Ba-Fathah.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
            ],
          },
          // Ta Fathah
          {
            id: "video2_ta-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/3-Ta-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
            ],
          },
          // Tsa Fathah
          {
            id: "video2_tsa-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/4-Tsa-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
            ],
          },
          // Jim Fathah
          {
            id: "video2_jim-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/5-Jim-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Ha Fathah
          {
            id: "video2_ha-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/6-Ha-Fathah.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
              },
            ],
          },
          // Kho Fathah
          {
            id: "video2_kho-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/7-Kho-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Dal Fathah
          {
            id: "video2_dal-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/8-Dal-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
            ],
          },
          // Dzal Fathah
          {
            id: "video2_dzal-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/9-Dzal-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
            ],
          },
          // Ra Fathah
          {
            id: "video2_ra-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/10-Ra-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
            ],
          },
          // Zay Fathah
          {
            id: "video2_zay-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/11-Zay-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
            ],
          },
          // Sin Fathah
          {
            id: "video2_sin-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/12-Sin-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
            ],
          },
          // Syin Fathah
          {
            id: "video2_syin-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/13-Syin-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
            ],
          },
          // Shod Fathah
          {
            id: "video2_shod-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/14-Shod-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
            ],
          },
          // Dhod Fathah
          {
            id: "video2_dhod-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/15-Dhod-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
            ],
          },
          // Tho Fathah
          {
            id: "video2_tho-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/16-Tho-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
            ],
          },
          // Zho Fathah
          {
            id: "video2_zho-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/17-Zho-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
            ],
          },
          // Ain Fathah
          {
            id: "video2_ain-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/18-Ain-Fathah.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
            ],
          },
          // Ghain Fathah
          {
            id: "video2_ghain-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/19-Ghain-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
            ],
          },
          // Fa Fathah
          {
            id: "video2_fa-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/20-Fa-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
            ],
          },
          // Qof Fathah
          {
            id: "video2_qof-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/21-Qof-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
            ],
          },
          // Kaf Fathah
          {
            id: "video2_kaf-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/22-Kaf-Fathah.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
            ],
          },
          // Lam Fathah
          {
            id: "video2_lam-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/23-Lam-Fathah.mp4",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
            ],
          },
          // Mim Fathah
          {
            id: "video2_mim-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/24-Mim-Fathah.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
            ],
          },
          // Nun Fathah
          {
            id: "video2_nun-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/25-Nun-Fathah.mp4",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Wau Fathah
          {
            id: "video2_wau-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/26-Wau-Fathah.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
            ],
          },
          // Ha Fathah
          {
            id: "video2_ha-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/27-Ha-Fathah.mp4",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
            ],
          },
          // Ya Fathah
          {
            id: "video2_ya-fathah",
            soal: `Huruf apa yang diucapkan dari video berikut ini?`,
            audio: "",
            video:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/28-Ya-Fathah.mp4",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
            ],
          },
        ],
      },
      // Latihan 2 - Audio
      {
        id: "audio2",
        gambar: "latihan-audio.svg",
        nama: "Latihan 2 - Audio",
        deskripsi: "Huruf Hijaiyah",
        nama2: "Audio",
        soalJawaban: [
          // Alif Fathah
          {
            id: "audio2_alif-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/1-Alif-Fathah.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
            ],
          },
          // Ba Fathah
          {
            id: "audio2_ba-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/2-Ba-Fathah.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
            ],
          },
          // Ta Fathah
          {
            id: "audio2_ta-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/3-Ta-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
              },
            ],
          },
          // Tsa Fathah
          {
            id: "audio2_tsa-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/4-Tsa-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
            ],
          },
          // Jim Fathah
          {
            id: "audio2_jim-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/5-Jim-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Ha Fathah
          {
            id: "audio2_ha-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/6-Ha-Fathah.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
              },
            ],
          },
          // Kho Fathah
          {
            id: "audio2_kho-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/7-Kho-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Dal Fathah
          {
            id: "audio2_dal-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/8-Dal-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
            ],
          },
          // Dzal Fathah
          {
            id: "audio2_dzal-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/9-Dzal-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
            ],
          },
          // Ra Fathah
          {
            id: "audio2_ra-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/10-Ra-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
              },
            ],
          },
          // Zay Fathah
          {
            id: "audio2_zay-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/11-Zay-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
            ],
          },
          // Sin Fathah
          {
            id: "audio2_sin-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/12-Sin-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
            ],
          },
          // Syin Fathah
          {
            id: "audio2_syin-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/13-Syin-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
            ],
          },
          // Shod Fathah
          {
            id: "audio2_shod-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/14-Shod-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
            ],
          },
          // Dhod Fathah
          {
            id: "audio2_dhod-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/15-Dhod-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
            ],
          },
          // Tho Fathah
          {
            id: "audio2_tho-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/16-Tho-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
            ],
          },
          // Zho Fathah
          {
            id: "audio2_zho-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/17-Zho-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
            ],
          },
          // Ain Fathah
          {
            id: "audio2_ain-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/18-Ain-Fathah.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
            ],
          },
          // Ghain Fathah
          {
            id: "audio2_ghain-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/19-Ghain-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
            ],
          },
          // Fa Fathah
          {
            id: "audio2_fa-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/20-Fa-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
            ],
          },
          // Qof Fathah
          {
            id: "audio2_qof-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/21-Qof-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
            ],
          },
          // Kaf Fathah
          {
            id: "audio2_kaf-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/22-Kaf-Fathah.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
            ],
          },
          // Lam Fathah
          {
            id: "audio2_lam-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/23-Lam-Fathah.m4a",
            video: "",
            jawabanBenar: 3,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
            ],
          },
          // Mim Fathah
          {
            id: "audio2_mim-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/24-Mim-Fathah.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
            ],
          },
          // Nun Fathah
          {
            id: "audio2_nun-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/25-Nun-Fathah.m4a",
            video: "",
            jawabanBenar: 1,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
            ],
          },
          // Wau Fathah
          {
            id: "audio2_wau-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/26-Wau-Fathah.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
            ],
          },
          // Ha Fathah
          {
            id: "audio2_ha-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/27-Ha-Fathah.m4a",
            video: "",
            jawabanBenar: 2,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
            ],
          },
          // Ya Fathah
          {
            id: "audio2_ya-fathah",
            soal: `Huruf apa yang terdengar?`,
            audio:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/28-Ya-Fathah.m4a",
            video: "",
            jawabanBenar: 4,
            opsi: [
              {
                id: 1,
                text: "A",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
              },
              {
                id: 2,
                text: "B",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
              },
              {
                id: 3,
                text: "C",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
              },
              {
                id: 4,
                text: "D",
                imgSrc:
                  "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
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
      // Alif Fathah
      {
        id: "gambar2_alif-fathah",
        soal: `Yang manakah huruf <b>"A"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
        ],
      },
      // Ba Fathah
      {
        id: "gambar2_ba-fathah",
        soal: `Yang manakah huruf <b>"Ba"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
        ],
      },
      // Ta Fathah
      {
        id: "gambar2_ta-fathah",
        soal: `Yang manakah huruf <b>"Ta"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
        ],
      },
      // Tsa Fathah
      {
        id: "gambar2_tsa-fathah",
        soal: `Yang manakah huruf <b>"Tsa"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
        ],
      },
      // Jim Fathah
      {
        id: "gambar2_jim-fathah",
        soal: `Yang manakah huruf <b>"Ja"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Ha Fathah
      {
        id: "gambar2_ha-fathah",
        soal: `Yang manakah huruf <b>"Ha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
          },
        ],
      },
      // Kho Fathah
      {
        id: "gambar2_kho-fathah",
        soal: `Yang manakah huruf <b>"Kha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Dal Fathah
      {
        id: "gambar2_dal-fathah",
        soal: `Yang manakah huruf <b>"Da"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
        ],
      },
      // Dzal Fathah
      {
        id: "gambar2_dzal-fathah",
        soal: `Yang manakah huruf <b>"Dza"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
        ],
      },
      // Ra Fathah
      {
        id: "gambar2_ra-fathah",
        soal: `Yang manakah huruf <b>"Ra"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
        ],
      },
      // Zay Fathah
      {
        id: "gambar2_zay-fathah",
        soal: `Yang manakah huruf <b>"Za"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
        ],
      },
      // Sin Fathah
      {
        id: "gambar2_sin-fathah",
        soal: `Yang manakah huruf <b>"Sa"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
        ],
      },
      // Syin Fathah
      {
        id: "gambar2_syin-fathah",
        soal: `Yang manakah huruf <b>"Sya"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
        ],
      },
      // Shod Fathah
      {
        id: "gambar2_shod-fathah",
        soal: `Yang manakah huruf <b>"Sha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
        ],
      },
      // Dhod Fathah
      {
        id: "gambar2_dhod-fathah",
        soal: `Yang manakah huruf <b>"Dha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
        ],
      },
      // Tho Fathah
      {
        id: "gambar2_tho-fathah",
        soal: `Yang manakah huruf <b>"Tha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
        ],
      },
      // Zho Fathah
      {
        id: "gambar2_zho-fathah",
        soal: `Yang manakah huruf <b>"Zha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
        ],
      },
      // Ain Fathah
      {
        id: "gambar2_ain-fathah",
        soal: `Yang manakah huruf <b>"Ain"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
        ],
      },
      // Ghain Fathah
      {
        id: "gambar2_ghain-fathah",
        soal: `Yang manakah huruf <b>"Gha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
        ],
      },
      // Fa Fathah
      {
        id: "gambar2_fa-fathah",
        soal: `Yang manakah huruf <b>"Fa"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
        ],
      },
      // Qof Fathah
      {
        id: "gambar2_qof-fathah",
        soal: `Yang manakah huruf <b>"Qa"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
        ],
      },
      // Kaf Fathah
      {
        id: "gambar2_kaf-fathah",
        soal: `Yang manakah huruf <b>"Ka"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
        ],
      },
      // Lam Fathah
      {
        id: "gambar2_lam-fathah",
        soal: `Yang manakah huruf <b>"La"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
        ],
      },
      // Mim Fathah
      {
        id: "gambar2_mim-fathah",
        soal: `Yang manakah huruf <b>"Ma"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
        ],
      },
      // Nun Fathah
      {
        id: "gambar2_nun-fathah",
        soal: `Yang manakah huruf <b>"Na"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Wau Fathah
      {
        id: "gambar2_wau-fathah",
        soal: `Yang manakah huruf <b>"Wa"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
        ],
      },
      // Ha Fathah
      {
        id: "gambar2_ha-fathah",
        soal: `Yang manakah huruf <b>"Ha"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
        ],
      },
      // Ya Fathah
      {
        id: "gambar2_ya-fathah",
        soal: `Yang manakah huruf <b>"Ya"</b>?`,
        audio: "",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
        ],
      },
      // Alif Fathah
      {
        id: "video2_alif-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/1-Alif-Fathah.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
        ],
      },
      // Ba Fathah
      {
        id: "video2_ba-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/2-Ba-Fathah.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
        ],
      },
      // Ta Fathah
      {
        id: "video2_ta-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/3-Ta-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
        ],
      },
      // Tsa Fathah
      {
        id: "video2_tsa-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/4-Tsa-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
        ],
      },
      // Jim Fathah
      {
        id: "video2_jim-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/5-Jim-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Ha Fathah
      {
        id: "video2_ha-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/6-Ha-Fathah.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
          },
        ],
      },
      // Kho Fathah
      {
        id: "video2_kho-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/7-Kho-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Dal Fathah
      {
        id: "video2_dal-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/8-Dal-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
        ],
      },
      // Dzal Fathah
      {
        id: "video2_dzal-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/9-Dzal-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
        ],
      },
      // Ra Fathah
      {
        id: "video2_ra-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/10-Ra-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
        ],
      },
      // Zay Fathah
      {
        id: "video2_zay-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/11-Zay-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
        ],
      },
      // Sin Fathah
      {
        id: "video2_sin-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/12-Sin-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
        ],
      },
      // Syin Fathah
      {
        id: "video2_syin-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/13-Syin-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
        ],
      },
      // Shod Fathah
      {
        id: "video2_shod-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/14-Shod-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
        ],
      },
      // Dhod Fathah
      {
        id: "video2_dhod-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/15-Dhod-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
        ],
      },
      // Tho Fathah
      {
        id: "video2_tho-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/16-Tho-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
        ],
      },
      // Zho Fathah
      {
        id: "video2_zho-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/17-Zho-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
        ],
      },
      // Ain Fathah
      {
        id: "video2_ain-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/18-Ain-Fathah.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
        ],
      },
      // Ghain Fathah
      {
        id: "video2_ghain-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/19-Ghain-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
        ],
      },
      // Fa Fathah
      {
        id: "video2_fa-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/20-Fa-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
        ],
      },
      // Qof Fathah
      {
        id: "video2_qof-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/21-Qof-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
        ],
      },
      // Kaf Fathah
      {
        id: "video2_kaf-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/22-Kaf-Fathah.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
        ],
      },
      // Lam Fathah
      {
        id: "video2_lam-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/23-Lam-Fathah.mp4",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
        ],
      },
      // Mim Fathah
      {
        id: "video2_mim-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/24-Mim-Fathah.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
        ],
      },
      // Nun Fathah
      {
        id: "video2_nun-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/25-Nun-Fathah.mp4",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Wau Fathah
      {
        id: "video2_wau-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/26-Wau-Fathah.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
        ],
      },
      // Ha Fathah
      {
        id: "video2_ha-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/27-Ha-Fathah.mp4",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
        ],
      },
      // Ya Fathah
      {
        id: "video2_ya-fathah",
        soal: `Huruf apa yang diucapkan dari video berikut ini?`,
        audio: "",
        video:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/video/28-Ya-Fathah.mp4",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
        ],
      },
      // Alif Fathah
      {
        id: "audio2_alif-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/1-Alif-Fathah.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
        ],
      },
      // Ba Fathah
      {
        id: "audio2_ba-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/2-Ba-Fathah.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
        ],
      },
      // Ta Fathah
      {
        id: "audio2_ta-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/3-Ta-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/2-Ba-Fathah.png",
          },
        ],
      },
      // Tsa Fathah
      {
        id: "audio2_tsa-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/4-Tsa-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/4-Tsa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/3-Ta-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
        ],
      },
      // Jim Fathah
      {
        id: "audio2_jim-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/5-Jim-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Ha Fathah
      {
        id: "audio2_ha-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/6-Ha-Fathah.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/1-Alif-Fathah.png",
          },
        ],
      },
      // Kho Fathah
      {
        id: "audio2_kho-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/7-Kho-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/7-Kho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/5-Jim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/6-Ha-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Dal Fathah
      {
        id: "audio2_dal-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/8-Dal-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
        ],
      },
      // Dzal Fathah
      {
        id: "audio2_dzal-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/9-Dzal-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
        ],
      },
      // Ra Fathah
      {
        id: "audio2_ra-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/10-Ra-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/8-Dal-Fathah.png",
          },
        ],
      },
      // Zay Fathah
      {
        id: "audio2_zay-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/11-Zay-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/11-Zay-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/9-Dzal-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/10-Ra-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
        ],
      },
      // Sin Fathah
      {
        id: "audio2_sin-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/12-Sin-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
        ],
      },
      // Syin Fathah
      {
        id: "audio2_syin-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/13-Syin-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/13-Syin-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
        ],
      },
      // Shod Fathah
      {
        id: "audio2_shod-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/14-Shod-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/12-Sin-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
        ],
      },
      // Dhod Fathah
      {
        id: "audio2_dhod-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/15-Dhod-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
        ],
      },
      // Tho Fathah
      {
        id: "audio2_tho-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/16-Tho-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/14-Shod-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
        ],
      },
      // Zho Fathah
      {
        id: "audio2_zho-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/17-Zho-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/17-Zho-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/15-Dhod-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/16-Tho-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
        ],
      },
      // Ain Fathah
      {
        id: "audio2_ain-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/18-Ain-Fathah.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
        ],
      },
      // Ghain Fathah
      {
        id: "audio2_ghain-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/19-Ghain-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/18-Ain-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
        ],
      },
      // Fa Fathah
      {
        id: "audio2_fa-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/20-Fa-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/19-Ghain-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
        ],
      },
      // Qof Fathah
      {
        id: "audio2_qof-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/21-Qof-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/21-Qof-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/20-Fa-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
        ],
      },
      // Kaf Fathah
      {
        id: "audio2_kaf-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/22-Kaf-Fathah.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
        ],
      },
      // Lam Fathah
      {
        id: "audio2_lam-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/23-Lam-Fathah.m4a",
        video: "",
        jawabanBenar: 3,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
        ],
      },
      // Mim Fathah
      {
        id: "audio2_mim-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/24-Mim-Fathah.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/22-Kaf-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
        ],
      },
      // Nun Fathah
      {
        id: "audio2_nun-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/25-Nun-Fathah.m4a",
        video: "",
        jawabanBenar: 1,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/24-Mim-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/23-Lam-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
        ],
      },
      // Wau Fathah
      {
        id: "audio2_wau-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/26-Wau-Fathah.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
        ],
      },
      // Ha Fathah
      {
        id: "audio2_ha-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/27-Ha-Fathah.m4a",
        video: "",
        jawabanBenar: 2,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
        ],
      },
      // Ya Fathah
      {
        id: "audio2_ya-fathah",
        soal: `Huruf apa yang terdengar?`,
        audio:
          "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/audio/28-Ya-Fathah.m4a",
        video: "",
        jawabanBenar: 4,
        opsi: [
          {
            id: 1,
            text: "A",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/26-Wau-Fathah.png",
          },
          {
            id: 2,
            text: "B",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/27-Ha-Fathah.png",
          },
          {
            id: 3,
            text: "C",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/25-Nun-Fathah.png",
          },
          {
            id: 4,
            text: "D",
            imgSrc:
              "https://storage.googleapis.com/qolami-web-bucket/pelajaran2-huruf-berharakat-fathah/image/28-Ya-Fathah.png",
          },
        ],
      },
    ],
  },
];

export default KursusData;
