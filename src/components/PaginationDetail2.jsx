import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const PaginationDetail2 = ({id, tempIdDetail}) => {

    const load = () => {
        window.location.reload()
    }

    useEffect(()=>{
        // console.log(Number(id))
        // console.log(tempIdDetail)
        // console.log(tempIdDetail.indexOf(Number(id)))
        // console.log(tempIdDetail.length - 1)
    },[])
    
    return(
        <>
            <div className='tw-flex tw-mx-auto tw-justify-between tw-w-[100%] tw-pb-16 tw-px-10 md:tw-px-40' dir="ltr">
                {tempIdDetail.indexOf(Number(id)) === 0 ? (
                    <button className=' tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-5 tw-p-2 tw-rounded-full tw-text-[40px] md:tw-text-[60px]' onClick={load}><Link to={`/lessons-two/contents/${tempIdDetail[tempIdDetail.length - 1]}`}><FiArrowLeft /></Link></button>
                ) : (
                    <button className=' tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-5 tw-p-2 tw-rounded-full tw-text-[40px] md:tw-text-[60px]' onClick={load}><Link to={`/lessons-two/contents/${tempIdDetail[(tempIdDetail.indexOf(Number(id))) - 1]}`}><FiArrowLeft /></Link></button>
                )}
                <button className='tw-text-[40px] md:tw-text-[60px] hover:tw-text-[#90C963]'><Link to={`/${localStorage.getItem('idDetail')}`}><FiMenu /></Link></button>
                {tempIdDetail.indexOf(Number(id)) === tempIdDetail.length - 1 ? (
                    <button className=' tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-5 tw-p-2 tw-rounded-full tw-text-[40px] md:tw-text-[60px]' onClick={load}><Link to={`/lessons-two/contents/${tempIdDetail[0]}`}><FiArrowRight /></Link></button>
                ) : (
                    <button className=' tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-5 tw-p-2 tw-rounded-full tw-text-[40px] md:tw-text-[60px]' onClick={load}><Link to={`/lessons-two/contents/${tempIdDetail[(tempIdDetail.indexOf(Number(id))) + 1]}`}><FiArrowRight /></Link></button>
                )}
            </div>
        </>
    )
}

export default PaginationDetail2