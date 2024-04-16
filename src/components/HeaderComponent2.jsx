import React, { useState, useEffect } from 'react'
import NavigationComponent2 from './NavigationComponent2'
import axios from 'axios'

const HeaderComponent2 = () => {
    const [getNav, setNav] = useState(false)
    const [data, setData] = useState(null);

    const buttonNav = () => {
        setNav(!getNav)
        console.log(!getNav)
    }

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:2002/pengguna/${localStorage.getItem('id')}`)
                setData(response.data);
            }catch(e){
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return(
        <>
            <NavigationComponent2 nav={getNav} buttonNavX={buttonNav}/>
            <header className="tw-border-b-2 tw-border-[#009900] tw-fixed tw-w-full tw-z-20 tw-font-poppins">
                <nav className="tw-flex tw-bg-[#FFF6D9] tw-justify-between tw-py-4 tw-px-7 lg:tw-px-12 xl:tw-px-32">
                    <div className="tw-flex tw-flex-col tw-w-[50%] md:tw-w-[30%]">
                        <a href="/">
                            <img src="logo-qolami.svg" className="tw-w-[92px] tw-mx-0"/>
                        </a>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-col tw-justify-center">
                        <ul>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5  tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/">Beranda</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/tentang">Tentang</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/kursus">Kursus</a></li>
                        </ul>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-row tw-justify-end tw-gap-2 tw-w-[50%] md:tw-w-[30%] tw-cursor-pointer tw-me-10">
                        <div className="md:tw-flex tw-my-auto tw-gap-3 tw-text-[#009900] hover:tw-text-black">
                            <p className="tw-my-auto tw-text-[15px] lg:tw-text-[20px] tw-font-bold">{data && data.namaDepan+" "+data.namaBelakang}</p>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#editProfileModal">
                                <img src={data && data.gambarProfile} className="tw-size-[50px] tw-my-auto tw-rounded-[50px] tw-border-black"/>
                            </button>
                        </div>
                    </div>
                    <div className="tw-flex tw-mx-4 md:tw-hidden tw-flex-row tw-justify-end tw-w-[50%] md:tw-w-[30%] ">
                        <button onClick={()=>buttonNav()}><img className="w-10 inline tw-invert" src="./hamburger.svg" alt="hamburger"/></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderComponent2;