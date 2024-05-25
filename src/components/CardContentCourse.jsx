import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DialogBerhasil4 from '../pages/DialogBerhasil4';

const CardContentCourse = ({tempDatas, tempUnlock, tempToken}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
       }, [])
    return(
        <>
            {tempDatas.map((a, b) => {
                return(
                    tempUnlock[b] || tempToken  ? (
                        a.id.includes("exercise") ? (
                            <div key={a.id} onClick={()=> window.location.reload()}>
                                <div className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-cursor-pointer tw-grayscale-0 tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}>
                                    <Link to={`/${a.id}`} key={a.id}>
                                        <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                                            <p className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center tw-mx-auto tw-font-poppins">{a.nama}</p>
                                        </div>
                                        <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                                            <img src={a.gambar} className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"/>
                                            <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">{a.deskripsi}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            a.id.includes("exam") ? (
                                <div key={a.id}>
                                    <div className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] 
                                    tw-cursor-pointer tw-grayscale-0 tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`} data-bs-target={`#dialogMulaiUjian${a.id}`} data-bs-toggle="modal">
                                        <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                                            <p className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center 
                                            tw-mx-auto tw-font-poppins">{a.nama}</p>
                                        </div>
                                        <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                                            <img src={a.gambar} className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"/>
                                            <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">{a.deskripsi}</p>
                                        </div>
                                    </div>
                                    <DialogBerhasil4 id={a.id}/>
                                </div>
                            ) : (
                                <div key={a.id}>
                                    <div className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] 
                                    tw-cursor-pointer tw-grayscale-0 tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}>
                                        <Link to={`/${a.id}`} key={a.id}>
                                            <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                                                <p className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold 
                                                tw-text-center tw-mx-auto tw-font-poppins">{a.nama}</p>
                                            </div>
                                            <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                                                <img src={a.gambar} className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"/>
                                                <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">{a.deskripsi}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        )
                    ) : (
                        <button key={a.id} type="button" data-bs-toggle="modal" data-bs-target="#daftarModal">
                            <div className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] 
                            tw-cursor-not-allowed tw-grayscale tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}>
                                <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                                    <p className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center
                                     tw-mx-auto tw-font-poppins">{a.nama}</p>
                                </div>
                                <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                                    <img src={a.gambar} className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"/>
                                    <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">{a.deskripsi}</p>
                                </div>
                            </div>
                        </button>
                    )
                )    
            })}
        </>
    )
}

export default CardContentCourse