import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JumbotronComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="tw-h-full tw-flex tw-pt-24 md:tw-pt-20 lg:tw-pt-36 2xl:tw-pt-40 tw-bg-no-repeat tw-bg-contain tw-z-10 tw-p-10 md:tw-px-14 lg:tw-px-20 xl:tw-ps-44 xl:tw-pe-36 
            tw-font-poppins tw-bg-[#FFF6D9] tw-justify-between"
      >
        <div className="tw-flex tw-justify-between">
          <div className="tw-w-[100%] md:tw-w-[50%] tw-text-[#009900] tw-pt-20 tw-pb-3 md:tw-pt-24 md:tw-pb-5 lg:tw-pt-16 xl:tw-py-12">
            <p className="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[36px] 2xl:tw-text-[42px] tw-font-bold">
              BELAJAR BAHASA ARAB LEBIH MUDAH DAN FLEKSIBEL
            </p>
            <p
              className="tw-text-[16px] sm:tw-text-[18px] 
                        md:tw-text-[21px] lg:tw-text-[25px] 2xl:tw-text-[27px] tw-font-normal 
                        tw-py-4"
            >
              Dengan Qolami, Anda dapat belajar bahasa Arab dengan mudah dan
              fleksibel, tanpa gangguan, sehingga memastikan integritas
              pembelajaran yang optimal.
            </p>
            <div className="tw-flex tw-justify-between tw-py-4 md:tw-py-5 lg:tw-py-9">
              <button
                className="tw-bg-[#009900] tw-py-3 tw-px-7 lg:tw-py-6 lg:tw-px-7 
                            tw-rounded-[25px] sm:tw-rounded-[50px] tw-text-white tw-font-bold tw-text-sm md:tw-text-md 
                            lg:tw-text-[25px] hover:tw-bg-[#007100] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]"
                onClick={() => {
                  navigate("/kursus");
                }}
              >
                Belajar Sekarang
              </button>
            </div>
          </div>
          <div className="tw-flex tw-w-[0%] md:tw-w-[50%]">
            <div className="tw-flex tw-w-full tw-flex-row-reverse">
              <img
                src="anak-kecil.svg"
                className="tw-my-auto tw-w-[550px]"
                alt="anak-kecil.svg"
              />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JumbotronComponent;
