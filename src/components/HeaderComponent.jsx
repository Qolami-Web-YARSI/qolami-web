import React, { useState, useEffect } from 'react'
import NavigationComponent from './NavigationComponent'

const HeaderComponent = () => {
    const [getNav, setNav] = useState(false)
    const buttonNav = () => {
        setNav(!getNav)
        console.log(!getNav)
    }
    return(
        <>
            <NavigationComponent nav={getNav} buttonNavX={buttonNav}/>
            <header>
                <nav class="tw-flex tw-bg-[#458200] tw-justify-between tw-p-2 tw-px-5">
                    <div class="tw-flex tw-flex-col tw-w-[50%] md:tw-w-[30%]">
                        <a href="/">
                            <img src="logo-qolami.svg" class="tw-w-[92px]"/>
                        </a>
                    </div>
                    <div class="tw-hidden md:tw-flex tw-flex-col tw-justify-center">
                        <ul>
                            <li class="tw-inline tw-px-7 tw-font-bold tw-text-white tw-letter tw-tracking-[5px] tw-text-[12px]"><a href="/">HOME</a></li>
                            <li class="tw-inline tw-px-7 tw-font-bold tw-text-white tw-letter tw-tracking-[5px] tw-text-[12px]"><a href="/about">ABOUT</a></li>
                            <li class="tw-inline tw-px-7 tw-font-bold tw-text-white tw-letter tw-tracking-[5px] tw-text-[12px]"><a href="/course">COURSE</a></li>
                        </ul>
                    </div>
                    <div class="tw-hidden md:tw-flex tw-flex-col tw-justify-center tw-w-[50%] md:tw-w-[30%]">
                        <button type="button" class="tw-px-7 tw-font-bold tw-text-white tw-letter tw-tracking-[5px] tw-text-[12px] tw-text-right" data-bs-toggle="modal" data-bs-target="#masukModal">SIGN IN</button>
                    </div>
                    <div class="tw-flex md:tw-hidden tw-flex-row tw-justify-end tw-w-[50%] md:tw-w-[30%] ">
                        <button onClick={()=>buttonNav()}><img className="w-10 inline" src="./hamburger.svg" alt="hamburger"/></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderComponent;