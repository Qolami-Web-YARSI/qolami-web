import React, { useState, useEffect } from 'react'
import axios from 'axios';

const LupaKataSandi = () => {
    const [noticeEmail, setNoticeEmail] = useState(true)
    const [tempEmail, setTempEmail] = useState(false)
    const [isValidasi, setIsValidasi] = useState(false)
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

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:2024/users/forgot-password',
        {
          email: event.target.emailLupaPassword.value
        })

        console.log(response.data)
        
        event.target.emailLupaPassword.value = ""
        // console.log(valueEmailMasuk)
        // const token = generateRandomString(100)
        // response.data.map(a => {
        //   const id = a.id.toString()
        //   if(a.email === valueEmailMasuk && a.password === valuePasswordMasuk){
        //     setIsValidasi3(false)
        //     setIsValidasi4(true)
        //     console.log("KAMU BERHASIL LOGIN")
        //     a.token = token
        //     axios.put(`http://localhost:2002/pengguna/${a.id}`, 
        //     { 
        //       id: id,
        //       namaDepan: a.namaDepan,
        //       namaBelakang: a.namaBelakang,
        //       email: a.email,
        //       password: a.password,
        //       gambarProfile: a.gambarProfile,
        //       token: token 
        //     });
        //     localStorage.setItem('token', a.token);
        //     if(localStorage.getItem('token') !== null){
        //       setTempToken(true)
        //       localStorage.setItem('id', a.id);
        //       window.location.reload();
        //     }
        //   }
        // })
      } catch(e) {
        console.log(e)
      }
    }

    useEffect(() => {
      if(tempEmail){
        setIsValidasi(true)
      }else{
        setIsValidasi(false)
      }
    }, [tempEmail]);

    return(
        <form onSubmit={handleSubmit}>
          <div className="modal fade" id="lupaPasswordModal" tabIndex="-1" aria-labelledby="lupaPasswordModalLabel" aria-hidden="true">
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
                        <input type="email" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="emailLupaPassword" placeholder='Email' onBlur={email.blur} onFocus={email.focus} onChange={email.change} required/>
                        <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeEmail? "tw-hidden": "tw-block"}`}>Email yang dimasukkan harus valid dan tidak boleh kosong!</p>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-py-4">
                        {isValidasi ? <button type="submit" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold hover:tw-bg-[#009900]" data-bs-target="#dialogBerhasilLupaKataSandi" data-bs-toggle="modal">Kirim</button> : <button type="submit" className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold" disabled>Kirim</button>}
                    </div>

                    </div>
                </div>
            </div>
          </div>
        </form>
    )
}

export default LupaKataSandi;