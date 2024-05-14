import React, { useState, useEffect, useRef } from 'react';
import CardContentCourse from './CardContentCourse';
import Pagination from './Pagination';
import Kursus from "../data/Kursus"
import axios from 'axios';

const ContentCourse = ({tempToken}) => {
    const kursus = [
        {
          "id": "pelajaran1",
          "nama": "Pelajaran 1",
          "gambar": "img1-1.svg",
          "deskripsi": "Huruf Hijaiyah"
        },
        {
          "id": "latihan1",
          "nama": "Latihan 1",
          "gambar": "img1-2.svg",
          "deskripsi": "Huruf Hijaiyah"
        },
        {
          "id": "ujian1",
          "nama": "Ujian 1",
          "gambar": "img1-3.svg",
          "deskripsi": "Huruf Hijaiyah"
        },
        {
          "id": "pelajaran2",
          "nama": "Pelajaran 2",
          "gambar": "img2-1.svg",
          "deskripsi": "Huruf Berharakat Fathah"
        },
        {
          "id": "latihan2",
          "nama": "Latihan 2",
          "gambar": "img2-2.svg",
          "deskripsi": "Huruf Berharakat Fathah"
        },
        {
          "id": "ujian2",
          "nama": "Ujian 2",
          "gambar": "img2-3.svg",
          "deskripsi": "Huruf Berharakat Fathah"
        }
    ]

    const contentRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
    const [tempUnlock, setTempUnlock] = useState([])
    const [tempDatas, setTempDatas]  = useState([])
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const datas = () => {
            tempDatas.push(...kursus)
            //console.log(tempDatas)
            
            const tempUnlockArray = [];
            for(let i = 0; i < tempDatas.length; i++){
                if(tempDatas[i].nama.toLowerCase().includes("pelajaran")){
                    tempUnlockArray.push(true);
                }
                if(tempDatas[i].nama.toLowerCase().includes("latihan") || tempDatas[i].nama.toLowerCase().includes("ujian")){
                    tempUnlockArray.push(false);
                }
            }
            //console.log(tempUnlockArray)
            setTempUnlock(tempUnlockArray);
    }
  
    useEffect(() => {
        datas()
    }, []);

    return(
        <>
            <div className='tw-flex tw-flex-col tw-py-5 tw-bg-[#FFF6D9] tw-font-poppins'>
                <div className="tw-flex tw-justify-between tw-mx-auto tw-pt-32 lg:tw-pt-36 tw-pb-12">
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-mx-auto tw-font-poppins">KURSUS</p>
                </div>
                <div className='tw-grid tw-w-[90%] 2xl:tw-w-[80%] tw-grid-cols-1 md:tw-grid-cols-3 tw-bg-[#FFF6D9] tw-mx-auto tw-gap-9' ref={contentRef} id="a">
                    <CardContentCourse tempDatas={tempDatas.slice(indexOfFirstPost, indexOfLastPost)} tempUnlock={tempUnlock} tempToken={tempToken}/>
                </div>
                <Pagination totaltempDatas={tempDatas.length} postPerPage={postPerPage} paginate={paginate} currentPage={currentPage} />
            </div>
        </>
    )
}

export default ContentCourse;
