import React, { useState, useEffect } from 'react'

const Masuk = () => {
    const [getToggle, setToggle] = useState(false)
    const [noticeEmail, setNoticeEmail] = useState(true)
    const [noticeKataSandi, setNoticeKataSandi] = useState(true)
    const [tempEmail, setTempEmail] = useState(false)
    const [tempKataSandi, setTempKataSandi] = useState(false)
    const [isValidasi, setIsValidasi] = useState(false)
    const buttonToggle = () => {
      setToggle(!getToggle)
    }
    const validateEmail1 = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
    const email = {
      change: (event) => {
        if (!(validateEmail1(event.target.value) && event.target.value.includes('.com') && event.target.value.length > 0)) {
          setNoticeEmail(false);
          setTempEmail(false)
        } else {
          setNoticeEmail(true);
          setTempEmail(true)
        }
      },
      focus: (event) => {
        if (!(validateEmail1(event.target.value) && event.target.value.includes('.com') && event.target.value.length > 0)) {
          setNoticeEmail(false);
        }
      },
      blur: (event) => {
        if (!(validateEmail1(event.target.value) && event.target.value.includes('.com') && event.target.value.length > 0)) {
          setNoticeEmail(true);
        }
      }
    }

    const kataSandi = {
      change: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandi(false);
          setTempKataSandi(false)
        } else {
          setNoticeKataSandi(true);
          setTempKataSandi(true)
        }
      },
      focus: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandi(false);
        }
      },
      blur: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandi(true);
        }
      }
    }

    useEffect(() => {
      if(tempEmail && tempKataSandi){
        setIsValidasi(true)
      }else{
        setIsValidasi(false)
      }
    }, [tempEmail, tempKataSandi]);

    return(
        <>
          <div className="modal fade" id="masukModal" tabIndex="-1" aria-labelledby="masukModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content tw-rounded-[15px]">
                <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">
                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <button type="button" className="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                      <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg">
                          <img src="exit.svg"/>
                        </div>
                    </button>
                    <div className="tw-flex tw-flex-col">
                      <p className="tw-text-[#009900] tw-text-[40px] tw-font-bold tw-text-center">MASUK</p>
                    </div>
                    <button type="button" className="close tw-bg-white tw-rounded-lg tw-size-7" data-bs-dismiss="modal">
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg">
                          <img src="exit.svg"/>
                        </div>
                    </button>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                    <h1 className="modal-title fs-5 tw-opacity-0" id="masukModalLabel">X</h1>
                    <img src="logo-qolami.svg" alt="buttonpng" border="0" className="tw-w-[160px]" />
                    <h1 className="modal-title fs-5 tw-opacity-0" id="masukModalLabel">X</h1>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label htmlFor="validationCustom03" className="form-label">Email</label>
                    <input type="email" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="emailMasuk" placeholder='Email' onBlur={email.blur} onFocus={email.focus} onChange={email.change} required/>
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeEmail? "tw-hidden": "tw-block"}`}>Email yang dimasukkan harus valid dan tidak boleh kosong!</p>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label htmlFor="validationCustom03" className="form-label">Kata Sandi</label>
                    <div className="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="passwordMasuk" placeholder='Kata Sandi' onBlur={kataSandi.blur} onFocus={kataSandi.focus} onChange={kataSandi.change} required/>
                      <button onClick={()=>buttonToggle()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-s-0 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandi? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8 dan tidak boleh kosong!</p>
                  </div>

                  <div className="tw-flex tw-flex-row-reverse tw-w-full tw-py-1">
                    <label htmlFor="validationCustom03" className="form-label tw-cursor-pointer tw-text-[#009900]" data-bs-target="#lupaPasswordModal" data-bs-toggle="modal">Lupa Kata Sandi?</label>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-pt-4 ">
                  {isValidasi ? <button type="submit" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold">Masuk</button> : <button type="submit" className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold" disabled>Masuk</button>}
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-py-2 tw-pt-5 tw-justify-center tw-gap-1">
                    <label htmlFor="validationCustom03" className="form-label tw-text-black">Belum Punya Akun?</label>
                    <label htmlFor="validationCustom03" className="form-label tw-text-[#009900] tw-cursor-pointer tw-font-bold" data-bs-target="#daftarModal" data-bs-toggle="modal">Daftar</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Masuk;