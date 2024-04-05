import React, { useState, useEffect } from 'react'

const EditProfile = () => {
    const [getToggle, setToggle] = useState(false)
    const buttonToggle = () => {
      setToggle(!getToggle)
    }
    return(
        <>
          <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content tw-rounded-[15px]">
                <div className="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                  <button type="button" className="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                          <img src="exit.svg"/>
                        </div>
                    </button>
                    <div className="tw-flex tw-flex-col tw-justify-center">
                      <p className="tw-text-[#458200] tw-text-[40px] tw-font-bold">EDIT PROFILE</p>
                    </div>
                    <button type="button" className="tw-bg-white tw-rounded-lg tw-size-10" border="0">
                        <div className="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-bg-[#FF0000]" data-bs-dismiss="modal">
                          <p className="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <h1 className="modal-title fs-5 tw-opacity-0" id="editProfileModalLabel">X</h1>
                    <div className=' tw-size-48 tw-border-2 tw-border-black tw-rounded-full'>
                        
                    </div>
                    <h1 className="modal-title fs-5 tw-opacity-0" id="editProfileModalLabel">X</h1>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between">
                    <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                        <label htmlFor="validationCustom03" className="form-label">Nama Depan</label>
                        <input type="email" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="email" placeholder='Nama Depan' required/>
                    </div>

                    <div className="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                        <label htmlFor="validationCustom03" className="form-label">Nama Belakang</label>
                        <input type="email" className="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="email" placeholder='Nama Belakang' required/>
                    </div>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <input type="file" className="form-control" aria-label="file example" required/>
                  </div>

                  <div className="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                    <button type="button" className="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white tw-font-bold hover:tw-bg-[#009900]" data-bs-dismiss="modal">Edit</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default EditProfile;