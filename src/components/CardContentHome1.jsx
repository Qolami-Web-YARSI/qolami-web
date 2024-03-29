import React, { useState, useEffect } from 'react'

const CardContentHome1 = (props) => {
    return(
        <>
            <div class="tw-flex tw-flex-col tw-pt-5 md:tw-pt-7 lg:tw-pt-10 tw-gap-5 tw-mx-5 tw-justify-between tw-bg-[#C2EF90] tw-rounded-[30px] md:tw-rounded-none">
                <div class="tw-flex tw-h-24 xl:tw-h-40 tw-px-5 sm:tw-px-0">
                    <p class="tw-text-[28px] md:tw-text-[35px] xl:tw-text-[45px] 2xl:tw-text-[55px] tw-font-bold tw-text-center tw-text-[#009900] tw-my-auto tw-mx-auto">{props.judul}</p>
                </div>
                <img src={`${props.gambar}`} class="tw-mx-auto"/>
            </div>
        </>
    )
}

export default CardContentHome1;