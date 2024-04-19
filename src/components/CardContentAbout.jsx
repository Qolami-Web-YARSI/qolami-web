import React, { useState, useEffect } from 'react'

const CardContentAbout = (props) => {
    return(
        <>
            <div className="tw-flex tw-flex-row tw-bg-[#C2EF90] tw-rounded-2xl tw-m-4 tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-h-[170px] tw-w-[80%] sm:tw-h-[170px] sm:tw-w-[230px] md:tw-h-[170px] md:tw-w-[260px] lg:tw-h-[160px] lg:tw-w-[160px] 2xl:tw-h-[280px] 2xl:tw-w-[280px] tw-font-poppins tw-mx-auto">
                <div className="tw-flex tw-size-28 2xl:tw-size-40 tw-py-2 tw-m-auto tw-justify-center">
                    <img src={props.image}/>
                </div>
            </div>
        </>
    )
}

export default CardContentAbout;