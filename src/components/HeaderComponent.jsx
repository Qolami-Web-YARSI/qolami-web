import React, { useState, useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
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
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_HZZNF384eOy7alKf4IkChktw-lZoI-EVvcHkshieiyCVV0bGYmYJo_CHVCkighQCB7khaNK3tmUgYdunoZl_Lt0Nd9f-mNlHU1Igcc-FWtI_pcqEld8b1ZoK9yg04IQtMuTL7DH61L-m2n9NDbKg27hpTJC662--FqHXqK8xgraG8Y1aUFBys5GhZtW8cwr5U3D5-yuZm8_ZV3caofeRikKsLuRtSVLDlohqeFCoo6fv26gZKrcmEXFNQi5Q7754H-mB7Mzj_qzrrgY7dXHvwiSlRnP8t0KIeMlQFUZuGlbUnSTngz9jXvG-skZHFUwvGU0H56PNSvVEDcBTTz1teL1OvTFxAnbUEkICT3tZ0pqsHl90p8U2ncUl1cw3w7Bj3IdP95sN3rGTn9e2TpRo4sYWtcrSEcJ-KYEucFVkteudW4MxdzQfKe-JnsI5Qtv81jfEZta8w-3lLopyhz1CicJrR4LoNRqNclWGTrWSPent1U-nVpmddnLwT70GMQGeBec7kpzQ0NMwqAr1umKPeFgBfsIJHxgsAVKZSXIyJ4JIka1h9tbO5nYdzR1IlSjFtzELwF7X_FJesm_mWxEgzf4-J3xP7jGiO-jUSeEnjbSj2eTEgVJGXDc4uVZ88x3wzBeYJ9od_bbPo_ViE1MWe-Ae00EBVaiO7AJK2w88VSJGZnfTnuL2Vx3FX-AB7ve3Q_g1fsx8nMnp4kSKsuB9NZtdkp7xJBPd1Sdk-UyJgvEBAI0rTCKFljG8aIlM_pfkVmhPB32MBm8CTnHIeaNFut1ZpSWLq3-u8iGD4rMb0TCj9-C9vCpxzmpe3v8PWbHnK7A9GXLJslByC20K3LlZIl9bzLq6Mzt9_BwLZgNB1KWZIOEqvprmSgAwhAqB0VwNVLchLNyf6Y53pLsMnyTwHbBcBO9SnHbJUD8YegK942Gzry6Yy4cO_ADO8hyHFmIkFB_xgSMDn_8udhQdtQl8qplTcrmtbMHDt0Mge4hKrykE5DEWrCBOTAIbZLM-aND328ACLjirrXE0hDc1DGO9Or_OPhSCi4c39jb7HN7OFIwd7YH1djzZ_wDM4x6G1igHjXMwpp5Jp3Yve6VwrKYovCPOHssE1FDRzXIQfH-u65fJ-Khn82tR6cLuiuUo97kekdF8YCl_MAALLP4f505VYfKW7WuXQQaCjuc2vO8u3TWNbxfOEBHM8wkjGNQ4riTWg5Ld2iffeuzK4V6c3AmD359MvXCH5P900Jfs_ElOKMFtCDP3Uup8emBInHH0WzxvVtJapaC0DKHHQ9oNxOBd26smDomeYehvE9qLs7uHF2e8FFPwgfIKOf8UJ41JjoeYNwqFtZNjJyOAqROCb4YvriBHhV1Rh1X-5IvPskszVrq43oizbM2VDWeSExeY4JkDF5FC4kIR_7lz9uef7vQ8Ks_XTwDphT6QL27EnruqdJo56-yEaVtp6_bvpOVj-Rwawh5bxX-1PZA2SIHSEs2_BzvsrvQy2GonQJnCUQRiGM2AsQfKpIWQb_Fy4x-iyrlwdNE86W52OI-sqXU_2gN8lHuBOXN7itnLVxUxYKwBl7Rqk7qKEwSP9JgQkyVgikBKWSk34XH4Sn_YbRnSbXz3ZdeAVOG9ahkMRSO_Mt6O9VpB_9xtojK2PzRFLhtMVyTBamCo7uW1wtTWnRWD4NrG3F9ePzlseSqvjx7NACjs4xaoqaNIO6=w1920-h868" className="tw-w-[92px] tw-mx-0"/>
                        </a>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-col tw-justify-center">
                        <ul>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/">Beranda</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/kursus">Kursus</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]"><a href="/tentang">Tentang</a></li>
                        </ul>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-row tw-justify-end tw-gap-2 lg:tw-gap-3 xl:tw-gap-5 tw-w-[50%] md:tw-w-[30%]">
                        <button type="button" className="hover:tw-bg-[#007100] tw-border-[3px] tw-border-[#009900] hover:tw-border-[#007100] 
                        tw-px-6 lg:tw-px-8 tw-py-2 tw-my-7 lg:tw-my-5 tw-rounded-[50px] tw-font-bold tw-text-[#009900] hover:tw-text-white tw-text-[15px] lg:tw-text-[20px] tw-text-right" 
                        data-bs-toggle="modal" data-bs-target="#masukModal">Masuk</button>
                        <button type="button" className="tw-bg-[#009900] hover:tw-bg-[#007100]                                             
                        tw-px-8 lg:tw-px-10 tw-py-2 tw-my-7 lg:tw-my-5 tw-rounded-[50px] tw-font-bold tw-text-white tw-text-[15px] lg:tw-text-[20px] tw-text-right" data-bs-toggle="modal" 
                        data-bs-target="#daftarModal">Daftar</button>
                    </div>
                    <div className="tw-flex tw-mx-4 md:tw-hidden tw-flex-row tw-justify-end tw-w-[50%] md:tw-w-[30%] ">
                        <button onClick={()=>buttonNav()} className='tw-text-[40px] sm:tw-text-[60px] hover:tw-text-[#90C963]'><FiMenu /></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderComponent;