const NavigationComponent = (props) => {
    return(
        <div className={`tw-size-full tw-bg-transparent tw-z-50 ${props.nav? 'tw-fixed' : 'tw-hidden'}`}>
            <div className="tw-flex tw-flex-row-reverse tw-size-full">
                <div className="tw-h-full tw-w-1/2 tw-bg-gradient-to-b tw-border-2 tw-border-black tw-shadow-2xl tw-z-[999px] tw-bg-[#458200]">
                    <ul className="tw-flex tw-w-full tw-flex-col tw-gap-x-8">
                        <li className="tw-block tw-px-7 tw-pt-3 tw-text-4xl tw-text-white tw-font-semibold tw-self-end"><button onClick={()=>props.buttonNavX()}>X</button></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-white tw-font-semibold"><a href="/">HOME</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-white tw-font-semibold"><a href="/about">ABOUT</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-white tw-font-semibold"><a href="/course">COURSE</a></li>
                        <li className="tw-block tw-px-7 tw-py-5 tw-text-2xl tw-text-white tw-font-semibold tw-cursor-pointer" data-bs-toggle="modal" data-bs-target="#masukModal">SIGN IN</li>
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