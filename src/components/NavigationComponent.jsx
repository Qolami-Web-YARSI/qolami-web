const NavigationComponent = (props) => {
    return(
        <div className={`tw-size-full tw-bg-transparent tw-z-50 tw-font-poppins ${props.nav? 'tw-fixed' : 'tw-hidden'}`}>
            <div className="tw-flex tw-flex-row-reverse tw-size-full">
                <div className="tw-h-full tw-w-1/2 tw-bg-gradient-to-b tw-border-2 tw-border-black tw-shadow-2xl tw-z-[999px] tw-bg-[#458200]">
                    <ul className="tw-flex tw-w-full tw-flex-col tw-gap-y-4">
                        <li className="tw-flex tw-m-3 tw-text-4xl tw-text-[#C2EF90] tw-font-semibold tw-self-end"><button onClick={()=>props.buttonNavX()}><img className="tw-m-auto" src="exit.svg"/></button></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/">Beranda</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/tentang">Tentang</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold hover:tw-bg-[#C2EF90] hover:tw-text-black"><a href="/kursus">Kursus</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold tw-cursor-pointer hover:tw-bg-[#C2EF90] hover:tw-text-black" data-bs-toggle="modal" data-bs-target="#masukModal">Masuk</li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-[#C2EF90] tw-font-semibold tw-cursor-pointer hover:tw-bg-[#C2EF90] hover:tw-text-black" data-bs-toggle="modal" data-bs-target="#daftarModal">Daftar</li>
                    </ul>
                </div>
                <div className="tw-h-full tw-w-1/2 tw-bg-black z-50 tw-opacity-35">
                    <button className='tw-size-full' onClick={()=>props.buttonNavX()}></button>
                </div>
            </div>
        </div>
    )
}

export default NavigationComponent