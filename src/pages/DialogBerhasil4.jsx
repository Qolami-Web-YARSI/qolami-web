import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DialogBerhasil4 = ({ id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(id);
  }, [id]);

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const storedDateTime = localStorage.getItem("dateTime");
    if (storedDateTime) {
      setDateTime(storedDateTime);
    }
  }, []);

  const handleButtonClick = () => {
    const now = new Date();
    const formattedDateTime = formatDate(now);
    setDateTime(formattedDateTime);
    localStorage.setItem("dateTime", formattedDateTime);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${month} ${year} ${hours}:${minutes}`;
  };

  return (
    <>
      <div
        className="modal fade tw-p-4"
        id={`dialogMulaiUjian${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content tw-rounded-[25px]">
            <div className="modal-body tw-px-[30px] xs:tw-px-[50px] tw-rounded-[25px] tw-bg-[#FFF6D9] tw-font-poppins">
              <div className="tw-flex tw-flex-col tw-gap-6 tw-py-5">
                <div className="tw-flex tw-bg-[#DBF9F9] tw-border-[3px] tw-border-[#81DEDF] tw-rounded-[23px] tw-py-6 xs:tw-py-10 tw-px-6 xs:tw-px-12">
                  <p className="tw-mx-auto tw-text-[15px] sm:tw-text-[20px] lg:tw-text-[23px] tw-text-[#628478]">
                    Apakah Anda yakin ingin memulai ujian?
                  </p>
                </div>
                <div className="tw-flex tw-mx-auto tw-gap-10">
                  <button
                    className="btn btn-secondary tw-text-[15px] xs:tw-text-[20px] tw-bg-[#E9ECEF] hover:tw-bg-[#E0E0E3] 
                                    tw-border-2 tw-border-[#BABABA] hover:tw-border-[#BABABA] tw-text-black hover:tw-text-black tw-w-[70px] xs:tw-w-[100px] 
                                    tw-rounded-none tw-font-bold"
                    data-bs-dismiss="modal"
                  >
                    Batal
                  </button>
                  <Link to={`/${id}`} replace>
                    <button
                      className="btn btn-secondary
                      tw-text-[15px] xs:tw-text-[20px] tw-bg-[#009900] hover:tw-bg-[#007100] tw-text-white tw-w-[70px] xs:tw-w-[100px]  
                                        tw-rounded-none tw-font-bold"
                      data-bs-dismiss="modal"
                      onClick={handleButtonClick}
                    >
                      Mulai
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogBerhasil4;
