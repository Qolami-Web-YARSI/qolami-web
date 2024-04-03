import React, { useState, useEffect } from 'react'
import CardContentAbout1 from './CardContentAbout1';
import CardContentAbout2 from './CardContentAbout2';

const ContentAboutComponent = () => {

    const name = ['ANGGA ADITYA PUTRA PRATAMA', 'RIZAL ABIMANYU', 'TARA THANIA ANANTA']
    const npm = ['(1402020008)', '(1402020070)', '(1402020072)']
    const image = ['cardabout_1.svg', 'cardabout_2.svg', 'cardabout_3.svg', 'cardabout_4.svg', 'cardabout_5.svg',
                    'cardabout_6.svg', 'cardabout_7.svg', 'cardabout_8.svg', 'cardabout_9.svg', 'cardabout_1.svg']

    return(
        <>
           <div className="tw-flex tw-flex-col tw-bg-[#FFF6D9]">
                <div className="tw-flex tw-flex-col tw-gap-5 tw-my-10">
                    <div className="tw-flex tw-justify-between">
                        <p className="tw-text-[25px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[55px] 
                            tw-text-black tw-font-bold tw-text-center tw-py-5 tw-mx-auto">About Qolami</p>
                    </div>
                    <div className="tw-flex tw-justify-between">
                        <img src="logo-qolami.svg" className=" tw-w-56 sm:tw-w-72 tw-mx-auto"/>
                    </div>
                    <div className="tw-flex tw-justify-between">
                    <p className="tw-text-[12px] sm:tw-text-[14px] md:tw-text-[18px] lg:tw-text-[25px]
                            tw-font-medium
                            tw-px-16 sm:tw-px-40 md:tw-px-48 lg:tw-px-64 tw-text-center"><span className="tw-font-extrabold">"Qolami"</span> adalah sebuah platform pembelajaran Bahasa Arab yang interaktif dengan media gambar, audio, dan video yang sangat mudah dipahami oleh berbagai lapisan masyarakat.</p>
                    </div>
                </div>
                <div className="tw-w-full tw-h-16 md:tw-h-44 tw-bg-[#FFF6D9] tw-bg-wave tw-bg-no-repeat tw-bg-cover"/>
                    <div className="tw-flex tw-flex-col tw-w-full tw-bg-[#90C963]">
                        <div className="tw-flex tw-justify-between">
                            <p className="tw-text-[25px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[55px] 
                                tw-text-black tw-font-bold tw-text-center tw-py-5 tw-mx-auto">Developed By</p>
                        </div>
                        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center">
                            <CardContentAbout1 name={name[0]} npm={npm[0]}/>
                            <CardContentAbout1 name={name[1]} npm={npm[1]}/>
                            <CardContentAbout1 name={name[2]} npm={npm[2]}/>
                        </div>
                    </div>
                <div className="tw-w-full tw-h-16 md:tw-h-44 tw-bg-[#FFF6D9] tw-bg-wave tw-bg-no-repeat tw-bg-cover tw-z-0 tw-scale-y-[-1]"/>
                <div>
                    <div className="tw-flex tw-justify-between">
                        <p className="tw-text-[25px] sm:tw-text-[35px] md:tw-text-[40px] lg:tw-text-[55px] 
                            tw-text-black tw-font-bold tw-text-center tw-pt-20 tw-pb-7 tw-mx-auto">Created By</p>
                    </div>
                    <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-px-5 sm:tw-px-16 md:tw-px-24 lg:tw-px-32 tw-pt-10 tw-pb-10">
                        <CardContentAbout2 image={image[0]}/>
                        <CardContentAbout2 image={image[1]}/>
                        <CardContentAbout2 image={image[2]}/>
                        <CardContentAbout2 image={image[3]}/>
                        <CardContentAbout2 image={image[4]}/>
                        <CardContentAbout2 image={image[5]}/>
                        <CardContentAbout2 image={image[6]}/>
                        <CardContentAbout2 image={image[7]}/>
                        <CardContentAbout2 image={image[8]}/>
                        <CardContentAbout2 image={image[9]}/>
                    </div>
                    
                </div>
           </div>
        </>
    )
}

export default ContentAboutComponent;