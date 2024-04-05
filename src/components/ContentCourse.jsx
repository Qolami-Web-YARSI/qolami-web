import React, { useState, useEffect, useRef } from 'react';
import CardContentCourse from './CardContentCourse';
import Pagination from './Pagination';

const ContentCourse = () => {
    const contentRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
    const [tempUnlock, setTempUnlock] = useState([])
    const dataKursus = [
        {
            id: 1,
            nama: "Pelajaran 1",
            gambar: "img1-1.svg",
            deskripsi: "Huruf Hijaiyah",
        },
        {
            id: 2,
            nama: "Latihan 1",
            gambar: "img1-2.svg",
            deskripsi: "Huruf Hijaiyah",
        },
        {
            id: 3,
            nama: "Ujian 1",
            gambar: "img1-3.svg",
            deskripsi: "Huruf Hijaiyah",
        },
        {
            id: 4,
            nama: "Pelajaran 2",
            gambar: "img2-1.svg",
            deskripsi: "Huruf Berharakat Fathah",
        },
        {
            id: 5,
            nama: "Latihan 2",
            gambar: "img2-2.svg",
            deskripsi: "Huruf Berharakat Fathah",
        },
        {
            id: 6,
            nama: "Ujian 2",
            gambar: "img2-3.svg",
            deskripsi: "Huruf Berharakat Fathah",
        },
        {
            id: 7,
            nama: "Pelajaran 3",
            gambar: "img3-1.svg",
            deskripsi: "Huruf Berharakat Dhammah",
        },
        {
            id: 8,
            nama: "Latihan 3",
            gambar: "img3-2.svg",
            deskripsi: "Huruf Berharakat Dhammah",
        },
        {
            id: 9,
            nama: "Ujian 3",
            gambar: "img3-3.svg",
            deskripsi: "Huruf Berharakat Dhammah",
        },
        {
            id: 10,
            nama: "Pelajaran 4",
            gambar: "img4-1.svg",
            deskripsi: "Huruf Berharakat Kasrah",
        },
        {
            id: 11,
            nama: "Latihan 4",
            gambar: "img4-2.svg",
            deskripsi: "Huruf Berharakat Kasrah",
        },
        {
            id: 12,
            nama: "Ujian 4",
            gambar: "img4-3.svg",
            deskripsi: "Huruf Berharakat Kasrah",
        },
        {
            id: 13,
            nama: "Pelajaran 5",
            gambar: "img5-1.svg",
            deskripsi: "Huruf Berharakat Fathatain",
        },
        {
            id: 14,
            nama: "Latihan 5",
            gambar: "img5-2.svg",
            deskripsi: "Huruf Berharakat Fathatain",
        },
        {
            id: 15,
            nama: "Ujian 5",
            gambar: "img5-3.svg",
            deskripsi: "Huruf Berharakat Fathatain",
        },
        {
            id: 16,
            nama: "Pelajaran 6",
            gambar: "img6-1.svg",
            deskripsi: "Huruf Berharakat Kasratain",
        },
        {
            id: 17,
            nama: "Latihan 6",
            gambar: "img6-2.svg",
            deskripsi: "Huruf Berharakat Kasratain",
        },
        {
            id: 18,
            nama: "Ujian 6",
            gambar: "img6-3.svg",
            deskripsi: "Huruf Berharakat Kasratain",
        },
        {
            id: 19,
            nama: "Pelajaran 7",
            gambar: "img7-1.svg",
            deskripsi: "Huruf Berharakat Dhammatain",
        },
        {
            id: 20,
            nama: "Latihan 7",
            gambar: "img7-2.svg",
            deskripsi: "Huruf Berharakat Dhammatain",
        },
        {
            id: 21,
            nama: "Ujian 7",
            gambar: "img7-3.svg",
            deskripsi: "Huruf Berharakat Dhammatain",
        },
        {
            id: 22,
            nama: "Pelajaran 8",
            gambar: "img8-1.svg",
            deskripsi: "Huruf Berharakat Sukun",
        },
        {
            id: 23,
            nama: "Latihan 8",
            gambar: "img8-2.svg",
            deskripsi: "Huruf Berharakat Sukun",
        },
        {
            id: 24,
            nama: "Ujian 8",
            gambar: "img8-3.svg",
            deskripsi: "Huruf Berharakat Sukun",
        },
        {
            id: 25,
            nama: "Pelajaran 9",
            gambar: "img9-1.svg",
            deskripsi: "Huruf Berharakat Tasydid/Syiddah",
        },
        {
            id: 26,
            nama: "Latihan 9",
            gambar: "img9-2.svg",
            deskripsi: "Huruf Berharakat Tasydid/Syiddah",
        },
        {
            id: 27,
            nama: "Ujian 9",
            gambar: "img9-3.svg",
            deskripsi: "Huruf Berharakat Tasydid/Syiddah",
        },
    ]
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        const tempUnlockArray = [];
        for(let i = 0; i < dataKursus.length; i++){
            if(dataKursus[i].id % 3 === 1){
                tempUnlockArray.push(true);
            }
            if(dataKursus[i].id % 3 === 0 || dataKursus[i].id % 3 === 2){
                tempUnlockArray.push(false);
            }
        }
        setTempUnlock(tempUnlockArray);
    }, [dataKursus.length]);

    return(
        <>
            <div className='tw-flex tw-flex-col tw-py-20 tw-bg-[#FFF6D9] tw-font-poppins'>
                <div className="tw-flex tw-justify-between tw-mx-auto">
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-py-16 md:tw-py-20 lg:tw-py-28 tw-mx-auto tw-font-poppins">KURSUS</p>
                </div>
                <div className='tw-grid tw-w-[90%] tw-grid-cols-1 md:tw-grid-cols-3 tw-bg-[#FFF6D9] tw-mx-auto tw-gap-9' ref={contentRef} id="a">
                    <CardContentCourse dataKursus={dataKursus.slice(indexOfFirstPost, indexOfLastPost)} tempUnlock={tempUnlock}/>
                </div>
                <Pagination totalDataKursus={dataKursus.length} postPerPage={postPerPage} paginate={paginate} currentPage={currentPage} />
            </div>
        </>
    )
}

export default ContentCourse;