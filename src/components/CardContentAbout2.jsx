import React, { useState, useEffect } from 'react'

const CardContentAbout2 = (props) => {
    return(
        <>
            <div class="tw-flex tw-flex-row tw-bg-[#C2EF90] tw-rounded-2xl tw-m-4">
                <div class="tw-flex tw-size-28 tw-m-4 tw-py-4 tw-mx-auto tw-justify-center">
                    <img src={props.image}/>
                </div>
            </div>
        </>
    )
}

export default CardContentAbout2;