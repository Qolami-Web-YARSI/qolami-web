import React, { useState, useEffect } from 'react'

const CardContentHome2 = (props) => {
    return(
        <>
            <div class="tw-flex tw-flex-col tw-justify-W tw-pt-2 sm:tw-pt-10 sm:tw-my-3 sm:tw-mx-5">
                <div>
                    <div class={`tw-size-28 md:tw-size-36 tw-rounded-xl tw-bg-cover tw-bg-[#009900] tw-bg-no-repeat tw-bg-center tw-mx-auto ${props.gambar}`}/>
                </div>
                <div class="tw-flex tw-flex-col tw-py-6">
                    <p class="tw-text-[15px] md:tw-text-[20px] lg:tw-text-[25px]
                    tw-font-bold tw-tracking-[2px] tw-text-center">{props.judul}</p>
                </div>
            </div>
        </>
    )
}

export default CardContentHome2;