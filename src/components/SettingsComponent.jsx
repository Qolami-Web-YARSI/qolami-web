import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HeaderComponent2 from "../components/HeaderComponent2";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import FooterComponent from "../components/FooterComponent";
import UbahFotoProfil from "../pages/UbahFotoProfil";

// const ContentComponent = ({ activeTab }) => {
//   //EDIT PROFILE
//   const fileInputRef = useRef(null);
//   const [file, setFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [data, setData] = useState(null);

//   //UBAH KATA SANDI
//   const [getToggle1, setToggle1] = useState(false);
//   const [getToggle2, setToggle2] = useState(false);
//   const [getToggle3, setToggle3] = useState(false);

//   const [noticeKataSandiLama, setNoticeKataSandiLama] = useState(true);
//   const [noticeKataSandiLama2, setNoticeKataSandiLama2] = useState(true);
//   const [tempKataSandiLama, setTempKataSandiLama] = useState(false);

//   const [noticeKataSandiBaru, setNoticeKataSandiBaru] = useState(true);
//   const [tempKataSandiBaru, setTempKataSandiBaru] = useState(false);

//   const [noticeKonfirmasiKataSandiBaru, setNoticeKonfirmasiKataSandiBaru] =
//     useState(true);
//   const [noticeKonfirmasiKataSandiBaru2, setNoticeKonfirmasiKataSandiBaru2] =
//     useState(true);
//   const [tempKonfirmasiKataSandiBaru, setKonfirmasiTempKataSandiBaru] =
//     useState(false);

//   const [isValidasi, setIsValidasi] = useState(false);
//   const [isValidasi2, setIsValidasi2] = useState(false);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       if (previewUrl) {
//         URL.revokeObjectURL(previewUrl);
//       }
//       const newPreviewUrl = URL.createObjectURL(selectedFile);
//       setFile(selectedFile);
//       setPreviewUrl(newPreviewUrl);
//       console.log(newPreviewUrl);
//     } else {
//       setFile(null);
//       setPreviewUrl(null);
//     }
//   };

//   const handleNameInput = (event) => {
//     const value = event.target.value;
//     const filteredValue = value.replace(/[^A-Za-z]/g, "");
//     event.target.value = filteredValue;
//   };

