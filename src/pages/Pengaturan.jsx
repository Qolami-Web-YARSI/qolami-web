import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent2 from '../components/HeaderComponent2';
import FooterComponent from '../components/FooterComponent';
import SettingsComponents from '../components/SettingsComponent';
import KursusData from '../data/KursusData';

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

  useEffect(()=>{
      KursusData.forEach((a) => {
        a.detail.forEach((b) => {
            if (b.id.includes(localStorage.getItem(`id2`))) {
                if(JSON.parse(localStorage.getItem('IsSubmit')) === true){
                  b.soalJawaban.forEach((_, index) => {
                    localStorage.removeItem(`opsiSoal_${index + 1}`);
                });
                localStorage.removeItem(`temps`);
                localStorage.removeItem(`semuaSoalTelahDiisi`)
                localStorage.removeItem(`IsSubmit`)
                }
            }
        });
    });
  },[])

  useEffect(()=>{
    KursusData.forEach((a) => {
        if (a.id.includes(localStorage.getItem(`id2`))) {
            if(JSON.parse(localStorage.getItem('IsSubmit')) === true){
                a.soalJawaban2.forEach((_, index) => {
                    localStorage.removeItem(`opsiSoal_${index + 1}`);
                });
                localStorage.removeItem(`temps`);
                localStorage.removeItem(`semuaSoalTelahDiisi`)
                localStorage.removeItem(`endTime`)
                localStorage.removeItem(`IsSubmit`)
                localStorage.removeItem('timeUnders2Minutes')
                localStorage.removeItem('TimeStop')
            }
        }
    });
  },[])

  return (
    <div>
      <HeaderComponent2 img={img}/>
      <SettingsComponents />
      <FooterComponent />
    </div>
  );
}

export default Pengaturan;
