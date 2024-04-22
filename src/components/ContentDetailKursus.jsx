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
            <div>
              {item && (
                <div className='tw-pt-60'>
                  {item.nama.toLowerCase().includes("pelajaran") ? (
                    <div>
                      {item.id === "pelajaran1" ? (
                        <div>
                          <h2>{item.nama}</h2>
                          <p>{item.deskripsi}</p>
                          <div className='tw-flex tw-flex-col'>
                            {item.huruf.map((a)=>(
                              <div key={a.id}>
                                <button onClick={() => {
                                  if (isPlaying) {
                                    audioPause();
                                  } else {
                                    audioPlay(PushBack);
                                  }
                                }}>
                                  <div>
                                    <p>{a.nama}</p>
                                  </div>
                                </button>
                              </div>
                            ))}
                          </div>
                          <PaginationDetail id={id} idPelajaran={idPelajaran}/>
                        </div>
                      ) : (
                        <div>
                          <h2>{item.nama}</h2>
                          <p>{item.deskripsi}</p>
                          <div className='tw-flex tw-flex-col'>
                            {item.huruf.map((a)=>(
                              <div key={a.id}>
                                <Link to={`/detailPelajaran/${a.id}`} key={a.id}>
                                  <div>
                                    <p>{a.nama}</p>
                                  </div>
                                </Link>
                              </div>
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
                            <div className='tw-flex tw-flex-col'>
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
                            <div className='tw-flex tw-flex-col'>
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
            </div>
          )}
    </>
  );
}

export default ContentDetailKursus;
