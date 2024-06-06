import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import KursusData from "../data/KursusData";
import PaginationDetail from "./PaginationDetail";
import DialogBerhasil3 from "../pages/DialogBerhasil3";

const ContentDetailKursus = ({ img, img2, img3 }) => {
  const { id } = useParams();
  localStorage.setItem(`id2`, id);
  const navigate = useNavigate();
  const [pelajaran, setPelajaran] = useState(null);
  const [tempIdCourse, setTempIdCourse] = useState([]);
  const [tempExercise1, setTempExercise1] = useState([]);
  const [tempExercise2, setTempExercise2] = useState([]);
  const [tempExam1, setTempExam1] = useState(null);
  const [tempExam2, setTempExam2] = useState(null);

  //USESTATE UJIAN
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );
  const [selectedButton1, setSelectedButton1] = useState(null);
  const [selectedButton2, setSelectedButton2] = useState(null);
  const [selectedButton3, setSelectedButton3] = useState(null);
  const [selectedButton4, setSelectedButton4] = useState(null);
  const [selectedButton5, setSelectedButton5] = useState(null);
  const [selectedButton6, setSelectedButton6] = useState(null);
  const [selectedButton7, setSelectedButton7] = useState(null);
  const [selectedButton8, setSelectedButton8] = useState(null);
  const [selectedButton9, setSelectedButton9] = useState(null);
  const [selectedButton10, setSelectedButton10] = useState(null);
  const [tempNilaiSoal, setTempNilaiSoal] = useState([]);
  const initialTemp = JSON.parse(localStorage.getItem("temps")) || [];
  const [temp, setTemp] = useState(initialTemp);
  const [panjangSoalJawaban, setPanjangSoalJawaban] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const intervalRef = useRef(null);
  const [qaz, setQaz] = useState([
    selectedButton1,
    selectedButton2,
    selectedButton3,
    selectedButton4,
    selectedButton5,
    selectedButton6,
    selectedButton7,
    selectedButton8,
    selectedButton9,
    selectedButton10,
  ]);
  const [wsx, setWsx] = useState([
    setSelectedButton1,
    setSelectedButton2,
    setSelectedButton3,
    setSelectedButton4,
    setSelectedButton5,
    setSelectedButton6,
    setSelectedButton7,
    setSelectedButton8,
    setSelectedButton9,
    setSelectedButton10,
  ]);

  const handleActivity = async () => {
    try {
      const response = await axios.post("http://localhost:2024/activity", {
        activityName: "",
        date: "",
        value: "",
        status: "lulus",
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const takeIdCourse = () => {
    KursusData.forEach((a) => {
      if (a.nama.toLowerCase().includes("pelajaran")) {
        tempIdCourse.push(a.id);
      }
    });
  };

  const takeLatihanContent = () => {
    KursusData.forEach((a) => {
      a.detail.forEach((b) => {
        if (b.nama.toLowerCase().includes("1")) {
          tempExercise1.push(b);
        } else if (b.nama.toLowerCase().includes("2")) {
          tempExercise2.push(b);
        } else {
          console.log("Ops!!!");
        }
      });
    });
  };

  const takeExamContent = () => {
    KursusData.forEach((a) => {
      if (a.id.includes("exam-one")) {
        console.log(a);
        setTempExam1(a);
        setPanjangSoalJawaban(a.soalJawaban2.length);
        localStorage.setItem(`panjangSoal`, a.soalJawaban2.length);
      } else if (a.id.includes("exam-two")) {
        console.log(a);
        setTempExam2(a);
        setPanjangSoalJawaban(a.soalJawaban2.length);
        localStorage.setItem(`panjangSoal`, a.soalJawaban2.length);
      } else {
        console.log("no identify exam!");
      }
    });
  };

  const detailApiPelajaran = async () => {
    try {
      const response = await axios.get(`http://localhost:2024/${id}`);
      setPelajaran(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

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
    const savedScore = localStorage.getItem("score");
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }

    const savedTemp = JSON.parse(localStorage.getItem("temps"));
    if (savedTemp) {
      setTemp(savedTemp);
    }

    const savedTempNilaiSoal = JSON.parse(
      localStorage.getItem("tempNilaiSoal")
    );
    if (savedTempNilaiSoal) {
      setTempNilaiSoal(savedTempNilaiSoal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

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
      const updatedScore = 100 / tempExam1.soalJawaban2.length;
      tempNilaiSoal[index] = Math.round(updatedScore);
    } else {
      tempNilaiSoal[index] = 0;
    }

    setTempNilaiSoal(tempNilaiSoal);
    localStorage.setItem("tempNilaiSoal", JSON.stringify(tempNilaiSoal));

    sum = tempNilaiSoal.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setScore(sum);
    localStorage.setItem("score", sum);
  };

  const initialTime = () => {
    const endTime = localStorage.getItem("endTime");
    if (endTime) {
      const currentTime = Date.now();
      const remainingTime = Math.floor((endTime - currentTime) / 1000);
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 300; // 180 detik = 3 menit
  };

  const [time, setTime] = useState(initialTime);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (minutes < 1) {
      return `${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}s`;
    } else {
      return `${minutes}m:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}s`;
    }
  };

  useEffect(() => {
    localStorage.setItem("idDetail", id);
  }, [id]);

  useEffect(() => {
    setQaz((prevQaz) => [
      selectedButton1,
      selectedButton2,
      selectedButton3,
      selectedButton4,
      selectedButton5,
      selectedButton6,
      selectedButton7,
      selectedButton8,
      selectedButton9,
      selectedButton10,
    ]);
    setWsx((prevWsx) => [
      setSelectedButton1,
      setSelectedButton2,
      setSelectedButton3,
      setSelectedButton4,
      setSelectedButton5,
      setSelectedButton6,
      setSelectedButton7,
      setSelectedButton8,
      setSelectedButton9,
      setSelectedButton10,
    ]);
  }, [
    selectedButton1,
    selectedButton2,
    selectedButton3,
    selectedButton4,
    selectedButton5,
    selectedButton6,
    selectedButton7,
    selectedButton8,
    selectedButton9,
    selectedButton10,
  ]);

  useEffect(() => {
    detailApiPelajaran();
  }, [id, currentAudio, pelajaran]);

  useEffect(() => {
    takeIdCourse();
  }, [id]);

  useEffect(() => {
    takeLatihanContent();
  }, [id, tempExercise1, tempExercise2]);

  useEffect(() => {
    takeExamContent();
  }, [id, tempExam1, tempExam2]);

  useEffect(() => {
    if (localStorage.getItem("idDetail").includes("exam")) {
      if (time > 0) {
        intervalRef.current = setInterval(() => {
          setTime((prevTime) => {
            const newTime = prevTime - 1;
            if (newTime === 0) {
              clearInterval(intervalRef.current);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
              localStorage.setItem("IsSubmit", true);
              localStorage.setItem(`semuaSoalTelahDiisi`, true);
              localStorage.setItem("TimeStop", true);
            } else {
              localStorage.setItem("TimeStop", false);
            }
            if (newTime <= 120) {
              localStorage.setItem("timeUnders2Minutes", true);
            } else {
              localStorage.setItem("timeUnders2Minutes", false);
            }
            return newTime;
          });
        }, 1000);
      }
    }
    return () => clearInterval(intervalRef.current);
  }, [time]);

  useEffect(() => {
    const endTime = Date.now() + time * 1000;
    if (localStorage.getItem("idDetail").includes("exam")) {
      localStorage.setItem("endTime", endTime);
    }
  }, [time]);

  useEffect(() => {
    if (localStorage.getItem("idDetail").includes("exam")) {
      if (JSON.parse(localStorage.getItem("TimeStop")) === true) {
        clearInterval(intervalRef.current);
      }
    }
  }, []);

  useEffect(() => {
    window.onpopstate = () => {
      localStorage.setItem("idDetail", id);
      navigate(`/${localStorage.getItem("idDetail")}`);
    };
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("IsSubmit")) === true || time === 0) {
      localStorage.setItem("IsSubmit", true);
      localStorage.setItem("TimeStop", true);
      localStorage.setItem("semuaSoalTelahDiisi", true);
      const myModal = new window.bootstrap.Modal(
        document.getElementById("dialogHasilNilaiUjian")
      );
      myModal.show();
      clearInterval(intervalRef.current);
      handleActivity();
    }
  }, []);

  useEffect(() => {
    if (time <= 120) {
      localStorage.setItem("timeUnders2Minutes", true);
    }
  }, [time]);

  return (
    <>
      {(() => {
        if (id.includes("lessons")) {
          if (id.includes("one")) {
            return (
              <>
                {pelajaran && (
                  <>
                    {/* <HeaderComponent2 img={img} /> */}
                    <div
                      dir="ltr"
                      className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]"
                    >
                      <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-pb-11">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                          Pelajaran 1
                        </p>
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                          Huruf Hijaiyah
                        </p>
                      </div>
                      <div className="tw-flex tw-w-[100%]">
                        <div
                          className="tw-flex tw-flex-col tw-mx-auto tw-w-[100%]"
                          dir="rtl"
                        >
                          <div className="tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-serif">
                            {pelajaran.map((a, index) => {
                              if (
                                ["ج", "ح", "خ", "ر"].includes(a.hurufHijaiyah)
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-8 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufHijaiyah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (
                                ["د", "ذ", "ك", "ط", "ظ", "ف"].includes(
                                  a.hurufHijaiyah
                                )
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pt-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                    2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufHijaiyah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (["ي"].includes(a.hurufHijaiyah)) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-10 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufHijaiyah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (
                                ["ن", "ق", "ع", "غ", "و"].includes(
                                  a.hurufHijaiyah
                                )
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufHijaiyah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (["م"].includes(a.hurufHijaiyah)) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufHijaiyah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-text-white sm:tw-h-32 lg:tw-h-44 xl:tw-h-48 
                                      2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufHijaiyah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              }
                            })}
                          </div>
                          <PaginationDetail
                            id={id}
                            tempIdCourse={tempIdCourse}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <FooterComponent /> */}
                  </>
                )}
              </>
            );
          } else if (id.includes("two")) {
            return (
              <>
                {pelajaran && (
                  <>
                    {/* <HeaderComponent2 img={img} /> */}
                    <div
                      dir="ltr"
                      className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]"
                    >
                      <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-pb-11">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                          Pelajaran 2
                        </p>
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                          Huruf Berharakat Fathah
                        </p>
                      </div>
                      <div className="tw-flex tw-w-[100%]">
                        <div
                          className="tw-flex tw-flex-col tw-mx-auto tw-w-[100%]"
                          dir="rtl"
                        >
                          <div className="tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-12 xl:tw-px-36 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-serif">
                            {pelajaran.map((a, index) => {
                              if (
                                ["ج", "ح", "خ", "ر"].includes(
                                  a.hurufBerharakatFathah
                                )
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-8 tw-text-white sm:tw-h-32 
                                      lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufBerharakatFathah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (
                                ["د", "ذ", "ك", "ط", "ظ", "ف"].includes(
                                  a.hurufBerharakatFathah
                                )
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pt-5 tw-text-white sm:tw-h-32 
                                    lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufBerharakatFathah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (
                                ["ي"].includes(a.hurufBerharakatFathah)
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-10 tw-text-white sm:tw-h-32 
                                      lg:tw-h-44 xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufBerharakatFathah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (
                                ["ن", "ق", "ع", "غ", "و"].includes(
                                  a.hurufBerharakatFathah
                                )
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-44 
                                      xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufBerharakatFathah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else if (
                                ["م"].includes(a.hurufBerharakatFathah)
                              ) {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-44 
                                      xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufBerharakatFathah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              } else {
                                return (
                                  <Link
                                    to={`/${id}/contents/${a.id}`}
                                    key={a.id}
                                  >
                                    <button
                                      key={index}
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-text-white sm:tw-h-32 lg:tw-h-44 
                                      xl:tw-h-48 2xl:tw-h-56 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[40px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[110px] tw-font-bold">
                                        {a.hurufBerharakatFathah}
                                      </p>
                                    </button>
                                  </Link>
                                );
                              }
                            })}
                          </div>
                          <PaginationDetail
                            id={id}
                            tempIdCourse={tempIdCourse}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <FooterComponent /> */}
                  </>
                )}
              </>
            );
          } else {
            return <></>;
          }
        } else if (id.includes("exercise")) {
          if (id.includes("one")) {
            console.log("Rendering Exercise One", tempExercise1);
            return (
              <>
                {tempExercise1 && (
                  <>
                    {/* <HeaderComponent2 img={img} /> */}
                    <div
                      dir="ltr"
                      className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]"
                    >
                      <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                          Latihan 1
                        </p>
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                          Huruf Hijaiyah
                        </p>
                      </div>
                      <div className="tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32">
                        <ul className="tw-flex tw-mx-auto tw-justify-between tw-w-full">
                          {tempExercise1.map((a) => {
                            return (
                              <li
                                key={a.id}
                                data-bs-target={`#dialogMulaiLatihan${a.id}`}
                                data-bs-toggle="modal"
                                className="tw-cursor-pointer"
                              >
                                <div className="tw-flex tw-flex-col">
                                  <img src={a.gambar} alt={a.gambar} />
                                  <p className="tw-text-[30px] tw-font-bold tw-mx-auto">
                                    {a.nama2}
                                  </p>
                                </div>
                                <DialogBerhasil3 id={id} id2={a.id} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* <FooterComponent /> */}
                  </>
                )}
              </>
            );
          } else if (id.includes("two")) {
            console.log("Rendering Exercise Two", tempExercise2);
            return (
              <>
                {tempExercise2 && (
                  <>
                    {/* <HeaderComponent2 img={img} /> */}
                    <div
                      dir="ltr"
                      className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]"
                    >
                      <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                          Latihan 2
                        </p>
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                          Huruf Berharakat Fathah
                        </p>
                      </div>
                      <div className="tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32">
                        <ul className="tw-flex tw-mx-auto tw-justify-between tw-w-full">
                          {tempExercise2.map((a) => {
                            return (
                              <>
                                <li
                                  key={a.id}
                                  data-bs-target={`#dialogMulaiLatihan${a.id}`}
                                  data-bs-toggle="modal"
                                  className="tw-cursor-pointer"
                                >
                                  <div className="tw-flex tw-flex-col">
                                    <img src={a.gambar} alt={a.gambar} />
                                    <p className="tw-text-[30px] tw-font-bold tw-mx-auto">
                                      {a.nama2}
                                    </p>
                                  </div>
                                  <DialogBerhasil3 id={id} id2={a.id} />
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* <FooterComponent /> */}
                  </>
                )}
              </>
            );
          } else {
            return <></>;
          }
        } else if (id.includes("exam")) {
          if (id.includes("one")) {
            return (
              <>
                <div
                  dir="ltr"
                  className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]"
                >
                  <div
                    className={`tw-flex tw-flex-col tw-pt-28 ${
                      localStorage.getItem("idDetail").includes("exam")
                        ? "lg:tw-pt-10"
                        : "lg:tw-pt-32"
                    } tw-w-full`}
                  >
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                      Ujian 1
                    </p>
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                      Huruf Hijaiyah
                    </p>
                  </div>
                  {/* <div className="tw-flex tw-justify-between tw-px-36">
                    <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[150px] tw-text-[20px] tw-font-poppins tw-px-8 tw-py-3 tw-text-[#34D399] tw-opacity-0">
                      <p className="tw-mx-auto">{formatTime(time)}</p>
                    </div>
                    <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[150px] tw-text-[20px] tw-font-poppins tw-px-8 tw-py-3">
                      {JSON.parse(
                        localStorage.getItem("timeUnders2Minutes")
                      ) === true ? (
                        <p className="tw-mx-auto tw-text-[#FB7185]">
                          {formatTime(time)}
                        </p>
                      ) : (
                        <p className="tw-mx-auto tw-text-[#34D399]">
                          {formatTime(time)}
                        </p>
                      )}
                    </div>
                  </div> */}
                  {JSON.parse(localStorage.getItem("IsSubmit")) === true ||
                  JSON.parse(localStorage.getItem("TimeStop")) === true ? (
                    <></>
                  ) : (
                    <>
                      <div className="tw-flex tw-justify-between tw-px-36">
                        <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[150px] tw-text-[20px] tw-font-poppins tw-px-8 tw-py-3 tw-text-[#34D399] tw-opacity-0">
                          <p className="tw-mx-auto">{formatTime(time)}</p>
                        </div>
                        <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[150px] tw-text-[20px] tw-font-poppins tw-px-8 tw-py-3">
                          {JSON.parse(
                            localStorage.getItem("timeUnders2Minutes")
                          ) === true ? (
                            <p className="tw-mx-auto tw-text-[#FB7185]">
                              {formatTime(time)}
                            </p>
                          ) : (
                            <p className="tw-mx-auto tw-text-[#34D399]">
                              {formatTime(time)}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32">
                    <ul className="tw-flex tw-mx-auto tw-justify-between tw-w-full">
                      <div className="tw-flex tw-flex-col tw-gap-5">
                        {tempExam1 && (
                          <>
                            {tempExam1.soalJawaban2.map((a, index) => {
                              return (
                                <div className="tw-pb-5" key={a.id}>
                                  <p
                                    className="tw-text-[24px]"
                                    dangerouslySetInnerHTML={{
                                      __html: index + 1 + ". " + a.soal,
                                    }}
                                  />
                                  {a.id.includes("video") ? (
                                    <>
                                      <div className="tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                        <video
                                          controls
                                          className="lg:tw-w-[85%] tw-mx-auto"
                                        >
                                          <source
                                            src={a.video}
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {a.id.includes("audio") ? (
                                        <>
                                          <div className="tw-flex tw-w-full tw-justify-center tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                            <button
                                              onClick={() =>
                                                audioPlay(`${a.audio}`)
                                              }
                                            >
                                              <img src={img3} alt="sound" />
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )}
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
                                                    `opsiSoal_${index + 1}`
                                                  )
                                                ) === b.id
                                                  ? JSON.parse(
                                                      localStorage.getItem(
                                                        `opsiSoal_${index + 1}`
                                                      )
                                                    ) === b.id &&
                                                    JSON.parse(
                                                      localStorage.getItem(
                                                        "IsSubmit"
                                                      )
                                                    ) === true
                                                    ? JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === b.id &&
                                                      JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === a.jawabanBenar
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
                                                    `opsiSoal_${index + 1}`
                                                  )
                                                ) === b.id
                                                  ? JSON.parse(
                                                      localStorage.getItem(
                                                        `opsiSoal_${index + 1}`
                                                      )
                                                    ) === b.id &&
                                                    JSON.parse(
                                                      localStorage.getItem(
                                                        "IsSubmit"
                                                      )
                                                    ) === true
                                                    ? JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === b.id &&
                                                      JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === a.jawabanBenar
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
                          </>
                        )}
                      </div>
                    </ul>
                    {JSON.parse(localStorage.getItem(`semuaSoalTelahDiisi`)) ===
                    true ? (
                      <>
                        {JSON.parse(localStorage.getItem(`IsSubmit`)) ===
                        true ? (
                          <button
                            onClick={() => {
                              navigate(`/kursus`, { replace: true });
                              window.location.reload();
                              tempExam1.soalJawaban2.forEach((_, index) => {
                                localStorage.removeItem(
                                  `opsiSoal_${index + 1}`
                                );
                              });
                              localStorage.removeItem(`temps`);
                              localStorage.removeItem(`semuaSoalTelahDiisi`);
                              localStorage.removeItem(`IsSubmit`);
                              localStorage.removeItem("endTime");
                              localStorage.removeItem("timeUnders2Minutes");
                              localStorage.removeItem("TimeStop");
                              localStorage.setItem("idDetail", "");
                              localStorage.removeItem(`score`);
                              localStorage.removeItem(`tempNilaiSoal`);
                            }}
                            className="tw-bg-[#009900] hover:tw-bg-[#007100] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                          >
                            Ok
                          </button>
                        ) : (
                          <button
                            data-bs-target="#dialogAkhirUjian"
                            data-bs-toggle="modal"
                            className="tw-bg-[#009900] hover:tw-bg-[#007100] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
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
                </div>
              </>
            );
          } else if (id.includes("two")) {
            return (
              <>
                <div
                  dir="ltr"
                  className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]"
                >
                  <div className="tw-flex tw-flex-col tw-pt-28 lg:tw-pt-32 tw-w-full">
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                      Ujian 2
                    </p>
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                      Huruf Berharakat Fathah
                    </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-32">
                    <ul className="tw-flex tw-mx-auto tw-justify-between tw-w-full">
                      <div className="tw-flex tw-flex-col tw-gap-5">
                        {tempExam2 && (
                          <>
                            {tempExam2.soalJawaban2.map((a, index) => {
                              return (
                                <div className="tw-pb-5" key={a.id}>
                                  <p
                                    className="tw-text-[24px]"
                                    dangerouslySetInnerHTML={{
                                      __html: index + 1 + ". " + a.soal,
                                    }}
                                  />
                                  {a.id.includes("video") ? (
                                    <>
                                      <div className="tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                        <video
                                          controls
                                          className="lg:tw-w-[85%] tw-mx-auto"
                                        >
                                          <source
                                            src={a.video}
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {a.id.includes("audio") ? (
                                        <>
                                          <div className="tw-flex tw-w-full tw-justify-center tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                            <button
                                              onClick={() =>
                                                audioPlay(`${a.audio}`)
                                              }
                                            >
                                              <img src={img3} alt="sound" />
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )}
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
                                                    `opsiSoal_${index + 1}`
                                                  )
                                                ) === b.id
                                                  ? JSON.parse(
                                                      localStorage.getItem(
                                                        `opsiSoal_${index + 1}`
                                                      )
                                                    ) === b.id &&
                                                    JSON.parse(
                                                      localStorage.getItem(
                                                        "IsSubmit"
                                                      )
                                                    ) === true
                                                    ? JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === b.id &&
                                                      JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === a.jawabanBenar
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
                                                    `opsiSoal_${index + 1}`
                                                  )
                                                ) === b.id
                                                  ? JSON.parse(
                                                      localStorage.getItem(
                                                        `opsiSoal_${index + 1}`
                                                      )
                                                    ) === b.id &&
                                                    JSON.parse(
                                                      localStorage.getItem(
                                                        "IsSubmit"
                                                      )
                                                    ) === true
                                                    ? JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === b.id &&
                                                      JSON.parse(
                                                        localStorage.getItem(
                                                          `opsiSoal_${
                                                            index + 1
                                                          }`
                                                        )
                                                      ) === a.jawabanBenar
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
                          </>
                        )}
                      </div>
                    </ul>
                    {JSON.parse(localStorage.getItem(`semuaSoalTelahDiisi`)) ===
                    true ? (
                      <>
                        {JSON.parse(localStorage.getItem(`IsSubmit`)) ===
                        true ? (
                          <button
                            onClick={() => {
                              navigate(`/kursus`);
                              window.location.reload();
                              tempExam2.soalJawaban2.forEach((_, index) => {
                                localStorage.removeItem(
                                  `opsiSoal_${index + 1}`
                                );
                              });
                              localStorage.removeItem(`temps`);
                              localStorage.removeItem(`semuaSoalTelahDiisi`);
                              localStorage.removeItem(`IsSubmit`);
                              localStorage.removeItem("endTime");
                              localStorage.removeItem("timeUnders2Minutes");
                              localStorage.setItem("idDetail", "");
                              localStorage.removeItem(`score`);
                              localStorage.removeItem(`tempNilaiSoal`);
                            }}
                            className="tw-bg-[#009900] tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                          >
                            Ok
                          </button>
                        ) : (
                          <button
                            data-bs-target="#dialogAkhirUjian"
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
                  {/* {localStorage.setItem(`score`, score)} */}
                  {/* <DialogAkhir id={"dialogAkhirUjian"} id2={"dialogHasilNilaiUjian"} text={"Apakah Anda yakin ingin mengakhiri ujian ini?"} text2={"Akhiri Ujian"}/> */}
                </div>
              </>
            );
          } else {
            return <></>;
          }
        } else {
          return <></>;
        }
      })()}
    </>
  );
};

export default ContentDetailKursus;
