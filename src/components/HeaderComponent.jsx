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
            <header class="tw-border-b-2 tw-border-[#009900]">
                <nav class="tw-flex tw-bg-[#FFF6D9] tw-justify-between tw-p-2 tw-px-5">
                    <div class="tw-flex tw-flex-col tw-w-[50%] md:tw-w-[30%]">
                        <a href="/">
                            <img src="logo-qolami.svg" class="tw-w-[92px]"/>
                        </a>
                    </div>
                    <div class="tw-hidden md:tw-flex tw-flex-col tw-justify-center">
                        <ul>
                            <li class="tw-inline tw-mx-3 lg:tw-mx-7  tw-font-bold tw-text-[#009900] tw-text-[15px] lg:tw-text-[20px]"><a href="/">Beranda</a></li>
                            <li class="tw-inline tw-mx-3 lg:tw-mx-7 tw-font-bold tw-text-[#009900] tw-text-[15px] lg:tw-text-[20px]"><a href="/about">Tentang</a></li>
                            <li class="tw-inline tw-mx-3 lg:tw-mx-7 tw-font-bold tw-text-[#009900] tw-text-[15px] lg:tw-text-[20px]"><a href="/course">Kursus</a></li>
                        </ul>
                    </div>
                    <div class="tw-hidden md:tw-flex tw-flex-row tw-justify-end tw-gap-2 tw-w-[50%] md:tw-w-[30%]">
                        <button type="button" class="tw-mx-3 lg:tw-mx-7 tw-font-bold tw-text-[#009900] tw-text-[15px] lg:tw-text-[20px] tw-text-right" data-bs-toggle="modal" data-bs-target="#masukModal">Masuk</button>
                        <button type="button" class="tw-bg-[#458200] tw-px-7 tw-my-3 tw-rounded-full tw-font-bold tw-text-[#C2EF90] tw-text-[15px] lg:tw-text-[20px] tw-text-right" data-bs-toggle="modal" data-bs-target="#daftarModal">Daftar</button>
                    </div>
                    <div class="tw-flex tw-mx-4 md:tw-hidden tw-flex-row tw-justify-end tw-w-[50%] md:tw-w-[30%] ">
                        <button onClick={()=>buttonNav()}><img className="w-10 inline tw-invert" src="./hamburger.svg" alt="hamburger"/></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderComponent;