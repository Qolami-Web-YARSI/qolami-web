import React, { useState, useEffect, useRef } from "react";

const DialogBerhasil2 = ({ text, location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="modal fade tw-p-4"
        id={location}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg tw-font-poppins">
          <div className="modal-content tw-rounded-[25px]">
            <div className="modal-body tw-px-[30px] xs:tw-px-[50px] tw-rounded-[25px] tw-bg-[#FFF6D9]">
              <div className="tw-flex tw-flex-col tw-gap-6 tw-py-5">
                <div className="tw-flex tw-bg-[#DBF9F9] tw-border-[3px] tw-border-[#81DEDF] tw-rounded-[23px] tw-py-6 xs:tw-py-10 tw-px-6 xs:tw-px-12">
                  <p className="tw-mx-auto tw-text-[15px] sm:tw-text-[20px] lg:tw-text-[23px] tw-text-[#628478]">
                    {text}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary tw-text-[18px] xs:tw-text-[23px] tw-bg-[#009900] hover:tw-bg-[#007100] tw-text-white tw-w-[70px] xs:tw-w-[100px]  tw-mx-auto tw-rounded-[30px] tw-font-bold"
                  onClick={() =>
                    location.includes("lagiPosisiLatihan") ||
                    location.includes("lagiPosisiUjian")
                      ? ""
                      : window.location.reload()
                  }
                  data-bs-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogBerhasil2;
