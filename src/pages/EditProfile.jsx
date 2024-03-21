import React, { useState, useEffect } from 'react'

const EditProfile = () => {
    const [getToggle, setToggle] = useState(false)
    const buttonToggle = () => {
      setToggle(!getToggle)
    }
    return(
        <>
          <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content tw-rounded-[15px]">
                <div class="modal-body tw-px-[50px] tw-bg-[#FFF6D9] tw-rounded-[15px]">

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                  <button type="button" class="tw-bg-white tw-border-2 tw-rounded-lg tw-border-[#FF0000] tw-size-10 tw-opacity-0" disabled>
                        <div class="tw-size-full tw-flex tw-flex-col tw-justify-center tw-bg-[#FF0000]">
                          <p class="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                    <div class="tw-flex tw-flex-col tw-justify-center">
                      <p class="tw-text-[#458200] tw-text-xl">EDIT PROFILE</p>
                    </div>
                    <button type="button" class="tw-bg-white tw-rounded-lg tw-size-10" border="0">
                        <div class="tw-size-full tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-bg-[#FF0000]" data-bs-dismiss="modal">
                          <p class="tw-font-bold tw-text-white tw-text-xl">X</p>
                        </div>
                    </button>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <h1 class="modal-title fs-5 tw-opacity-0" id="editProfileModalLabel">X</h1>
                    <div className=' tw-size-48 tw-border-2 tw-border-black tw-rounded-full'>
                        
                    </div>
                    <h1 class="modal-title fs-5 tw-opacity-0" id="editProfileModalLabel">X</h1>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between">
                    <div class="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                        <label for="validationCustom03" class="form-label">Nama Depan</label>
                        <input type="email" class="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="email" placeholder='Nama Depan' required/>
                    </div>

                    <div class="tw-flex tw-w-[47%] tw-flex-col tw-py-2">
                        <label for="validationCustom03" class="form-label">Nama Belakang</label>
                        <input type="email" class="form-control tw-border-2 tw-rounded-lg tw-border-[#BABABA]" id="email" placeholder='Nama Belakang' required/>
                    </div>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-row tw-justify-between tw-py-3">
                    <input type="file" class="form-control" aria-label="file example" required/>
                  </div>

                  <div class="tw-flex tw-w-full tw-flex-col tw-py-4 ">
                    <button type="button" class="tw-bg-[#458200] tw-w-full tw-h-12 tw-rounded-lg tw-text-white" data-bs-dismiss="modal">Edit Profile</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default EditProfile;