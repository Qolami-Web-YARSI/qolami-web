import { BrowserRouter as R1, Routes as R2, Route as R3 } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Masuk from './pages/Masuk.jsx'
import Daftar from './pages/Daftar.jsx'
import LupaKataSandi from './pages/LupaKataSandi.jsx'
import EditProfile from './pages/EditProfile.jsx'
import UbahKataSandi from './pages/UbahKataSandi.jsx'
import Beranda from './pages/Beranda.jsx'
import Tentang from './pages/Tentang.jsx'
import Kursus from './pages/Kursus.jsx'
import DetailKursus from './pages/DetailKursus.jsx'
import Detail2Kursus from './pages/Detail2Kursus.jsx';
import DialogBerhasil from './pages/DialogBerhasil.jsx';
import Pengaturan from './pages/Pengaturan.jsx'
import Testing from './pages/Testing.jsx';

const App = () => {
  const [tempToken, setTempToken] = useState(false)

  return (
    <>
        <R1>
          <DialogBerhasil location2={"dialogBerhasilDaftar"} text={"Pendaftaran berhasil! Akun Anda telah berhasil dibuat"} location={"#masukModal"}/>
          <DialogBerhasil location2={"dialogBerhasilLupaKataSandi"} text={"Bila email ada, maka email untuk mengubah kata sandi akan dikirim ke email yang Anda masukkan"} location={"#masukModal"}/>
          <Masuk setTempToken={setTempToken}/>
          <Daftar/>
          <LupaKataSandi/>
          <EditProfile/>
          <UbahKataSandi/>
          <R2>
            <R3 path="/" element={<Beranda tempToken={tempToken}/>}/>
            <R3 path="/pengaturan" element={<Pengaturan tempToken={tempToken}/>}/>
            <R3 path="/tentang" element={<Tentang tempToken={tempToken}/>}/>
            <R3 path="/kursus" element={<Kursus tempToken={tempToken}/>}/>
            <R3 path="/:id" element={<DetailKursus tempToken={tempToken} />}/>
            <R3 path="/lessons-two/contents/:id" element={<Detail2Kursus tempToken={tempToken}/>}/>




            <R3 path="/detailLatihan/:id" element={<Detail2Kursus tempToken={tempToken}/>}/>
            <R3 path="/detailUjian/:id" element={<Detail2Kursus tempToken={tempToken}/>}/>


            <R3 path="/testing" element={<Testing/>}/>
          </R2>
        </R1>
    </>
  )
}

export default App
