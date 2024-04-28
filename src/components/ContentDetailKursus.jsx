import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PushBack from './klik.m4a';
import PaginationDetail from './PaginationDetail';

const ContentDetailKursus = () => {
  const [item, setItem] = useState(null);
  const [idPelajaran, setIdPelajaran] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const { id } = useParams();

  const audioPlay = (audio_source) => {
    if (currentAudio) {
      currentAudio.pause(); 
      currentAudio.currentTime = 0;
    }
    const newAudio = new Audio(audio_source);
    newAudio.currentTime = 0;
    newAudio.play();
    setCurrentAudio(newAudio);
    setIsPlaying(true);
  };

  const audioPause = () => {
    if (currentAudio) {
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const takeIdCourse = async () => {
    try {
      const response = await axios.get(`http://localhost:2002/kursus`);
      response.data.map((a) => {
        if(a.id.toLowerCase().includes("pelajaran")){
          idPelajaran.push(a.id)
        }
      })
      setIndex(idPelajaran.indexOf(id))
      //console.log(index)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    takeIdCourse()
  }, [id, idPelajaran, index])

  useEffect(() => {
    const detailApi = async () => {
      try {
        const response = await axios.get(`http://localhost:2002/kursus/${id}`);
        setItem(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    detailApi();
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [id, currentAudio]);


  return (
    <>
      {idPelajaran && (
            <>
              {item && (
                <div dir="ltr" className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]'>
                  <div className="tw-flex tw-flex-col tw-pt-32 lg:tw-pt-40 tw-pb-11">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">{item.nama}</p>
                        <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{item.deskripsi}</p>
                  </div>
                  {item.nama.toLowerCase().includes("pelajaran") ? (
                    <div className='tw-flex tw-w-[100%]'>
                      {item.id === "pelajaran1" ? (
                        <div className='tw-flex tw-flex-col tw-mx-auto tw-w-[100%]' dir="rtl">
                          <div className='tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-adelia'>
                            {item.huruf.map((a)=> {
                                if(a.nama.includes("ج") || a.nama.includes("ح") || a.nama.includes("خ") || a.nama.includes("ر")){
                                  return(
                                  <button className={`tw-flex bg-${a.color} hover:bg-${a.hover} tw-pb-8 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => {if (isPlaying) {audioPause();} else {audioPlay(`${a.audio}`);}}}>
                                    <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.nama}</p>
                                  </button>
                                  );
                                }else if(a.nama.includes("د") || a.nama.includes("ذ") || a.nama.includes("ك") || a.nama.includes("ا") || a.nama.includes("ط") || a.nama.includes("ظ") || a.nama.includes("ف") ){
                                  return(
                                    <button className={`tw-flex bg-${a.color} hover:bg-${a.hover} tw-pt-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => {if (isPlaying) {audioPause();} else {audioPlay(a.audio);}}}>
                                      <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.nama}</p>
                                    </button>
                                    );
                                }else if(a.nama.includes("ي")){
                                  return(
                                    <button className={`tw-flex bg-${a.color} hover:bg-${a.hover} tw-pb-10 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => {if (isPlaying) {audioPause();} else {audioPlay(a.audio);}}}>
                                      <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.nama}</p>
                                    </button>
                                  );
                                }else if(a.nama.includes("ن") || a.nama.includes("ق") || a.nama.includes("ع") || a.nama.includes("غ") || a.nama.includes("و")){
                                  return(
                                    <button className={`tw-flex bg-${a.color} hover:bg-${a.hover} tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => {if (isPlaying) {audioPause();} else {audioPlay(a.audio);}}}>
                                      <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.nama}</p>
                                    </button>
                                  );
                                }else if(a.nama.includes("م")){
                                  return(
                                    <button className={`tw-flex bg-${a.color} hover:bg-${a.hover} tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => {if (isPlaying) {audioPause();} else {audioPlay(a.audio);}}}>
                                      <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.nama}</p>
                                    </button>
                                  );
                                } else {
                                  return(
                                    <button className={`tw-flex bg-${a.color} hover:bg-${a.hover} tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`} onClick={() => {if (isPlaying) {audioPause();} else {audioPlay(a.audio);}}}>
                                      <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold'>{a.nama}</p>
                                    </button>
                                  )
                                }
                              })}
                          </div>
                          <PaginationDetail id={id} idPelajaran={idPelajaran}/>
                        </div>
                      ) : (
                        <div className='tw-flex tw-flex-col tw-mx-auto tw-w-[100%]' dir="rtl">
                          <div className='tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7'>
                            {item.huruf.map((a)=>(
                              <Link to={`/detailPelajaran/${a.id}`} key={a.id}>
                                <div key={a.id} className={`tw-flex bg-${a.color} hover:bg-${a.hover} tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]`}>
                                  <p className='tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold tw-font-poppins'>{a.nama}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <PaginationDetail id={id} idPelajaran={idPelajaran}/>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className='tw-pt-60'>
                      {item.nama.toLowerCase().includes("latihan") ? (
                        <div>
                          <div>INI LATIHAN</div>
                          <div>
                            <h2>{item.nama}</h2>
                            <p>{item.deskripsi}</p>
                            <div>
                              {item.jenis.map((a)=>(
                                <Link to={`/detailLatihan/${a.id}`} key={a.id}>
                                  <div>
                                    <p>{a.nama}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className='tw-pt-60'>
                          <div>INI UJIAN</div>
                          <div>
                            <h2>{item.nama}</h2>
                            <p>{item.deskripsi}</p>
                            <div>
                              {item.jenis.map((a)=>(
                                <Link to={`/detailUjian/${a.id}`} key={a.id}>
                                  <div>
                                    <p>{a.nama}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
    </>
  );
}

export default ContentDetailKursus;
