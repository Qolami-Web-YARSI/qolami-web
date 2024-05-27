import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Kursus from '../data/Kursus';
import PaginationDetail from './PaginationDetail';
import DialogBerhasil3 from '../pages/DialogBerhasil3';

const ContentDetailKursus = () => {
  const [pelajaran, setPelajaran] = useState(null);
  const [tempIdCourse, setTempIdCourse] = useState([]);
  const [tempExercise1, setTempExercise1] = useState([]);
  const [tempExercise2, setTempExercise2] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const { id } = useParams();
  
  useEffect(()=>{
    localStorage.setItem('idDetail', id)
  }, [id])

  const audioPlay = (audio_source) => {
    const newAudio = new Audio(audio_source);
    newAudio.currentTime = 0;
    newAudio.play();
  };

  const takeIdCourse = () => {
    Kursus.map((a) => {
      if(a.nama.toLowerCase().includes("pelajaran")){
        tempIdCourse.push(a.id)
      }
    })
  }

  const takeIdLatihan = () => {
    Kursus.map((a) => {
      a.detail.map((b) => {
        if(b.nama.toLowerCase().includes("1")){
          tempExercise1.push(b)
        }else if(b.nama.toLowerCase().includes("2")){
          tempExercise2.push(b)
        }else{
          console.log("Ops!!!")
        }
      })
    })
    console.log(tempExercise1)
  }

  const detailApiPelajaran = async () => {
    try {
      const response = await axios.get(`http://localhost:2024/${id}`);
      setPelajaran(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    detailApiPelajaran();
  }, [id, currentAudio, pelajaran]);

  useEffect(() => {
    takeIdCourse()
  }, [id])

  useEffect(() => {
    takeIdLatihan()
  }, [id, tempExercise1, tempExercise2])

  return (
    <>
      {(() => {
        if (id.includes("lessons")) {
          if (id.includes("one")) {
            return(
              <>
                {pelajaran && (
                <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-pb-11">
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Pelajaran 1</p>
                      <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Hijaiyah</p>
                    </div>
                    <div className='tw-flex tw-w-[100%]'>
                      <div className='tw-flex tw-flex-col tw-mx-auto tw-w-[100%]' dir="rtl">
                        <div className='tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-serif'>
                            {pelajaran.map((a, index)=> {
                                if(["ج", "ح", "خ", "ر"].includes(a.hurufHijaiyah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-8 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                            {a.hurufHijaiyah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                }else if(["د", "ذ", "ك", "ط", "ظ", "ف"].includes(a.hurufHijaiyah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                    <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pt-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                    2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                      <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufHijaiyah}
                                      </p>
                                    </button>
                                    </Link>
                                  );
                                }else if(["ي"].includes(a.hurufHijaiyah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-10 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                            {a.hurufHijaiyah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                }else if(["ن", "ق", "ع", "غ", "و"].includes(a.hurufHijaiyah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufHijaiyah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                }else if(["م"].includes(a.hurufHijaiyah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufHijaiyah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                } else {
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufHijaiyah}
                                        </p>
                                      </button>
                                    </Link>
                                  )
                                }
                            })}
                          </div>
                          <PaginationDetail id={id} tempIdCourse={tempIdCourse}/>
                        </div>
                      </div>
                </div>            
                )}
              </>
            )
          } else if (id.includes("two")){
            return(
              <>
                {pelajaran && (
                <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-pb-11">
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Pelajaran 2</p>
                      <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Berharakat Fathah</p>
                    </div>
                    <div className='tw-flex tw-w-[100%]'>
                      <div className='tw-flex tw-flex-col tw-mx-auto tw-w-[100%]' dir="rtl">
                        <div className='tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-serif'>
                            {pelajaran.map((a, index)=> {
                                if(["ج", "ح", "خ", "ر"].includes(a.hurufBerharakatFathah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-8 tw-text-white sm:tw-h-32 
                                      lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                            {a.hurufBerharakatFathah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                }else if(["د", "ذ", "ك", "ط", "ظ", "ف"].includes(a.hurufBerharakatFathah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                    <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pt-5 tw-text-white sm:tw-h-32 
                                    lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                      <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufBerharakatFathah}
                                      </p>
                                    </button>
                                    </Link>
                                  );
                                }else if(["ي"].includes(a.hurufBerharakatFathah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-10 tw-text-white sm:tw-h-32 
                                      lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                            {a.hurufBerharakatFathah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                }else if(["ن", "ق", "ع", "غ", "و"].includes(a.hurufBerharakatFathah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-44 
                                      xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufBerharakatFathah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                }else if(["م"].includes(a.hurufBerharakatFathah)){
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-44 
                                      xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufBerharakatFathah}
                                        </p>
                                      </button>
                                    </Link>
                                  );
                                } else {
                                  return(
                                    <Link to={`/${id}/contents/${a.id}`} key={a.id}>
                                      <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-text-white sm:tw-h-32 lg:tw-h-44 
                                      xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}>
                                        <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>
                                          {a.hurufBerharakatFathah}
                                        </p>
                                      </button>
                                    </Link>
                                  )
                                }
                            })}
                          </div>
                          <PaginationDetail id={id} tempIdCourse={tempIdCourse}/>
                        </div>
                      </div>
                </div>            
                )}
              </>
            )
          } else {
            return(
              <></>
            )
          }
        } else if (id.includes("exercise")) {
          if (id.includes("one")) {
            return(
              <>
              {tempExercise1 && (
                <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                  <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Latihan 1</p>
                  <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Hijaiyah</p>
                </div>
                <div className='tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32'>
                  <ul className='tw-flex tw-mx-auto tw-justify-between tw-w-full'>
                    {tempExercise1.map((a) => {
                      return(
                        <>
                          <li data-bs-target={`#dialogMulaiLatihan${a.id}`} data-bs-toggle="modal" className='tw-cursor-pointer'>
                              <div className='tw-flex tw-flex-col'>
                                <img src={`${a.gambar}`}/>
                                <p className='tw-text-[30px] tw-font-bold tw-mx-auto'>{a.nama2}</p>
                              </div>
                              <DialogBerhasil3 id={id} id2={a.id}/>
                          </li>
                        </>
                      )
                    })}
                  </ul>
                </div>
              </div>
              )}
            </>
          )
          } else if (id.includes("two")){
            return(
              <>
              {tempExercise2 && (
                <>
                  <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Latihan 2</p>
                      <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Berharakat Fathah</p>
                    </div>
                    <div className='tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32'>
                      <ul className='tw-flex tw-mx-auto tw-justify-between tw-w-full'>
                        {tempExercise2.map((a) => {
                          return(
                            <>
                              <li data-bs-target={`#dialogMulaiLatihan${a.id}`} data-bs-toggle="modal" className='tw-cursor-pointer'>
                                  <div className='tw-flex tw-flex-col'>
                                    <img src={`${a.gambar}`}/>
                                    <p className='tw-text-[30px] tw-font-bold tw-mx-auto'>{a.nama2}</p>
                                  </div>
                                  <DialogBerhasil3 id={id} id2={a.id}/>
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </>
            )
          } else {
            return(
              <></>
            )
          }
        } else if (id.includes("exam")) {
          if (id.includes("one")) {
            return(
              <>
                <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                  <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Ujian 1</p>
                    <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Hijaiyah</p>
                  </div>
                  <div className='tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32'>
                    <ul className='tw-flex tw-mx-auto tw-justify-between tw-w-full'>
                            
                    </ul>
                  </div>
                </div>
              </>
            )
          } else if (id.includes("two")){
            return(
              <>
                <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                  <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Ujian 2</p>
                    <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Berharakat Fathah</p>
                  </div>
                  <div className='tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32'>
                    <ul className='tw-flex tw-mx-auto tw-justify-between tw-w-full'>
                            
                    </ul>
                  </div>
                </div>
              </>
            )
          } else {
            return(
              <></>
            )
          }
        } else {
          return(
            <></>
          )
        }
      })()}
    </>
  );
}

export default ContentDetailKursus;
