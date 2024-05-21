import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { IoMdClose } from "react-icons/io";

const NavigationComponent2 = (props) => {
    const style = { color: "#FFF6D9" }
    const [data, setData] = useState(null);

    const klik = async () => {
      localStorage.removeItem('id')
      localStorage.removeItem('token')
      window.location.reload()
    }

    useEffect(()=>{
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
        //   console.log(response.data.data)
        //   console.log(response.data.data.firstName)
        //   console.log(response.data.data.lastName)
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
                        <li className="tw-flex tw-m-3 tw-mt-5 tw-mx-6 tw-text-4xl tw-text-[#C2EF90] tw-font-semibold tw-self-end">
                            <button onClick={()=>props.buttonNavX()} className="tw-flex tw-rounded-lg tw-size-7">
                                <div className="tw-bg-red-500 tw-rounded-md tw-m-auto tw-text-[35px]">
                                    <IoMdClose style={style} />
                                </div>
                            </button>
                        </li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/">Beranda</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/tentang">Tentang</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/kursus">Kursus</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/profile">{data && data.firstName+" "+data.lastName}</a></li>
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