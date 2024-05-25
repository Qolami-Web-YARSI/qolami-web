import React, { useState, useEffect } from 'react'
import NavigationComponent2 from './NavigationComponent2'
import { FiMenu } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import axios from 'axios'

const HeaderComponent2 = () => {
    const [getNav, setNav] = useState(false)
    const [getNav2, setNav2] = useState(false)
    const [data, setData] = useState(null);
    const [profileUrl, setProfileUrl] = useState('');

    const buttonNav = () => {
        setNav(!getNav)
        console.log(!getNav)
    }

    const klik = async () => {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        localStorage.setItem('isLogIn', false);
        window.location.reload()
      }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:2024/users/${localStorage.getItem('id')}`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
            })
            setData(response.data.data);
            if(response.data.data.profileUrl.includes("/uploads/")){
                response.data.data.profileUrl = `http://localhost:2024${response.data.data.profileUrl}`
                console.log(response.data.data.profileUrl)
                
            }else{
                response.data.data.profileUrl = response.data.data.profileUrl
                console.log(response.data.data.profileUrl)
            }
            //setProfileUrl(`http://localhost:2024${response.data.data.profileUrl}`)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])
    
    return(
        <>
            <NavigationComponent2 nav={getNav} buttonNavX={buttonNav}/>
            <header className="tw-border-b-2 tw-border-[#009900] tw-fixed tw-w-full tw-z-20 tw-font-poppins">
                <nav className="tw-flex tw-bg-[#FFF6D9] tw-justify-between tw-py-4 tw-px-7 lg:tw-px-12 xl:tw-px-32">
                    <div className="tw-flex tw-flex-col tw-w-[50%] md:tw-w-[30%]">
                        <a href="/">
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_HZZNF384eOy7alKf4IkChktw-lZoI-EVvcHkshieiyCVV0bGYmYJo_CHVCkighQCB7khaNK3tmUgYdunoZl_Lt0Nd9f-mNlHU1Igcc-FWtI_pcqEld8b1ZoK9yg04IQtMuTL7DH61L-m2n9NDbKg27hpTJC662--FqHXqK8xgraG8Y1aUFBys5GhZtW8cwr5U3D5-yuZm8_ZV3caofeRikKsLuRtSVLDlohqeFCoo6fv26gZKrcmEXFNQi5Q7754H-mB7Mzj_qzrrgY7dXHvwiSlRnP8t0KIeMlQFUZuGlbUnSTngz9jXvG-skZHFUwvGU0H56PNSvVEDcBTTz1teL1OvTFxAnbUEkICT3tZ0pqsHl90p8U2ncUl1cw3w7Bj3IdP95sN3rGTn9e2TpRo4sYWtcrSEcJ-KYEucFVkteudW4MxdzQfKe-JnsI5Qtv81jfEZta8w-3lLopyhz1CicJrR4LoNRqNclWGTrWSPent1U-nVpmddnLwT70GMQGeBec7kpzQ0NMwqAr1umKPeFgBfsIJHxgsAVKZSXIyJ4JIka1h9tbO5nYdzR1IlSjFtzELwF7X_FJesm_mWxEgzf4-J3xP7jGiO-jUSeEnjbSj2eTEgVJGXDc4uVZ88x3wzBeYJ9od_bbPo_ViE1MWe-Ae00EBVaiO7AJK2w88VSJGZnfTnuL2Vx3FX-AB7ve3Q_g1fsx8nMnp4kSKsuB9NZtdkp7xJBPd1Sdk-UyJgvEBAI0rTCKFljG8aIlM_pfkVmhPB32MBm8CTnHIeaNFut1ZpSWLq3-u8iGD4rMb0TCj9-C9vCpxzmpe3v8PWbHnK7A9GXLJslByC20K3LlZIl9bzLq6Mzt9_BwLZgNB1KWZIOEqvprmSgAwhAqB0VwNVLchLNyf6Y53pLsMnyTwHbBcBO9SnHbJUD8YegK942Gzry6Yy4cO_ADO8hyHFmIkFB_xgSMDn_8udhQdtQl8qplTcrmtbMHDt0Mge4hKrykE5DEWrCBOTAIbZLM-aND328ACLjirrXE0hDc1DGO9Or_OPhSCi4c39jb7HN7OFIwd7YH1djzZ_wDM4x6G1igHjXMwpp5Jp3Yve6VwrKYovCPOHssE1FDRzXIQfH-u65fJ-Khn82tR6cLuiuUo97kekdF8YCl_MAALLP4f505VYfKW7WuXQQaCjuc2vO8u3TWNbxfOEBHM8wkjGNQ4riTWg5Ld2iffeuzK4V6c3AmD359MvXCH5P900Jfs_ElOKMFtCDP3Uup8emBInHH0WzxvVtJapaC0DKHHQ9oNxOBd26smDomeYehvE9qLs7uHF2e8FFPwgfIKOf8UJ41JjoeYNwqFtZNjJyOAqROCb4YvriBHhV1Rh1X-5IvPskszVrq43oizbM2VDWeSExeY4JkDF5FC4kIR_7lz9uef7vQ8Ks_XTwDphT6QL27EnruqdJo56-yEaVtp6_bvpOVj-Rwawh5bxX-1PZA2SIHSEs2_BzvsrvQy2GonQJnCUQRiGM2AsQfKpIWQb_Fy4x-iyrlwdNE86W52OI-sqXU_2gN8lHuBOXN7itnLVxUxYKwBl7Rqk7qKEwSP9JgQkyVgikBKWSk34XH4Sn_YbRnSbXz3ZdeAVOG9ahkMRSO_Mt6O9VpB_9xtojK2PzRFLhtMVyTBamCo7uW1wtTWnRWD4NrG3F9ePzlseSqvjx7NACjs4xaoqaNIO6=w1920-h868" className="tw-w-[92px] tw-mx-0"/>
                        </a>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-col tw-justify-center">
                        <ul>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5  tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]">
                                <a href="/">Beranda</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]">
                                <a href="/kursus">Kursus</a></li>
                            <li className="tw-inline tw-mx-3 lg:tw-mx-5 tw-font-bold tw-text-[#009900] hover:tw-text-black tw-text-[15px] lg:tw-text-[20px]">
                                <a href="/tentang">Tentang</a></li>
                        </ul>
                    </div>
                    <div className="tw-hidden md:tw-flex tw-flex-row tw-justify-end tw-gap-2 tw-w-[50%] md:tw-w-[30%] tw-cursor-pointer tw-me-10">
                        <div className="md:tw-flex tw-my-auto tw-gap-3 tw-text-black" onMouseEnter={() => setNav2(true)} onMouseLeave={() => setNav2(false)}>
                            <p className="tw-my-auto tw-text-[15px] lg:tw-text-[20px] tw-font-bold">{data && data.firstName+" "+data.lastName}</p>
                            <button type="button" className='tw-rounded-full'>
                                <img src={data && data.profileUrl} className="tw-size-[50px] tw-my-auto tw-rounded-[50px] tw-border-black tw-object-cover tw-object-center"/>
                            </button>
                        </div>
                    </div>
                    <div className="tw-flex tw-mx-4 md:tw-hidden tw-flex-row tw-justify-end tw-w-[50%] md:tw-w-[30%]">
                        <button onClick={()=>buttonNav()} className='tw-text-[40px] sm:tw-text-[60px] hover:tw-text-[#90C963]'><FiMenu /></button>
                    </div>
                </nav>
            </header>
            <div className={`tw-w-full tw-z-30 tw-font-poppins ${getNav2? 'tw-fixed' : 'tw-hidden'}`} onMouseEnter={() => setNav2(true)} onMouseLeave={() => setNav2(false)} onSubmit={klik}>
                <div className='tw-w-full tw-flex tw-flex-row-reverse tw-px-36'>
                    <ul className={`${getNav2? 'tw-block' : 'tw-hidden'} tw-size-[220px] tw-mt-4 tw-rounded-[15px]`} onMouseEnter={() => setNav2(true)} onMouseLeave={() => setNav2(false)}>
                        <ul className={`${getNav2? 'tw-block' : 'tw-hidden'} tw-bg-[#FFF6D9] tw-w-[220px] tw-mt-20 tw-rounded-[10px] tw-mx-auto tw-border-[#009900] 
                        tw-border-2 tw-cursor-pointer tw-shadow-[6px_6px_6px_0px_rgba(0,0,0,0.3)]`} >
                            <a href="/aktifitas" className='tw-flex tw-gap-5 hover:tw-bg-[#90C963] tw-px-6 tw-py-2.5 tw-rounded-t-[8px] tw-w-full'>
                                {/* <img src="activity.svg" className='tw-size-6 tw-my-auto'/> */}
                                <FiActivity className='tw-size-6 tw-my-auto'/>
                                <p className='tw-text-[19px] tw-my-auto'>Aktifitas</p>
                            </a>
                            <a href="/pengaturan" className='tw-flex tw-gap-5 hover:tw-bg-[#90C963] tw-py-2.5 tw-px-6 tw-w-full'>
                                {/* <img src="settings.svg" className='tw-size-6 tw-my-auto'/> */}
                                <FiSettings className='tw-size-6 tw-my-auto'/>
                                <p className='tw-text-[19px] tw-my-auto'>Pengaturan</p>
                            </a>
                            <form onSubmit={klik}>
                                <button className='tw-flex tw-gap-5 hover:tw-bg-[#90C963] tw-px-6 tw-py-2.5 tw-rounded-b-[8px] tw-w-full' type="submit">
                                    {/* <img src="log-out.svg" className='tw-size-6 tw-my-auto'/> */}
                                    <RxExit className='tw-size-6 tw-text-[#F43F5E] tw-my-auto'/>
                                    <p className='tw-text-[19px] tw-my-auto tw-text-[#F43F5E]'>Keluar</p>
                                </button>
                            </form>
                        </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent2;