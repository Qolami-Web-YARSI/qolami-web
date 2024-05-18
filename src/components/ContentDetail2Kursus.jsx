import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PaginationDetail2 from './PaginationDetail2';
import Kursus from '../data/Kursus';
import { IoVolumeHigh } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

const ContentDetail2Kursus = () => {
    const [item, setItem] = useState(null);
    const [item2, setItem2] = useState(null);
    const [item3, setItem3] = useState(null);
    const [tempIdDetail, setTempIdDetail] = useState([])
    const { id } = useParams();

    const detail2Api = async () => {
        try{
            const response = await axios.get(`http://localhost:2024/lessons-two/contents/${id}`)
            setItem(response.data.data[0])
        }catch(e){
            console.log(e)
        }
    }

    const detailApi = async () => {
        try{
            const response = await axios.get(`http://localhost:2024/lessons-two`)
            const ids = response.data.data.map((a) => a.id);
            setTempIdDetail(ids);
            
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        detailApi()
    }, [tempIdDetail])

    useEffect(()=>{
        detail2Api()
    }, [])

    // useEffect(() => {
    //     const allDetailApi = async () => {
    //         try{
    //             const response = await axios.get('http://localhost:2002/detail-lesson-two')
    //             //console.log(response.data)
    //             //console.log(id.split('').pop())
    //             response.data.map(a => {
    //                 if(a.id.includes(id.split('').pop())){
    //                     tempIdDetail.push(a.id)
    //                 }
    //             })
    //             console.log(tempIdDetail)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     allDetailApi()
    // }, [tempIdDetail])

    // useEffect(() => {
    //     const detail2Api = async () => {
    //         try{
    //             const response = await axios.get(`http://localhost:2024/lessons-two/${id}`)
    //             setItem(response.data)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     detail2Api();
    // }, [id]);

    // useEffect(() => {
    //     const detail2Api2 = async () => {
    //         try{
    //             const response = await axios.get(`http://localhost:2002/detailLatihan/${id}`)
    //             //console.log(response.data)
    //             setItem2(response.data)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     detail2Api2();
    // }, [id]);

    // useEffect(() => {
    //     const detail2Api3 = async () => {
    //         try{
    //             const response = await axios.get(`http://localhost:2002/detailUjian/${id}`)
    //             //console.log(response.data)
    //             setItem3(response.data)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     detail2Api3();
    // }, [id]);


    return(
        <>
            {tempIdDetail && (
                <>
                    {item && (
                        <div className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%] tw-font-poppins'>
                            <div className="tw-flex tw-flex-col tw-pt-20 sm:tw-pt-28 lg:tw-pt-40 tw-pb-8 sm:tw-pb-14">
                                <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">Pelajaran 2</p>
                                <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{`${item.hurufBerharakatFathahName} Berharakat Fathah`}</p>
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
                            <div className='tw-flex tw-gap-4 tw-w-[85%] sm:tw-gap-0 md:tw-gap-5 lg:tw-gap-7 xl:tw-gap-8 2xl:tw-gap-10 tw-my-1 sm:tw-my-10 tw-px-5 sm:tw-px-2 md:tw-px-4 lg:tw-px-8 xl:tw-px-24 lg:tw-mx-auto'>
                                <div className='tw-flex tw-w-[40%] sm:tw-w-[250px] xl:tw-w-[350px]'>
                                    <img src={item.image} className='tw-m-auto'/>
                                </div>
                                <div className='lg:tw-w-[60%] tw-flex tw-flex-col tw-gap-4 lg:tw-gap-7 tw-py-8'>
                                    <div className='tw-flex tw-gap-4'>
                                        <button className='tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto'>
                                            <RiPencilFill />
                                        </button>
                                        <div className='tw-flex tw-my-auto'>
                                            <p className='tw-text-[13px] sm:tw-text-[16px] md:tw-text-[20px] lg:tw-text-[25px] 2xl:tw-text-[35px] tw-font-bold sm:tw-leading-4 md:tw-leading-7 lg:tw-leading-8 xl:tw-leading-10'>Perhatikan huruf <br></br> berharakat di samping!</p>
                                        </div>
                                    </div>
                                    <div className='tw-flex tw-gap-4'>
                                        <div className='tw-flex tw-flex-col tw-my-auto tw-gap-4 sm:tw-gap-0'>
                                            <p className='tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 2xl:tw-text-[30px]'>Warna <span className='tw-font-bold'>Hitam</span> merupakan <span className='tw-font-bold'>{`huruf ${item.hurufBerharakatFathahName}`}</span></p>
                                            <p className='tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 2xl:tw-text-[30px]'>Warna <span className='tw-font-bold tw-text-[#258F9A]'>Biru</span> merupakan <span className='tw-font-bold tw-text-[#258F9A]'>harakat Fathah</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PaginationDetail2 id={id} tempIdDetail={tempIdDetail}/>
                        </div>
                    )}
                </>
            )}
            
            {/* {item2 && (
                <div className='tw-pt-80'>
                    <h2>{item2.judul}</h2>
                </div>
            )}
            {item3 && (
                <div className='tw-pt-80'>
                    <h2>{item3.judul}</h2>
                </div>
            )} */}
        </>
    )
}

export default ContentDetail2Kursus;
