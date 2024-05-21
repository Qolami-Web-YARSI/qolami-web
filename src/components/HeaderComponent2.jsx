import React, { useState, useEffect } from 'react'
import NavigationComponent2 from './NavigationComponent2'
import { FiMenu } from "react-icons/fi";
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
                            <img src="https://storage.googleapis.com/qolami-web/img/logo-qolami.svg" className="tw-w-[92px] tw-mx-0"/>
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
                        <div className="md:tw-flex tw-my-auto tw-gap-3 tw-text-[#009900] hover:tw-text-black" onMouseEnter={() => setNav2(true)} onMouseLeave={() => setNav2(false)}>
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
                    <ul className={`${getNav2? 'tw-block' : 'tw-hidden'} tw-size-[200px] tw-mt-4 tw-rounded-[15px]`} onMouseEnter={() => setNav2(true)} onMouseLeave={() => setNav2(false)}>
                        <ul className={`${getNav2? 'tw-block' : 'tw-hidden'} tw-bg-[#FFF6D9] tw-w-[200px] tw-mt-20 tw-rounded-[10px] tw-mx-auto tw-border-[#009900] tw-border-2 tw-cursor-pointer  tw-shadow-[6px_6px_6px_0px_rgba(0,0,0,0.3)]`} >
                            <button className='tw-flex tw-gap-5 hover:tw-bg-[#90C963] tw-px-6 tw-py-2 tw-rounded-t-[8px] tw-w-full' data-bs-target="#editProfileModal" data-bs-toggle="modal">
                                <img src="activity.svg" className='tw-size-6 tw-my-auto'/>
                                <p className='tw-text-[19px] tw-my-auto'>Aktivitas</p>
                            </button>
                            <button className='tw-flex tw-gap-5 hover:tw-bg-[#90C963] tw-py-2 tw-px-6 tw-w-full' data-bs-target="#ubahPasswordModal" data-bs-toggle="modal">
                                <img src="settings.svg" className='tw-size-6 tw-my-auto'/>
                                <p className='tw-text-[19px] tw-my-auto'>Pengaturan</p>
                            </button>
                            <form onSubmit={klik}>
                                <button className='tw-flex tw-gap-5 hover:tw-bg-[#90C963] tw-px-6 tw-py-2 tw-rounded-b-[8px] tw-w-full' type="submit">
                                    <img src="log-out.svg" className='tw-size-6 tw-my-auto'/>
                                    <p className='tw-text-[19px] tw-my-auto'>Keluar</p>
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