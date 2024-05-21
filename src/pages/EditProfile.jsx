import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

const EditProfile = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [data, setData] = useState(null);
    const [isValidasi, setIsValidasi] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
        console.log(URL.createObjectURL(selectedFile))
    };

    const validasiTrigger = () => {
        setIsValidasi(true);
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
            validasiTrigger();
            window.location.reload()
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <form onSubmit={handleSubmitEditProfile}>
            <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content tw-rounded-[15px]">
                        <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">
                            <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                                <button type="button" className="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                                    <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                                        <img src="exit.svg" alt="exit" />
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
                                <div className='tw-flex tw-size-[200px] tw-rounded-full tw-bg-slate-600'>
                                    <img src={previewUrl || (data && data.profileUrl)} className='tw-size-[200px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-rounded-full tw-object-cover tw-object-center tw-mx-auto' alt="profile" />
                                </div>
                                <h1 className="modal-title fs-5 tw-opacity-0" id="editProfileModalLabel">X</h1>
                            </div>

                            <div className="tw-flex tw-w-full tw-flex-row tw-justify-between">
                                <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                                    <label htmlFor="namaDepanEdit" className="form-label">Nama Depan</label>
                                    <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="namaDepanEdit" placeholder={data && data.firstName} defaultValue={data && data.firstName} />
                                </div>

                                <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                                    <label htmlFor="namaBelakangEdit" className="form-label">Nama Belakang</label>
                                    <input type="text" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="namaBelakangEdit" placeholder={data && data.lastName} defaultValue={data && data.lastName} />
                                </div>
                            </div>

                            <div className="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                                <button type="submit" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold hover:tw-bg-[#009900]" onClick={() => validasiTrigger()}>Edit</button>
                                <p className={`tw-text-[13px] tw-ms-2 tw-text-[#458200] tw-italic ${isValidasi ? "tw-block" : "tw-hidden"}`}>Edit Profile Berhasil!</p>
                            </div>

                            <input type="file" ref={fileInputRef} onChange={handleFileChange} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EditProfile;
