import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PaginationDetail2 from "./PaginationDetail2";
import KursusData from "../data/KursusData";
import { IoVolumeHigh } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import DialogHasilNilai from "../pages/DialogHasilNilai";
import DialogAkhir from "../pages/DialogAkhir";

const ContentDetail2Kursus = ({ img2, img3 }) => {
  const { id } = useParams();
  localStorage.setItem(`id2`, id);
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [tempIdDetail, setTempIdDetail] = useState([]);
  const [latihanContent, setLatihanContent] = useState(null);

  //USESTATE LATIHAN
  const [score, setScore] = useState(0);
  const [selectedButton1, setSelectedButton1] = useState(null);
  const [selectedButton2, setSelectedButton2] = useState(null);
  const [selectedButton3, setSelectedButton3] = useState(null);
  const [selectedButton4, setSelectedButton4] = useState(null);
  const [tempNilaiSoal, setTempNilaiSoal] = useState([]);
  const initialTemp = JSON.parse(localStorage.getItem("temps")) || [];
  const [temp, setTemp] = useState(initialTemp);
  const [panjangSoalJawaban, setPanjangSoalJawaban] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [qaz, setQaz] = useState([
    selectedButton1,
    selectedButton2,
    selectedButton3,
    selectedButton4,
  ]);
  const [wsx, setWsx] = useState([
    setSelectedButton1,
    setSelectedButton2,
    setSelectedButton3,
    setSelectedButton4,
  ]);

  const detail2Api = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2024/${localStorage.getItem(
          "idDetail"
        )}/contents/${id}`
      );
      setItem(response.data.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const detailApi = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2024/${localStorage.getItem("idDetail")}`
      );
      const ids = response.data.data.map((a) => a.id);
      setTempIdDetail(ids);
    } catch (e) {
      console.log(e);
    }
  };

  const takeLatihanContent = () => {
    KursusData.forEach((a) => {
      a.detail.forEach((b) => {
        if (b.id.includes(id)) {
          setLatihanContent(b);
          setPanjangSoalJawaban(b.soalJawaban.length);
          localStorage.setItem(`panjangSoal`, b.soalJawaban.length);
        }
      });
    });
  };

  useEffect(() => {
    detailApi();
    detail2Api();
    takeLatihanContent();
  }, [id, latihanContent, item, tempNilaiSoal]);

  const handleButtonClick = (index, optionId, correctAnswerId) => {
    let sum = 0;
    wsx[index](optionId);
    localStorage.setItem(`opsiSoal_${index + 1}`, optionId);
    if (temp[index] === null) {
      temp.push(JSON.parse(localStorage.getItem(`opsiSoal_${index + 1}`)));
      localStorage.setItem(
        `temps`,
        JSON.stringify(
          temp.filter((item) => item !== undefined || item !== null)
        )
      );
    } else {
      temp[index] = JSON.parse(localStorage.getItem(`opsiSoal_${index + 1}`));
      localStorage.setItem(
        `temps`,
        JSON.stringify(
          temp.filter((item) => item !== undefined || item !== null)
        )
      );
    }
    let filteredArray = temp.filter(
      (item) => item !== undefined || item !== null
    );
    console.log(filteredArray);

    if (filteredArray.length === panjangSoalJawaban) {
      localStorage.setItem(`semuaSoalTelahDiisi`, true);
    } else {
      localStorage.setItem(`semuaSoalTelahDiisi`, false);
    }

    if (optionId === correctAnswerId) {
      const updatedScore = 100 / latihanContent.soalJawaban.length;
      tempNilaiSoal[index] = updatedScore;
    } else {
      tempNilaiSoal[index] = 0;
    }

    sum = tempNilaiSoal.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    localStorage.setItem(`score`, sum);
  };

  useEffect(() => {
    //console.log(tempIsFill)
    //console.log(JSON.parse(localStorage.getItem(`semuaSoalTelahDiisi`)));
    setQaz((prevQaz) => [
      selectedButton1,
      selectedButton2,
      selectedButton3,
      selectedButton4,
    ]);
    setWsx((prevWsx) => [
      setSelectedButton1,
      setSelectedButton2,
      setSelectedButton3,
      setSelectedButton4,
    ]);
  }, [selectedButton1, selectedButton2, selectedButton3, selectedButton4]);

  useEffect(() => {
    const handlePopState = () => {
      console.log("hahaha");
      navigate(`/${localStorage.getItem("idDetail")}`, { replace: true });
      window.location.reload();
    };
    window.addEventListener("popstate", handlePopState);
    const addHistoryEntry = () => {
      window.history.pushState(null, "", window.location.pathname);
    };
    addHistoryEntry();
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  // const initialTime = () => {
  //     const endTime = localStorage.getItem('endTime');
  //     if (endTime) {
  //       const currentTime = Date.now();
  //       const remainingTime = Math.floor((endTime - currentTime) / 1000);
  //       return remainingTime > 0 ? remainingTime : 0;
  //     }
  //     return 600; // 600 detik = 10 menit
  //   };

  //   const [time, setTime] = useState(initialTime);
  //   const [isRunning, setIsRunning] = useState(true);
  //   const intervalRef = useRef(null);

  //   useEffect(() => {
  //     if (time > 0 && isRunning) {
  //       intervalRef.current = setInterval(() => {
  //         setTime((prevTime) => {
  //           const newTime = prevTime - 1;
  //           if (newTime === 0) {
  //             console.log("hahahaa");
  //           }
  //           return newTime >= 0 ? newTime : 0;
  //         });
  //       }, 1000);
  //       return () => clearInterval(intervalRef.current);
  //     }
  //   }, [time, isRunning]);

  //   useEffect(() => {
  //     const endTime = Date.now() + time * 1000;
  //     localStorage.setItem('endTime', endTime);
  //   }, [time]);

  //   const handleToggle = () => {
  //     setIsRunning(!isRunning);
  //     if (isRunning) {
  //       clearInterval(intervalRef.current);
  //     } else {
  //       const endTime = Date.now() + time * 1000;
  //       localStorage.setItem('endTime', endTime);
  //     }
  //   };

  const audioPlay = (audio_source) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const newAudio = new Audio(audio_source);
    newAudio.currentTime = 0;
    newAudio.play();
    setCurrentAudio(newAudio);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("IsSubmit")) === true) {
      const myModal = new window.bootstrap.Modal(
        document.getElementById("dialogHasilNilaiLatihan")
      );
      myModal.show();
    }
  }, []);

  return (
    <>
      {(() => {
        if (localStorage.getItem("idDetail").includes("lessons")) {
          if (localStorage.getItem("idDetail").includes("one")) {
            return (
              <>
                {item && (
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%] tw-font-poppins">
                    <div className="tw-flex tw-flex-col tw-pt-20 sm:tw-pt-28 lg:tw-pt-40 tw-pb-8 sm:tw-pb-14">
                      <p
                        className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] 
                                        tw-font-bold tw-text-center tw-pt-5 tw-mx-auto"
                      >
                        Pelajaran 1
                      </p>
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">{`${item.hurufName} Huruf Hijaiyah`}</p>
                    </div>
                    <div className="tw-flex tw-gap-4 tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                      <button className="tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto">
                        <IoVolumeHigh />
                      </button>
                      <div className="tw-flex tw-my-auto">
                        <p className="tw-text-[10px] sm:tw-text-[14px] md:tw-text-[25px] 2xl:tw-text-[30px] tw-font-bold">
                          Perhatikan pengucapan huruf hijaiyah!{" "}
                        </p>
                      </div>
                    </div>
                    <div className="tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                      <video controls className="lg:tw-w-[65%] tw-mx-auto">
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div
                      className="tw-flex tw-gap-4 tw-w-[85%] sm:tw-gap-0 md:tw-gap-5 lg:tw-gap-7 xl:tw-gap-8 2xl:tw-gap-10 tw-my-1 sm:tw-my-10
                                     tw-px-5 sm:tw-px-2 md:tw-px-4 lg:tw-px-8 xl:tw-px-24 lg:tw-mx-auto"
                    >
                      <div className="tw-flex tw-w-[40%] sm:tw-w-[250px] xl:tw-w-[350px]">
                        <img src={item.image} className="tw-m-auto" />
                      </div>
                      <div className="lg:tw-w-[60%] tw-flex tw-flex-col tw-gap-4 lg:tw-gap-7 tw-py-8">
                        <div className="tw-flex tw-gap-4">
                          <button className="tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto">
                            <RiPencilFill />
                          </button>
                          <div className="tw-flex tw-my-auto">
                            <p
                              className="tw-text-[13px] sm:tw-text-[16px] md:tw-text-[20px] lg:tw-text-[25px] 2xl:tw-text-[35px] tw-font-bold 
                                                    sm:tw-leading-4 md:tw-leading-7 lg:tw-leading-8 xl:tw-leading-10"
                            >
                              Perhatikan huruf <br></br> hijaiyah di samping!
                            </p>
                          </div>
                        </div>
                        <div className="tw-flex tw-gap-4">
                          <div className="tw-flex tw-flex-col tw-my-auto tw-gap-4 sm:tw-gap-0">
                            <p
                              className="tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 
                                                    2xl:tw-text-[30px]"
                            >
                              Warna <span className="tw-font-bold">Hitam</span>{" "}
                              merupakan{" "}
                              <span className="tw-font-bold">{`huruf ${item.hurufName}`}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <PaginationDetail2 id={id} tempIdDetail={tempIdDetail} />
                  </div>
                )}
              </>
            );
          } else {
            return (
              <>
                {item && (
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%] tw-font-poppins">
                    <div className="tw-flex tw-flex-col tw-pt-20 sm:tw-pt-28 lg:tw-pt-40 tw-pb-8 sm:tw-pb-14">
                      <p
                        className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold 
                                        tw-text-center tw-pt-5 tw-mx-auto"
                      >
                        Pelajaran 2
                      </p>
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">{`${item.hurufName} Berharakat Fathah`}</p>
                    </div>
                    <div className="tw-flex tw-gap-4 tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                      <button className="tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto">
                        <IoVolumeHigh />
                      </button>
                      <div className="tw-flex tw-my-auto">
                        <p className="tw-text-[10px] sm:tw-text-[14px] md:tw-text-[25px] 2xl:tw-text-[30px] tw-font-bold">
                          Perhatikan pengucapan huruf berharakat!{" "}
                        </p>
                      </div>
                    </div>
                    <div className="tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                      <video controls className="lg:tw-w-[65%] tw-mx-auto">
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div
                      className="tw-flex tw-gap-4 tw-w-[85%] sm:tw-gap-0 md:tw-gap-5 lg:tw-gap-7 xl:tw-gap-8 2xl:tw-gap-10 tw-my-1 sm:tw-my-10
                                     tw-px-5 sm:tw-px-2 md:tw-px-4 lg:tw-px-8 xl:tw-px-24 lg:tw-mx-auto"
                    >
                      <div className="tw-flex tw-w-[40%] sm:tw-w-[250px] xl:tw-w-[350px]">
                        <img src={item.image} className="tw-m-auto" />
                      </div>
                      <div className="lg:tw-w-[60%] tw-flex tw-flex-col tw-gap-4 lg:tw-gap-7 tw-py-8">
                        <div className="tw-flex tw-gap-4">
                          <button className="tw-flex tw-text-[10px] md:tw-text-[20px] lg:tw-text-[30px] tw-invert tw-bg-white tw-rounded-full tw-p-2 tw-my-auto">
                            <RiPencilFill />
                          </button>
                          <div className="tw-flex tw-my-auto">
                            <p
                              className="tw-text-[13px] sm:tw-text-[16px] md:tw-text-[20px] lg:tw-text-[25px] 2xl:tw-text-[35px] tw-font-bold 
                                                    sm:tw-leading-4 md:tw-leading-7 lg:tw-leading-8 xl:tw-leading-10"
                            >
                              Perhatikan huruf <br></br> berharakat di samping!
                            </p>
                          </div>
                        </div>
                        <div className="tw-flex tw-gap-4">
                          <div className="tw-flex tw-flex-col tw-my-auto tw-gap-4 sm:tw-gap-0">
                            <p
                              className="tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 
                                                    2xl:tw-text-[30px]"
                            >
                              Warna <span className="tw-font-bold">Hitam</span>{" "}
                              merupakan{" "}
                              <span className="tw-font-bold">{`huruf ${item.hurufName}`}</span>
                            </p>
                            <p
                              className="tw-text-[15px] sm:tw-text-[18px] md:tw-text-[23px] lg:tw-text-[24px] xl:tw-text-[26px] 
                                                    2xl:tw-text-[30px]"
                            >
                              Warna{" "}
                              <span className="tw-font-bold tw-text-[#258F9A]">
                                Biru
                              </span>{" "}
                              merupakan{" "}
                              <span className="tw-font-bold tw-text-[#258F9A]">
                                harakat Fathah
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <PaginationDetail2 id={id} tempIdDetail={tempIdDetail} />
                  </div>
                )}
              </>
            );
          }
        } else if (localStorage.getItem("idDetail").includes("exercise")) {
          if (id.includes("gambar")) {
            return (
              <>
                {latihanContent && (
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]">
                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                      <p
                        className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold 
                                        tw-text-center tw-pt-5 tw-mx-auto"
                      >
                        {latihanContent.nama}
                      </p>
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                        {latihanContent.deskripsi}
                      </p>
                    </div>
                    <div className="tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32 tw-font-poppins">
                      <div className="tw-flex tw-flex-col tw-w-[100%]">
                        <ul>
                          <div className="tw-flex tw-flex-col tw-gap-5">
                            {latihanContent.soalJawaban.map((a, index) => {
                              return (
                                <div className="tw-pb-5" key={a.id}>
                                  <p
                                    className="tw-text-[24px]"
                                    dangerouslySetInnerHTML={{
                                      __html: index + 1 + ". " + a.soal,
                                    }}
                                  />
                                  <div
                                    className="tw-flex tw-mx-auto tw-gap-8"
                                    key={a.id}
                                  >
                                    <div className="tw-flex tw-gap-7 tw-w-full tw-mx-auto tw-justify-between">
                                      {a.opsi.map((b) => {
                                        return (
                                          <div className="tw-flex">
                                            {JSON.parse(
                                              localStorage.getItem("IsSubmit")
                                            ) === true ? (
                                              <button
                                                className={`tw-flex 
                                                                                ${
                                                                                  JSON.parse(
                                                                                    localStorage.getItem(
                                                                                      `opsiSoal_${
                                                                                        index +
                                                                                        1
                                                                                      }`
                                                                                    )
                                                                                  ) ===
                                                                                  b.id
                                                                                    ? JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          `opsiSoal_${
                                                                                            index +
                                                                                            1
                                                                                          }`
                                                                                        )
                                                                                      ) ===
                                                                                        b.id &&
                                                                                      JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          "IsSubmit"
                                                                                        )
                                                                                      ) ===
                                                                                        true
                                                                                      ? JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          b.id &&
                                                                                        JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          a.jawabanBenar
                                                                                        ? "tw-bg-[#ECFDF5] tw-border-[#34D399] tw-text-[#34D399]"
                                                                                        : "tw-bg-[#FFF1F2] tw-border-[#FB7185] tw-text-[#FB7185]"
                                                                                      : "tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white"
                                                                                    : "tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black"
                                                                                }
                                                                                tw-mt-4 tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                              >
                                                <p className="tw-m-auto tw-text-[20px]">
                                                  {b.text}
                                                </p>
                                              </button>
                                            ) : (
                                              <button
                                                onClick={() => {
                                                  handleButtonClick(
                                                    index,
                                                    b.id,
                                                    a.jawabanBenar
                                                  );
                                                }}
                                                className={`tw-flex 
                                                                                ${
                                                                                  JSON.parse(
                                                                                    localStorage.getItem(
                                                                                      `opsiSoal_${
                                                                                        index +
                                                                                        1
                                                                                      }`
                                                                                    )
                                                                                  ) ===
                                                                                  b.id
                                                                                    ? JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          `opsiSoal_${
                                                                                            index +
                                                                                            1
                                                                                          }`
                                                                                        )
                                                                                      ) ===
                                                                                        b.id &&
                                                                                      JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          "IsSubmit"
                                                                                        )
                                                                                      ) ===
                                                                                        true
                                                                                      ? JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          b.id &&
                                                                                        JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          a.jawabanBenar
                                                                                        ? "tw-bg-[#ECFDF5] tw-border-[#34D399] tw-text-[#34D399]"
                                                                                        : "tw-bg-[#FFF1F2] tw-border-[#FB7185] tw-text-[#FB7185]"
                                                                                      : "tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white"
                                                                                    : "tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black"
                                                                                }
                                                                                 hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-mt-4 tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                              >
                                                <p className="tw-m-auto tw-text-[20px]">
                                                  {b.text}
                                                </p>
                                              </button>
                                            )}
                                            <img
                                              src={b.imgSrc}
                                              className="tw-w-[200px] tw-rounded-lg"
                                              alt={b.id}
                                            />
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </ul>
                        {JSON.parse(
                          localStorage.getItem(`semuaSoalTelahDiisi`)
                        ) === true ? (
                          <>
                            {JSON.parse(localStorage.getItem(`IsSubmit`)) ===
                            true ? (
                              <button
                                onClick={() => {
                                  navigate(
                                    `/${localStorage.getItem("idDetail")}`
                                  );
                                  latihanContent.soalJawaban.forEach(
                                    (_, index) => {
                                      localStorage.removeItem(
                                        `opsiSoal_${index + 1}`
                                      );
                                    }
                                  );
                                  localStorage.removeItem(`temps`);
                                  localStorage.removeItem(
                                    `semuaSoalTelahDiisi`
                                  );
                                  localStorage.removeItem(`IsSubmit`);
                                  localStorage.removeItem("endTime");
                                }}
                                className="tw-bg-[#009900] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                              >
                                Ok
                              </button>
                            ) : (
                              <button
                                data-bs-target={`#dialogAkhirLatihan`}
                                data-bs-toggle="modal"
                                className="tw-bg-[#009900] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                              >
                                Selesaikan
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            className="tw-bg-[#979797] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                            disabled
                          >
                            Selesaikan
                          </button>
                        )}
                      </div>
                      {/* {localStorage.setItem(`score`, score)}
                                        {localStorage.setItem(`panjangSoal`, panjangSoalJawaban)} */}
                      <DialogAkhir
                        id={"dialogAkhirLatihan"}
                        id2={"dialogHasilNilaiLatihan"}
                        text={"Apakah Anda yakin ingin mengakhiri latihan ini?"}
                        text2={"Akhiri Latihan"}
                      />
                    </div>
                  </div>
                )}
              </>
            );
          } else if (id.includes("video")) {
            return (
              <>
                {latihanContent && (
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]">
                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                      <p
                        className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold 
                                        tw-text-center tw-pt-5 tw-mx-auto"
                      >
                        {latihanContent.nama}
                      </p>
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                        {latihanContent.deskripsi}
                      </p>
                    </div>
                    <div className="tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32 tw-font-poppins">
                      <div className="tw-flex tw-flex-col tw-w-[100%]">
                        <ul>
                          <div className="tw-flex tw-flex-col tw-gap-5">
                            {latihanContent.soalJawaban.map((a, index) => {
                              return (
                                <div className="tw-pb-5" key={a.id}>
                                  <p
                                    className="tw-text-[24px]"
                                    dangerouslySetInnerHTML={{
                                      __html: index + 1 + ". " + a.soal,
                                    }}
                                  />
                                  <div className="tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                    <video
                                      controls
                                      className="lg:tw-w-[85%] tw-mx-auto"
                                    >
                                      <source src={a.video} type="video/mp4" />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                  <div
                                    className="tw-flex tw-mx-auto tw-gap-8 tw-pt-5"
                                    key={a.id}
                                  >
                                    <div className="tw-flex tw-gap-7 tw-w-full tw-mx-auto tw-justify-between">
                                      {a.opsi.map((b) => {
                                        return (
                                          <div className="tw-flex">
                                            {JSON.parse(
                                              localStorage.getItem("IsSubmit")
                                            ) === true ? (
                                              <button
                                                className={`tw-flex 
                                                                                ${
                                                                                  JSON.parse(
                                                                                    localStorage.getItem(
                                                                                      `opsiSoal_${
                                                                                        index +
                                                                                        1
                                                                                      }`
                                                                                    )
                                                                                  ) ===
                                                                                  b.id
                                                                                    ? JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          `opsiSoal_${
                                                                                            index +
                                                                                            1
                                                                                          }`
                                                                                        )
                                                                                      ) ===
                                                                                        b.id &&
                                                                                      JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          "IsSubmit"
                                                                                        )
                                                                                      ) ===
                                                                                        true
                                                                                      ? JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          b.id &&
                                                                                        JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          a.jawabanBenar
                                                                                        ? "tw-bg-[#ECFDF5] tw-border-[#34D399] tw-text-[#34D399]"
                                                                                        : "tw-bg-[#FFF1F2] tw-border-[#FB7185] tw-text-[#FB7185]"
                                                                                      : "tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white"
                                                                                    : "tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black"
                                                                                }
                                                                                tw-mt-4 tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                              >
                                                <p className="tw-m-auto tw-text-[20px]">
                                                  {b.text}
                                                </p>
                                              </button>
                                            ) : (
                                              <button
                                                onClick={() => {
                                                  handleButtonClick(
                                                    index,
                                                    b.id,
                                                    a.jawabanBenar
                                                  );
                                                }}
                                                className={`tw-flex 
                                                                                ${
                                                                                  JSON.parse(
                                                                                    localStorage.getItem(
                                                                                      `opsiSoal_${
                                                                                        index +
                                                                                        1
                                                                                      }`
                                                                                    )
                                                                                  ) ===
                                                                                  b.id
                                                                                    ? JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          `opsiSoal_${
                                                                                            index +
                                                                                            1
                                                                                          }`
                                                                                        )
                                                                                      ) ===
                                                                                        b.id &&
                                                                                      JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          "IsSubmit"
                                                                                        )
                                                                                      ) ===
                                                                                        true
                                                                                      ? JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          b.id &&
                                                                                        JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          a.jawabanBenar
                                                                                        ? "tw-bg-[#ECFDF5] tw-border-[#34D399] tw-text-[#34D399]"
                                                                                        : "tw-bg-[#FFF1F2] tw-border-[#FB7185] tw-text-[#FB7185]"
                                                                                      : "tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white"
                                                                                    : "tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black"
                                                                                }
                                                                                 hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-mt-4 tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                              >
                                                <p className="tw-m-auto tw-text-[20px]">
                                                  {b.text}
                                                </p>
                                              </button>
                                            )}
                                            <img
                                              src={b.imgSrc}
                                              className="tw-w-[200px] tw-rounded-lg"
                                              alt={b.id}
                                            />
                                          </div>
                                        );
                                      })}
                                      ;
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </ul>
                        {JSON.parse(
                          localStorage.getItem(`semuaSoalTelahDiisi`)
                        ) === true ? (
                          <>
                            {JSON.parse(localStorage.getItem(`IsSubmit`)) ===
                            true ? (
                              <button
                                onClick={() => {
                                  navigate(
                                    `/${localStorage.getItem("idDetail")}`
                                  );
                                  latihanContent.soalJawaban.forEach(
                                    (_, index) => {
                                      localStorage.removeItem(
                                        `opsiSoal_${index + 1}`
                                      );
                                    }
                                  );
                                  localStorage.removeItem(`temps`);
                                  localStorage.removeItem(
                                    `semuaSoalTelahDiisi`
                                  );
                                  localStorage.removeItem(`IsSubmit`);
                                }}
                                className="tw-bg-[#009900] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                              >
                                Ok
                              </button>
                            ) : (
                              <button
                                data-bs-target={`#dialogAkhirLatihan`}
                                data-bs-toggle="modal"
                                className="tw-bg-[#009900] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                              >
                                Selesaikan
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            className="tw-bg-[#979797] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                            disabled
                          >
                            Selesaikan
                          </button>
                        )}
                      </div>
                      {/* {localStorage.setItem(`score`, score)}
                                        {localStorage.setItem(`panjangSoal`, panjangSoalJawaban)} */}
                      <DialogAkhir
                        id={"dialogAkhirLatihan"}
                        id2={"dialogHasilNilaiLatihan"}
                        text={"Apakah Anda yakin ingin mengakhiri latihan ini?"}
                        text2={"Akhiri Latihan"}
                      />
                    </div>
                  </div>
                )}
              </>
            );
          } else if (id.includes("audio")) {
            return (
              <>
                {latihanContent && (
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]">
                    <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                      <p
                        className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold 
                                        tw-text-center tw-pt-5 tw-mx-auto"
                      >
                        {latihanContent.nama}
                      </p>
                      <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                        {latihanContent.deskripsi}
                      </p>
                    </div>
                    <div className="tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32 tw-font-poppins">
                      <div className="tw-flex tw-flex-col tw-w-[100%]">
                        <ul>
                          <div className="tw-flex tw-flex-col tw-gap-5">
                            {latihanContent.soalJawaban.map((a, index) => {
                              return (
                                <div className="tw-pb-5" key={a.id}>
                                  <p
                                    className="tw-text-[24px]"
                                    dangerouslySetInnerHTML={{
                                      __html: index + 1 + ". " + a.soal,
                                    }}
                                  />
                                  <div className="tw-flex tw-w-full tw-justify-center tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                    <button
                                      onClick={() => audioPlay(`${a.audio}`)}
                                    >
                                      <img src={img3} alt="sound" />
                                    </button>
                                  </div>
                                  <div
                                    className="tw-flex tw-mx-auto tw-gap-8 tw-pt-10"
                                    key={a.id}
                                  >
                                    <div className="tw-flex tw-gap-7 tw-w-full tw-mx-auto tw-justify-between">
                                      {a.opsi.map((b) => {
                                        return (
                                          <div className="tw-flex">
                                            {JSON.parse(
                                              localStorage.getItem("IsSubmit")
                                            ) === true ? (
                                              <button
                                                className={`tw-flex 
                                                                                ${
                                                                                  JSON.parse(
                                                                                    localStorage.getItem(
                                                                                      `opsiSoal_${
                                                                                        index +
                                                                                        1
                                                                                      }`
                                                                                    )
                                                                                  ) ===
                                                                                  b.id
                                                                                    ? JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          `opsiSoal_${
                                                                                            index +
                                                                                            1
                                                                                          }`
                                                                                        )
                                                                                      ) ===
                                                                                        b.id &&
                                                                                      JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          "IsSubmit"
                                                                                        )
                                                                                      ) ===
                                                                                        true
                                                                                      ? JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          b.id &&
                                                                                        JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          a.jawabanBenar
                                                                                        ? "tw-bg-[#ECFDF5] tw-border-[#34D399] tw-text-[#34D399]"
                                                                                        : "tw-bg-[#FFF1F2] tw-border-[#FB7185] tw-text-[#FB7185]"
                                                                                      : "tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white"
                                                                                    : "tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black"
                                                                                }
                                                                                tw-mt-4 tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                              >
                                                <p className="tw-m-auto tw-text-[20px]">
                                                  {b.text}
                                                </p>
                                              </button>
                                            ) : (
                                              <button
                                                onClick={() => {
                                                  handleButtonClick(
                                                    index,
                                                    b.id,
                                                    a.jawabanBenar
                                                  );
                                                }}
                                                className={`tw-flex 
                                                                                ${
                                                                                  JSON.parse(
                                                                                    localStorage.getItem(
                                                                                      `opsiSoal_${
                                                                                        index +
                                                                                        1
                                                                                      }`
                                                                                    )
                                                                                  ) ===
                                                                                  b.id
                                                                                    ? JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          `opsiSoal_${
                                                                                            index +
                                                                                            1
                                                                                          }`
                                                                                        )
                                                                                      ) ===
                                                                                        b.id &&
                                                                                      JSON.parse(
                                                                                        localStorage.getItem(
                                                                                          "IsSubmit"
                                                                                        )
                                                                                      ) ===
                                                                                        true
                                                                                      ? JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          b.id &&
                                                                                        JSON.parse(
                                                                                          localStorage.getItem(
                                                                                            `opsiSoal_${
                                                                                              index +
                                                                                              1
                                                                                            }`
                                                                                          )
                                                                                        ) ===
                                                                                          a.jawabanBenar
                                                                                        ? "tw-bg-[#ECFDF5] tw-border-[#34D399] tw-text-[#34D399]"
                                                                                        : "tw-bg-[#FFF1F2] tw-border-[#FB7185] tw-text-[#FB7185]"
                                                                                      : "tw-bg-[#1F4E78] tw-border-[#1F4E78] tw-text-white"
                                                                                    : "tw-bg-[#FFFFFF] tw-border-[#BABABA] tw-text-black"
                                                                                }
                                                                                 hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-mt-4 tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                              >
                                                <p className="tw-m-auto tw-text-[20px]">
                                                  {b.text}
                                                </p>
                                              </button>
                                            )}
                                            <img
                                              src={b.imgSrc}
                                              className="tw-w-[200px] tw-rounded-lg"
                                              alt={b.id}
                                            />
                                          </div>
                                        );
                                      })}
                                      ;
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </ul>
                        {JSON.parse(
                          localStorage.getItem(`semuaSoalTelahDiisi`)
                        ) === true ? (
                          <>
                            {JSON.parse(localStorage.getItem(`IsSubmit`)) ===
                            true ? (
                              <button
                                onClick={() => {
                                  navigate(
                                    `/${localStorage.getItem("idDetail")}`
                                  );
                                  latihanContent.soalJawaban.forEach(
                                    (_, index) => {
                                      localStorage.removeItem(
                                        `opsiSoal_${index + 1}`
                                      );
                                    }
                                  );
                                  localStorage.removeItem(`temps`);
                                  localStorage.removeItem(
                                    `semuaSoalTelahDiisi`
                                  );
                                  localStorage.removeItem(`IsSubmit`);
                                  localStorage.removeItem(
                                    "timeIUnders2Minutes"
                                  );
                                }}
                                className="tw-bg-[#009900] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                              >
                                Ok
                              </button>
                            ) : (
                              <button
                                data-bs-target={`#dialogAkhirLatihan`}
                                data-bs-toggle="modal"
                                className="tw-bg-[#009900] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                              >
                                Selesaikan
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            className="tw-bg-[#979797] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                            disabled
                          >
                            Selesaikan
                          </button>
                        )}
                      </div>
                      {/* {localStorage.setItem(`score`, score)}
                                        {localStorage.setItem(`panjangSoal`, panjangSoalJawaban)} */}
                      <DialogAkhir
                        id={"dialogAkhirLatihan"}
                        id2={"dialogHasilNilaiLatihan"}
                        text={"Apakah Anda yakin ingin mengakhiri latihan ini?"}
                        text2={"Akhiri Latihan"}
                      />
                    </div>
                  </div>
                )}
              </>
            );
          }
        } else {
          return <></>;
        }
      })()}
    </>
  );
};

export default ContentDetail2Kursus;
