import React, { useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContentAboutComponent from '../components/ContentAboutComponent';
import HeaderComponent2 from '../components/HeaderComponent2';
import KursusData from '../data/KursusData';

const Tentang = ({tempToken, img}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        localStorage.setItem('settings', 'profile')
    },[]);

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

    return(
        <>
            {tempToken ? 
            <div>
                <HeaderComponent2 img={img}/>
                <ContentAboutComponent/>
                <FooterComponent/>
            </div>
            : 
            <div>
                <HeaderComponent img={img}/>
                <ContentAboutComponent/>
                <FooterComponent/>
            </div>}
        </>
    )
}

export default Tentang;