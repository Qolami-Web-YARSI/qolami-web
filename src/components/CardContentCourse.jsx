import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DialogBerhasil4 from "../pages/DialogBerhasil4";
import KursusData from "../data/KursusData";

const CardContentCourse = ({ tempDatas, tempUnlock, tempToken }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {tempDatas.map((a, b) => {
        return tempUnlock[b] || tempToken ? (
          a.id.includes("exercise") ? (
            <div key={a.id}>
              <div
                className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-cursor-pointer tw-grayscale-0 tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}
                onClick={() => {
                  if (localStorage.getItem("idDetail").includes("exam")) {
                    localStorage.removeItem("shuffledSoal21");
                    localStorage.removeItem("shuffledSoal22");
                    localStorage.removeItem("score");
                    localStorage.removeItem("endTime");
                    localStorage.removeItem("TimeStop");
                    localStorage.removeItem("timeUnder2Minutes");
                    localStorage.removeItem("semuaSoalTelahDiisi");
                    localStorage.removeItem("temps");
                    localStorage.removeItem("tempNilaiSoal");
                    localStorage.removeItem("shuffledSoal1");
                    localStorage.removeItem("dateTime");
                    KursusData.forEach((a) => {
                      a.detail.forEach((b) => {
                        b.soalJawaban.forEach((_, index) => {
                          localStorage.removeItem(`opsiSoal_${index + 1}`);
                        });
                        localStorage.removeItem(`temps`);
                        localStorage.removeItem(`semuaSoalTelahDiisi`);
                        localStorage.removeItem(`IsSubmit`);
                      });
                    });
                    KursusData.forEach((a) => {
                      a.soalJawaban2.forEach((_, index) => {
                        localStorage.removeItem(`opsiSoal_${index + 1}`);
                      });
                      localStorage.removeItem(`temps`);
                      localStorage.removeItem(`semuaSoalTelahDiisi`);
                      localStorage.removeItem(`endTime`);
                      localStorage.removeItem(`IsSubmit`);
                      localStorage.removeItem("timeUnders2Minutes");
                      localStorage.removeItem("TimeStop");
                    });
                  }
                }}
              >
                <Link to={`/${a.id}`} key={a.id}>
                  <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                    <p className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center tw-mx-auto tw-font-poppins">
                      {a.nama}
                    </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                    <img
                      src={a.gambar}
                      className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"
                      alt={a.gambar}
                    />
                    <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">
                      {a.deskripsi}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ) : a.id.includes("exam") ? (
            <>
              {localStorage.getItem("idDetail").includes(a.id) ? (
                <>
                  <div key={a.id}>
                    <div
                      className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] 
                                  tw-cursor-pointer tw-grayscale-0 tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}
                      onClick={() => {
                        navigate(`/${a.id}`);
                        localStorage.removeItem("id2");
                      }}
                    >
                      <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                        <p
                          className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center 
                                          tw-mx-auto tw-font-poppins"
                        >
                          {a.nama}
                        </p>
                      </div>
                      <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                        <img
                          src={a.gambar}
                          className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"
                          alt={a.gambar}
                        />
                        <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">
                          {a.deskripsi}
                        </p>
                      </div>
                    </div>
                    <DialogBerhasil4 id={a.id} />
                  </div>
                </>
              ) : (
                <>
                  <div key={a.id}>
                    <div
                      className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] 
                                      tw-cursor-pointer tw-grayscale-0 tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}
                      data-bs-target={`#dialogMulaiUjian${a.id}`}
                      data-bs-toggle="modal"
                    >
                      <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                        <p
                          className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center 
                                              tw-mx-auto tw-font-poppins"
                        >
                          {a.nama}
                        </p>
                      </div>
                      <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                        <img
                          src={a.gambar}
                          className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"
                          alt={a.gambar}
                        />
                        <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">
                          {a.deskripsi}
                        </p>
                      </div>
                    </div>
                    <DialogBerhasil4 id={a.id} />
                  </div>
                </>
              )}
            </>
          ) : (
            <div key={a.id}>
              <div
                className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] 
                                    tw-cursor-pointer tw-grayscale-0 tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}
                onClick={() => {
                  if (localStorage.getItem("idDetail").includes("exam")) {
                    localStorage.removeItem("shuffledSoal21");
                    localStorage.removeItem("shuffledSoal22");
                    localStorage.removeItem("score");
                    localStorage.removeItem("endTime");
                    localStorage.removeItem("TimeStop");
                    localStorage.removeItem("timeUnder2Minutes");
                    localStorage.removeItem("semuaSoalTelahDiisi");
                    localStorage.removeItem("temps");
                    localStorage.removeItem("tempNilaiSoal");
                    localStorage.removeItem("shuffledSoal1");
                    localStorage.removeItem("dateTime");
                    KursusData.forEach((a) => {
                      a.detail.forEach((b) => {
                        b.soalJawaban.forEach((_, index) => {
                          localStorage.removeItem(`opsiSoal_${index + 1}`);
                        });
                        localStorage.removeItem(`temps`);
                        localStorage.removeItem(`semuaSoalTelahDiisi`);
                        localStorage.removeItem(`IsSubmit`);
                      });
                    });
                    KursusData.forEach((a) => {
                      a.soalJawaban2.forEach((_, index) => {
                        localStorage.removeItem(`opsiSoal_${index + 1}`);
                      });
                      localStorage.removeItem(`temps`);
                      localStorage.removeItem(`semuaSoalTelahDiisi`);
                      localStorage.removeItem(`endTime`);
                      localStorage.removeItem(`IsSubmit`);
                      localStorage.removeItem("timeUnders2Minutes");
                      localStorage.removeItem("TimeStop");
                    });
                  }
                }}
              >
                <Link to={`/${a.id}`} key={a.id}>
                  <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                    <p
                      className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold 
                                                tw-text-center tw-mx-auto tw-font-poppins"
                    >
                      {a.nama}
                    </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                    <img
                      src={a.gambar}
                      className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"
                      alt={a.gambar}
                    />
                    <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">
                      {a.deskripsi}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          )
        ) : (
          <button
            key={a.id}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#daftarModal"
          >
            <div
              className={`tw-flex tw-flex-col tw-font-poppins tw-rounded-[20px] md:tw-rounded-[30px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] 
                            tw-cursor-not-allowed tw-grayscale tw-bg-[#C2EF90] tw-pb-14 tw-mx-auto`}
            >
              <div className="tw-flex tw-bg-[#90C963] tw-backdrop-grayscale tw-rounded-t-[20px] md:tw-rounded-t-[30px] tw-py-2">
                <p
                  className="tw-text-[20px] sm:tw-text-[15px] md:tw-text-[25px] lg:tw-text-[35px] tw-text-black tw-font-bold tw-text-center
                                     tw-mx-auto tw-font-poppins"
                >
                  {a.nama}
                </p>
              </div>
              <div className="tw-flex tw-flex-col tw-bg-[#C2EF90] tw-rounded-b-[20px] md:tw-rounded-b-[30px] tw-pt-11 tw-pb-pb-7 tw-px-5">
                <img
                  src={a.gambar}
                  className="tw-mx-auto tw-pb-7 tw-size-28 lg:tw-size-48"
                  alt={a.gambar}
                />
                <p className="tw-mx-auto tw-text-[16px] sm:tw-text-[15px] md:tw-text-[18px] lg:tw-text-[19px] tw-font-poppins tw-text-center">
                  {a.deskripsi}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
};

export default CardContentCourse;
