import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";

const HeaderComponent = ({ img }) => {
  const navigate = useNavigate();
  const [getNav, setNav] = useState(false);
  const buttonNav = () => {
    setNav(!getNav);
    console.log(!getNav);
  };

  return (
    <>
      <NavigationComponent nav={getNav} buttonNavX={buttonNav} />
      <header className="tw-border-b-2 tw-border-[#009900] tw-fixed tw-w-full tw-z-20 tw-font-poppins">
        <nav className="tw-flex tw-bg-[#FFF6D9] tw-justify-between tw-py-4 tw-px-7 lg:tw-px-12 xl:tw-px-32">
          <div
            className="tw-flex tw-flex-col tw-w-[50%] md:tw-w-[30%] tw-cursor-pointer"
            onClick={() => navigate("/", { replace: true })}
          >
            <img src={img} className="tw-w-[92px] tw-mx-0" alt="logo_qolami" />
          </div>
          <div className="tw-hidden md:tw-flex tw-flex-col tw-justify-center">
            <ul>
              <li
                className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px] tw-cursor-pointer"
                onClick={() => navigate("/", { replace: true })}
              >
                Beranda
              </li>
              <li
                className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px] tw-cursor-pointer"
                onClick={() => navigate("/kursus")}
              >
                Kursus
              </li>
              <li
                className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px] tw-cursor-pointer"
                onClick={() => navigate("/tentang")}
              >
                Tentang
              </li>
            </ul>
          </div>
          <div className="tw-hidden md:tw-flex tw-flex-row tw-justify-end tw-gap-2 lg:tw-gap-3 xl:tw-gap-5 tw-w-[50%] md:tw-w-[30%]">
            <button
              type="button"
              className="hover:tw-bg-[#007100] tw-border-[3px] tw-border-[#009900] hover:tw-border-[#007100] 
                        tw-px-6 lg:tw-px-8 tw-py-2 tw-my-7 lg:tw-my-5 tw-rounded-[50px] tw-font-bold tw-text-[#009900] hover:tw-text-white tw-text-[15px] lg:tw-text-[20px] tw-text-right"
              data-bs-toggle="modal"
              data-bs-target="#masukModal"
            >
              Masuk
            </button>
            <button
              type="button"
              className="tw-bg-[#009900] hover:tw-bg-[#007100]                                             
                        tw-px-8 lg:tw-px-10 tw-py-2 tw-my-7 lg:tw-my-5 tw-rounded-[50px] tw-font-bold tw-text-white tw-text-[15px] lg:tw-text-[20px] tw-text-right"
              data-bs-toggle="modal"
              data-bs-target="#daftarModal"
            >
              Daftar
            </button>
          </div>
          <div className="tw-flex tw-mx-4 md:tw-hidden tw-flex-row tw-justify-end tw-w-[50%] md:tw-w-[30%] ">
            <button
              onClick={() => buttonNav()}
              className="tw-text-[40px] sm:tw-text-[60px] hover:tw-text-[#90C963]"
            >
              <FiMenu />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
