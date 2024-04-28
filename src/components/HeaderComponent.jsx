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
            <header className="tw-border-b-2 tw-border-[#009900] tw-fixed tw-w-full tw-z-20 tw-font-poppins">
                <nav className="tw-flex tw-bg-[#FFF6D9] tw-justify-between tw-py-4 tw-px-7 lg:tw-px-12 xl:tw-px-32">
                    <div className="tw-flex tw-flex-col tw-w-[50%] md:tw-w-[30%]">
                        <a href="/">
                            <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYCDTFRs7L1ZfZKwcM4xNlSYjpOLwpAmT6CRHkkkjftqfmOEWOXHZA3_udtDgsicaxGNVD8CskyFxRuVeMmdXTLHZ8KCTFtZAs=w1920-h868" className="tw-w-[92px] tw-mx-0"/>
                        </a>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-col tw-justify-center">
                        <ul>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/">Beranda</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/tentang">Tentang</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/kursus">Kursus</a></li>
                        </ul>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-row tw-justify-end tw-gap-2 tw-w-[50%] md:tw-w-[30%]">
                        <button type="button" className="tw-mx-3 lg:tw-mx-2 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px] tw-text-right" data-bs-toggle="modal" data-bs-target="#masukModal">Masuk</button>
                        <button type="button" className="tw-bg-[#458200] hover:tw-bg-[#C2EF90] tw-px-8 tw-py-2 tw-my-5 tw-rounded-[50px] tw-font-bold tw-text-[#C2EF90] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px] tw-text-right" data-bs-toggle="modal" data-bs-target="#daftarModal">Daftar</button>
                    </div>
                    <div className="tw-flex tw-mx-4 md:tw-hidden tw-flex-row tw-justify-end tw-w-[50%] md:tw-w-[30%] ">
                        <button onClick={()=>buttonNav()}><img className="tw-w-14 inline" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="hamburger"/></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderComponent;