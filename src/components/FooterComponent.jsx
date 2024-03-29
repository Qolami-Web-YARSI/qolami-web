import React, { useState, useEffect } from 'react'

const FooterComponent = () => {
    return(
        <>
            <footer>
                <div class="tw-flex tw-bg-[#458200] tw-justify-between tw-p-2 tw-py-12">
                    <div class="tw-flex tw-flex-col tw-justify-center">
                        <p></p>
                    </div>
                    <div class="tw-flex tw-flex-col tw-justify-center">
                        <p class="tw-px-7 tw-font-normal tw-text-white tw-text-[15px] sm:tw-text-[20px] tw-text-center">COPYRIGHT © QOLAMI - 2024. ALL RIGHT RESERVED</p>
                    </div>
                    <div class="tw-flex tw-flex-col tw-justify-center">
                        <p></p>
                    </div>
                </div>
            </footer>   
        </>
    )
}

export default FooterComponent;