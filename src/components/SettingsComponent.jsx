import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import HeaderComponent2 from '../components/HeaderComponent2';
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import FooterComponent from '../components/FooterComponent';

const ContentComponent = ({ activeTab }) => {
    //EDIT PROFILE
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [data, setData] = useState(null);

    //UBAH KATA SANDI
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

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
        console.log(URL.createObjectURL(selectedFile))
    };

    const handleFiles = () => {
      fileInputRef.current.click()
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:2024/users/${localStorage.getItem('id')}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const userData = response.data.data;
            setData(userData);
            if (userData.profileUrl.includes("/uploads/")) {
                userData.profileUrl = `http://localhost:2024${userData.profileUrl}`;
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmitEditProfile = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('firstName', event.target.namaDepanEdit.value);
        formData.append('lastName', event.target.namaBelakangEdit.value);
        if (file) {
            formData.append('profileUrl', file);
        }
        try {
          await axios.patch(`http://localhost:2024/users/settings/profile/${localStorage.getItem('id')}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          const myModal = new window.bootstrap.Modal(document.getElementById('dialogBerhasilProfile'));
          myModal.show();
          //window.scrollTo(0, 0);
          //window.location.reload()
          localStorage.setItem("settings", "profile")
          activeTab = 'profile'
        } catch (e) {
          console.log(e);
        }
    };

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
        localStorage.setItem("settings", "ubahSandi")
        const myModal = new window.bootstrap.Modal(document.getElementById('dialogBerhasilUbahSandi'));
        myModal.show();
        activeTab = 'ubahSandi'
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
        fetchData();
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    
    useEffect(() => {
      if(tempKataSandiLama && tempKataSandiBaru && tempKonfirmasiKataSandiBaru){
        setIsValidasi(true)
      }else{
        setIsValidasi(false)
      }
    }, [tempKataSandiLama, tempKataSandiBaru, tempKonfirmasiKataSandiBaru]);

  return (
    <>
      {activeTab === 'profile' && 
        <div className='tw-border-2 tw-border-[#BABABA] tw-rounded-lg tw-p-10 tw-pb-12 tw-shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]'>
          <p className='tw-text-[26px] tw-pb-5'>Profil Pengguna</p>
          <hr className='tw-border-2 tw-border-[#000000]'></hr>
          <form onSubmit={handleSubmitEditProfile} className='tw-pt-5'>
            <div className="tw-flex tw-w-full tw-flex-row tw-py-3 tw-gap-11">
              <div className='tw-flex tw-size-[200px] tw-rounded-full'>
                <img src={previewUrl || (data && data.profileUrl)} className='tw-size-[200px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-rounded-full tw-object-cover tw-object-center tw-mx-auto' alt="profile" />
              </div>
              <div className="tw-flex tw-flex-col tw-my-auto">
                <button type="button" onClick={handleFiles} className="tw-bg-[#009900] tw-p-3 tw-text-white tw-font-bold hover:tw-bg-[#007100]">Pilih Foto</button>
              </div>
            </div>
            <div className="tw-flex tw-w-full tw-gap-6 tw-pt-5">
              <div className="tw-flex tw-w-[30%] tw-flex-col tw-py-2">
                <label htmlFor="namaDepanEdit" className="form-label">Nama Depan</label>
                <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-py-3" id="namaDepanEdit" placeholder={data && data.firstName} defaultValue={data && data.firstName} />
              </div>
              <div className="tw-flex tw-w-[30%] tw-flex-col tw-py-2">
                <label htmlFor="namaBelakangEdit" className="form-label">Nama Belakang</label>
                <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-py-3" id="namaBelakangEdit" placeholder={data && data.lastName} defaultValue={data && data.lastName} />
              </div>
            </div>
            <div className="tw-flex tw-w-full tw-gap-6">
              <div className="tw-flex tw-w-[63%] tw-flex-col tw-py-2">
                <label htmlFor="emailEdit" className="form-label">Email</label>
                <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-placeholder-[#979797] tw-py-3" id="emailEdit" placeholder={data && data.email} disabled/>
              </div>
            </div>
            <button type="submit" className="tw-bg-[#009900] tw-p-3 tw-px-6 tw-text-white tw-font-bold hover:tw-bg-[#007100] tw-mt-4">Simpan Perubahan</button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className='tw-size-0' style={{display: 'none'}} />
          </form>
        </div>
      }
      {activeTab === 'ubahSandi' && 
        <div className='tw-border-2 tw-border-[#BABABA] tw-rounded-lg tw-p-10 tw-pb-12 tw-shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]'>
          <p className='tw-text-[26px] tw-pb-5'>Ubah Kata Sandi</p>
          <hr className='tw-border-2 tw-border-[#000000]'></hr>
          <form onSubmit={handleSubmitPassword} className='tw-pt-5 tw-gap'>
            <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
              <label htmlFor="validationCustom03" className="form-label">Kata Sandi Lama</label>
              <div className="tw-flex tw-w-full tw-flex-row">
                <input type={`${getToggle1? "text":"password"}`} className="form-control tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3" id="passwordLama" placeholder='Kata Sandi Lama' onBlur={kataSandiLama.blur} onFocus={kataSandiLama.focus} onChange={kataSandiLama.change} autoComplete="password-lama" required/>
                <button onClick={()=>buttonToggle1()} type="button" className="tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                  <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                    {getToggle1? <BsEyeSlash style={{fontSize: "35px"}}/> : <BsEye style={{fontSize: "35px"}} />}
                  </div>
                </button>
              </div>
              <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandiLama? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8 dan tidak boleh kosong!</p>
              <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandiLama2? "tw-hidden": "tw-block"}`}>Password harus sama dengan yang lama!</p>
            </div>

            <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
              <label htmlFor="validationCustom03" className="form-label">Kata Sandi Baru</label>
              <div className="tw-flex tw-w-full tw-flex-row">
                <input type={`${getToggle2? "text":"password"}`} className="form-control tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3" id="passwordBaru" placeholder='Kata Sandi Baru' onBlur={kataSandiBaru.blur} onFocus={kataSandiBaru.focus} onChange={kataSandiBaru.change} autoComplete="password-baru" required/>
                <button onClick={()=>buttonToggle2()} type="button" className="tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                  <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                    {getToggle2? <BsEyeSlash style={{fontSize: "35px"}}/> : <BsEye style={{fontSize: "35px"}} />}
                  </div>
                </button>
              </div>
              <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKataSandiBaru? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8 dan tidak boleh kosong!</p>
            </div>

            <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
              <label htmlFor="validationCustom03" className="form-label">Konfirmasi Kata Sandi Baru</label>
              <div className="tw-flex tw-w-full tw-flex-row">
                <input type={`${getToggle3? "text":"password"}`} className="form-control tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3" id="konfirmasiPasswordBaru" placeholder='Konfirmasi Kata Sandi Baru' onBlur={konfirmasiKataSandiBaru.blur} onFocus={konfirmasiKataSandiBaru.focus} onChange={konfirmasiKataSandiBaru.change} autoComplete="konfrimasi-password-baru" required/>
                <button onClick={()=>buttonToggle3()} type="button" className="tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]">
                  <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                    {getToggle3? <BsEyeSlash style={{fontSize: "35px"}}/> : <BsEye style={{fontSize: "35px"}} />}
                  </div>
                </button>
              </div>
              <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKonfirmasiKataSandiBaru? "tw-hidden": "tw-block"}`}>Password anda harus lebih dari 8 dan tidak boleh kosong!</p>
              <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeKonfirmasiKataSandiBaru2? "tw-hidden": "tw-block"}`}>Password yang dimasukkan tidak cocok dengan yang baru!</p>
            </div>

            <div>
              {isValidasi ? 
              <button type="submit" className="tw-bg-[#009900] tw-p-3 tw-px-6 tw-text-white tw-font-bold hover:tw-bg-[#009900] tw-mt-4">Simpan Perubahan</button> 
                :
              <button className="tw-bg-[#8a8a8a] tw-p-3 tw-px-6 tw-text-white tw-font-bold hover:tw-bg-[#009900] tw-mt-4" disabled>Simpan Perubahan</button> 
              }
              <p className={`tw-text-[13px] tw-ms-2 tw-text-[#458200] tw-italic ${isValidasi2? "tw-block": "tw-hidden"}`}>Menggubah Password Berhasil!</p>
            </div>
          </form>
        </div>
      }
    </>
  );
};

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('settings'));

  useEffect(() => {
    if (activeTab === 'profile') {
      localStorage.setItem('settings', 'profile')
    } else if (activeTab === 'ubahSandi') {
      localStorage.setItem('settings', 'ubahSandi')
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tw-flex tw-pt-48 tw-pb-20 tw-px-36 tw-font-poppins tw-mx-auto tw-bg-[#FFF6D9]">
        <ul className="tw-flex tw-flex-col tw-w-[25%]">
          <li className="tw-text-[35px] tw-pb-6">Pengaturan</li>
          <li className={`tw-text-[21px] tw-flex tw-gap-3 tw-ps-10 tw-py-4 hover:tw-bg-[#C2EF90] ${activeTab === 'profile' ? 'tw-bg-[#C2EF90]' : ''}`} onClick={() => handleTabClick('profile')}><FiUser style={{fontSize : "38px"}}/><button className='tw-text-start' >Profil</button></li>
          <li className={`tw-text-[21px] tw-flex tw-gap-3 tw-ps-10 tw-py-4 hover:tw-bg-[#C2EF90] ${activeTab === 'ubahSandi' ? 'tw-bg-[#C2EF90]' : ''}`} onClick={() => handleTabClick('ubahSandi')}><FiLock style={{fontSize : "38px"}}/><button className='tw-text-start'>Ubah Kata Sandi</button></li>
        </ul>
        <div className='tw-w-[75%] tw-mt-7'>
          <ContentComponent activeTab={activeTab} />
        </div>
      </div>
    </>
  );
}

export default SettingsComponent