import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent2 from '../components/HeaderComponent2';
import FooterComponent from '../components/FooterComponent';
import SettingsComponents from '../components/SettingsComponent';

const Pengaturan = ({ tempToken, img }) => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (tempToken === false) {
  //     console.log("Redirecting to home");
  //     navigate('/');
  //   }
  // }, [tempToken, navigate]);

  // if (tempToken === false) {
  //   return null; // Don't render the component if redirecting
  // }
  useEffect(()=>{
    localStorage.getItem('settings')
  })

  return (
    <div>
      <HeaderComponent2 img={img}/>
      <SettingsComponents />
      <FooterComponent />
    </div>
  );
}

export default Pengaturan;
