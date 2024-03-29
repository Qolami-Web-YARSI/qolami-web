import React, { useState, useEffect } from 'react'

const Masuk = () => {
    const [getToggle, setToggle] = useState(false)
    const buttonToggle = () => {
      setToggle(!getToggle)
    }
    return(
        <>
          <div class="modal fade" id="masukModal" tabindex="-1" aria-labelledby="masukModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content tw-rounded-[15px]">
                <div class="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <button type="button" class="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                      <div class="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg">
                          <img src="exit.svg"/>
                        </div>
                    </button>
                    <div class="tw-flex tw-flex-col">
                      <p class="tw-text-[#009900] tw-text-[40px] tw-font-bold tw-text-center">MASUK</p>
                    </div>
                    <button type="button" class="close tw-bg-white tw-rounded-lg tw-size-7" data-bs-dismiss="modal">
                        <div class="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg">
                          <img src="exit.svg"/>
                        </div>
                    </button>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                    <h1 class="modal-title fs-5 tw-opacity-0" id="masukModalLabel">X</h1>
                    <img src="logo-qolami.svg" alt="buttonpng" border="0" class="tw-w-[160px]" />
                    <h1 class="modal-title fs-5 tw-opacity-0" id="masukModalLabel">X</h1>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label for="validationCustom03" class="form-label">Email</label>
                    <input type="email" class="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="email" placeholder='Email' required/>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label for="validationCustom03" class="form-label">Kata Sandi</label>
                    <div class="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle? "password":"text"}`} class="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="password" placeholder='Kata Sandi' required/>
                      <button onClick={()=>buttonToggle()} type="button" class="tw-w-[13%] tw-bg-white tw-border-2 tw-border-s-0 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div class="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle? "close.png":"open.png"}`} alt="buttonpng" class="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div class="tw-flex tw-flex-row-reverse tw-w-full tw-py-1">
                    <label for="validationCustom03" class="form-label tw-cursor-pointer" data-bs-target="#lupaPasswordModal" data-bs-toggle="modal">Lupa Kata Sandi?</label>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-pt-4 ">
                    <button type="button" class="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold">Masuk</button>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-row tw-py-2 tw-pt-5 tw-justify-center tw-gap-1">
                    <label for="validationCustom03" class="form-label tw-text-black">Belum Punya Akun?</label>
                    <label for="validationCustom03" class="form-label tw-text-[#009900] tw-cursor-pointer tw-font-bold" data-bs-target="#daftarModal" data-bs-toggle="modal">Daftar</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Masuk;