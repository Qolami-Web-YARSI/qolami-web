import React, { useState, useEffect } from 'react'

const UbahKataSandi = () => {
    const [getToggle1, setToggle1] = useState(false)
    const [getToggle2, setToggle2] = useState(false)
    const [getToggle3, setToggle3] = useState(false)
    const buttonToggle1 = () => {
      setToggle1(!getToggle1)
    }
    const buttonToggle2 = () => {
        setToggle2(!getToggle2)
    }
    const buttonToggle3 = () => {
        setToggle3(!getToggle3)
      }
    return(
        <>
          <div className="modal fade" id="ubahPasswordModal" tabIndex="-1" aria-labelledby="ubahPasswordModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content tw-rounded-[15px]">
                <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                  <button type="button" className="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                          <p className="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                    <div className="tw-flex tw-flex-col">
                      <p className="tw-text-[#458200] tw-text-[40px] tw-font-bold tw-text-center">UBAH KATA SANDI</p>
                    </div>
                    <button type="button" className="tw-bg-white tw-rounded-lg tw-size-10" border="0">
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-bg-[#FF0000]" data-bs-dismiss="modal">
                          <p className="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                    <h1 className="modal-title fs-5 tw-opacity-0" id="ubahPasswordModalLabel">X</h1>
                    <img src="logo-qolami.svg" alt="buttonpng" border="0" className="tw-w-[160px]" />
                    <h1 className="modal-title fs-5 tw-opacity-0" id="ubahPasswordModalLabel">X</h1>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label htmlFor="validationCustom03" className="form-label">Kata Sandi Lama</label>
                    <div className="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle1? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="password" placeholder='Kata Sandi Lama' required/>
                      <button onClick={()=>buttonToggle1()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle1? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label htmlFor="validationCustom03" className="form-label">Kata Sandi Baru</label>
                    <div className="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle2? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="password" placeholder='Kata Sandi Baru' required/>
                      <button onClick={()=>buttonToggle2()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle2? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label htmlFor="validationCustom03" className="form-label">Konfirmasi Kata Sandi Baru</label>
                    <div className="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle3? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="password" placeholder='Konfirmasi Kata Sandi Baru' required/>
                      <button onClick={()=>buttonToggle3()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle3? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                    <button type="button" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold hover:tw-bg-[#009900]" data-bs-dismiss="modal">Ubah</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default UbahKataSandi;