//   const handleFiles = () => {
//     fileInputRef.current.click();
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:2024/users/${localStorage.getItem("id")}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       const userData = response.data.data;
//       setData(userData);
//       if (userData.profileUrl.includes("/uploads/")) {
//         userData.profileUrl = `http://localhost:2024${userData.profileUrl}`;
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleSubmitEditProfile = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("firstName", event.target.namaDepanEdit.value);
//     formData.append("lastName", event.target.namaBelakangEdit.value);
//     if (file) {
//       formData.append("profileUrl", file);
//     }
//     try {
//       await axios.patch(
//         `http://localhost:2024/users/settings/profile/${localStorage.getItem(
//           "id"
//         )}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       const myModal = new window.bootstrap.Modal(
//         document.getElementById("dialogBerhasilProfile")
//       );
//       myModal.show();
//       localStorage.setItem("settings", "profile");
//       activeTab = "profile";
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const buttonToggle1 = () => {
//     setToggle1(!getToggle1);
//   };

//   const buttonToggle2 = () => {
//     setToggle2(!getToggle2);
//   };

//   const buttonToggle3 = () => {
//     setToggle3(!getToggle3);
//   };

//   const handleSubmitPassword = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:2024/users/settings/change-password`,
//         {
//           id: localStorage.getItem("id"),
//           oldPassword: event.target.passwordLama.value,
//           newPassword: event.target.passwordBaru.value,
//           confirmNewPassword: event.target.konfirmasiPasswordBaru.value,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       console.log(response.data);
//       setNoticeKataSandiLama2(true);
//       setNoticeKonfirmasiKataSandiBaru2(true);
//       setIsValidasi2(true);
//       localStorage.setItem("settings", "ubahSandi");
//       const myModal = new window.bootstrap.Modal(
//         document.getElementById("dialogBerhasilUbahSandi")
//       );
//       myModal.show();
//       activeTab = "ubahSandi";
//     } catch (e) {
//       console.log(e.response.data);
//       if (e.response.data.includes("Invalid old password.")) {
//         setNoticeKataSandiLama2(false);
//       } else {
//         setNoticeKataSandiLama2(true);
//       }

//       if (
//         event.target.passwordBaru.value ===
//         event.target.konfirmasiPasswordBaru.value
//       ) {
//         setNoticeKonfirmasiKataSandiBaru2(true);
//       } else {
//         setNoticeKonfirmasiKataSandiBaru2(false);
//       }
//     }
//   };

//   const kataSandiLama = {
//     change: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKataSandiLama(false);
//         setTempKataSandiLama(false);
//       } else {
//         setNoticeKataSandiLama(true);
//         setTempKataSandiLama(true);
//       }
//     },
//     focus: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKataSandiLama(false);
//       }
//     },
//     blur: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKataSandiLama(true);
//       }
//     },
//   };

//   const kataSandiBaru = {
//     change: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKataSandiBaru(false);
//         setTempKataSandiBaru(false);
//       } else {
//         setNoticeKataSandiBaru(true);
//         setTempKataSandiBaru(true);
//       }
//     },
//     focus: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKataSandiBaru(false);
//       }
//     },
//     blur: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKataSandiBaru(true);
//       }
//     },
//   };

//   const konfirmasiKataSandiBaru = {
//     change: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKonfirmasiKataSandiBaru(false);
//         setKonfirmasiTempKataSandiBaru(false);
//       } else {
//         setNoticeKonfirmasiKataSandiBaru(true);
//         setKonfirmasiTempKataSandiBaru(true);
//       }
//     },
//     focus: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKonfirmasiKataSandiBaru(false);
//       }
//     },
//     blur: (event) => {
//       if (event.target.value.length < 8) {
//         setNoticeKonfirmasiKataSandiBaru(true);
//       }
//     },
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     if (tempKataSandiLama && tempKataSandiBaru && tempKonfirmasiKataSandiBaru) {
//       setIsValidasi(true);
//     } else {
//       setIsValidasi(false);
//     }
//   }, [tempKataSandiLama, tempKataSandiBaru, tempKonfirmasiKataSandiBaru]);

//   return (
//     <>
//       {activeTab === "profile" && (
//         <div className="tw-border-2 tw-border-[#BABABA] tw-rounded-lg tw-p-10 tw-pb-12 tw-shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)] tw-bg-[#FFF6D9]">
//           <p className="tw-text-[20px] xs:tw-text-[26px] tw-pb-5">
//             Profil Pengguna
//           </p>
//           <hr className="tw-border-2 tw-border-[#000000]"></hr>
//           <form onSubmit={handleSubmitEditProfile} className="tw-pt-5">
//             <div className="tw-flex tw-w-full tw-flex-col sm:tw-flex-row tw-py-3 tw-gap-11">
//               <div className="tw-flex tw-size-[150px] xs:tw-size-[200px] tw-rounded-full tw-mx-auto sm:tw-mx-0">
//                 <img
//                   src={previewUrl || (data && data.profileUrl)}
//                   className="tw-size-[150px] xs:tw-size-[200px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-rounded-full
//                 tw-object-cover tw-object-center tw-mx-auto"
//                   alt="profile"
//                 />
//               </div>
//               <div className="tw-flex tw-flex-col sm:tw-my-auto tw-mx-auto sm:tw-mx-0">
//                 <button
//                   type="button"
//                   onClick={handleFiles}
//                   data-bs-toggle="modal"
//                   data-bs-target="#ubahFotoProfilModal"
//                   className="tw-bg-[#009900] tw-p-3 tw-text-white tw-text-[12px] xs:tw-text-base tw-w-28 xs:tw-w-36 sm:tw-w-auto tw-font-bold hover:tw-bg-[#007100]"
//                 >
//                   Pilih Foto
//                 </button>
//                 <UbahFotoProfil />
//               </div>
//             </div>
//             <div className="tw-flex tw-flex-col xs:tw-flex-row tw-w-full xs:tw-gap-6 tw-pt-5">
//               <div className="tw-flex tw-w-[100%] xs:tw-w-[50%] md:tw-w-[30%] tw-flex-col tw-py-2">
//                 <label
//                   htmlFor="namaDepanEdit"
//                   className="form-label tw-text-[15px] sm:tw-text-base"
//                 >
//                   Nama Depan
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-py-3"
//                   id="namaDepanEdit"
//                   placeholder={data && data.firstName}
//                   defaultValue={data && data.firstName}
//                   onInput={handleNameInput}
//                 />
//               </div>
//               <div className="tw-flex tw-w-[100%] xs:tw-w-[50%] md:tw-w-[30%] tw-flex-col tw-py-2">
//                 <label
//                   htmlFor="namaBelakangEdit"
//                   className="form-label tw-text-[15px] sm:tw-text-base"
//                 >
//                   Nama Belakang
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-py-3"
//                   id="namaBelakangEdit"
//                   placeholder={data && data.lastName}
//                   defaultValue={data && data.lastName}
//                   onInput={handleNameInput}
//                 />
//               </div>
//             </div>
//             <div className="tw-flex tw-w-full tw-gap-6">
//               <div className="tw-flex tw-w-[100%] md:tw-w-[63%] tw-flex-col tw-py-2">
//                 <label htmlFor="emailEdit" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-placeholder-[#979797] tw-py-3"
//                   id="emailEdit"
//                   placeholder={data && data.email}
//                   disabled
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="tw-bg-[#009900] tw-p-3 tw-w-[100%] xs:tw-w-auto tw-px-6 tw-text-[12px] xs:tw-text-base tw-text-white tw-font-bold hover:tw-bg-[#007100] tw-mt-6 xs:tw-mt-4"
//             >
//               Simpan Perubahan
//             </button>
//             <input
//               type="file"
//               ref={fileInputRef}
//               accept="image/*"
//               onChange={handleFileChange}
//               className="tw-size-0"
//               style={{ display: "none" }}
//             />
//           </form>
//         </div>
//       )}
//       {activeTab === "ubahSandi" && (
//         <div className="tw-border-2 tw-border-[#BABABA] tw-rounded-lg tw-p-10 tw-pb-12 tw-shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)] tw-bg-[#FFF6D9]">
//           <p className="tw-text-[20px] xs:tw-text-[26px] tw-pb-5">
//             Ubah Kata Sandi
//           </p>
//           <hr className="tw-border-2 tw-border-[#000000]"></hr>
//           <form onSubmit={handleSubmitPassword} className="tw-pt-5 tw-gap">
//             <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
//               <label
//                 htmlFor="validationCustom03"
//                 className="form-label tw-text-[15px] sm:tw-text-base"
//               >
//                 Kata Sandi Lama
//               </label>
//               <div className="tw-flex tw-w-full tw-flex-row">
//                 <input
//                   type={`${getToggle1 ? "text" : "password"}`}
//                   className="form-control tw-w-[100%] md:tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg
//                 tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3"
//                   id="passwordLama"
//                   placeholder="Masukkan kata sandi lama"
//                   onBlur={kataSandiLama.blur}
//                   onFocus={kataSandiLama.focus}
//                   onChange={kataSandiLama.change}
//                   autoComplete="password-lama"
//                   required
//                 />
//                 <button
//                   onClick={() => buttonToggle1()}
//                   type="button"
//                   className="tw-w-[13%] xs:tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]"
//                 >
//                   <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
//                     {getToggle1 ? (
//                       <BsEyeSlash style={{ fontSize: "35px" }} />
//                     ) : (
//                       <BsEye style={{ fontSize: "35px" }} />
//                     )}
//                   </div>
//                 </button>
//               </div>
//               <p
//                 className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
//                   noticeKataSandiLama ? "tw-hidden" : "tw-block"
//                 }`}
//               >
//                 Password harus lebih dari 8 karakter dan tidak boleh kosong!
//               </p>
//               <p
//                 className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
//                   noticeKataSandiLama2 ? "tw-hidden" : "tw-block"
//                 }`}
//               >
//                 Password harus sama dengan yang lama!
//               </p>
//             </div>

//             <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
//               <label
//                 htmlFor="validationCustom03"
//                 className="form-label tw-text-[15px] sm:tw-text-base"
//               >
//                 Kata Sandi Baru
//               </label>
//               <div className="tw-flex tw-w-full tw-flex-row">
//                 <input
//                   type={`${getToggle2 ? "text" : "password"}`}
//                   className="form-control tw-w-[100%] md:tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg
//                 tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3"
//                   id="passwordBaru"
//                   placeholder="Masukkan kata sandi baru"
//                   onBlur={kataSandiBaru.blur}
//                   onFocus={kataSandiBaru.focus}
//                   onChange={kataSandiBaru.change}
//                   autoComplete="password-baru"
//                   required
//                 />
//                 <button
//                   onClick={() => buttonToggle2()}
//                   type="button"
//                   className="tw-w-[13%] xs:tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]"
//                 >
//                   <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
//                     {getToggle2 ? (
//                       <BsEyeSlash style={{ fontSize: "35px" }} />
//                     ) : (
//                       <BsEye style={{ fontSize: "35px" }} />
//                     )}
//                   </div>
//                 </button>
//               </div>
//               <p
//                 className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
//                   noticeKataSandiBaru ? "tw-hidden" : "tw-block"
//                 }`}
//               >
//                 Password harus lebih dari 8 karakter dan tidak boleh kosong!
//               </p>
//             </div>

//             <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
//               <label
//                 htmlFor="validationCustom03"
//                 className="form-label tw-text-[15px] sm:tw-text-base"
//               >
//                 Konfirmasi Kata Sandi Baru
//               </label>
//               <div className="tw-flex tw-w-full tw-flex-row">
//                 <input
//                   type={`${getToggle3 ? "text" : "password"}`}
//                   className="form-control tw-w-[100%] md:tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg
//                 tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3"
//                   id="konfirmasiPasswordBaru"
//                   placeholder="Konfirmasi kata sandi baru"
//                   onBlur={konfirmasiKataSandiBaru.blur}
//                   onFocus={konfirmasiKataSandiBaru.focus}
//                   onChange={konfirmasiKataSandiBaru.change}
//                   autoComplete="konfrimasi-password-baru"
//                   required
//                 />
//                 <button
//                   onClick={() => buttonToggle3()}
//                   type="button"
//                   className="tw-w-[13%] xs:tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg
//                 tw-rounded-s-none tw-border-[#BABABA]"
//                 >
//                   <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
//                     {getToggle3 ? (
//                       <BsEyeSlash style={{ fontSize: "35px" }} />
//                     ) : (
//                       <BsEye style={{ fontSize: "35px" }} />
//                     )}
//                   </div>
//                 </button>
//               </div>
//               <p
//                 className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
//                   noticeKonfirmasiKataSandiBaru ? "tw-hidden" : "tw-block"
//                 }`}
//               >
//                 Password harus lebih dari 8 karakter dan tidak boleh kosong!
//               </p>
//               <p
//                 className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
//                   noticeKonfirmasiKataSandiBaru2 ? "tw-hidden" : "tw-block"
//                 }`}
//               >
//                 Password yang dimasukkan tidak cocok dengan yang baru!
//               </p>
//             </div>

//             <div>
//               {isValidasi ? (
//                 <button
//                   type="submit"
//                   className="tw-bg-[#009900] tw-p-3 tw-w-[100%] xs:tw-w-auto tw-px-6 tw-text-[12px] xs:tw-text-base tw-text-white tw-font-bold hover:tw-bg-[#007100] tw-mt-6 xs:tw-mt-4"
//                 >
//                   Simpan Perubahan
//                 </button>
//               ) : (
//                 <button
//                   className="tw-bg-[#8a8a8a] tw-p-3 tw-w-[100%] xs:tw-w-auto tw-px-6 tw-text-[12px] xs:tw-text-base tw-text-white tw-font-bold tw-mt-6 xs:tw-mt-4"
//                   disabled
//                 >
//                   Simpan Perubahan
//                 </button>
//               )}
//               <p
//                 className={`tw-text-[13px] tw-ms-2 tw-text-[#458200] tw-italic ${
//                   isValidasi2 ? "tw-block" : "tw-hidden"
//                 }`}
//               >
//                 Mengubah password berhasil!
//               </p>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("settings"));
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [data, setData] = useState(null);
  const [deletePhoto, setDeletePhoto] = useState(false);

  //UBAH KATA SANDI
  const [getToggle1, setToggle1] = useState(false);
  const [getToggle2, setToggle2] = useState(false);
  const [getToggle3, setToggle3] = useState(false);

  const [noticeKataSandiLama, setNoticeKataSandiLama] = useState(true);
  const [noticeKataSandiLama2, setNoticeKataSandiLama2] = useState(true);
  const [tempKataSandiLama, setTempKataSandiLama] = useState(false);

  const [noticeKataSandiBaru, setNoticeKataSandiBaru] = useState(true);
  const [tempKataSandiBaru, setTempKataSandiBaru] = useState(false);

  const [noticeKonfirmasiKataSandiBaru, setNoticeKonfirmasiKataSandiBaru] =
    useState(true);
  const [noticeKonfirmasiKataSandiBaru2, setNoticeKonfirmasiKataSandiBaru2] =
    useState(true);
  const [tempKonfirmasiKataSandiBaru, setKonfirmasiTempKataSandiBaru] =
    useState(false);

  const [isValidasi, setIsValidasi] = useState(false);
  const [isValidasi2, setIsValidasi2] = useState(false);

  const klikHapusFoto = () => {
    setDeletePhoto(true);
    console.log("Hapus Foto Berhasil");
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("Masukkin Foto Berhasil");
      setDeletePhoto(false);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setDeletePhoto(false);
      }
      const newPreviewUrl = URL.createObjectURL(selectedFile);
      setFile(selectedFile);
      setPreviewUrl(newPreviewUrl);
      console.log(newPreviewUrl);
    } else {
      setFile(null);
      setPreviewUrl(null);
    }
  };

  const handleNameInput = (event) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^A-Za-z]/g, "");
    event.target.value = filteredValue;
  };

  const handleFiles = () => {
    fileInputRef.current.click();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2024/users/${localStorage.getItem("id")}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
    formData.append("firstName", event.target.namaDepanEdit.value);
    formData.append("lastName", event.target.namaBelakangEdit.value);
    if (file && deletePhoto === false) {
      formData.append("profileUrl", file);
    } else {
      formData.append(
        "profileUrl",
        "https://tl.vhv.rs/dpng/s/541-5413387_log-in-sign-up-micro-environment-diagram-hd.png"
      );
    }
    try {
      await axios.patch(
        `http://localhost:2024/users/settings/profile/${localStorage.getItem(
          "id"
        )}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const myModal = new window.bootstrap.Modal(
        document.getElementById("dialogBerhasilProfile")
      );
      myModal.show();
      localStorage.setItem("settings", "profile");
    } catch (e) {
      console.log(e);
    }
  };

  const buttonToggle1 = () => {
    setToggle1(!getToggle1);
  };

  const buttonToggle2 = () => {
    setToggle2(!getToggle2);
  };

  const buttonToggle3 = () => {
    setToggle3(!getToggle3);
  };

  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:2024/users/settings/change-password`,
        {
          id: localStorage.getItem("id"),
          oldPassword: event.target.passwordLama.value,
          newPassword: event.target.passwordBaru.value,
          confirmNewPassword: event.target.konfirmasiPasswordBaru.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setNoticeKataSandiLama2(true);
      setNoticeKonfirmasiKataSandiBaru2(true);
      setIsValidasi2(true);
      localStorage.setItem("settings", "ubahSandi");
      const myModal = new window.bootstrap.Modal(
        document.getElementById("dialogBerhasilUbahSandi")
      );
      myModal.show();
    } catch (e) {
      console.log(e);
      if (e.response.data.includes("Invalid old password.")) {
        setNoticeKataSandiLama2(false);
      } else {
        setNoticeKataSandiLama2(true);
      }

      if (
        event.target.passwordBaru.value ===
        event.target.konfirmasiPasswordBaru.value
      ) {
        setNoticeKonfirmasiKataSandiBaru2(true);
      } else {
        setNoticeKonfirmasiKataSandiBaru2(false);
      }
    }
  };

  const kataSandiLama = {
    change: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandiLama(false);
        setTempKataSandiLama(false);
      } else {
        setNoticeKataSandiLama(true);
        setTempKataSandiLama(true);
      }
    },
    focus: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandiLama(false);
      }
    },
    blur: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandiLama(true);
      }
    },
  };

  const kataSandiBaru = {
    change: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandiBaru(false);
        setTempKataSandiBaru(false);
      } else {
        setNoticeKataSandiBaru(true);
        setTempKataSandiBaru(true);
      }
    },
    focus: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandiBaru(false);
      }
    },
    blur: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandiBaru(true);
      }
    },
  };

  const konfirmasiKataSandiBaru = {
    change: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKonfirmasiKataSandiBaru(false);
        setKonfirmasiTempKataSandiBaru(false);
      } else {
        setNoticeKonfirmasiKataSandiBaru(true);
        setKonfirmasiTempKataSandiBaru(true);
      }
    },
    focus: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKonfirmasiKataSandiBaru(false);
      }
    },
    blur: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKonfirmasiKataSandiBaru(true);
      }
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (tempKataSandiLama && tempKataSandiBaru && tempKonfirmasiKataSandiBaru) {
      setIsValidasi(true);
    } else {
      setIsValidasi(false);
    }
  }, [tempKataSandiLama, tempKataSandiBaru, tempKonfirmasiKataSandiBaru]);

  useEffect(() => {
    if (activeTab === "profile") {
      localStorage.setItem("settings", "profile");
    } else if (activeTab === "ubahSandi") {
      localStorage.setItem("settings", "ubahSandi");
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-pt-36 md:tw-pt-48 tw-pb-20 tw-px-8 sm:tw-px-12 xl:tw-px-36 tw-font-poppins tw-mx-auto tw-bg-[#FFF6D9]">
        <li className="tw-block md:tw-hidden tw-text-[25px] lg:tw-text-[35px] tw-pb-6 tw-mx-auto">
          Pengaturan
        </li>
        <ul className="tw-flex tw-flex-row tw-z-0 md:tw-flex-col tw-w-[75%] md:tw-w-[25%] tw-border-2 tw-border-b-0 md:tw-border-0 tw-border-[#BABABA] tw-mx-auto tw-rounded-t-[25px] tw-shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)] md:tw-shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]">
          <li className=" tw-hidden md:tw-block tw-text-[25px] lg:tw-text-[35px] tw-pb-6">
            Pengaturan
          </li>
          <li
            className={`tw-flex tw-flex-col sm:tw-flex-row tw-text-[11px] xs:tw-text-[14px] lg:tw-text-[21px] tw-w-1/2 md:tw-w-auto tw-gap-3 sm:tw-ps-7 lg:tw-ps-10 tw-py-4 hover:tw-bg-[#C2EF90] tw-rounded-tl-[25px] md:tw-rounded-tl-[0px] ${
              activeTab === "profile" ? "tw-bg-[#C2EF90]" : ""
            }`}
            onClick={() => handleTabClick("profile")}
          >
            <FiUser className="tw-text-[30px] lg:tw-text-[38px] tw-mx-auto sm:tw-mx-0 tw-text-center md:tw-text-start" />
            <button className="tw-mx-auto sm:tw-mx-0 tw-text-center md:tw-text-start">
              Profil
            </button>
          </li>
          <li
            className={`tw-flex  tw-flex-col sm:tw-flex-row tw-text-[11px] xs:tw-text-[14px] lg:tw-text-[21px] tw-w-1/2 md:tw-w-auto tw-gap-3 sm:tw-ps-7 lg:tw-ps-10 tw-py-4 hover:tw-bg-[#C2EF90] tw-rounded-tr-[25px] md:tw-rounded-tr-[0px] ${
              activeTab === "ubahSandi" ? "tw-bg-[#C2EF90]" : ""
            }`}
            onClick={() => handleTabClick("ubahSandi")}
          >
            <FiLock className="tw-text-[30px] lg:tw-text-[38px] tw-mx-auto sm:tw-mx-0 tw-text-center md:tw-text-start" />
            <button className="tw-mx-auto sm:tw-mx-0 tw-text-center md:tw-text-start">
              Ubah Kata Sandi
            </button>
          </li>
        </ul>
        <div className="tw-w-[100%] md:tw-w-[75%] tw-mt-0 md:tw-mt-7 tw-z-10">
          {activeTab === "profile" && (
            <div className="tw-border-2 tw-border-[#BABABA] tw-rounded-lg tw-p-10 tw-pb-12 tw-shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)] tw-bg-[#FFF6D9]">
              <p className="tw-text-[20px] xs:tw-text-[26px] tw-pb-5">
                Profil Pengguna
              </p>
              <hr className="tw-border-2 tw-border-[#000000]"></hr>
              <form onSubmit={handleSubmitEditProfile} className="tw-pt-5">
                <div className="tw-flex tw-w-full tw-flex-col sm:tw-flex-row tw-py-3 tw-gap-11">
                  <div className="tw-flex tw-size-[150px] xs:tw-size-[200px] tw-rounded-full tw-mx-auto sm:tw-mx-0">
                    {deletePhoto === true ? (
                      <img
                        src="https://tl.vhv.rs/dpng/s/541-5413387_log-in-sign-up-micro-environment-diagram-hd.png"
                        alt="no profile"
                        className="tw-rounded-full"
                      />
                    ) : (
                      <img
                        src={previewUrl || (data && data.profileUrl)}
                        className="tw-size-[150px] xs:tw-size-[200px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-rounded-full 
                tw-object-cover tw-object-center tw-mx-auto"
                        alt="profile"
                      />
                    )}
                  </div>
                  <div className="tw-flex tw-flex-col sm:tw-my-auto tw-mx-auto sm:tw-mx-0">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#ubahFotoProfilModal"
                      className="tw-bg-[#009900] tw-p-3 tw-text-white tw-text-[12px] xs:tw-text-base tw-w-28 xs:tw-w-36 sm:tw-w-auto tw-font-bold hover:tw-bg-[#007100]"
                    >
                      Pilih Foto
                    </button>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col xs:tw-flex-row tw-w-full xs:tw-gap-6 tw-pt-5">
                  <div className="tw-flex tw-w-[100%] xs:tw-w-[50%] md:tw-w-[30%] tw-flex-col tw-py-2">
                    <label
                      htmlFor="namaDepanEdit"
                      className="form-label tw-text-[15px] sm:tw-text-base"
                    >
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-py-3"
                      id="namaDepanEdit"
                      placeholder={data && data.firstName}
                      defaultValue={data && data.firstName}
                      onInput={handleNameInput}
                    />
                  </div>
                  <div className="tw-flex tw-w-[100%] xs:tw-w-[50%] md:tw-w-[30%] tw-flex-col tw-py-2">
                    <label
                      htmlFor="namaBelakangEdit"
                      className="form-label tw-text-[15px] sm:tw-text-base"
                    >
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-py-3"
                      id="namaBelakangEdit"
                      placeholder={data && data.lastName}
                      defaultValue={data && data.lastName}
                      onInput={handleNameInput}
                    />
                  </div>
                </div>
                <div className="tw-flex tw-w-full tw-gap-6">
                  <div className="tw-flex tw-w-[100%] md:tw-w-[63%] tw-flex-col tw-py-2">
                    <label htmlFor="emailEdit" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA] tw-placeholder-[#979797] tw-py-3"
                      id="emailEdit"
                      placeholder={data && data.email}
                      disabled
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="tw-bg-[#009900] tw-p-3 tw-w-[100%] xs:tw-w-auto tw-px-6 tw-text-[12px] xs:tw-text-base tw-text-white tw-font-bold hover:tw-bg-[#007100] tw-mt-6 xs:tw-mt-4"
                >
                  Simpan Perubahan
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileChange}
                  className="tw-size-0"
                  style={{ display: "none" }}
                />
              </form>
            </div>
          )}
          {activeTab === "ubahSandi" && (
            <div className="tw-border-2 tw-border-[#BABABA] tw-rounded-lg tw-p-10 tw-pb-12 tw-shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)] tw-bg-[#FFF6D9]">
              <p className="tw-text-[20px] xs:tw-text-[26px] tw-pb-5">
                Ubah Kata Sandi
              </p>
              <hr className="tw-border-2 tw-border-[#000000]"></hr>
              <form onSubmit={handleSubmitPassword} className="tw-pt-5 tw-gap">
                <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label tw-text-[15px] sm:tw-text-base"
                  >
                    Kata Sandi Lama
                  </label>
                  <div className="tw-flex tw-w-full tw-flex-row">
                    <input
                      type={`${getToggle1 ? "text" : "password"}`}
                      className="form-control tw-w-[100%] md:tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg 
                tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3"
                      id="passwordLama"
                      placeholder="Masukkan kata sandi lama"
                      onBlur={kataSandiLama.blur}
                      onFocus={kataSandiLama.focus}
                      onChange={kataSandiLama.change}
                      autoComplete="password-lama"
                      required
                    />
                    <button
                      onClick={() => buttonToggle1()}
                      type="button"
                      className="tw-w-[13%] xs:tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]"
                    >
                      <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                        {getToggle1 ? (
                          <BsEyeSlash style={{ fontSize: "35px" }} />
                        ) : (
                          <BsEye style={{ fontSize: "35px" }} />
                        )}
                      </div>
                    </button>
                  </div>
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                      noticeKataSandiLama ? "tw-hidden" : "tw-block"
                    }`}
                  >
                    Password harus lebih dari 8 karakter dan tidak boleh kosong!
                  </p>
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                      noticeKataSandiLama2 ? "tw-hidden" : "tw-block"
                    }`}
                  >
                    Password harus sama dengan yang lama!
                  </p>
                </div>

                <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label tw-text-[15px] sm:tw-text-base"
                  >
                    Kata Sandi Baru
                  </label>
                  <div className="tw-flex tw-w-full tw-flex-row">
                    <input
                      type={`${getToggle2 ? "text" : "password"}`}
                      className="form-control tw-w-[100%] md:tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg 
                tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3"
                      id="passwordBaru"
                      placeholder="Masukkan kata sandi baru"
                      onBlur={kataSandiBaru.blur}
                      onFocus={kataSandiBaru.focus}
                      onChange={kataSandiBaru.change}
                      autoComplete="password-baru"
                      required
                    />
                    <button
                      onClick={() => buttonToggle2()}
                      type="button"
                      className="tw-w-[13%] xs:tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg tw-rounded-s-none tw-border-[#BABABA]"
                    >
                      <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                        {getToggle2 ? (
                          <BsEyeSlash style={{ fontSize: "35px" }} />
                        ) : (
                          <BsEye style={{ fontSize: "35px" }} />
                        )}
                      </div>
                    </button>
                  </div>
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                      noticeKataSandiBaru ? "tw-hidden" : "tw-block"
                    }`}
                  >
                    Password harus lebih dari 8 karakter dan tidak boleh kosong!
                  </p>
                </div>

                <div className="tw-flex tw-w-full tw-flex-col tw-py-3">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label tw-text-[15px] sm:tw-text-base"
                  >
                    Konfirmasi Kata Sandi Baru
                  </label>
                  <div className="tw-flex tw-w-full tw-flex-row">
                    <input
                      type={`${getToggle3 ? "text" : "password"}`}
                      className="form-control tw-w-[100%] md:tw-w-[57%] tw-border-2 tw-border-e-0 tw-rounded-lg 
                tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3"
                      id="konfirmasiPasswordBaru"
                      placeholder="Konfirmasi kata sandi baru"
                      onBlur={konfirmasiKataSandiBaru.blur}
                      onFocus={konfirmasiKataSandiBaru.focus}
                      onChange={konfirmasiKataSandiBaru.change}
                      autoComplete="konfrimasi-password-baru"
                      required
                    />
                    <button
                      onClick={() => buttonToggle3()}
                      type="button"
                      className="tw-w-[13%] xs:tw-w-[7%] tw-bg-white tw-border-2 tw-border-s-0 tw-rounded-lg 
                tw-rounded-s-none tw-border-[#BABABA]"
                    >
                      <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                        {getToggle3 ? (
                          <BsEyeSlash style={{ fontSize: "35px" }} />
                        ) : (
                          <BsEye style={{ fontSize: "35px" }} />
                        )}
                      </div>
                    </button>
                  </div>
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                      noticeKonfirmasiKataSandiBaru ? "tw-hidden" : "tw-block"
                    }`}
                  >
                    Password harus lebih dari 8 karakter dan tidak boleh kosong!
                  </p>
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                      noticeKonfirmasiKataSandiBaru2 ? "tw-hidden" : "tw-block"
                    }`}
                  >
                    Password yang dimasukkan tidak cocok dengan yang baru!
                  </p>
                </div>

                <div>
                  {isValidasi ? (
                    <button
                      type="submit"
                      className="tw-bg-[#009900] tw-p-3 tw-w-[100%] xs:tw-w-auto tw-px-6 tw-text-[12px] xs:tw-text-base tw-text-white tw-font-bold hover:tw-bg-[#007100] tw-mt-6 xs:tw-mt-4"
                    >
                      Simpan Perubahan
                    </button>
                  ) : (
                    <button
                      className="tw-bg-[#8a8a8a] tw-p-3 tw-w-[100%] xs:tw-w-auto tw-px-6 tw-text-[12px] xs:tw-text-base tw-text-white tw-font-bold tw-mt-6 xs:tw-mt-4"
                      disabled
                    >
                      Simpan Perubahan
                    </button>
                  )}
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#458200] tw-italic ${
                      isValidasi2 ? "tw-block" : "tw-hidden"
                    }`}
                  >
                    Mengubah password berhasil!
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
        <UbahFotoProfil
          handleFiles={handleFiles}
          klikHapusFoto={klikHapusFoto}
        />
      </div>
    </>
  );
};

export default SettingsComponent;
