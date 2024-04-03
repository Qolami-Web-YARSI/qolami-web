import React, { useState, useEffect } from 'react'

const LupaKataSandi = () => {
    
    return(
        <>
          <div className="modal fade" id="lupaPasswordModal" tabIndex="-1" aria-labelledby="lupaPasswordModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content fixed">
                    <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">
                    <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                        <button type="button" className="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                            <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                            <p className="tw-font-bold tw-text-white tw-text-xl">X</p>
                            </div>
                        </button>
                        <div className="tw-flex tw-flex-col tw-justify-center">
                            <p className="tw-text-[#009900] tw-text-[30px] tw-pt-2 tw-font-bold tw-text-center">LUPA KATA SANDI</p>
                        </div>
                        <button type="button" className="close tw-bg-white tw-rounded-lg tw-size-7" data-bs-dismiss="modal">
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg">
                          <img src="exit.svg"/>
                        </div>
                        </button>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                        <h1 className="modal-title fs-5 tw-opacity-0" id="lupaPasswordModalLabel">X</h1>
                        <img src="logo-qolami.svg" alt="buttonpng" border="0" className="tw-w-[160px]" />
                        <h1 className="modal-title fs-5 tw-opacity-0" id="lupaPasswordModalLabel">X</h1>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                        <label htmlFor="validationCustom03" className="form-label">Email</label>
                        <input type="email" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="email" placeholder='Email' required/>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-py-4">
                        <button type="button" className="tw-bg-[#458200] tw-w-full tw-h-10 tw-rounded-lg tw-text-white tw-cursor-pointer tw-font-bold" data-bs-target="#masukModal" data-bs-toggle="modal">Kirim</button>
                    </div>

                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default LupaKataSandi;