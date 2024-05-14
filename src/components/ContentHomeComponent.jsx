import React, { useState, useEffect } from 'react'
import CardContentHome1 from './CardContentHome1';
import CardContentHome2 from './CardContentHome2';

const ContentHomeComponent = () => {

    const judul = ['UMUM', 'PELAJAR & MAHASISWA', 'GURU'];
    const gambar = ['cardhome1_1.svg', 'cardhome1_2.svg', 'cardhome1_3.svg']

    const judul2 = ['PELAJARAN', 'LATIHAN', 'UJIAN'];
    const gambar2 = ['cardhome2_1.svg', 'cardhome2_2.svg', 'cardhome2_3.svg']

    return(
        <>
            <div className="tw-bg-[#458200] tw-size-full tw-px-10 md:tw-px-12 xl:tw-pe-24 xl:tw-ps-16 tw-font-poppins">
                <div className="tw-flex tw-justify-between tw-py-16 md:tw-py-14 lg:tw-py-20 tw-gap-4">
                    <div className="tw-w-[0%] tw-hidden md:tw-w-[50%] md:tw-flex md:tw-justify-center">
                        <img src="logo-qolami-large.svg" className="tw-w-[0px] md:tw-w-[350px] lg:tw-w-[400px] tw-my-auto tw-rounded-full tw-bg-white"/>
                    </div>
                    <div className="tw-w-[100%] md:tw-w-[50%]">
                        <p className="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[55px] tw-font-bold tw-mb-7 md:tw-mb-16 lg:tw-mb-12 tw-text-[#FFF6D9]">SELAMAT DATANG</p>
                        <p className="sm:tw-text-[35px] md:tw-text-[45px] lg:tw-text-[55px]
                         tw-text-[#458200] tw-bg-[#C2EF90] tw-w-fit tw-my-5 tw-rounded-[20px] tw-rounded-ee-none tw-font-bold tw-px-8">Qolami</p>
                        <p className="tw-text-[16px] tw-text-[#C2EF90] sm:tw-text-[22px] md:tw-text-[24px] lg:tw-text-[32px] 
                        md:tw-pe-10 tw-text-justify">Bacaan <span className="tw-font-bold">Qolami</span> atau seni tulisan khat adalah semi tulisan Arab yang khas dengan nilai estetika dan spiritual yang tinggi. Selain itu, seni tulisan khat merupakan bagian penting yang menjadi bagian integral dari warisan budaya Islam.</p>
                    </div>
                </div>
            </div>



            <div className="tw-flex tw-flex-col tw-w-full tw-bg-[#FFF6D9] tw-pt-14 tw-pb-10 sm:tw-pt-20">
                <div className="tw-flex tw-justify-between">
                    <p className="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[55px] tw-py-1 md:tw-py-0 tw-font-bold tw-mx-auto tw-text-center tw-text-[#009900]">DIREKOMENDASIKAN UNTUK</p>
                </div>
                <div className="tw-flex tw-justify-between tw-border-b-4 tw-border-[#009900] tw-pb-10 md:tw-pb-16">
                    <div className="tw-w-[90%] lg:tw-w-[80%] tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-3 tw-justify-around tw-m-auto md:tw-bg-[#C2EF90] tw-rounded-[30px] tw-my-10 tw-gap-10 md:tw-gap-0 md:tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]">
                        <CardContentHome1 judul={judul[0]} gambar={gambar[0]}/>
                        <CardContentHome1 judul={judul[1]} gambar={gambar[1]}/>
                        <CardContentHome1 judul={judul[2]} gambar={gambar[2]}/>
                    </div>
                </div>
            </div>




            <div className="tw-flex tw-flex-col tw-w-full tw-bg-[#FFF6D9]">
                <div className="tw-flex tw-justify-between">
                    <p className="tw-text-[28px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[55px] tw-font-bold tw-py-1 md:tw-py-3 tw-pb-1 sm:tw-pb-10 tw-mx-auto tw-text-center tw-text-[#009900]">FITUR-FITUR KURSUS</p>
                </div>
                <div className="tw-flex tw-justify-between">
                    <div className="tw-w-[90%] lg:tw-w-[80%] tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-3 tw-justify-around tw-m-auto tw-my-10 tw-gap-10 tw-pb-10 md:tw-pb-12">
                        <CardContentHome2 judul={judul2[0]} gambar={gambar2[0]}/>
                        <CardContentHome2 judul={judul2[1]} gambar={gambar2[1]}/>
                        <CardContentHome2 judul={judul2[2]} gambar={gambar2[2]}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentHomeComponent;