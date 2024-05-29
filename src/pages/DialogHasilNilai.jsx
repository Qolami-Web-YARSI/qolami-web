import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom';

const DialogHasilNilai = ({id, img}) => {

    useEffect(() => {
     window.scrollTo(0, 0);
    }, [])

    return(
        <>
            <div className="modal fade" id={`${id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content tw-rounded-[25px]">
                        <div className="modal-body tw-px-[50px] tw-rounded-[25px] tw-bg-[#FFF6D9]">
                        <img src={`${img}`} className=" tw-w-48 sm:tw-w-72 tw-mx-auto"/>
                            <div className="tw-flex tw-flex-col tw-gap-6 tw-py-5">
                                
                            </div>
                            <button data-bs-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogHasilNilai;