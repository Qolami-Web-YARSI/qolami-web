const DialogBerhasil = ({text, location}) => {
    return(
        <>
            <div class="modal fade" id="dialogBerhasil" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content tw-rounded-[25px]">
                        <div className="modal-body tw-px-[50px] tw-rounded-[25px] tw-bg-[#FFF6D9]">
                            {/* <p>{text}</p>
                            <button type="button" class="btn btn-secondary" data-bs-target={location} data-bs-toggle="modal">Ok</button> */}
                            <div className="tw-flex tw-flex-col tw-gap-5 tw-py-5">
                                <p className="tw-mx-auto tw-text-center sm:tw-text-[20px] lg:tw-text-[25px]">{text}</p>
                                <button type="button" className="btn btn-secondary tw-text-[20px] tw-bg-[#458200] hover:tw-bg-[#009900] tw-text-white tw-w-[150px] tw-mx-auto" data-bs-target={location} data-bs-toggle="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogBerhasil