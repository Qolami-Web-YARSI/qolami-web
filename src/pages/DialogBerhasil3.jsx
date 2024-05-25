import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom';

const DialogBerhasil3 = ({id, id2}) => {
    useEffect(() => {
     window.scrollTo(0, 0);
    }, [])

    return(
        <>
            <div className="modal fade" id={`dialogMulaiLatihan${id2}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content tw-rounded-[25px]">
                        <div className="modal-body tw-px-[50px] tw-rounded-[25px] tw-bg-[#FFF6D9]">
                            <div className="tw-flex tw-flex-col tw-gap-6 tw-py-5">
                                <div className="tw-flex tw-bg-[#DBF9F9] tw-border-[3px] tw-border-[#81DEDF] tw-rounded-[23px] tw-py-10 tw-px-12">
                                    <p className="tw-mx-auto sm:tw-text-[20px] lg:tw-text-[23px] tw-text-[#628478]">Apakah Anda yakin ingin memulai latihan?</p>
                                </div>
                                <div className='tw-flex tw-mx-auto tw-gap-10'>
                                    <button 
                                    className="btn btn-secondary tw-text-[20px] tw-bg-[#E9ECEF] hover:tw-bg-[#E0E0E3] 
                                    tw-border-2 tw-border-[#BABABA] hover:tw-border-[#BABABA] tw-text-black hover:tw-text-black tw-w-[100px] 
                                    tw-rounded-none tw-font-bold" data-bs-dismiss="modal">Batal</button>
                                    <Link to={`/${id}/exercise/${id2}`}>
                                        <button 
                                        className="btn btn-secondary tw-text-[20px] tw-bg-[#009900] hover:tw-bg-[#007100] tw-text-white tw-w-[100px] tw-rounded-none tw-font-bold" 
                                        data-bs-dismiss="modal">Mulai</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogBerhasil3
