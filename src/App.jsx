import { BrowserRouter as R1, Routes as R2, Route as R3 } from 'react-router-dom';
import Masuk from './pages/Masuk.jsx'
import Daftar from './pages/Daftar.jsx'
import LupaPassword from './pages/LupaPassword.jsx'
import EditProfile from './pages/EditProfile.jsx'
import UbahPassword from './pages/UbahPassword.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Course from './pages/Course.jsx'

const App = () => {
  return (
    <>
        <Masuk/>
        <Daftar/>
        <LupaPassword/>
        <EditProfile/>
        <UbahPassword/>
        <R1>
          <R2>
            <R3 path="/" element={<Home/>}/>
            <R3 path="/tentang" element={<About/>}/>
            <R3 path="/kursus" element={<Course/>}/>
          </R2>
        </R1>
    </>
  )
}

export default App
