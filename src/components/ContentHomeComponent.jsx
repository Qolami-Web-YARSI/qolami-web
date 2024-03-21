import React, { useState, useEffect } from 'react'
import CardContentHome1 from './CardContentHome1';
import CardContentHome2 from './CardContentHome2';

const ContentHomeComponent = () => {

    const pelajar = {
        'name' : 'Pelajar',
        'subtitile1' : 'Dasar berkualitas',
        'subtitile2' : 'Pembelajaran fleksibel',
        'image' : "card1_1.png"
    }
    const mahasiswa = {
        'name': 'Mahasiswa',
        'subtitile1' : 'Pembelajaran fundamental',
        'subtitile2' : 'Pendidikan yang mudah di akses',
        'image' : "card1_2.png"
    }
    const guru = {
        'name': 'Guru',
        'subtitile1' : 'Sumber daya berguna',
        'subtitile2' : 'Dukungan pedagogis',
        'image' : "card1_3.png"
    }
    const umum = {
        'name': 'Umum',
        'subtitile1' : 'Pengetahuan dasar',
        'subtitile2' : 'Pusat pembelajaran',
        'image' : "card1_4.png"
    }

    const judul2 = ['Mendaftar Akun', 'Masuk ke dalam Course', 'Akses penuh dalam Course', 'Tersedia Pengerjaan Latihan dan Ujian'];
    const gambar2 = ['tw-bg-card2_1', 'tw-bg-card2_2', 'tw-bg-card2_3', 'tw-bg-card2_4']

    return(
        <>
            <div class="tw-bg-[#FFF6D9]">
                <div class="tw-flex tw-justify-between">
                    <div class="tw-w-[18%]"/>
                        <p class="tw-py-5 sm:tw-py-8 md:tw-py-12 lg:tw-py-20 
                        tw-text-[23px] sm:tw-text-[28px] md:tw-text-[35px] lg:tw-text-[40px] 
                        tw-text-black tw-font-bold">WELCOME</p>
                    <div class="tw-w-[18%]"/>
                </div>
                <div class="tw-flex tw-justify-between tw-pb-12 sm:tw-pb-15 md:tw-pb-20">
                    <div class="tw-w-[100%] md:tw-w-[60%]">
                        <p class="sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px]
                         tw-text-[#FFF6D9] tw-bg-[#114232] tw-w-fit tw-my-5 tw-rounded-[20px] tw-font-bold tw-ms-11 tw-text-center tw-px-10 tw-py-0">QOLAMI</p>
                        <p class="tw-text-[16px] sm:tw-text-[22px] md:tw-text-[24px] lg:tw-text-[32px] 
                        tw-ps-14 tw-pe-14 tw-text-justify">Bacaan <span class=" tw-font-extrabold">Qolami</span> atau seni tulisan khat adalah semi tulisan Arab yang khas dengan nilai estetika dan spiritual yang tinggi. Selain itu, seni tulisan khat merupakan bagian penting yang menjadi bagian integral dari warisan budaya Islam.</p>
                    </div>
                    <div class="tw-w-[0%] md:tw-w-[40%] md:tw-flex md:tw-justify-center md:tw-items-center md:tw-px-5 lg:tw-px-24">
                        <img src="pencil_2.png"/>
                    </div>
                </div>
            </div>

            <div class="tw-w-full tw-h-28 md:tw-h-44 tw-bg-[#FFF6D9] tw-bg-wave tw-bg-no-repeat tw-bg-cover"/>
            <div class="tw-flex tw-flex-col tw-w-full tw-bg-[#90C963]">
                <div class="tw-flex tw-justify-between">
                    <div class="tw-w-[18%]"/>
                        <p class="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[32px] lg:tw-text-[37px]
                         tw-text-black tw-tracking-[3px] tw-font-bold tw-text-center">DIREKOMENDASIKAN UNTUK</p>
                    <div class="tw-w-[18%]"/>
                </div>
                <div class="tw-flex tw-justify-between">
                    <p class="tw-w-[0%] lg:tw-w-[5%]
                    tw-opacity-0">|</p>
                    <div class="tw-w-[90%] lg:tw-w-[70%] tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-2 tw-justify-around tw-py-10">
                        <CardContentHome1 judul={pelajar.name} subjudul1={pelajar.subtitile1} subjudul2={pelajar.subtitile2} gambar={pelajar.image}/>
                        <CardContentHome1 judul={mahasiswa.name} subjudul1={mahasiswa.subtitile1} subjudul2={mahasiswa.subtitile2} gambar={mahasiswa.image}/>
                        <CardContentHome1 judul={guru.name} subjudul1={guru.subtitile1} subjudul2={guru.subtitile2} gambar={guru.image}/>
                        <CardContentHome1 judul={umum.name} subjudul1={umum.subtitile1} subjudul2={umum.subtitile2} gambar={umum.image}/>
                    </div>
                    <p class="tw-w-[0%] lg:tw-w-[5%]
                    tw-opacity-0">|</p>
                </div>
            </div>
            <div class="tw-w-full tw-h-28 md:tw-h-44 tw-bg-[#FFF6D9] tw-bg-wave tw-bg-no-repeat tw-bg-cover tw-z-0 tw-scale-y-[-1]"/>

            <div class="tw-flex tw-flex-col tw-bg-[#FFF6D9] tw-py-12 sm:tw-py-16">
                <div class="tw-flex tw-justify-between">
                    <div class="tw-w-[18%]"/>
                        <p class="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[32px] lg:tw-text-[37px] 
                        tw-text-black tw-font-bold tw-text-center tw-py-5">Pengerjaan Alur Course secara Lengkap!</p>
                    <div class="tw-w-[18%]"/>
                </div>
                <div class="tw-flex tw-justify-between">
                    <div class="tw-w-[100%]
                    tw-flex tw-flex-col sm:tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-justify-between tw-py-5 tw-px-10">
                        <CardContentHome2 judul={judul2[0]} gambar={gambar2[0]}/>
                        <CardContentHome2 judul={judul2[1]} gambar={gambar2[1]}/>
                        <CardContentHome2 judul={judul2[2]} gambar={gambar2[2]}/>
                        <CardContentHome2 judul={judul2[3]} gambar={gambar2[3]}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentHomeComponent;