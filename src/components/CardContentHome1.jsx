import React, { useState, useEffect } from 'react'

const CardContentHome1 = (props) => {
    return(
        <>
            <div class="tw-flex tw-flex-col sm:tw-flex-row tw-py-5 md:tw-py-7 lg:tw-py-10 tw-gap-5 tw-mx-5 tw-justify-around">
                <div class="tw-w-32 tw-bg-cover tw-bg-no-repeat tw-bg-center tw-justify-center tw-items-center tw-mx-auto">
                    <img src={`${props.gambar}`} class="tw-rounded-full"/>
                </div>
                <div class="tw-w-[100%] sm:tw-w-[60%] 
                tw-flex tw-flex-col tw-ps-5 tw-py-1 sm:tw-py-6">
                    <p class="md:tw-text-[22px] lg:tw-text-[25px]
                    tw-font-bold tw-tracking-[2px] tw-mx-auto sm:tw-mx-0">{props.judul}</p>
                    <ul class="tw-ps-5 sm:tw-ps-10
                    tw-list-disc list-outside  tw-justify-center tw-mx-auto sm:tw-mx-0">
                        <li class="md:tw-text-[16px] lg:tw-text-[20px] 
                        tw-font-semibold">{props.subjudul1}</li>
                        <li class="md:tw-text-[16px] lg:tw-text-[20px]
                        tw-font-semibold">{props.subjudul2}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CardContentHome1;