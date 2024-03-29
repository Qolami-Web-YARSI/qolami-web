import React, { useState, useEffect } from 'react'

const JumbotronComponent = () => {
    return(
        <>
            <div class="tw-h-fit tw-bg-cover tw-bg-center tw-bg-[#FFF6D9]">
                <div class="tw-flex tw-justify-between">
                    <div class="tw-w-[100%] md:tw-w-[50%] tw-text-[#009900] tw-px-10 tw-py-24 md:tw-ps-20 lg:tw-ps-28">
                        <p class="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[55px] tw-font-bold">BELAJAR BAHASA ARAB LEBIH MUDAH DAN FLEKSIBEL</p>
                        <p class="tw-text-[16px] sm:tw-text-[18px] md:tw-text-[21px] lg:tw-text-[30px] tw-font-normal tw-py-3">Dengan Qolami, Anda dapat belajar bahasa Arab dengan mudah dan fleksibel, tanpa gangguan, sehingga memastikan integritas pembelajaran yang optimal.</p>
                        <div class="tw-flex tw-justify-between tw-py-4 md:tw-py-5 lg:tw-py-9">
                            <button class="tw-bg-[#009900] tw-py-3 tw-px-3 sm:tw-px-5 tw-rounded-2xl tw-text-[#C2EF90] tw-font-bold tw-text-sm md:tw-text-md lg:tw-text-xl"><a href="/kursus">Mulai Belajar</a></button>
                        </div>
                    </div>
                    <div class="tw-flex tw-w-[0%] md:tw-w-[50%]">
                        <div class="tw-flex tw-w-full tw-bg-jumbotron tw-bg-no-repeat tw-bg-contain">
                            <img src="jumbotron1_2.svg" class="tw-m-auto"/>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default JumbotronComponent;