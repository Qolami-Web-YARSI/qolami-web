const CardContentCourse = ({dataKursus}) => {
    return(
        <>
            {dataKursus.map((a) => {
                return(
                    <div className="tw-flex tw-flex-col" key={a.id}>
                        <div className="tw-flex tw-bg-[#90C963] tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                            <p className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center tw-mx-auto tw-font-poppins tw-tracking-[3px]">{a.nama}</p>
                        </div>
                        <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-py-7 tw-px-5">
                            <img src={a.gambar} className="tw-mx-auto tw-pb-7 tw-size-20 md:tw-size-28 lg:tw-size-40"/>
                            <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[25px] tw-font-poppins tw-text-center">{a.deskripsi}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardContentCourse