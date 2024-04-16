import React, { useState, useEffect } from 'react'
import axios from 'axios';

const NavigationComponent2 = (props) => {
    const [data, setData] = useState(null);

    const klik = async () => {
      try {
        const response = await axios.get('http://localhost:2002/pengguna')
        response.data.map(a => {
          if(a.id == localStorage.getItem('id')){
            axios.put(`http://localhost:2002/pengguna/${localStorage.getItem('id')}`, 
            { 
              id: localStorage.getItem('id').toString(),
              namaDepan: a.namaDepan,
              namaBelakang: a.namaBelakang,
              email: a.email,
              password: a.password,
              gambarProfile: a.gambarProfile,
              token: null
            });
            localStorage.removeItem('id')
            localStorage.removeItem('token')
            window.location.reload()
          }
        })
      } catch(e) {
        console.log(e)
      }
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
        <form className={`tw-size-full tw-bg-transparent tw-z-50 tw-font-poppins ${props.nav? 'tw-fixed' : 'tw-hidden'}`} onSubmit={klik}>
            <div className="tw-flex tw-flex-row-reverse tw-size-full">
                <div className="tw-h-full tw-w-1/2 tw-bg-gradient-to-b tw-border-2 tw-border-black tw-shadow-2xl tw-z-[999px] tw-bg-[#458200]">
                    <ul className="tw-flex tw-w-full tw-flex-col tw-gap-y-4">
                        <li className="tw-flex tw-m-3 tw-text-4xl tw-text-[#C2EF90] tw-font-semibold tw-self-end"><button onClick={()=>props.buttonNavX()}><img className="tw-m-auto" src="exit.svg"/></button></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/">Beranda</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/tentang">Tentang</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/kursus">Kursus</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/profile">{data && data.namaDepan+" "+data.namaBelakang}</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><button type="submit">Keluar</button></li>
                    </ul>
                </div>
                <div className="tw-h-full tw-w-1/2 tw-bg-black z-50 tw-opacity-35">
                    <button className='tw-size-full' onClick={()=>props.buttonNavX()}></button>
                </div>
            </div>
        </form>
    )
}

export default NavigationComponent2