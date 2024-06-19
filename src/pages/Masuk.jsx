import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

const Masuk = ({ img, setTempToken }) => {
  const style = { color: "#FFF6D9" };
  const [htmlString, setHtmlString] = useState("");
  const [getToggle, setToggle] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState(true);
  const [tempEmail, setTempEmail] = useState(false);
  const [tempEmail2, setTempEmail2] = useState(false);

  const [noticeKataSandi, setNoticeKataSandi] = useState(true);
  const [tempKataSandi, setTempKataSandi] = useState(false);
  const [tempKataSandi2, setTempKataSandi2] = useState(false);

  const [isValidasi, setIsValidasi] = useState(false);
  const [isValidasi2, setIsValidasi2] = useState(false);
  const [isValidasi3, setIsValidasi3] = useState(false);
  const [isValidasi4, setIsValidasi4] = useState(false);

  const validasiTrigger = () => {
    setIsValidasi3(true);
    setIsValidasi4(false);
  };

  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:2024/users/login", {
        email: event.target.emailMasuk.value,
        password: event.target.passwordMasuk.value,
      });
      setIsValidasi3(false);
      setIsValidasi4(true);
      console.log(response.data.data.accessToken);
      localStorage.setItem("token", `${response.data.data.accessToken}`);
      if (localStorage.getItem("token") !== null) {
        setTempToken(true);
        localStorage.setItem("id", response.data.data.user.id);
        localStorage.setItem("isLogIn", true);
        window.location.reload();
      } else {
        setTempToken(false);
        localStorage.setItem("isLogIn", false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const buttonToggle = () => {
    setToggle(!getToggle);
  };

  const validateEmail1 = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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
          event.target.value.includes(".com") &&
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
          event.target.value.includes(".com") &&
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
    if (tempEmail && tempKataSandi) {
      setIsValidasi(true);
    } else {
      setIsValidasi(false);
    }
    if (tempEmail2 && tempKataSandi2) {
      setIsValidasi2(true);
    } else {
      setIsValidasi2(false);
    }
  }, [tempEmail, tempKataSandi, tempEmail2, tempKataSandi2]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTempToken(true);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="modal fade tw-p-4"
        id="masukModal"
        tabIndex="-1"
        aria-labelledby="masukModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content tw-rounded-[15px]">
            <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">
              <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                <button
                  type="button"
                  className=" tw-opacity-0 tw-flex tw-rounded-md tw-size-7"
                  data-bs-dismiss="modal"
                  disabled
                >
                  <div className="tw-bg-red-500 tw-rounded-md tw-m-auto tw-text-[35px]">
                    <IoMdClose style={style} />
                  </div>
                </button>
                <div className="tw-flex tw-flex-col">
                  <p className="tw-text-[#009900] tw-text-[40px] tw-font-bold tw-text-center">
                    MASUK
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
                  id="masukModalLabel"
                >
                  X
                </h1>
                <img
                  src={img}
                  alt="buttonpng"
                  border="0"
                  className="tw-w-[160px]"
                />
                <h1
                  className="modal-title fs-5 tw-opacity-0"
                  id="masukModalLabel"
                >
                  X
                </h1>
              </div>

              <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                <label htmlFor="validationCustom03" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control tw-rounded-none tw-border-2 tw-border-[#BABABA] tw-py-3 tw-px-4"
                  id="emailMasuk"
                  placeholder="Email"
                  onBlur={email.blur}
                  onFocus={email.focus}
                  onChange={email.change}
                  required
                />
                <p
                  className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                    noticeEmail ? "tw-hidden" : "tw-block"
                  }`}
                >
                  Email yang dimasukkan harus valid dan tidak boleh kosong!
                </p>
              </div>

              <div className="tw-flex tw-w-full tw-flex-col tw-py-2">
                <label htmlFor="validationCustom03" className="form-label">
                  Kata Sandi
                </label>
                <div className="tw-flex tw-w-full tw-flex-row">
                  <input
                    type={`${getToggle ? "text" : "password"}`}
                    className="form-control tw-w-[87%] tw-border-2 tw-border-e-0 tw-rounded-none tw-rounded-e-none tw-border-[#BABABA] tw-text-base tw-py-3 tw-px-4"
                    id="passwordMasuk"
                    placeholder="Kata Sandi"
                    onBlur={kataSandi.blur}
                    onFocus={kataSandi.focus}
                    onChange={kataSandi.change}
                    required
                    autoComplete="password-masuk"
                  />
                  <button
                    onClick={() => buttonToggle()}
                    type="button"
                    className="tw-w-[13%] tw-bg-white tw-border-2 tw-border-s-0 tw-border-sd-0 tw-rounded-none tw-rounded-s-none tw-border-[#BABABA]"
                  >
                    <div className="tw-w-full tw-flex tw-flex-row tw-justify-center tw-px-2">
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
                  Password harus lebih dari 8 karakter dan tidak boleh kosong!
                </p>
              </div>

              <div className="tw-flex tw-flex-row-reverse tw-w-full tw-py-1">
                <label
                  htmlFor="validationCustom03"
                  className="form-label tw-cursor-pointer tw-text-[#009900] hover:tw-text-[#007100]"
                  data-bs-target="#lupaPasswordModal"
                  data-bs-toggle="modal"
                >
                  Lupa Kata Sandi?
                </label>
              </div>

              <div className="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                {isValidasi ? (
                  isValidasi2 ? (
                    <button
                      type="submit"
                      className="tw-bg-[#009900] tw-w-full tw-h-12 tw-rounded-full tw-text-white tw-font-bold hover:tw-bg-[#007100]"
                    >
                      Masuk
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="tw-bg-[#009900] tw-w-full tw-h-12 tw-rounded-full tw-text-white tw-font-bold hover:tw-bg-[#007100]"
                      onClick={() => validasiTrigger()}
                    >
                      Masuk
                    </button>
                  )
                ) : (
                  <button
                    type="submit"
                    className="tw-bg-[#8a8a8a] tw-w-full tw-h-12 tw-rounded-full tw-text-white tw-font-bold"
                    disabled
                  >
                    Masuk
                  </button>
                )}
                <p
                  className={`tw-text-[13px] tw-ms-2 tw-text-[#FF0000] tw-italic ${
                    isValidasi3 ? "tw-block" : "tw-hidden"
                  }`}
                >
                  Login Gagal! Periksa Apakah Email dan Password sudah sesuai!
                </p>
                <p
                  className={`tw-text-[13px] tw-ms-2 tw-text-[#458200] tw-italic ${
                    isValidasi4 ? "tw-block" : "tw-hidden"
                  }`}
                >
                  Login Berhasil!
                </p>
              </div>

              <div className="tw-flex tw-w-full tw-flex-row tw-py-2 tw-pt-5 tw-justify-center tw-gap-1">
                <label
                  htmlFor="validationCustom03"
                  className="form-label tw-text-[#979797]"
                >
                  Belum punya akun?
                </label>
                <label
                  htmlFor="validationCustom03"
                  className="form-label tw-text-[#009900] tw-cursor-pointer tw-font-bold"
                  data-bs-target="#daftarModal"
                  data-bs-toggle="modal"
                >
                  Daftar
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Masuk;
