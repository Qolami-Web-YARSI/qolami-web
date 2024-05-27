import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PaginationDetail2 from './PaginationDetail2';
import Kursus from '../data/Kursus';
import { IoVolumeHigh } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

const ContentDetail2Kursus = () => {
    const [item, setItem] = useState(null);
    const [tempIdDetail, setTempIdDetail] = useState([]);
    const [latihanContent, setLatihanContent] =useState(null);
    const [selectedButton, setSelectedButton] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const handlePopState = () => {
          console.log("hahaha");
          navigate(`/${localStorage.getItem('idDetail')}`, {replace: true})
          window.location.reload()
        };
        window.addEventListener('popstate', handlePopState);
        const addHistoryEntry = () => {
          window.history.pushState(null, '', window.location.pathname);
        };
        addHistoryEntry();
        return () => {
          window.removeEventListener('popstate', handlePopState);
        };
      }, [navigate]);

    const detail2Api = async () => {
        try{
            const response = await axios.get(`http://localhost:2024/${localStorage.getItem("idDetail")}/contents/${id}`)
            setItem(response.data.data[0])
        }catch(e){
            console.log(e)
        }
    }

    const detailApi = async () => {
        try{
            const response = await axios.get(`http://localhost:2024/${localStorage.getItem("idDetail")}`)
            const ids = response.data.data.map((a) => a.id);
            setTempIdDetail(ids);       
        }catch(e){
            console.log(e)
        }
    }

    const takeLatihanContent = () => {
        Kursus.map((a) => {
            a.detail.map((b)=>{
                if(b.id.includes(id)){
                    setLatihanContent(b)
                }
            })
        })
    }

    const handleButtonClick = (a) => {
        setSelectedButton(a)
        Kursus.map((b) => {
            b.detail.map((c) => {
                console.log(c.soalJawaban.id)
                // c.soalJawaban.map((d) => {
                //     // setSelectedButton(a);
                //     console.log(d)
                // })
            })
        })
    };

    useEffect(()=>{
        detailApi()
    }, [tempIdDetail])

    useEffect(()=>{
        detail2Api()
    }, [])

    useEffect(()=>{
        console.log(id)
    },[])

    useEffect(()=>{
        takeLatihanContent()
    },[id, latihanContent])

    return(
        <>
            {(() => {
                if (localStorage.getItem('idDetail').includes("lessons")) {
                    if (localStorage.getItem('idDetail').includes("one")) {
                        return(
                            <>
                                {item && (
                                    <div className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%] tw-font-poppins'>
                                    <div className="tw-flex tw-flex-col tw-pt-20 sm:tw-pt-28 lg:tw-pt-40 tw-pb-8 sm:tw-pb-14">
                                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] 
                                        tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Pelajaran 1</p>
                                        <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{`${item.hurufName} Huruf Hijaiyah`}</p>
                                    </div>
                                    <div className='tw-flex tw-gap-4 tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32'>
                                        <button className='tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto'>
                                            <IoVolumeHigh />
                                        </button>
                                        <div className='tw-flex tw-my-auto'>
                                            <p className='tw-text-[10px] sm:tw-text-[14px] md:tw-text-[25px] 2xl:tw-text-[30px] tw-font-bold'>Perhatikan pengucapan huruf hijaiyah! </p>
                                        </div>
                                    </div>
                                    <div className='tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32'>
                                        <video controls className='lg:tw-w-[65%] tw-mx-auto'>
                                            <source src={item.video} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className='tw-flex tw-gap-4 tw-w-[85%] sm:tw-gap-0 md:tw-gap-5 lg:tw-gap-7 xl:tw-gap-8 2xl:tw-gap-10 tw-my-1 sm:tw-my-10
                                     tw-px-5 sm:tw-px-2 md:tw-px-4 lg:tw-px-8 xl:tw-px-24 lg:tw-mx-auto'>
                                        <div className='tw-flex tw-w-[40%] sm:tw-w-[250px] xl:tw-w-[350px]'>
                                            <img src={item.image} className='tw-m-auto'/>
                                        </div>
                                        <div className='lg:tw-w-[60%] tw-flex tw-flex-col tw-gap-4 lg:tw-gap-7 tw-py-8'>
                                            <div className='tw-flex tw-gap-4'>
                                                <button className='tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto'>
                                                    <RiPencilFill />
                                                </button>
                                                <div className='tw-flex tw-my-auto'>
                                                    <p className='tw-text-[13px] sm:tw-text-[16px] md:tw-text-[20px] lg:tw-text-[25px] 2xl:tw-text-[35px] tw-font-bold 
                                                    sm:tw-leading-4 md:tw-leading-7 lg:tw-leading-8 xl:tw-leading-10'>Perhatikan huruf <br></br> hijaiyah di samping!</p>
                                                </div>
                                            </div>
                                            <div className='tw-flex tw-gap-4'>
                                                <div className='tw-flex tw-flex-col tw-my-auto tw-gap-4 sm:tw-gap-0'>
                                                    <p className='tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 
                                                    2xl:tw-text-[30px]'>Warna <span 
                                                    className='tw-font-bold'>Hitam</span> merupakan <span className='tw-font-bold'>{`huruf ${item.hurufName}`}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <PaginationDetail2 id={id} tempIdDetail={tempIdDetail}/>
                                </div>
                                )}
                            </>
                        )
                    } else {
                        return(
                            <>
                                {item && (
                                    <div className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%] tw-font-poppins'>
                                    <div className="tw-flex tw-flex-col tw-pt-20 sm:tw-pt-28 lg:tw-pt-40 tw-pb-8 sm:tw-pb-14">
                                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold 
                                        tw-text-center tw-pt-5 tw-mx-auto">Pelajaran 2</p>
                                        <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{`${item.hurufName} Berharakat Fathah`}</p>
                                    </div>
                                    <div className='tw-flex tw-gap-4 tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32'>
                                        <button className='tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto'>
                                            <IoVolumeHigh />
                                        </button>
                                        <div className='tw-flex tw-my-auto'>
                                            <p className='tw-text-[10px] sm:tw-text-[14px] md:tw-text-[25px] 2xl:tw-text-[30px] tw-font-bold'>Perhatikan pengucapan huruf berharakat! </p>
                                        </div>
                                    </div>
                                    <div className='tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32'>
                                        <video controls className='lg:tw-w-[65%] tw-mx-auto'>
                                            <source src={item.video} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className='tw-flex tw-gap-4 tw-w-[85%] sm:tw-gap-0 md:tw-gap-5 lg:tw-gap-7 xl:tw-gap-8 2xl:tw-gap-10 tw-my-1 sm:tw-my-10
                                     tw-px-5 sm:tw-px-2 md:tw-px-4 lg:tw-px-8 xl:tw-px-24 lg:tw-mx-auto'>
                                        <div className='tw-flex tw-w-[40%] sm:tw-w-[250px] xl:tw-w-[350px]'>
                                            <img src={item.image} className='tw-m-auto'/>
                                        </div>
                                        <div className='lg:tw-w-[60%] tw-flex tw-flex-col tw-gap-4 lg:tw-gap-7 tw-py-8'>
                                            <div className='tw-flex tw-gap-4'>
                                                <button className='tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto'>
                                                    <RiPencilFill />
                                                </button>
                                                <div className='tw-flex tw-my-auto'>
                                                    <p className='tw-text-[13px] sm:tw-text-[16px] md:tw-text-[20px] lg:tw-text-[25px] 2xl:tw-text-[35px] tw-font-bold 
                                                    sm:tw-leading-4 md:tw-leading-7 lg:tw-leading-8 xl:tw-leading-10'>Perhatikan huruf <br></br> berharakat di samping!</p>
                                                </div>
                                            </div>
                                            <div className='tw-flex tw-gap-4'>
                                                <div className='tw-flex tw-flex-col tw-my-auto tw-gap-4 sm:tw-gap-0'>
                                                    <p className='tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 
                                                    2xl:tw-text-[30px]'>Warna <span className='tw-font-bold'>Hitam</span> merupakan <span
                                                     className='tw-font-bold'>{`huruf ${item.hurufName}`}</span></p>
                                                    <p className='tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 
                                                    2xl:tw-text-[30px]'>Warna <span className='tw-font-bold tw-text-[#258F9A]'>Biru</span> merupakan <span 
                                                    className='tw-font-bold tw-text-[#258F9A]'>harakat Fathah</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <PaginationDetail2 id={id} tempIdDetail={tempIdDetail}/>
                                </div>
                                )}
                            </>
                        )
                    }
                } else if (localStorage.getItem('idDetail').includes("exercise")) {
                    if (id.includes("gambar")) {
                        return(
                            <>
                                {latihanContent && (
                                    <div className='tw-flex tw-flex-col tw-mx-auto tw-h-[1000px] tw-bg-[#FFF6D9] tw-w-[100%]'>
                                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold 
                                        tw-text-center tw-pt-5 tw-mx-auto">{latihanContent.nama}</p>
                                        <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{latihanContent.deskripsi}</p>
                                    </div>
                                    <div className='tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32 tw-font-poppins'>
                                        <div className='tw-bg-red-500 tw-h-[650px] tw-w-[100%]'>
                                            <ul>
                                                <div className='tw-flex tw-flex-col tw-gap-5'>
                                                    {latihanContent.soalJawaban.map((a, index) => {
                                                        return(
                                                            <>
                                                                <p dangerouslySetInnerHTML={{ __html: (index+1)+". "+a.soal }} />
                                                                <div className='tw-flex tw-gap-8 tw-justify-between' key={a.id}>
                                                                    {a.opsi.map((b) => (
                                                                        <div className='tw-flex tw-gap-4' key={b.id}>
                                                                            <button onClick={() => {handleButtonClick(b.id)} } className={`tw-flex 
                                                                            ${selectedButton === b.id ? 'tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white' : 'tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black'}
                                                                            hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-size-12 tw-border-[3px] tw-rounded-lg`}>
                                                                                <p className='tw-m-auto tw-text-[20px]'>{b.text}</p>
                                                                            </button>
                                                                            <img src={b.imgSrc} className='tw-w-32 tw-border-[#BABABA] tw-border-[3px] tw-rounded-lg'/>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                )}
                            </>
                        )
                    } else if (id.includes("video")) {
                        return(
                            <>
                                {latihanContent && (
                                    <div className='tw-flex tw-flex-col tw-mx-auto tw-h-[1000px] tw-bg-[#FFF6D9] tw-w-[100%]'>
                                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] 
                                        lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">{latihanContent.nama}</p>
                                        <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{latihanContent.deskripsi}</p>
                                    </div>
                                    <div className='tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32'>
                                        <div className='tw-bg-green-500 tw-h-[650px] tw-w-[100%]'>
                                            <div className='tw-flex'>
                                            <ul>
                                                <div className='tw-flex tw-flex-col tw-gap-5'>
                                                    {latihanContent.soalJawaban.map((a, index) => {
                                                        return(
                                                            <>
                                                                <p dangerouslySetInnerHTML={{ __html: (index+1)+". "+a.soal }} />
                                                                <div className='tw-flex tw-gap-8 tw-justify-between' key={a.id}>
                                                                    {a.opsi.map((b) => (
                                                                        <div className='tw-flex tw-gap-4' key={b.id}>
                                                                            <button onClick={() => {handleButtonClick(b.id)} } className={`tw-flex 
                                                                            ${selectedButton === b.id ? 'tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white' : 'tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black'}
                                                                            hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-size-12 tw-border-[3px] tw-rounded-lg`}>
                                                                                <p className='tw-m-auto tw-text-[20px]'>{b.text}</p>
                                                                            </button>
                                                                            <img src={b.imgSrc} className='tw-w-32 tw-border-[#BABABA] tw-border-[3px] tw-rounded-lg'/>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )}
                            </>
                        )
                    } else if (id.includes("audio")) {
                        return(
                            <>
                                {latihanContent && (
                                    <div className='tw-flex tw-flex-col tw-mx-auto tw-h-[1000px] tw-bg-[#FFF6D9] tw-w-[100%]'>
                                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">{latihanContent.nama}</p>
                                        <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{latihanContent.deskripsi}</p>
                                    </div>
                                    <div className='tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32'>
                                        <div className='tw-bg-blue-500 tw-h-[650px] tw-w-[100%]'>
                                        <ul>
                                                <div className='tw-flex tw-flex-col tw-gap-5'>
                                                    {latihanContent.soalJawaban.map((a, index) => {
                                                        return(
                                                            <>
                                                                <p dangerouslySetInnerHTML={{ __html: (index+1)+". "+a.soal }} />
                                                                <div className='tw-flex tw-gap-8 tw-justify-between' key={a.id}>
                                                                    {a.opsi.map((b) => (
                                                                        <div className='tw-flex tw-gap-4' key={b.id}>
                                                                            <button onClick={() => {handleButtonClick(b.id)} } className={`tw-flex 
                                                                            ${selectedButton === b.id ? 'tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white' : 'tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black'}
                                                                            hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-size-12 tw-border-[3px] tw-rounded-lg`}>
                                                                                <p className='tw-m-auto tw-text-[20px]'>{b.text}</p>
                                                                            </button>
                                                                            <img src={b.imgSrc} className='tw-w-32 tw-border-[#BABABA] tw-border-[3px] tw-rounded-lg'/>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                )}
                            </>
                        )
                    }
                } else {
                    return(
                        <></>
                    )
                }
            })()}
        </>
    )
}

export default ContentDetail2Kursus;
