import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

const EditProfile = () => {
    const fileInputRef = useRef(null);

    const [noticeNamaDepan, setNoticeNamaDepan] = useState(true)
    const [noticeNamaBelakang, setNoticeNamaBelakang] = useState(true)

    const [tempNamaDepan, setTempNamaDepan] = useState(false)
    const [tempNamaBelakang, setTempNamaBelakang] = useState(false)

    const [isValidasi, setIsValidasi] = useState(false)
    const [isValidasi4, setIsValidasi4] = useState(false)
    const [isValidasi5, setIsValidasi5] = useState(false)

    const [data, setData] = useState(null);
    const [files, setFiles] = useState()

    const validasiTrigger = () => {
      setIsValidasi4(true)
    }

    const handleFiles = () => {
      fileInputRef.current.click();
      const selectedFiles = fileInputRef.current.files || [];
      console.log(selectedFiles)
      if(selectedFiles && selectedFiles.length > 0){
        const fileName = selectedFiles[0].name;
        localStorage.setItem("gambar-profile-2", fileName)
        setFiles(fileName)
        setIsValidasi5(true)
      }else{
        setIsValidasi5(false)
      }
    }

    const handleSubmitEditProfile = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(`http://localhost:2002/pengguna`)
        const valueNamaDepanEdit = event.target.namaDepanEdit.value
        const valueNamaBelakangEdit = event.target.namaBelakangEdit.value
        const selectedFiles = fileInputRef.current.files || [];

        //KONDISI INPUTAN NAMA DEPAN DAN NAMA BELAKANG
        if(valueNamaDepanEdit.length !== 0 && valueNamaBelakangEdit.length !== 0){
          response.data.map(a => {
            axios.put(`http://localhost:2002/pengguna/${localStorage.getItem('id')}`, 
              { 
                id: localStorage.getItem('id').toString(),
                namaDepan: valueNamaDepanEdit,
                namaBelakang: valueNamaBelakangEdit,
                email: a.email,
                password: a.password,
                gambarProfile: a.gambarProfile,
                token: a.token
              });
            window.location.reload();
          })
        }else{
          response.data.map(a => {
            axios.put(`http://localhost:2002/pengguna/${localStorage.getItem('id')}`, 
              { 
                id: localStorage.getItem('id').toString(),
                namaDepan: a.namaDepan,
                namaBelakang: a.namaBelakang,
                email: a.email,
                password: a.password,
                gambarProfile: a.gambarProfile,
                token: a.token
              });
            window.location.reload();
          })
        }

        //KONDISI MEMILIH FILE
        if(selectedFiles && selectedFiles.length > 0){
          response.data.map(a => {
            axios.put(`http://localhost:2002/pengguna/${localStorage.getItem('id')}`, 
              { 
                id: localStorage.getItem('id').toString(),
                namaDepan: a.namaDepan,
                namaBelakang: a.namaBelakang,
                email: a.email,
                password: a.password,
                gambarProfile: localStorage.getItem('gambar-profile-2') ,
                token: a.token
              });
            window.location.reload();
          })
        }
        if(selectedFiles.length === 0){
          response.data.map(a => {
            axios.put(`http://localhost:2002/pengguna/${localStorage.getItem('id')}`, 
              { 
                id: localStorage.getItem('id').toString(),
                namaDepan: a.namaDepan,
                namaBelakang: a.namaBelakang,
                email: a.email,
                password: a.password,
                gambarProfile: a.gambarProfile,
                token: a.token
              });
            window.location.reload();
          })
        }
      } catch(e) {
        console.log(e)
      }
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

    useEffect(() => {
      if(tempNamaDepan && tempNamaBelakang){
        setIsValidasi(true)
      }else{
        setIsValidasi(false)
      }
    }, [tempNamaDepan, tempNamaBelakang]);


    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:2002/pengguna/${localStorage.getItem('id')}`)
          setData(response.data);
        }catch(e){
          console.log(e)
        }
      }
      fetchData()
  }, [])

    return(
        <form onSubmit={handleSubmitEditProfile}>
          <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content tw-rounded-[15px]">
                <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                  <button type="button" className="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                          <img src="exit.svg"/>
                        </div>
                    </button>
                    <div className="tw-flex tw-flex-col tw-justify-center">
                      <p className="tw-text-[#458200] tw-text-[40px] tw-font-bold">EDIT PROFILE</p>
                    </div>
                    <button type="button" className="tw-bg-white tw-rounded-lg tw-size-10" border="0">
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-bg-[#FF0000]" data-bs-dismiss="modal">
                          <p className="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <h1 className="modal-title fs-5 tw-opacity-0" id="editProfileModalLabel">X</h1>
                    <div className='tw-flex tw-size-[200px] tw-rounded-full tw-ms-5'>
                        <img src={isValidasi5 ? localStorage.getItem('tempGambarProfile') : data && data.gambarProfile} className='tw-w-[190px] tw-rounded-full tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-absolute'/>
                        <div className='tw-absolute tw-w-[173px] tw-flex tw-flex-row-revers tw-justify-between tw-pb-20 tw-mt-[155px]'>
                          <button className='tw-opacity-0' disabled>
                            <img className='tw-size-8 tw-opacity-0' src="edit.svg" disabled/>
                          </button>
                          <button onClick={handleFiles}>
                            <img id="az" className='tw-size-8' src="edit.svg"/>
                          </button>
                        </div>
                    </div>
                    <h1 className="modal-title fs-5 tw-opacity-0" id="editProfileModalLabel">X</h1>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between">
                    <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                        <label htmlFor="validationCustom03" className="form-label">Nama Depan</label>
                        <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="namaDepanEdit" placeholder={data && data.namaDepan} onBlur={namaDepan.blur} onFocus={namaDepan.focus} onChange={namaDepan.change} required/>
                        <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeNamaDepan? "tw-hidden": "tw-block"}`}>Nama Depan tidak boleh kosong!</p>
                    </div>

                    <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                        <label htmlFor="validationCustom03" className="form-label">Nama Belakang</label>
                        <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="namaBelakangEdit" placeholder={data && data.namaBelakang} onBlur={namaBelakang.blur} onFocus={namaBelakang.focus} onChange={namaBelakang.change} required/>
                        <p className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${noticeNamaBelakang? "tw-hidden": "tw-block"}`}>Nama Belakang tidak boleh kosong!</p>
                    </div>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                    {isValidasi ? <button type="submit" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold hover:tw-bg-[#] hover:tw-bg-[#009900]" onClick={() => validasiTrigger()}>Edit</button> : <button type="submit" className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold" disabled>Edit</button>}
                    <p className={`tw-text-[13px] tw-ms-2 tw-text-[#458200] tw-italic ${isValidasi4? "tw-block": "tw-hidden"}`}>Edit Profile Berhasil!</p>
                  </div>

                  <div className='tw-size-0 tw-opacity-0'>
                    <input className='tw-size-0 tw-opacity-0' type="file" id="fileInput" accept="image/*" ref={fileInputRef} src="fdf.svg" onChange={handleFiles}/>
                  </div>

                  {/* <div>
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </form>
    )
}

export default EditProfile;