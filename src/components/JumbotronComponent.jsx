import React, { useState, useEffect } from 'react'

const JumbotronComponent = () => {
    return(
        <>
            <div class="tw-h-fit tw-bg-cover tw-bg-center tw-bg-jumbotron">
                <div class="tw-bg-gradient-to-r tw-from-transparent tw-to-black tw-size-full tw-opacity-100 tw-m-auto">
                    <div class="tw-flex tw-justify-between">
                        <div class="tw-w-[0%] md:tw-w-[18%]">
                            <img src="pencil_1.png" class="tw-ps-20 tw-pt-16"/>
                        </div>
                        <div class="tw-w-[55%] tw-text-white tw-py-24">
                            <p class="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[30px] lg:tw-text-[60px] 
                            tw-font-semibold 
                            tw-tracking-[4px]">BELAJAR BAHASA ARAB LEBIH MUDAH & FLEKSIBEL</p>
                            <p class="tw-text-[12px] sm:tw-text-[14px] md:tw-text-[18px] lg:tw-text-[25px]
                            tw-font-medium
                            tw-tracking-[4px]
                            tw-py-3">Dengan <span class="tw-font-extrabold">Qolami Web</span>, Belajar bahasa arab jadi mudah, fleksibilitas dan integritas tanpa ada gangguan</p>
                            <div class="tw-flex tw-justify-between tw-py-8 md:tw-py-12 lg:tw-py-20">
                                <div class="tw-w-[18%]"/>
                                <button class="tw-bg-[#C2EF90] tw-py-3 tw-px-3 sm:tw-px-7 tw-rounded-lg tw-text-black tw-tracking-[2px] tw-font-medium tw-text-sm sm:tw-text-md">GET STARTED</button>
                                <div class="tw-w-[18%]"/>
                            </div>
                        </div>
                        <div class="tw-w-[0%] md:tw-w-[18%]"/>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default JumbotronComponent;