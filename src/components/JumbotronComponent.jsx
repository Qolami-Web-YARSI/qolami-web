import React, { useState, useEffect } from 'react'

const JumbotronComponent = () => {
    return(
        <>
            {/* <div className="tw-h-full tw-ms-[15%] sm:tw-ms-[20%] md:tw-ms-[33%] tw-bg-jumbotron tw-bg-no-repeat tw-bg-contain tw-z-0 tw-font-poppins">
                <div className="tw-flex tw-justify-between tw-opacity-0">
                    <div className="tw-w-[100%] md:tw-w-[50%] tw-text-[#009900] tw-py-24">
                        <p className="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[45px] tw-font-bold tw-font-poppins">BELAJAR BAHASA ARAB LEBIH MUDAH DAN FLEKSIBEL</p>
                        <p className="tw-text-[16px] sm:tw-text-[18px] md:tw-text-[21px] lg:tw-text-[30px] tw-font-normal tw-py-3 tw-font-poppins">Dengan Qolami, Anda dapat belajar bahasa Arab dengan mudah dan fleksibel, tanpa gangguan, sehingga memastikan integritas pembelajaran yang optimal.</p>
                        <div className="tw-flex tw-justify-between tw-py-4 md:tw-py-5 lg:tw-py-9">
                            <button className="tw-bg-[#3c3e3c] tw-p-3 sm:tw-px-5 tw-rounded-2xl tw-text-[#C2EF90] tw-font-bold tw-text-sm md:tw-text-md lg:tw-text-xl tw-font-poppins hover:tw-bg-[#C2EF90] hover:tw-text-[#458200]"><a href="/kursus">Mulai Belajar</a></button>
                        </div>
                    </div>
                    <div className="tw-flex tw-w-[0%] md:tw-w-[50%]">
                        <div className="tw-flex tw-w-full">
                            <img src="jumbotron1_2.svg" className="tw-m-auto"/>
                        </div>
                    </div>
                </div>
            </div>  */}

            <div className="tw-h-full tw-flex tw-pt-24 md:tw-pt-20 lg:tw-pt-32 tw-bg-no-repeat tw-bg-contain tw-z-10 tw-p-10 md:tw-px-14 lg:tw-px-20 xl:tw-px-32 tw-font-poppins tw-bg-[#FFF6D9] tw-justify-between">
                <div className="tw-flex tw-justify-between">
                    <div className="tw-w-[100%] md:tw-w-[50%] tw-text-[#009900] tw-pt-20 tw-pb-3 md:tw-pt-24 md:tw-pb-5 xl:tw-py-24">
                        <p className="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[45px] tw-font-bold">BELAJAR BAHASA ARAB LEBIH MUDAH DAN FLEKSIBEL</p>
                        <p className="tw-text-[16px] sm:tw-text-[18px] md:tw-text-[21px] lg:tw-text-[30px] tw-font-normal tw-py-4">Dengan Qolami, Anda dapat belajar bahasa Arab dengan mudah dan fleksibel, tanpa gangguan, sehingga memastikan integritas pembelajaran yang optimal.</p>
                        <div className="tw-flex tw-justify-between tw-py-4 md:tw-py-5 lg:tw-py-9">
                            <button className="tw-bg-[#009900] tw-py-3 tw-px-7 sm:tw-py-4 sm:tw-px-12 tw-rounded-[25px] sm:tw-rounded-[50px] tw-text-[#C2EF90] tw-font-bold tw-text-sm md:tw-text-md lg:tw-text-xl hover:tw-bg-[#C2EF90] hover:tw-text-[#458200] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]"><a href="/kursus">Mulai Belajar</a></button>
                        </div>
                    </div>
                    <div className="tw-flex tw-w-[0%] md:tw-w-[50%]">
                        <div className="tw-flex tw-w-full tw-flex-row-reverse">
                            <img src="beranda-main.svg" className="tw-my-auto tw-w-[600px]"/>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div> 

            {/* <div className="tw-h-full tw-pt-20 tw-bg-no-repeat tw-bg-contain tw-z-10 tw-p-12 md:tw-p-20 xl:tw-p-24 md:tw-ps-24 md:tw-pe-16 tw-bg-[#FFF6D9] tw-font-poppins">
                <div className="tw-flex tw-justify-between tw-opacity-0">
                    <div className="tw-w-[100%] md:tw-w-[50%] tw-text-[#009900] tw-py-16 lg:tw-py-24">
                        <p className="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[45px] tw-font-bold">BELAJAR BAHASA ARAB LEBIH MUDAH DAN FLEKSIBEL</p>
                        <p className="tw-text-[16px] sm:tw-text-[18px] md:tw-text-[21px] lg:tw-text-[30px] tw-font-normal tw-py-3">Dengan Qolami, Anda dapat belajar bahasa Arab dengan mudah dan fleksibel, tanpa gangguan, sehingga memastikan integritas pembelajaran yang optimal.</p>
                        <div className="tw-flex tw-justify-between tw-py-4 md:tw-py-5 lg:tw-py-9">
                            <button className="tw-bg-[#009900] tw-p-3 sm:tw-px-5 tw-rounded-2xl tw-text-[#C2EF90] tw-font-bold tw-text-sm md:tw-text-md lg:tw-text-xl"><a href="/kursus">Mulai Belajar</a></button>
                        </div>
                    </div>
                    <div className="tw-flex tw-w-[0%] md:tw-w-[50%]">
                        <div className="tw-flex tw-w-full">
                            <img src="jumbotron1_2.svg" className="tw-m-auto"/>
                        </div>
                    </div>
                </div>
            </div>  */}
        </>
    )
}

export default JumbotronComponent;