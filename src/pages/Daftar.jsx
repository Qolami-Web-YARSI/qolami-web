import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

const Daftar = ({ img }) => {
  const style = { color: "#FFF6D9" };
  const [htmlString, setHtmlString] = useState("");
  const [getToggle, setToggle] = useState(false);
  const [noticeNamaDepan, setNoticeNamaDepan] = useState(true);
  const [noticeNamaBelakang, setNoticeNamaBelakang] = useState(true);
  const [noticeEmail, setNoticeEmail] = useState(true);
  const [noticeKataSandi, setNoticeKataSandi] = useState(true);
  const [tempNamaDepan, setTempNamaDepan] = useState(false);
  const [tempNamaBelakang, setTempNamaBelakang] = useState(false);
  const [tempEmail, setTempEmail] = useState(false);
  const [tempKataSandi, setTempKataSandi] = useState(false);
  const [isValidasi, setIsValidasi] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", "profile");
  }, []);

  const buttonToggle = () => {
    setToggle(!getToggle);
  };

  const validateEmail1 = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleNameInput = (event) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^A-Za-z]/g, "");
    event.target.value = filteredValue;
  };

  const namaDepan = {
    change: (event) => {
      if (event.target.value.length === 0) {
        setNoticeNamaDepan(false);
        setTempNamaDepan(false);
      } else {
        setNoticeNamaDepan(true);
        setTempNamaDepan(true);
      }
    },
    focus: (event) => {
      if (event.target.value.trim() === "") {
        setNoticeNamaDepan(false);
      }
    },
    blur: (event) => {
      if (event.target.value.trim() === "") {
        setNoticeNamaDepan(true);
      }
    },
  };

  const email = {
    change: (event) => {
      if (
        !(validateEmail1(event.target.value) && event.target.value.length > 0)
      ) {
        setNoticeEmail(false);
        setTempEmail(false);
      } else {
        setNoticeEmail(true);
        setTempEmail(true);
      }
    },
    focus: (event) => {
      if (
        !(
          validateEmail1(event.target.value) &&
          event.target.value.endsWith(".com") &&
          event.target.value.length > 0
        )
      ) {
        setNoticeEmail(false);
      }
    },
    blur: (event) => {
      if (
        !(
          validateEmail1(event.target.value) &&
          event.target.value.endsWith(".com") &&
          event.target.value.length > 0
        )
      ) {
        setNoticeEmail(true);
      }
    },
  };

  const kataSandi = {
    change: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandi(false);
        setTempKataSandi(false);
      } else {
        setNoticeKataSandi(true);
        setTempKataSandi(true);
      }
    },
    focus: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandi(false);
      }
    },
    blur: (event) => {
      if (event.target.value.length < 8) {
        setNoticeKataSandi(true);
      }
    },
  };

  useEffect(() => {
    if (tempNamaDepan && tempEmail && tempKataSandi) {
      setIsValidasi(true);
    } else {
      setIsValidasi(false);
    }
  }, [tempNamaDepan, tempEmail, tempKataSandi]);

  const handleDaftar = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://qolami-web-golecrsfhq-uc.a.run.app/users/register",
        {
          firstName: event.target.namaDepanDaftar.value,
          lastName: event.target.namaBelakangDaftar.value,
          email: event.target.emailDaftar.value,
          password: event.target.passwordDaftar.value,
        }
      );

      event.target.namaDepanDaftar.value = "";
      event.target.namaBelakangDaftar.value = "";
      event.target.emailDaftar.value = "";
      event.target.passwordDaftar.value = "";

      setTempNamaDepan(false);
      setTempNamaBelakang(false);
      setTempEmail(false);
      setTempKataSandi(false);

      const myModal = new window.bootstrap.Modal(
        document.getElementById("dialogBerhasilDaftar")
      );
      myModal.show();
      const myModal2 = window.bootstrap.Modal.getInstance(
        document.getElementById("daftarModal")
      );
      myModal2.hide();
    } catch (e) {
      console.log(e);
      setHtmlString(`Email yang dimasukkan sudah terdaftar!`);
    }
  };

  return (
    <>
      <form onSubmit={handleDaftar}>
        <div
          className="modal fade tw-p-4"
          id="daftarModal"
          tabIndex="-1"
          aria-labelledby="daftarModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content tw-rounded-[15px]">
              <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">
                <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                  <button
                    type="button"
                    className="tw-opacity-0 tw-flex tw-rounded-lg tw-size-7"
                    data-bs-dismiss="modal"
                    disabled
                  >
                    <div className="tw-bg-red-500 tw-rounded-md tw-m-auto tw-text-[35px]">
                      <IoMdClose style={style} />
                    </div>
                  </button>
                  <div className="tw-flex tw-flex-col tw-justify-center">
                    <p className="tw-text-[#009900] tw-text-[40px] tw-font-bold tw-text-center">
                      DAFTAR
                    </p>
                  </div>
                  <button
                    type="button"
                    className="tw-flex tw-rounded-lg tw-size-7"
                    data-bs-dismiss="modal"
                  >
                    <div className="tw-bg-red-500 tw-rounded-md tw-m-auto tw-text-[35px]">
                      <IoMdClose style={style} />
                    </div>
                  </button>
                </div>

                <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-pt-2">
                  <h1
                    className="modal-title fs-5 tw-opacity-0"
                    id="daftarModalLabel"
                  >
                    <IoMdClose style={style} />
                  </h1>
                  <img
                    src={img}
                    alt="buttonpng"
                    border="0"
                    className="tw-w-[160px]"
                  />
                  <h1
                    className="modal-title fs-5 tw-opacity-0"
                    id="daftarModalLabel"
                  >
                    <IoMdClose style={style} />
                  </h1>
                </div>

                <div className="tw-flex tw-w-full tw-flex-row tw-justify-between">
                  <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                    <label className="form-label">Nama Depan</label>

                    <input
                      type="text"
                      className="form-control tw-border-2 tw-rounded-none tw-border-[#BABABA] tw-py-3 tw-px-4"
                      onBlur={namaDepan.blur}
                      onFocus={namaDepan.focus}
                      onChange={namaDepan.change}
                      onInput={handleNameInput}
                      name="namaDepanDaftar"
                      id="namaDepanDaftar"
                      placeholder="Nama Depan"
                    />
                    <p
                      className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                        noticeNamaDepan ? "tw-hidden" : "tw-block"
                      }`}
                    >
                      Nama Depan tidak boleh kosong!
                    </p>
                  </div>

                  <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                    <label className="form-label">Nama Belakang</label>
                    <input
                      type="text"
                      className="form-control tw-border-2 tw-rounded-none tw-border-[#BABABA] tw-py-3 tw-px-4"
                      name="namaBelakangDaftar"
                      id="namaBelakang"
                      placeholder="Nama Belakang"
                      onInput={handleNameInput}
                    />
                    <p
                      className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                        noticeNamaBelakang ? "tw-hidden" : "tw-block"
                      }`}
                    >
                      Nama Belakang tidak boleh kosong!
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control tw-border-2 tw-rounded-none tw-border-[#BABABA] tw-py-3 tw-px-4"
                    onBlur={email.blur}
                    onFocus={email.focus}
                    onChange={email.change}
                    name="emailDaftar"
                    id="emailDaftar"
                    placeholder="Email"
                    required
                  />
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                      noticeEmail ? "tw-hidden" : "tw-block"
                    }`}
                  >
                    Email yang dimasukkan harus valid!
                  </p>
                  {htmlString && (
                    <p className="tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic">
                      {htmlString}
                    </p>
                  )}
                </div>

                <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                  <label className="form-label">Kata Sandi</label>
                  <div className="tw-flex tw-w-full tw-flex-row">
                    <input
                      type={`${getToggle ? "text" : "password"}`}
                      className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-none tw-rounded-e-none tw-border-[#BABABA] tw-py-3 tw-px-4"
                      onBlur={kataSandi.blur}
                      onFocus={kataSandi.focus}
                      onChange={kataSandi.change}
                      id="passwordDaftar"
                      name="passwordDaftar"
                      placeholder="Kata Sandi"
                      required
                      autoComplete="password-daftar"
                    />
                    <button
                      onClick={() => buttonToggle()}
                      type="button"
                      className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-s-0 tw-border-sd-0 tw-rounded-none tw-rounded-s-none tw-border-[#BABABA]"
                    >
                      <div className="tw-w-full tw-flex tw-flex-row tw-justify-center">
                        {getToggle ? (
                          <BsEyeSlash style={{ fontSize: "20px" }} />
                        ) : (
                          <BsEye style={{ fontSize: "20px" }} />
                        )}
                      </div>
                    </button>
                  </div>
                  <p
                    className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                      noticeKataSandi ? "tw-hidden" : "tw-block"
                    }`}
                  >
                    Password harus lebih dari 8 karakter!
                  </p>
                </div>

                <div className="tw-flex tw-w-full tw-flex-col tw-pt-4 ">
                  {isValidasi ? (
                    <button
                      type="submit"
                      className="tw-bg-[#009900] tw-w-full tw-h-12 tw-rounded-full tw-text-white tw-font-bold hover:tw-bg-[#007100]"
                    >
                      Daftar
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-full tw-text-white tw-font-bold"
                      disabled
                    >
                      Daftar
                    </button>
                  )}
                </div>

                <div className="tw-flex tw-w-full tw-flex-row tw-py-2 tw-pt-5 tw-justify-center tw-gap-1">
                  <label className="form-label tw-text-[#979797]">
                    Sudah punya akun?
                  </label>
                  <label
                    className="form-label tw-text-[#009900] tw-cursor-pointer tw-font-bold"
                    data-bs-target="#masukModal"
                    data-bs-toggle="modal"
                  >
                    Masuk
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Daftar;
