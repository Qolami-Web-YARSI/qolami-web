import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PaginationDetail2 from './PaginationDetail2';
import { IoVolumeHigh } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

const ContentDetail2Kursus = () => {
    const [item, setItem] = useState(null);
    const [item2, setItem2] = useState(null);
    const [item3, setItem3] = useState(null);
    const [tempIdDetail, setTempIdDetail] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const allDetailApi = async () => {
            try{
                const response = await axios.get('http://localhost:2002/detailPelajaran')
                //console.log(response.data)
                //console.log(id.split('').pop())
                response.data.map(a => {
                    if(a.id.includes(id.split('').pop())){
                        tempIdDetail.push(a.id)
                    }
                })
                console.log(tempIdDetail)
            }catch(e){
                console.log(e)
            }
        }
        allDetailApi()
    }, [tempIdDetail])

    useEffect(() => {
        const detail2Api = async () => {
            try{
                const response = await axios.get(`http://localhost:2002/detailPelajaran/${id}`)
                setItem(response.data)
            }catch(e){
                console.log(e)
            }
        }
        detail2Api();
    }, [id]);

    useEffect(() => {
        const detail2Api2 = async () => {
            try{
                const response = await axios.get(`http://localhost:2002/detailLatihan/${id}`)
                //console.log(response.data)
                setItem2(response.data)
            }catch(e){
                console.log(e)
            }
        }
        detail2Api2();
    }, [id]);

    useEffect(() => {
        const detail2Api3 = async () => {
            try{
                const response = await axios.get(`http://localhost:2002/detailUjian/${id}`)
                //console.log(response.data)
                setItem3(response.data)
            }catch(e){
                console.log(e)
            }
        }
        detail2Api3();
    }, [id]);


    return(
        <>
            {item && (
                <div className='tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%] tw-font-poppins tw-px-6 sm:tw-px-8 md:tw-px-16 lg:tw-px-36 xl:tw-px-52'>
                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-pb-7 sm:tw-pb-11">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">{item.judul}</p>
                        <p className='tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto'>{item.nama}</p>
                    </div>
                    <div className='tw-flex tw-gap-4'>
                        <button className='tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto'>
                            <IoVolumeHigh />
                        </button>
                        <div className='tw-flex tw-my-auto'>
                            <p className='tw-text-[10px] sm:tw-text-[14px] md:tw-text-[25px] 2xl:tw-text-[30px] tw-font-bold'>Perhatikan pengucapan huruf berharakat! </p>
                        </div>
                    </div>
                    <div className='tw-w-full tw-h-96 tw-bg-orange-600 tw-mt-5'>

                    </div>
                    <div className='tw-flex tw-gap-10 tw-my-8 sm:tw-my-16'>
                        <div className='tw-w-[40%] sm:tw-w-[250px] xl:tw-w-[300px] tw-h-[200px] lg:tw-h-[250px] tw-bg-orange-600'></div>
                        <div className='tw-w-[40%] tw-flex tw-flex-col tw-gap-4 lg:tw-gap-7'>
                            <div className='tw-flex tw-gap-4'>
                                <button className='tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto'>
                                    <RiPencilFill />
                                </button>
                                <div className='tw-flex tw-my-auto'>
                                    <p className='tw-text-[10px] sm:tw-text-[14px] md:tw-text-[18px] 2xl:tw-text-[25px] tw-font-bold sm:tw-leading-4 md:tw-leading-5 lg:tw-leading-6 xl:tw-leading-7'>Perhatikan huruf <br></br> berharakat di samping!</p>
                                </div>
                            </div>
                            <div className='tw-flex tw-gap-4'>
                                <div className='tw-flex tw-flex-col tw-my-auto'>
                                    <p className='tw-text-[10px] sm:tw-text-[14px] md:tw-text-[18px] 2xl:tw-text-[25px]'>Warna <span className='tw-font-bold'>Hitam</span> merupakan <span className='tw-font-bold'>huruf Alif</span></p>
                                    <p className='tw-text-[10px] sm:tw-text-[14px] md:tw-text-[18px] 2xl:tw-text-[25px]'>Warna <span className='tw-font-bold'>Biru</span> merupakan <span className='tw-font-bold'>harakat Fathah</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                // <div className='tw-pt-80'>
                //     <h2>{item.judul}</h2>
                //     <h2>{item.nama}</h2>
                //     <h2>{item.video}</h2>
                //     <h2>{item.gambar}</h2>
                //     <h2>{item.detail1}</h2>
                //     <h2>{item.detail2}</h2>
                //     <h2>{item.detail3}</h2>
                //     <PaginationDetail2 id={id} tempIdDetail={tempIdDetail}/>
                // </div>
            )}
            {item2 && (
                <div className='tw-pt-80'>
                    <h2>{item2.judul}</h2>
                </div>
            )}
            {item3 && (
                <div className='tw-pt-80'>
                    <h2>{item3.judul}</h2>
                </div>
            )}
        </>
    )
}

export default ContentDetail2Kursus;
