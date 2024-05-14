import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FiMenu } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Kursus from '../data/Kursus';
import PaginationDetail from './PaginationDetail';

const ContentDetailKursus = () => {
  const [pelajaran1, setPelajaran1] = useState(null);
  const [pelajaran2, setPelajaran2] = useState(null);
  const [tempIdCourse, setTempId] = useState([])
  const [currentAudio, setCurrentAudio] = useState(null);
  const { id } = useParams();

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

  const detailApiPelajaran1 = async () => {
    try {
      const response = await axios.get(`http://localhost:2024/lesson-one`);
      setPelajaran1(response.data.data);
      //console.log(pelajaran1)
    } catch (e) {
      console.log(e);
    }
  };

  const detailApiPelajaran2 = async () => {
    try {
      const response = await axios.get(`http://localhost:2024/lesson-two`);
      setPelajaran2(response.data.data);
      console.log(pelajaran2)
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    detailApiPelajaran1();
  }, [id, currentAudio, pelajaran1]);

  useEffect(() => {
    detailApiPelajaran2();
  }, [id, currentAudio]);

  useEffect(() => {
    takeIdCourse()
    console.log(tempIdCourse)
    console.log(id)
  }, [id])


  return (
    <>
      {tempIdCourse &&
        <>
          {id && (
            <div>
              {(() => {
                if (id.includes("pelajaran1")) {
                  return(
                    <>
                      {pelajaran1 && (
                        <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                            <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-pb-11">
                              <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Pelajaran 1</p>
                              <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Hijaiyah</p>
                            </div>
                            <div className='tw-flex tw-w-[100%]'>
                              <div className='tw-flex tw-flex-col tw-mx-auto tw-w-[100%]' dir="rtl" key={id}>
                                <div className='tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-adelia'>
                                  {pelajaran1.map((a, index)=> {
                                      if(a.hurufHijaiyah.includes("ج") || a.hurufHijaiyah.includes("ح") || a.hurufHijaiyah.includes("خ") || a.hurufHijaiyah.includes("ر")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-8 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufHijaiyah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufHijaiyah.includes("د") || a.hurufHijaiyah.includes("ذ") || a.hurufHijaiyah.includes("ك") || a.hurufHijaiyah.includes("ا") || a.hurufHijaiyah.includes("ط") || a.hurufHijaiyah.includes("ظ") || a.hurufHijaiyah.includes("ف") ){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pt-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                          <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufHijaiyah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufHijaiyah.includes("ي")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-10 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufHijaiyah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufHijaiyah.includes("ن") || a.hurufHijaiyah.includes("ق") || a.hurufHijaiyah.includes("ع") || a.hurufHijaiyah.includes("غ") || a.hurufHijaiyah.includes("و")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufHijaiyah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufHijaiyah.includes("م")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufHijaiyah}</p>
                                          </button>
                                        );
                                      } else {
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufHijaiyah}</p>
                                          </button>
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
                  );
                } else {
                  return(
                    <>
                      {pelajaran2 && (
                        <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                            <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-pb-11">
                              <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Pelajaran 2</p>
                              <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>Huruf Berharakat Fathah</p>
                            </div>
                            <div className='tw-flex tw-w-[100%]'>
                              <div className='tw-flex tw-flex-col tw-mx-auto tw-w-[100%]' dir="rtl">
                                <div className='tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-adelia'>
                                  {pelajaran2.map((a, index)=> {
                                      if(a.hurufBerharakatFathah.includes("ج") || a.hurufBerharakatFathah.includes("ح") || a.hurufBerharakatFathah.includes("خ") || a.hurufBerharakatFathah.includes("ر")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-8 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufBerharakatFathah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufBerharakatFathah.includes("د") || a.hurufBerharakatFathah.includes("ذ") || a.hurufBerharakatFathah.includes("ك") || a.hurufBerharakatFathah.includes("ا") || a.hurufBerharakatFathah.includes("ط") || a.hurufBerharakatFathah.includes("ظ") || a.hurufBerharakatFathah.includes("ف") ){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pt-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                          <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufBerharakatFathah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufBerharakatFathah.includes("ي")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-10 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufBerharakatFathah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufBerharakatFathah.includes("ن") || a.hurufBerharakatFathah.includes("ق") || a.hurufBerharakatFathah.includes("ع") || a.hurufBerharakatFathah.includes("غ") || a.hurufBerharakatFathah.includes("و")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufBerharakatFathah}</p>
                                          </button>
                                        );
                                      }else if(a.hurufBerharakatFathah.includes("م")){
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufBerharakatFathah}</p>
                                          </button>
                                        );
                                      } else {
                                        return(
                                          <button key={index} className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => audioPlay(a.audio)}>
                                            <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.hurufBerharakatFathah}</p>
                                          </button>
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
                  );
                }
              })()}
            </div>
          )}
        </>
      }
    </>
  );
}

export default ContentDetailKursus;
