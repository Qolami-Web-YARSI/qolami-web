import React, { useState, useEffect } from 'react'

const CardContentAbout1 = (props) => {
    return(
        <>
            <div class="tw-flex tw-flex-row sm:tw-flex-col tw-py-5 md:tw-py-7 lg:tw-py-10 tw-gap-5 tw-mx-auto sm:tw-mx-5 tw-w-72 sm:tw-w-96">
                <div class="tw-w-24 sm:tw-w-36 md:tw-w-44 tw-bg-cover tw-bg-no-repeat tw-bg-center tw-justify-center tw-items-center tw-mx-auto">
                    <img src="card1_1.png" class="tw-rounded-full tw-shadow-2xl"/>
                </div>
                <div class="tw-w-[100%] sm:tw-w-[60%] 
                tw-flex tw-flex-col tw-py-1 tw-mx-auto tw-justify-center">
                    <p class="tw-text-[12px] md:tw-text-[14px]
                    tw-font-bold sm:tw-mx-auto sm:tw-text-center">{props.name}</p>
                    <p class="tw-text-[14px] md:tw-text-[18px]
                    tw-font-semibold sm:tw-mx-auto sm:tw-text-center">{props.npm}</p>
                </div>
            </div>
        </>
    )
}

export default CardContentAbout1;