import React, { useState, useEffect } from 'react'
import CardContentAbout from './CardContentAbout';

const ContentAboutComponent = () => {
    const image = ['cardabout_1.svg', 'cardabout_2.svg', 'cardabout_3.svg', 'cardabout_4.svg',
                    'cardabout_5.svg', 'cardabout_6.svg', 'cardabout_7.svg', 'cardabout_8.svg',]

    return(
        <>
           <div className="tw-flex tw-flex-col tw-font-poppins">
                <div className="tw-flex tw-flex-col tw-gap-5 tw-pt-32 lg:tw-pt-36 tw-pb-14 tw-bg-[#C2EF90]">
                    <div className="tw-flex tw-justify-between">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] 
                            tw-text-[#009900] tw-font-bold tw-text-center tw-py-5 tw-mx-auto tw-font-poppins">TENTANG QOLAMI</p>
                    </div>
                    <div className="tw-flex tw-justify-between">
                        <img src="logo-qolami.svg" className=" tw-w-48 sm:tw-w-72 tw-mx-auto"/>
                    </div>
                    <div className="tw-flex tw-justify-between">
                    <p className="tw-text-[12px] sm:tw-text-[14px] md:tw-text-[18px] lg:tw-text-[23px] tw-text-[#009900]
                            tw-font-normal
                            tw-px-16 sm:tw-px-40 md:tw-px-48 lg:tw-px-64 tw-text-center tw-font-poppins tw-mx-auto"><span className="tw-font-extrabold">Qolami</span> adalah sebuah platform pembelajaran Bahasa <br className='tw-hidden xl:tw-block'/> Arab yang interaktif dengan media gambar, audio, dan <br className='tw-hidden xl:tw-block'/> video yang sangat mudah dipahami oleh berbagai <br className='tw-hidden xl:tw-block'/> lapisan masyarakat.</p>
                    </div>
                </div>


                
                <div className="tw-bg-[#FFF6D9] tw-pt-24 md:tw-pt-20 lg:tw-pt-11">
                    <div className="tw-flex tw-justify-between tw-py-3">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-mx-auto">DIBUAT DENGAN</p>
                    </div>
                    <div className="tw-grid lg:tw-w-[800px] 2xl:tw-w-[1300px] sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-px-5 sm:tw-px-16 md:tw-px-24 lg:tw-px-0 tw-pt-2 tw-pb-14 tw-mx-auto">
                        <CardContentAbout image={image[0]}/>
                        <CardContentAbout image={image[1]}/>
                        <CardContentAbout image={image[2]}/>
                        <CardContentAbout image={image[3]}/>
                        <CardContentAbout image={image[4]}/>
                        <CardContentAbout image={image[5]}/>
                        <CardContentAbout image={image[6]}/>
                        <CardContentAbout image={image[7]}/>
                    </div>
                    
                </div>





                <div className="tw-flex tw-gap-5 tw-py-14 tw-px-10 sm:tw-px-20 2xl:tw-px-20 tw-bg-[#C2EF90] tw-justify-center">
                    <div className="tw-flex tw-flex-col tw-w-[80%] md:tw-w-[50%] lg:tw-w-[40%] 2xl:tw-w-[700px] tw-gap-2 md:tw-gap-3 tw-mx-auto sm:tw-mx-0">
                        <div className='tw-flex tw-flex-col tw-ps-4'>
                            <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center sm:tw-text-start tw-font-poppins">TIM PENGEMBANG</p>
                            <p className='tw-text-center sm:tw-text-start tw-my-2 tw-text-[#458200] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[20px] tw-py-2'> © 2024, ART Team</p>
                            <p className='tw-text-center sm:tw-text-start tw-text-[#009900] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-normal tw-font-poppins'>Angga Aditya Putra Pratama</p>
                            <p className='tw-text-center sm:tw-text-start tw-text-[#009900] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-normal tw-font-poppins'>Rizal Abimanyu</p>
                            <p className='tw-text-center sm:tw-text-start tw-text-[#009900] tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-normal tw-font-poppins'>Tara Thania Anantha</p>
                            <p className='tw-text-center sm:tw-text-start tw-text-[#458200] tw-text-[14px] sm:tw-text-[13px] md:tw-text-[15px] lg:tw-text-[18px] xl:tw-text-[17px] 2xl:tw-text-[20px] tw-font-normal tw-font-poppins tw-py-7'>Thanks support designed Muhammad Farhan Al Anzhari</p>
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-1'>
                            <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] 
                            tw-text-[#009900] tw-font-bold tw-pt-5 tw-pb-2 tw-text-center sm:tw-text-start tw-font-poppins tw-ps-4">SOSIAL MEDIA</p>
                            <div className='tw-flex tw-justify-center sm:tw-justify-start tw-gap-3'>
                                <a href="https://www.youtube.com/@qolamichanel9019" target="_blank" className='tw-flex'><img className=' tw-my-auto tw-drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]' src="yt.svg" alt="yt_qolami"/></a>
                                <a href="https://www.instagram.com/metodeqolami/" target="_blank" className='tw-flex'><img className=' tw-my-auto tw-drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]' src="ig.svg" alt="ig_qolami"/></a>
                                <a href="https://www.tiktok.com/@metode_qolami" target="_blank" className='tw-flex'><img className='tw-my-auto tw-drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]' src="tiktok.svg" alt="tiktok_qolami"/></a>
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