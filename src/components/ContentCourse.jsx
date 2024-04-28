import React, { useState, useEffect, useRef } from 'react';
import CardContentCourse from './CardContentCourse';
import Pagination from './Pagination';
import axios from 'axios';

const ContentCourse = ({tempToken}) => {
    const contentRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
    const [tempUnlock, setTempUnlock] = useState([])
    const [tempDatas, setTempDatas]  = useState([])
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const datas = async () => {
        try {
            const response = await axios.get('http://localhost:2002/kursus')
            tempDatas.push(...response.data)
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
        } catch(e) {
            console.log(e)
        }
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
