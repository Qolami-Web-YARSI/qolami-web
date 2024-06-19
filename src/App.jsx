import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
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
import DialogBerhasil2_2 from "./pages/DialogBerhasil2_2.jsx";

const App = () => {
  const [tempToken, setTempToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("idDetail") === null) {
      localStorage.setItem("idDetail", "");
    } else {
      localStorage.getItem("idDetail");
    }

    if (!localStorage.getItem("idDetail").includes("exam")) {
      if (localStorage.getItem("id2") === null) {
        localStorage.setItem("id2", "");
      } else {
        localStorage.getItem("id2");
      }
    } else {
      localStorage.removeItem("id2");
    }
  }, []);

  return (
    <Router>
      <InnerApp tempToken={tempToken} setTempToken={setTempToken} />
    </Router>
  );
};

const InnerApp = ({ tempToken, setTempToken }) => {
  const imageUrlPencil = `${process.env.PUBLIC_URL}/pensil_2.svg`;
  const imageUrlLogo = `${process.env.PUBLIC_URL}/logo-qolami.svg`;
  const imageUrlSound = `${process.env.PUBLIC_URL}/sound_latihanUjian.svg`;
  const navigate = useNavigate();

  useEffect(() => {}, [tempToken]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("TimeStop")) === false) {
      navigate(`/${localStorage.getItem("idDetail")}`, { replace: true });
    }
  }, []);

  return (
    <>
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
      <DialogBerhasil2_2
        location={"ujianBerakhir"}
        text={
          "Ujian yang Anda kerjakan sebelumnya telah berakhir. Mohon tetap berada di halaman ujian selama proses ujian berlangsung. Jika Anda sudah mengsubmit ujian dan telah memunculkan nilai, Abaikan pesan sebelumnya"
        }
      />
      <DialogBerhasil2_2
        location={"ujianPeringatan"}
        text={
          "Selama ujian ini berlangsung, mohon untuk tidak keluar dari ujian. Hal ini untuk memastikan ujian Anda tercatat dengan baik dan tidak terjadi gangguan pada sistem"
        }
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
        text={"ujian"}
        panjangSoal={10}
        score={JSON.parse(localStorage.getItem(`score`))}
      />
      <DialogHasilNilai
        id={"dialogHasilNilaiLatihan"}
        img={"pensil_2.svg"}
        graduate={75}
        text={"latihan"}
        panjangSoal={4}
        score={localStorage.getItem(`score`)}
      />

      <Masuk img={imageUrlLogo} setTempToken={setTempToken} />
      <Daftar img={imageUrlLogo} />
      <LupaKataSandi img={imageUrlLogo} />
      <Routes>
        <Route
          path="/"
          element={<Beranda tempToken={tempToken} img={imageUrlLogo} />}
        />
        <Route
          path="/pengaturan"
          element={<Pengaturan tempToken={tempToken} img={imageUrlLogo} />}
        />
        <Route
          path="/tentang"
          element={<Tentang tempToken={tempToken} img={imageUrlLogo} />}
        />
        <Route
          path="/kursus"
          element={<Kursus tempToken={tempToken} img={imageUrlLogo} />}
        />
        <Route
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
        <Route
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
        <Route
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
        <Route
          path="/aktivitas"
          element={<Aktifitas tempToken={tempToken} img={imageUrlLogo} />}
        />
      </Routes>
    </>
  );
};

export default App;
