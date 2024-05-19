import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UbahKataSandi = () => {
    const [getToggle1, setToggle1] = useState(false)
    const [getToggle2, setToggle2] = useState(false)
    const [getToggle3, setToggle3] = useState(false)

    const [noticeKataSandiLama, setNoticeKataSandiLama] = useState(true)
    const [noticeKataSandiLama2, setNoticeKataSandiLama2] = useState(true)
    const [tempKataSandiLama, setTempKataSandiLama] = useState(false)

    const [noticeKataSandiBaru, setNoticeKataSandiBaru] = useState(true)
    const [tempKataSandiBaru, setTempKataSandiBaru] = useState(false)

    const [noticeKonfirmasiKataSandiBaru, setNoticeKonfirmasiKataSandiBaru] = useState(true)
    const [noticeKonfirmasiKataSandiBaru2, setNoticeKonfirmasiKataSandiBaru2] = useState(true)
    const [tempKonfirmasiKataSandiBaru, setKonfirmasiTempKataSandiBaru] = useState(false)

    const [isValidasi, setIsValidasi] = useState(false)
    const [isValidasi2, setIsValidasi2] = useState(false)

    const buttonToggle1 = () => {
      setToggle1(!getToggle1)
    }

    const buttonToggle2 = () => {
        setToggle2(!getToggle2)
    }

    const buttonToggle3 = () => {
        setToggle3(!getToggle3)
    }

    const handleSubmitPassword = async (event) => {
      event.preventDefault();
      try{
        const response = await axios.post(`http://localhost:2024/users/settings/change-password`,{
          id: localStorage.getItem('id'),
          oldPassword: event.target.passwordLama.value,
          newPassword: event.target.passwordBaru.value,
          confirmNewPassword: event.target.konfirmasiPasswordBaru.value
        },{
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        console.log(response.data)
        setNoticeKataSandiLama2(true)
        setNoticeKonfirmasiKataSandiBaru2(true)
        setIsValidasi2(true)
        window.location.reload()
      }catch(e){
        console.log(e.response.data)
        if(e.response.data.includes('Invalid old password.')){
          setNoticeKataSandiLama2(false)
        }else{
          setNoticeKataSandiLama2(true)
        }

        if(event.target.passwordBaru.value === event.target.konfirmasiPasswordBaru.value){
          setNoticeKonfirmasiKataSandiBaru2(true)
        }else{
          setNoticeKonfirmasiKataSandiBaru2(false)
        }
      }
    }

    const kataSandiLama = {
      change: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandiLama(false);
          setTempKataSandiLama(false);
        }else{
          setNoticeKataSandiLama(true);
          setTempKataSandiLama(true)
        }
      },
      focus: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandiLama(false);
        }
      },
      blur: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandiLama(true);
        }
      }
    }

    const kataSandiBaru = {
      change: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandiBaru(false);
          setTempKataSandiBaru(false)
        } else {
          setNoticeKataSandiBaru(true);
          setTempKataSandiBaru(true)
        }
      },
      focus: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandiBaru(false);
        }
      },
      blur: (event) => {
        if(event.target.value.length < 8){
          setNoticeKataSandiBaru(true);
        }
      }
    }

    const konfirmasiKataSandiBaru = {
      change: (event) => {
        if(event.target.value.length < 8){
          setNoticeKonfirmasiKataSandiBaru(false);
          setKonfirmasiTempKataSandiBaru(false)
        } else {
          setNoticeKonfirmasiKataSandiBaru(true);
          setKonfirmasiTempKataSandiBaru(true)
        }
      },
      focus: (event) => {
        if(event.target.value.length < 8){
          setNoticeKonfirmasiKataSandiBaru(false);
        }
      },
      blur: (event) => {
        if(event.target.value.length < 8){
          setNoticeKonfirmasiKataSandiBaru(true);
        }
      }
    }
    
    useEffect(() => {
      if(tempKataSandiLama && tempKataSandiBaru && tempKonfirmasiKataSandiBaru){
        setIsValidasi(true)
      }else{
        setIsValidasi(false)
      }
    }, [tempKataSandiLama, tempKataSandiBaru, tempKonfirmasiKataSandiBaru]);


    return(
        <form onSubmit={handleSubmitPassword}>
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
                      <input type={`${getToggle1? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="passwordLama" placeholder='Kata Sandi Lama' onBlur={kataSandiLama.blur} onFocus={kataSandiLama.focus} onChange={kataSandiLama.change} autoComplete="password-lama" required/>
                      <button onClick={()=>buttonToggle1()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle1? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandiLama? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8 dan tidak boleh kosong!</p>
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandiLama2? "tw-hidden": "tw-block"}`}>Password harus sama dengan yang lama!</p>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label htmlFor="validationCustom03" className="form-label">Kata Sandi Baru</label>
                    <div className="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle2? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="passwordBaru" placeholder='Kata Sandi Baru' onBlur={kataSandiBaru.blur} onFocus={kataSandiBaru.focus} onChange={kataSandiBaru.change} autoComplete="password-baru" required/>
                      <button onClick={()=>buttonToggle2()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle2? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandiBaru? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8 dan tidak boleh kosong!</p>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                    <label htmlFor="validationCustom03" className="form-label">Konfirmasi Kata Sandi Baru</label>
                    <div className="tw-flex tw-w-full tw-flex-row">
                      <input type={`${getToggle3? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base" id="konfirmasiPasswordBaru" placeholder='Konfirmasi Kata Sandi Baru' onBlur={konfirmasiKataSandiBaru.blur} onFocus={konfirmasiKataSandiBaru.focus} onChange={konfirmasiKataSandiBaru.change} autoComplete="konfrimasi-password-baru" required/>
                      <button onClick={()=>buttonToggle3()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                        <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                          <img src={`${getToggle3? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                        </div>
                      </button>
                    </div>
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKonfirmasiKataSandiBaru? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8 dan tidak boleh kosong!</p>
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKonfirmasiKataSandiBaru2? "tw-hidden": "tw-block"}`}>Password yang dimasukkan tidak cocok dengan yang baru!</p>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                    {
                      isValidasi ? 
                      <button type="submit" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold hover:tw-bg-[#009900]">Ubah</button> 
                      :
                      <button type="submit" className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold" disabled>Ubah</button> 
                    }
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#458200] tw-italic ${isValidasi2? "tw-block": "tw-hidden"}`}>Menggubah Password Berhasil!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>
    )
}

export default UbahKataSandi;