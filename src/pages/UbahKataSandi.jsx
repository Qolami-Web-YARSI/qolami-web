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
          <div class="modal fade" id="ubahPasswordModal" tabindex="-1" aria-labelledby="ubahPasswordModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content tw-rounded-[15px]">
                <div class="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                  <button type="button" class="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                        <div class="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                          <p class="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                    <div class="tw-flex tw-flex-col">
                      <p class="tw-text-[#458200] tw-text-[40px] tw-font-bold tw-text-center">UBAH KATA SANDI</p>
                    </div>
                    <button type="button" class="tw-bg-white tw-rounded-lg tw-size-10" border="0">
                        <div class="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-bg-[#FF0000]" data-bs-dismiss="modal">
                          <p class="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                    <h1 class="modal-title fs-5 tw-opacity-0" id="ubahPasswordModalLabel">X</h1>
                    <img src="logo-qolami.svg" alt="buttonpng" border="0" class="tw-w-[160px]" />
                    <h1 class="modal-title fs-5 tw-opacity-0" id="ubahPasswordModalLabel">X</h1>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label for="validationCustom03" class="form-label">Kata Sandi Lama</label>
                    <div class="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle1? "password":"text"}`} class="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="password" placeholder='Kata Sandi Lama' required/>
                      <button onClick={()=>buttonToggle1()} type="button" class="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div class="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle1? "close.png":"open.png"}`} alt="buttonpng" class="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label for="validationCustom03" class="form-label">Kata Sandi Baru</label>
                    <div class="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle2? "password":"text"}`} class="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="password" placeholder='Kata Sandi Baru' required/>
                      <button onClick={()=>buttonToggle2()} type="button" class="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div class="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle2? "close.png":"open.png"}`} alt="buttonpng" class="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label for="validationCustom03" class="form-label">Konfirmasi Kata Sandi Baru</label>
                    <div class="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle3? "password":"text"}`} class="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="password" placeholder='Konfirmasi Kata Sandi Baru' required/>
                      <button onClick={()=>buttonToggle3()} type="button" class="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div class="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle3? "close.png":"open.png"}`} alt="buttonpng" class="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                    <button type="button" class="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold" data-bs-dismiss="modal">Ubah Password</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default UbahKataSandi;