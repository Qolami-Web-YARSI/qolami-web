import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom';

const DialogHasilNilai = ({id, img, score}) => {

    useEffect(() => {
     window.scrollTo(0, 0);
    }, [])

    return(
        <>
            <div className="modal fade" id={`${id}`} data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="tw-flex modal-dialog modal-dialog-centered modal-lg tw-mx-auto">
                    <div className="modal-content tw-w-[600px] tw-bg-[#FFF6D9] tw-py-2 tw-rounded-[25px] tw-mx-auto">
                        <div className="tw-flex tw-flex-col modal-body tw-px-[50px] tw-rounded-[25px] tw-bg-[#FFF6D9] tw-font-poppins">
                            <img src={`${img}`} className="tw-w-48 sm:tw-w-28 tw-mx-auto" alt="pencil"/>
                            <div className="tw-flex tw-gap-6 tw-pt-8 tw-mx-auto tw-w-full">
                                <div className='tw-flex tw-w-1/2 tw-flex-col tw-mx-auto'>
                                    <p className='tw-mx-auto tw-font-bold tw-text-[25px]'>Total Soal</p>
                                    <p className='tw-mx-auto tw-font-bold tw-text-[70px]'>4</p>
                                </div>
                                <div className='tw-flex tw-w-1/2 tw-flex-col tw-mx-auto'>
                                    <p className='tw-mx-auto tw-font-bold tw-text-[25px]'>Nilai</p>
                                    <p className='tw-mx-auto tw-font-bold tw-text-[70px]'>{score}</p>
                                </div>
                            </div>
                            <p className='tw-mx-auto tw-py-5 tw-pb-7 tw-text-[20px] tw-text-center'>Selamat! Anda telah Lulus dari latihan ini</p>
                            <button type="button" className="btn btn-secondary tw-text-[18px] tw-bg-[#009900] hover:tw-bg-[#007100] tw-text-white tw-w-[80px] tw-mx-auto tw-rounded-[30px] tw-font-bold" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogHasilNilai;