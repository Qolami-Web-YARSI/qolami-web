import {
  BrowserRouter as R1,
  Routes as R2,
  Route as R3,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Masuk from "./pages/Masuk.jsx";
import Daftar from "./pages/Daftar.jsx";
import LupaKataSandi from "./pages/LupaKataSandi.jsx";
import Beranda from "./pages/Beranda.jsx";
import Tentang from "./pages/Tentang.jsx";
import Kursus from "./pages/Kursus.jsx";
import DetailKursus from "./pages/DetailKursus.jsx";
import Detail2Kursus from "./pages/Detail2Kursus.jsx";
import DialogBerhasil from "./pages/DialogBerhasil.jsx";
import Pengaturan from "./pages/Pengaturan.jsx";
import DialogBerhasil2 from "./pages/DialogBerhasil2.jsx";
import Aktifitas from "./pages/Aktifitas.jsx";
import DialogAkhir from "./pages/DialogAkhir.jsx";
import DialogHasilNilai from "./pages/DialogHasilNilai.jsx";

const App = () => {
  const [tempToken, setTempToken] = useState(false);
  const imageUrlPencil = `${process.env.PUBLIC_URL}/pensil_2.svg`;
  const imageUrlLogo = `${process.env.PUBLIC_URL}/logo-qolami.svg`;
  const imageUrlSound = `${process.env.PUBLIC_URL}/sound_latihanUjian.svg`;

  useEffect(() => {}, [tempToken]);

  useEffect(() => {
    if (localStorage.getItem("idDetail") === null) {
      localStorage.setItem("idDetail", "");
    } else {
      localStorage.getItem("idDetail");
    }
  }, []);

  return (
    <>
      <R1>
        <DialogBerhasil
          location2={"dialogBerhasilLupaSandi"}
          text={
            "Bila email ada, maka email untuk mengubah kata sandi akan dikirim ke email yang Anda masukkan"
          }
          location={"#masukModal"}
        />
        <DialogBerhasil
          location2={"dialogBerhasilDaftar"}
          text={"Pendaftaran berhasil! Akun Anda telah berhasil dibuat"}
          location={"#masukModal"}
        />
        <DialogBerhasil2
          location={"dialogBerhasilUbahSandi"}
          text={"Kata Sandi berhasil disimpan"}
        />
        <DialogBerhasil2
          location={"dialogBerhasilProfile"}
          text={"Profil berhasil disimpan"}
        />
        <DialogAkhir
          id={"dialogAkhirLatihan"}
          id2={"dialogHasilNilaiLatihan"}
          text={"Apakah Anda yakin ingin mengakhiri latihan ini?"}
          text2={"Akhiri Latihan"}
        />
        <DialogAkhir
          id={"dialogAkhirUjian"}
          id2={"dialogHasilNilaiUjian"}
          text={"Apakah Anda yakin ingin mengakhiri ujian ini?"}
          text2={"Akhiri Ujian"}
        />
        <DialogHasilNilai
          id={"dialogHasilNilaiUjian"}
          img={imageUrlPencil}
          graduate={75}
          panjangSoal={localStorage.getItem(`panjangSoal`)}
          score={JSON.parse(localStorage.getItem(`score`))}
        />
        <DialogHasilNilai
          id={"dialogHasilNilaiLatihan"}
          img={imageUrlPencil}
          graduate={75}
          panjangSoal={localStorage.getItem(`panjangSoal`)}
          score={localStorage.getItem(`score`)}
        />

        {/* <DialogHasilNilai id={"dialogHasilNilaiLatihan"} img={imageUrlPencil} score={localStorage.getItem('a')}/> */}
        {/* <DialogHasilNilai id={"dialogHasilNilaiUjian"}/> */}
        <Masuk img={imageUrlLogo} setTempToken={setTempToken} />
        <Daftar img={imageUrlLogo} />
        <LupaKataSandi img={imageUrlLogo} />
        <R2>
          <R3
            path="/"
            element={<Beranda tempToken={tempToken} img={imageUrlLogo} />}
          />
          <R3
            path="/pengaturan"
            element={<Pengaturan tempToken={tempToken} img={imageUrlLogo} />}
          />
          <R3
            path="/tentang"
            element={<Tentang tempToken={tempToken} img={imageUrlLogo} />}
          />
          <R3
            path="/kursus"
            element={<Kursus tempToken={tempToken} img={imageUrlLogo} />}
          />
          <R3
            path="/:id"
            element={
              <DetailKursus
                tempToken={tempToken}
                img={imageUrlLogo}
                img2={imageUrlPencil}
                img3={imageUrlSound}
              />
            }
          />
          <R3
            path="/:id/contents/:id"
            element={
              <Detail2Kursus
                tempToken={tempToken}
                img={imageUrlLogo}
                img2={imageUrlPencil}
                img3={imageUrlSound}
              />
            }
          />
          <R3
            path="/:id/exercise/:id"
            element={
              <Detail2Kursus
                tempToken={tempToken}
                img={imageUrlLogo}
                img2={imageUrlPencil}
                img3={imageUrlSound}
              />
            }
          />
          <R3
            path="/aktivitas"
            element={<Aktifitas tempToken={tempToken} img={imageUrlLogo} />}
          />
        </R2>
      </R1>
    </>
  );
};

export default App;
