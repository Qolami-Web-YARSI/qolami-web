import React, { useState, useEffect, useRef } from 'react';
import CardContentCourse from './CardContentCourse';
import Pagination from './Pagination';

const ContentCourse = () => {
    const contentRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
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
    ]
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return(
        <>
            <div className='tw-flex tw-flex-col tw-py-20 tw-bg-[#FFF6D9]'>
                <div className="tw-flex tw-justify-between tw-mx-auto">
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-py-16 md:tw-py-20 lg:tw-py-28 tw-mx-auto tw-font-poppins">KURSUS</p>
                </div>
                <div className='tw-grid tw-w-[90%] tw-grid-cols-1 md:tw-grid-cols-3 tw-bg-[#FFF6D9] tw-mx-auto tw-gap-9' ref={contentRef} id="a">
                    <CardContentCourse dataKursus={dataKursus.slice(indexOfFirstPost, indexOfLastPost)}/>
                </div>
                <Pagination totalDataKursus={dataKursus.length} postPerPage={postPerPage} paginate={paginate} currentPage={currentPage} />
            </div>
        </>
    )
}

export default ContentCourse;