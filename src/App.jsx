import { BrowserRouter as R1, Routes as R2, Route as R3 } from 'react-router-dom';
import Masuk from './pages/Masuk.jsx'
import Daftar from './pages/Daftar.jsx'
import LupaKataSandi from './pages/LupaKataSandi.jsx'
import EditProfile from './pages/EditProfile.jsx'
import UbahKataSandi from './pages/UbahKataSandi.jsx'
import Beranda from './pages/Beranda.jsx'
import Tentang from './pages/Tentang.jsx'
import Kursus from './pages/Kursus.jsx'

const App = () => {
  return (
    <>
        <Masuk/>
        <Daftar/>
        <LupaKataSandi/>
        <EditProfile/>
        <UbahKataSandi/>
        <R1>
          <R2>
            <R3 path="/" element={<Beranda/>}/>
            <R3 path="/tentang" element={<Tentang/>}/>
            <R3 path="/kursus" element={<Kursus/>}/>
          </R2>
        </R1>
    </>
  )
}

export default App
