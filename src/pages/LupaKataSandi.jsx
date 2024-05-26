import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { IoMdClose } from "react-icons/io";

const LupaKataSandi = () => {
    const style = { color: "#FFF6D9" }
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
        // const myModal = new window.bootstrap.Modal(document.getElementById('dialogBerhasilLupaSandi'));
        // myModal.show();
        const myModal2 = window.bootstrap.Modal.getInstance(document.getElementById('lupaPasswordModal'));
        myModal2.hide();
        event.target.emailLupaPassword.value = ""
      } catch(e) {
        console.log(e)
      }
    }

    useEffect(()=>{
      localStorage.setItem('settings', 'profile')
    },[])

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
                        <button type="button" className="tw-opacity-0 tw-flex tw-rounded-lg tw-size-7" data-bs-dismiss="modal" disabled>
                            <div className="tw-bg-red-500 tw-rounded-md tw-m-auto tw-text-[35px]">
                              <IoMdClose style={style} />
                            </div>
                        </button>
                        <div className="tw-flex tw-flex-col tw-justify-center">
                            <p className="tw-text-[#009900] tw-text-[30px] tw-pt-2 tw-font-bold tw-text-center">LUPA KATA SANDI</p>
                        </div>
                        <button type="button" className="tw-flex tw-rounded-md tw-size-7" data-bs-dismiss="modal">
                            <div className="tw-bg-red-500 tw-rounded-md tw-m-auto tw-text-[35px]">
                              <IoMdClose style={style} />
                            </div>
                        </button>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                        <h1 className="modal-title fs-5 tw-opacity-0" id="lupaPasswordModalLabel">X</h1>
                        <img src="https://lh3.googleusercontent.com/fife/ALs6j_HZZNF384eOy7alKf4IkChktw-lZoI-EVvcHkshieiyCVV0bGYmYJo_CHVCkighQCB7khaNK3tmUgYdunoZl_Lt0Nd9f-mNlHU1Igcc-FWtI_pcqEld8b1ZoK9yg04IQtMuTL7DH61L-m2n9NDbKg27hpTJC662--FqHXqK8xgraG8Y1aUFBys5GhZtW8cwr5U3D5-yuZm8_ZV3caofeRikKsLuRtSVLDlohqeFCoo6fv26gZKrcmEXFNQi5Q7754H-mB7Mzj_qzrrgY7dXHvwiSlRnP8t0KIeMlQFUZuGlbUnSTngz9jXvG-skZHFUwvGU0H56PNSvVEDcBTTz1teL1OvTFxAnbUEkICT3tZ0pqsHl90p8U2ncUl1cw3w7Bj3IdP95sN3rGTn9e2TpRo4sYWtcrSEcJ-KYEucFVkteudW4MxdzQfKe-JnsI5Qtv81jfEZta8w-3lLopyhz1CicJrR4LoNRqNclWGTrWSPent1U-nVpmddnLwT70GMQGeBec7kpzQ0NMwqAr1umKPeFgBfsIJHxgsAVKZSXIyJ4JIka1h9tbO5nYdzR1IlSjFtzELwF7X_FJesm_mWxEgzf4-J3xP7jGiO-jUSeEnjbSj2eTEgVJGXDc4uVZ88x3wzBeYJ9od_bbPo_ViE1MWe-Ae00EBVaiO7AJK2w88VSJGZnfTnuL2Vx3FX-AB7ve3Q_g1fsx8nMnp4kSKsuB9NZtdkp7xJBPd1Sdk-UyJgvEBAI0rTCKFljG8aIlM_pfkVmhPB32MBm8CTnHIeaNFut1ZpSWLq3-u8iGD4rMb0TCj9-C9vCpxzmpe3v8PWbHnK7A9GXLJslByC20K3LlZIl9bzLq6Mzt9_BwLZgNB1KWZIOEqvprmSgAwhAqB0VwNVLchLNyf6Y53pLsMnyTwHbBcBO9SnHbJUD8YegK942Gzry6Yy4cO_ADO8hyHFmIkFB_xgSMDn_8udhQdtQl8qplTcrmtbMHDt0Mge4hKrykE5DEWrCBOTAIbZLM-aND328ACLjirrXE0hDc1DGO9Or_OPhSCi4c39jb7HN7OFIwd7YH1djzZ_wDM4x6G1igHjXMwpp5Jp3Yve6VwrKYovCPOHssE1FDRzXIQfH-u65fJ-Khn82tR6cLuiuUo97kekdF8YCl_MAALLP4f505VYfKW7WuXQQaCjuc2vO8u3TWNbxfOEBHM8wkjGNQ4riTWg5Ld2iffeuzK4V6c3AmD359MvXCH5P900Jfs_ElOKMFtCDP3Uup8emBInHH0WzxvVtJapaC0DKHHQ9oNxOBd26smDomeYehvE9qLs7uHF2e8FFPwgfIKOf8UJ41JjoeYNwqFtZNjJyOAqROCb4YvriBHhV1Rh1X-5IvPskszVrq43oizbM2VDWeSExeY4JkDF5FC4kIR_7lz9uef7vQ8Ks_XTwDphT6QL27EnruqdJo56-yEaVtp6_bvpOVj-Rwawh5bxX-1PZA2SIHSEs2_BzvsrvQy2GonQJnCUQRiGM2AsQfKpIWQb_Fy4x-iyrlwdNE86W52OI-sqXU_2gN8lHuBOXN7itnLVxUxYKwBl7Rqk7qKEwSP9JgQkyVgikBKWSk34XH4Sn_YbRnSbXz3ZdeAVOG9ahkMRSO_Mt6O9VpB_9xtojK2PzRFLhtMVyTBamCo7uW1wtTWnRWD4NrG3F9ePzlseSqvjx7NACjs4xaoqaNIO6=w1920-h868" alt="buttonpng" border="0" className="tw-w-[160px]" />
                        <h1 className="modal-title fs-5 tw-opacity-0" id="lupaPasswordModalLabel">X</h1>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                        <label htmlFor="validationCustom03" className="form-label">Email</label>
                        <input type="email" className="form-control tw-border-2 tw-rounded-none border-[#BABABA] tw-py-3 tw-px-4" id="emailLupaPassword" placeholder='Email' 
                        onBlur={email.blur} onFocus={email.focus} onChange={email.change} required/>
                        <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeEmail? "tw-hidden": "tw-block"}`}>Email yang dimasukkan harus valid dan tidak boleh kosong!</p>
                    </div>

                    <div className="tw-flex tw-w-full tw-flex-col tw-py-4">
                        {isValidasi ? <button type="submit" className="tw-bg-[#009900] tw-w-full tw-h-12 tw-rounded-full tw-text-white tw-font-bold hover:tw-bg-[#007100]" 
                        data-bs-target="#dialogBerhasilLupaSandi" data-bs-toggle="modal">Kirim Permintaan</button> : <button type="submit" 
                        className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-full tw-text-white tw-font-bold" disabled>Kirim Permintaan</button>}
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </form>
    )
}

export default LupaKataSandi;