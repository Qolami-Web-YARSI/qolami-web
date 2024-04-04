import React, { useState, useEffect } from 'react'
import CardContentAbout1 from './CardContentAbout1';
import CardContentAbout2 from './CardContentAbout2';

const ContentAboutComponent = () => {

    const name = ['ANGGA ADITYA PUTRA PRATAMA', 'RIZAL ABIMANYU', 'TARA THANIA ANANTA']
    const npm = ['(1402020008)', '(1402020070)', '(1402020072)']
    const image = ['cardabout_1.svg', 'cardabout_2.svg', 'cardabout_3.svg', 'cardabout_4.svg',
                    'cardabout_5.svg', 'cardabout_6.svg', 'cardabout_7.svg', 'cardabout_8.svg',]

    return(
        <>
           <div className="tw-flex tw-flex-col">
                <div className="tw-flex tw-flex-col tw-gap-5 tw-pt-36 tw-pb-14 tw-bg-[#C2EF90]">
                    <div className="tw-flex tw-justify-between">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] 
                            tw-text-[#009900] tw-font-bold tw-text-center tw-py-5 tw-mx-auto tw-font-poppins">TENTANG QOLAMI</p>
                    </div>
                    <div className="tw-flex tw-justify-between">
                        <img src="logo-qolami.svg" className=" tw-w-48 sm:tw-w-72 tw-mx-auto"/>
                    </div>
                    <div className="tw-flex tw-justify-between">
                    <p className="tw-text-[12px] sm:tw-text-[14px] md:tw-text-[18px] lg:tw-text-[23px] tw-text-[#009900]
                            tw-font-medium
                            tw-px-16 sm:tw-px-40 md:tw-px-48 lg:tw-px-64 tw-text-center tw-font-poppins"><span className="tw-font-extrabold">Qolami</span> adalah sebuah platform pembelajaran Bahasa Arab yang interaktif dengan media gambar, audio, dan video yang sangat mudah dipahami oleh berbagai lapisan masyarakat.</p>
                    </div>
                </div>
                <div className="tw-bg-[#FFF6D9] tw-py-10 sm:tw-py-24">
                    <div className="tw-flex tw-justify-between sm:tw-pb-7">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-py-5 tw-mx-auto">DIBUAT DENGAN</p>
                    </div>
                    <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-px-5 sm:tw-px-16 md:tw-px-24 lg:tw-px-32 tw-pt-10 tw-pb-10">
                        <CardContentAbout2 image={image[0]}/>
                        <CardContentAbout2 image={image[1]}/>
                        <CardContentAbout2 image={image[2]}/>
                        <CardContentAbout2 image={image[3]}/>
                        <CardContentAbout2 image={image[4]}/>
                        <CardContentAbout2 image={image[5]}/>
                        <CardContentAbout2 image={image[6]}/>
                        <CardContentAbout2 image={image[7]}/>
                    </div>
                    
                </div>
                <div className="tw-flex tw-gap-5 tw-py-14 tw-px-10 sm:tw-px-20 tw-bg-[#C2EF90] tw-justify-center">
                    <div className="tw-flex tw-flex-col tw-w-[80%] md:tw-w-[50%] lg:tw-w-[40%] tw-gap-14 tw-mx-auto sm:tw-mx-0">
                        <div className='tw-flex tw-flex-col'>
                            <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center sm:tw-text-start tw-font-poppins">TIM PENGEMBANG</p>
                            <p className='tw-text-center sm:tw-text-start tw-my-2 tw-text-[#458200] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[20px]'> © 2024, ART Team</p>
                            <p className='tw-text-center sm:tw-text-start tw-text-[#009900] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-normal tw-font-poppins'>Angga Aditya Putra Pratama</p>
                            <p className='tw-text-center sm:tw-text-start tw-text-[#009900] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-normal tw-font-poppins'>Rizal Abimanyu</p>
                            <p className='tw-text-center sm:tw-text-start tw-text-[#009900] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-normal tw-font-poppins'>Tara Thania Anantha</p>
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-2'>
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] 
                            tw-text-[#009900] tw-font-bold tw-py-5 tw-text-center sm:tw-text-start tw-font-poppins">SOSIAL MEDIA</p>
                            <div className='tw-flex tw-justify-center sm:tw-justify-start tw-gap-7'>
                                <img src="yt.svg" className='tw-w-20'/>
                                <img src="ig.svg"/>
                            </div>
                        </div>
                    </div>
                    <div className="tw-hidden sm:tw-flex tw-w-[0%] sm:tw-w-[50%] lg:tw-w-[40%]">
                        <img src="pencil.svg" className="lg:tw-mx-auto"/>
                    </div>
                </div>
           </div>
        </>
    )
}

export default ContentAboutComponent;