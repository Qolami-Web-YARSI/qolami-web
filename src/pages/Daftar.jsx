import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Daftar = () => { 
    const [getToggle, setToggle] = useState(false)
    const [noticeNamaDepan, setNoticeNamaDepan] = useState(true)
    const [noticeNamaBelakang, setNoticeNamaBelakang] = useState(true)
    const [noticeEmail, setNoticeEmail] = useState(true)
    const [noticeKataSandi, setNoticeKataSandi] = useState(true)
    const [tempNamaDepan, setTempNamaDepan] = useState(false)
    const [tempNamaBelakang, setTempNamaBelakang] = useState(false)
    const [tempEmail, setTempEmail] = useState(false)
    const [tempKataSandi, setTempKataSandi] = useState(false)
    const [isValidasi, setIsValidasi] = useState(false)

    const users = async (data) => {
      try {
        const response = await axios.post('http://localhost:2002/pengguna', data)
        console.log(response.data)
      } catch(e) {
        console.log(e)
      }
    }
    
    const buttonToggle = () => {
      setToggle(!getToggle)
    }

    const validateEmail1 = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    const namaDepan = {
      change: (event) => {
        if(event.target.value.length == 0){
          setNoticeNamaDepan(false);
          setTempNamaDepan(false)
        } else {
          setNoticeNamaDepan(true);
          setTempNamaDepan(true)
        }
      },
      focus: (event) => {
        if(event.target.value.trim() === ''){
          setNoticeNamaDepan(false);
        }
      },
      blur: (event) => {
        if(event.target.value.trim() === ''){
          setNoticeNamaDepan(true);
        }
      }
    }

    const namaBelakang = {
      change: (event) => {
        if(event.target.value.trim() === ''){
          setNoticeNamaBelakang(false);
          setTempNamaBelakang(false)
        } else {
          setNoticeNamaBelakang(true);
          setTempNamaBelakang(true)
        }
      },
      focus: (event) => {
        if(event.target.value.trim() === ''){
          setNoticeNamaBelakang(false);
        }
      },
      blur: (event) => {
        if(event.target.value.trim() === ''){
          setNoticeNamaBelakang(true);
        }
      }
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
      if(tempNamaDepan && tempNamaBelakang && tempEmail && tempKataSandi){
        setIsValidasi(true)
      }else{
        setIsValidasi(false)
      }
    }, [tempNamaDepan, tempNamaBelakang, tempEmail, tempKataSandi]);

    const handleDaftar = (event) => {
      event.preventDefault();
      const newData = {
        id: (+new Date()).toString(),
        namaDepan: event.target.namaDepanDaftar.value,
        namaBelakang: event.target.namaBelakangDaftar.value,
        email: event.target.emailDaftar.value,
        password: event.target.passwordDaftar.value,
        gambarProfile: {},
        token: null
      };

      users(newData)

      event.target.namaDepanDaftar.value = ""
      event.target.namaBelakangDaftar.value = ""
      event.target.emailDaftar.value = ""
      event.target.passwordDaftar.value = ""

      setTempNamaDepan(false)
      setTempNamaBelakang(false)
      setTempEmail(false)
      setTempKataSandi(false)
    }

    return(
        <>
          <form onSubmit={handleDaftar}>
            <div className="modal fade" id="daftarModal" tabIndex="-1" aria-labelledby="daftarModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content tw-rounded-[15px]">
                  <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">
                    <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <button type="button" className="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                          <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                            <p className="tw-font-bold tw-text-white tw-text-xl">X</p>
                          </div>
                      </button>
                      <div className="tw-flex tw-flex-col tw-justify-center">
                        <p className="tw-text-[#009900] tw-text-[40px] tw-font-bold tw-text-center">DAFTAR</p>
                      </div>
                      <button type="button" className="close tw-bg-white tw-rounded-lg tw-size-7" data-bs-dismiss="modal">
                          <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg">
                            <img src="exit.svg"/>
                          </div>
                      </button>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                      <h1 className="modal-title fs-5 tw-opacity-0" id="daftarModalLabel">X</h1>
                      <img src="logo-qolami.svg" alt="buttonpng" border="0" className="tw-w-[160px]" />
                      <h1 className="modal-title fs-5 tw-opacity-0" id="daftarModalLabel">X</h1>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-row tw-justify-between">
                      <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                          <label className="form-label">Nama Depan</label>
                          <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" onBlur={namaDepan.blur} onFocus={namaDepan.focus} onChange={namaDepan.change} name="namaDepanDaftar" id="namaDepanDaftar" placeholder='Nama Depan'/>
                          <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeNamaDepan? "tw-hidden": "tw-block"}`}>Nama Depan tidak boleh kosong!</p>
                      </div>

                      <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                          <label className="form-label">Nama Belakang</label>
                          <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" onBlur={namaBelakang.blur} onFocus={namaBelakang.focus} onChange={namaBelakang.change} name="namaBelakangDaftar" id="namaBelakang" placeholder='Nama Belakang'/>
                          <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeNamaBelakang? "tw-hidden": "tw-block"}`}>Nama Belakang tidak boleh kosong!</p>
                      </div>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" onBlur={email.blur} onFocus={email.focus} onChange={email.change} name="emailDaftar" id="emailDaftar" placeholder='Email' required/>
                      <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeEmail? "tw-hidden": "tw-block"}`}>Email yang dimasukkan harus valid!</p>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                      <label className="form-label">Kata Sandi</label>
                      <div className="tw-flex tw-w-full tw-flex-row">
                        <input type={`${getToggle? "text":"password"}`} className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA]" onBlur={kataSandi.blur} onFocus={kataSandi.focus} onChange={kataSandi.change} id="passwordDaftar" name="passwordDaftar" placeholder='Kata Sandi' required autoComplete="password-daftar"/>
                        <button onClick={()=>buttonToggle()} type="button" className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-s-0 tw-border-sd-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                          <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                            <img src={`${getToggle? "open.png":"close.png"}`} alt="buttonpng" className="tw-w-10 tw-items-end"/>
                          </div>
                        </button>
                      </div>
                      <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandi? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8</p>
                      
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-pt-4 ">
                      {isValidasi ? <button type="submit" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold hover:tw-bg-[#] hover:tw-bg-[#009900]" data-bs-target="#masukModal" data-bs-toggle="modal">Daftar</button> : <button type="submit" className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold" data-bs-target="#masukModal" data-bs-toggle="modal" disabled>Daftar</button>}
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-row tw-py-2 tw-pt-5 tw-justify-center tw-gap-1">
                    <label className="form-label tw-text-black">Udah Punya Akun?</label>
                      <label className="form-label tw-text-[#009900] tw-cursor-pointer tw-font-bold" data-bs-target="#masukModal" data-bs-toggle="modal">Masuk</label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
    )
}

export default Daftar;
















// const storedData = JSON.parse(localStorage.getItem('dataDaftar'));
      // if (storedData) {
      //   storedData.push(newData);
      //   localStorage.setItem('dataDaftar', JSON.stringify(storedData));
      // } else {
      //   localStorage.setItem('dataDaftar', JSON.stringify([newData]));
      // }