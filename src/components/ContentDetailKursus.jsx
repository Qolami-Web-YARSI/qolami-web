import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import KursusData from "../data/KursusData";
import PaginationDetail from "./PaginationDetail";
import DialogBerhasil3 from "../pages/DialogBerhasil3";

const shuffleArray2 = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ContentDetailKursus = ({ img, img2, img3 }) => {
  const { id } = useParams();
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
  const [shuffledSoalJawaban1, setShuffledSoalJawaban1] = useState([]);
  const [shuffledSoalJawaban2, setShuffledSoalJawaban2] = useState([]);
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
      if (id.includes("exam")) {
        if (a.id.includes("exam-one")) {
          setTempExam1(a);
          const savedShuffledSoal2_1 = localStorage.getItem("shuffledSoal21");
          if (savedShuffledSoal2_1) {
            setShuffledSoalJawaban1(JSON.parse(savedShuffledSoal2_1));
          } else {
            const shuffled2_1 = shuffleArray2([...a.soalJawaban2]);
            setShuffledSoalJawaban1(shuffled2_1);
            localStorage.setItem("shuffledSoal21", JSON.stringify(shuffled2_1));
          }
        } else if (a.id.includes("exam-two")) {
          setTempExam2(a);
          const savedShuffledSoal2_2 = localStorage.getItem("shuffledSoal22");
          if (savedShuffledSoal2_2) {
            setShuffledSoalJawaban2(JSON.parse(savedShuffledSoal2_2));
          } else {
            const shuffled2_2 = shuffleArray2([...a.soalJawaban2]);
            setShuffledSoalJawaban2(shuffled2_2);
            localStorage.setItem("shuffledSoal22", JSON.stringify(shuffled2_2));
          }
          setPanjangSoalJawaban(a.soalJawaban2.length);
        } else {
          console.log("no identify exam!");
        }
      }
      setPanjangSoalJawaban(10);
    });
  };

  const detailApiPelajaran = async () => {
    try {
      const response = await axios.get(
        `https://qolami-web-golecrsfhq-uc.a.run.app/${id}`
      );
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
      const updatedScore = 100 / panjangSoalJawaban;
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

  const activityNameManipulasi = KursusData.find((b) => b.id === id);
  const statusManipulasi =
    JSON.parse(localStorage.getItem(`score`)) >= 75 ? "Lulus" : "Tidak Lulus";

  const handleActivity = async () => {
    try {
      const response = await axios.post(
        "https://qolami-web-golecrsfhq-uc.a.run.app/activity",
        {
          activityName: `${activityNameManipulasi.nama}`,
          date: `${localStorage.getItem(`dateTime`)}`,
          value: JSON.parse(localStorage.getItem(`score`)),
          status: statusManipulasi,
          idUser: localStorage.getItem(`id`),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (
      (JSON.parse(localStorage.getItem("IsSubmit")) === true || time === 0) &&
      localStorage.getItem("idDetail").includes("exam")
    ) {
      handleActivity();
      localStorage.setItem("IsSubmit", true);
      localStorage.setItem("TimeStop", true);
      localStorage.setItem("semuaSoalTelahDiisi", true);
      const myModal = new window.bootstrap.Modal(
        document.getElementById("dialogHasilNilaiUjian")
      );
      myModal.show();
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (time <= 120) {
      localStorage.setItem("timeUnders2Minutes", true);
    }
    console.log(activityNameManipulasi.name);
  }, [time]);

  useEffect(() => {
    window.onpopstate = () => {
      if (localStorage.getItem("idDetail").includes("exam")) {
        localStorage.removeItem("shuffledSoal21");
        localStorage.removeItem("shuffledSoal22");
        localStorage.removeItem("score");
        localStorage.removeItem("endTime");
        localStorage.removeItem("TimeStop");
        localStorage.removeItem("timeUnders2Minutes");
        localStorage.removeItem("semuaSoalTelahDiisi");
        localStorage.removeItem("temps");
        localStorage.removeItem("tempNilaiSoal");
        localStorage.removeItem("shuffledSoal1");
        localStorage.removeItem("dateTime");
        localStorage.removeItem(`IsSubmit`);
        localStorage.setItem("id2", "");
        localStorage.setItem("idDetail", "");
        KursusData.forEach((a) => {
          a.soalJawaban2.forEach((_, index) => {
            localStorage.removeItem(`opsiSoal_${index + 1}`);
          });
        });
        const myModal = new window.bootstrap.Modal(
          document.getElementById("ujianBerakhir")
        );
        myModal.show();
      }
    };
  });

  useEffect(() => {
    if (localStorage.getItem("idDetail").includes("exam")) {
      localStorage.removeItem("id2");
      const myModal = new window.bootstrap.Modal(
        document.getElementById("ujianPeringatan")
      );
      if (JSON.parse(localStorage.getItem("IsSubmit")) === true) {
        myModal.hide();
      } else {
        myModal.show();
      }
    }
  }, []);

  return (
    <>
      {(() => {
        if (id.includes("lessons")) {
          if (id.includes("one")) {
            return (
              <>
                {pelajaran && (
                  <>
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
                          <div className="tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-40 xl:tw-px-60 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-serif">
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
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} sm:tw-pb-8 tw-text-white sm:tw-h-32 lg:tw-h-32 xl:tw-h-40 
                                      2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto tw-t-32 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} sm:tw-pt-5 tw-text-white sm:tw-h-32 lg:tw-h-32 xl:tw-h-40 
                                    2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} sm:tw-pb-10 tw-text-white sm:tw-h-32 lg:tw-h-32 xl:tw-h-40
                                      2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} sm:tw-pb-5 tw-text-white sm:tw-h-32 lg:tw-h-32 xl:tw-h-40 
                                      2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} sm:tw-pb-14 tw-text-white sm:tw-h-32 lg:tw-h-32 xl:tw-h-40 
                                      2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      className={`tw-flex bg-${a.colorCard} hover:bg-${a.hoverCard} tw-text-white sm:tw-h-32 lg:tw-h-32 xl:tw-h-40 
                                      2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                  </>
                )}
              </>
            );
          } else if (id.includes("two")) {
            return (
              <>
                {pelajaran && (
                  <>
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
                          <div className="tw-grid tw-grid-cols-5 tw-flex-wrap tw-px-7 lg:tw-px-40 xl:tw-px-60 2xs:tw-gap-3 xs:tw-gap-4 md:tw-gap-5 lg:tw-gap-7 tw-font-serif">
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
                                      lg:tw-h-32 xl:tw-h-40 2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                    lg:tw-h-32 xl:tw-h-40 2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      lg:tw-h-32 xl:tw-h-40 2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      xl:tw-h-48 2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      xl:tw-h-48 2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                                      xl:tw-h-48 2xl:tw-h-48 tw-rounded-xl lg:tw-rounded-[25px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-w-full`}
                                    >
                                      <p className="tw-m-auto 2xs:tw-text-[35px] xs:tw-text-[50px] sm:tw-text-[70px] xl:tw-text-[85px] 2xl:tw-text-[90px] tw-font-bold">
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
                  </>
                )}
              </>
            );
          } else {
            return <></>;
          }
        } else if (id.includes("exercise")) {
          if (id.includes("one")) {
            return (
              <>
                {tempExercise1 && (
                  <>
                    <div
                      dir="ltr"
                      className="tw-flex tw-flex-col tw-mx-auto tw-bg-[#FFF6D9] tw-w-[100%]"
                    >
                      <div className="tw-flex tw-flex-col tw-pt-28 md:tw-pt-28 lg:tw-pt-32 tw-w-full">
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                          Latihan 1
                        </p>
                        <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                          Huruf Hijaiyah
                        </p>
                      </div>
                      <div className="tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 2xs:tw-px-[70px] xs:tw-px-[120px] sm:tw-px-[170px] md:tw-px-32 lg:tw-px-56">
                        <ul className="tw-flex tw-flex-col md:tw-flex-row tw-mx-auto tw-justify-between tw-w-full">
                          {tempExercise1.map((a) => {
                            if (localStorage.getItem("id2").includes(a.id)) {
                              return (
                                <li
                                  key={a.id}
                                  onClick={() =>
                                    navigate(`/${id}/exercise/${a.id}`)
                                  }
                                  className="tw-cursor-pointer"
                                >
                                  <div className="tw-flex tw-flex-col">
                                    <img
                                      src={a.gambar}
                                      alt={a.gambar}
                                      className="lg:tw-w-[210px]"
                                    />
                                    <p className="tw-text-[15px] sm:tw-text-[30px] tw-font-bold tw-mx-auto">
                                      {a.nama2}
                                    </p>
                                  </div>
                                </li>
                              );
                            } else {
                              return (
                                <li
                                  key={a.id}
                                  data-bs-target={`#dialogMulaiLatihan${a.id}`}
                                  data-bs-toggle="modal"
                                  className="tw-cursor-pointer"
                                >
                                  <div className="tw-flex tw-flex-col">
                                    <img
                                      src={a.gambar}
                                      alt={a.gambar}
                                      className="lg:tw-w-[210px]"
                                    />
                                    <p className="tw-text-[15px] sm:tw-text-[30px] tw-font-bold tw-mx-auto">
                                      {a.nama2}
                                    </p>
                                  </div>
                                  <DialogBerhasil3 id={id} id2={a.id} />
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          } else if (id.includes("two")) {
            return (
              <>
                {tempExercise2 && (
                  <>
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
                      <div className="tw-flex tw-mx-auto tw-w-full tw-py-9 tw-pb-16 2xs:tw-px-[70px] xs:tw-px-[120px] sm:tw-px-[170px] md:tw-px-32 lg:tw-px-56">
                        <ul className="tw-flex tw-flex-col md:tw-flex-row tw-mx-auto tw-justify-between tw-w-full">
                          {tempExercise2.map((a) => {
                            if (localStorage.getItem("id2").includes(a.id)) {
                              return (
                                <li
                                  key={a.id}
                                  onClick={() =>
                                    navigate(`/${id}/exercise/${a.id}`)
                                  }
                                  className="tw-cursor-pointer"
                                >
                                  <div className="tw-flex tw-flex-col">
                                    <img
                                      src={a.gambar}
                                      alt={a.gambar}
                                      className="lg:tw-w-[210px]"
                                    />
                                    <p className="tw-text-[15px] sm:tw-text-[30px] tw-font-bold tw-mx-auto">
                                      {a.nama2}
                                    </p>
                                  </div>
                                </li>
                              );
                            } else {
                              return (
                                <li
                                  key={a.id}
                                  data-bs-target={`#dialogMulaiLatihan${a.id}`}
                                  data-bs-toggle="modal"
                                  className="tw-cursor-pointer"
                                >
                                  <div className="tw-flex tw-flex-col">
                                    <img
                                      src={a.gambar}
                                      alt={a.gambar}
                                      className="lg:tw-w-[210px]"
                                    />
                                    <p className="tw-text-[15px] sm:tw-text-[30px] tw-font-bold tw-mx-auto">
                                      {a.nama2}
                                    </p>
                                  </div>
                                  <DialogBerhasil3 id={id} id2={a.id} />
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    </div>
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
                    className={`tw-flex tw-flex-col tw-pt-6 md:tw-pt-10 ${
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
                  {JSON.parse(localStorage.getItem("IsSubmit")) === true ||
                  JSON.parse(localStorage.getItem("TimeStop")) === true ? (
                    <></>
                  ) : (
                    <>
                      <div className="tw-flex tw-justify-between tw-px-10 sm:tw-px-24 lg:tw-px-36">
                        <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[75px] sm:tw-w-[100px] lg:tw-w-[150px] tw-text-[20px] tw-font-poppins tw-px-6 lg:tw-px-8 tw-py-1 tw-mt-8 sm:tw-mt-8 lg:tw-py-3 tw-text-[#34D399] tw-opacity-0">
                          <p className="tw-mx-auto">{formatTime(time)}</p>
                        </div>
                        <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[100px] lg:tw-w-[150px] tw-text-[15px] lg:tw-text-[20px] tw-font-poppins tw-px-6 tw-mt-8 sm:tw-mt-8 lg:tw-px-8 tw-py-1 lg:tw-py-3">
                          {JSON.parse(
                            localStorage.getItem("timeUnders2Minutes")
                          ) === true ? (
                            <p className="tw-m-auto tw-text-[#FB7185]">
                              {formatTime(time)}
                            </p>
                          ) : (
                            <p className="tw-m-auto tw-text-[#34D399] ">
                              {formatTime(time)}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-5 xs:tw-px-10 md:tw-px-20 2xl:tw-px-32 tw-font-poppins">
                    <ul className="tw-flex tw-mx-auto tw-justify-between tw-w-full">
                      <div className="tw-flex tw-flex-col tw-gap-5">
                        {tempExam1 && (
                          <>
                            {shuffledSoalJawaban1
                              .slice(0, 10)
                              .map((a, index) => {
                                return (
                                  <div className="tw-pb-5" key={a.id}>
                                    <p
                                      className="tw-text-[15px] sm:tw-text-[24px]"
                                      dangerouslySetInnerHTML={{
                                        __html: index + 1 + ". " + a.soal,
                                      }}
                                    />
                                    {a.id.includes("video") ? (
                                      <>
                                        <div className="tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                          <video
                                            controls
                                            className="lg:tw-w-[50%] tw-mx-auto"
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
                                            <div className="tw-flex tw-bg-[#009900] tw-rounded-full hover:tw-bg-[#06D805] tw-size-28 xs:tw-size-36 md:tw-size-48  tw-justify-center tw-mt-5 tw-mx-auto">
                                              <button
                                                onClick={() =>
                                                  audioPlay(`${a.audio}`)
                                                }
                                                className="tw-p-7 xs:tw-p-7 md:tw-p-10 tw-size-[100%] tw-rounded-full"
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
                                      <div className="tw-grid tw-grid-cols-2 md:tw-flex tw-gap-4 xl:tw-gap-7 tw-w-full tw-mx-auto tw-justify-between">
                                        {a.opsi.map((b) => {
                                          return (
                                            <div className="tw-flex tw-mx-auto">
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
                                            tw-mt-4 tw-size-6 xs:tw-size-8 xl:tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                                >
                                                  <p className="tw-m-auto tw-text-[12px] xs:tw-text-[15px] xl:tw-text-[20px]">
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
                                              hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-mt-4 tw-size-6 xs:tw-size-8 xl:tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                                >
                                                  <p className="tw-m-auto tw-text-[12px] xs:tw-text-[15px] xl:tw-text-[20px]">
                                                    {b.text}
                                                  </p>
                                                </button>
                                              )}
                                              <img
                                                src={b.imgSrc}
                                                className="tw-w-[90px] sm:tw-w-[100px] lg:tw-w-[150px] xl:tw-w-[200px] tw-rounded-lg"
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
                              localStorage.removeItem("shuffledSoal21");
                              localStorage.removeItem("shuffledSoal22");
                              localStorage.removeItem(`dateTime`);
                              localStorage.setItem("id2", "");
                              localStorage.setItem("idDetail", "");
                              window.location.reload();
                            }}
                            className="tw-bg-[#009900] hover:tw-bg-[#007100] tw-w-[45%] xs:tw-w-[40%] sm:tw-w-[30%] lg:tw-w-[15%] xl:tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                          >
                            Ok
                          </button>
                        ) : (
                          <button
                            data-bs-target="#dialogAkhirUjian"
                            data-bs-toggle="modal"
                            className="tw-bg-[#009900] hover:tw-bg-[#007100] tw-w-[45%] xs:tw-w-[40%] sm:tw-w-[30%] lg:tw-w-[15%] xl:tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                          >
                            Selesaikan
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        className="tw-bg-[#979797] tw-w-[45%] xs:tw-w-[40%] sm:tw-w-[30%] lg:tw-w-[15%] xl:tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
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
                  <div
                    className={`tw-flex tw-flex-col tw-pt-6 md:tw-pt-10 ${
                      localStorage.getItem("idDetail").includes("exam")
                        ? "lg:tw-pt-10"
                        : "lg:tw-pt-32"
                    } tw-w-full`}
                  >
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-[#009900] tw-font-bold tw-text-center tw-pt-5 tw-mx-auto">
                      Ujian 2
                    </p>
                    <p className="tw-text-[20px] sm:tw-text-[25px] md:tw-text-[35px] lg:tw-text-[45px] tw-text-center tw-mx-auto">
                      Huruf Berharakat Fathah
                    </p>
                  </div>
                  {JSON.parse(localStorage.getItem("IsSubmit")) === true ||
                  JSON.parse(localStorage.getItem("TimeStop")) === true ? (
                    <></>
                  ) : (
                    <>
                      <div className="tw-flex tw-justify-between tw-px-10 sm:tw-px-24 lg:tw-px-36">
                        <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[75px] sm:tw-w-[100px] lg:tw-w-[150px] tw-text-[20px] tw-font-poppins tw-px-6 lg:tw-px-8 tw-py-1 tw-mt-8 sm:tw-mt-8 lg:tw-py-3 tw-text-[#34D399] tw-opacity-0">
                          <p className="tw-mx-auto">{formatTime(time)}</p>
                        </div>
                        <div className="tw-flex tw-bg-white tw-border-[#BABABA] tw-border-[3px] tw-w-[100px] lg:tw-w-[150px] tw-text-[15px] lg:tw-text-[20px] tw-font-poppins tw-px-6 tw-mt-8 sm:tw-mt-8 lg:tw-px-8 tw-py-1 lg:tw-py-3">
                          {JSON.parse(
                            localStorage.getItem("timeUnders2Minutes")
                          ) === true ? (
                            <p className="tw-m-auto tw-text-[#FB7185]">
                              {formatTime(time)}
                            </p>
                          ) : (
                            <p className="tw-m-auto tw-text-[#34D399] ">
                              {formatTime(time)}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="tw-flex tw-flex-col tw-mx-auto tw-w-full tw-py-9 tw-pb-16 tw-px-5 xs:tw-px-10 md:tw-px-20 2xl:tw-px-32 tw-font-poppins">
                    <ul className="tw-flex tw-mx-auto tw-justify-between tw-w-full">
                      <div className="tw-flex tw-flex-col tw-gap-5">
                        {tempExam2 && (
                          <>
                            {shuffledSoalJawaban2
                              .slice(0, 10)
                              .map((a, index) => {
                                return (
                                  <div className="tw-pb-5" key={a.id}>
                                    <p
                                      className="tw-text-[15px] sm:tw-text-[24px]"
                                      dangerouslySetInnerHTML={{
                                        __html: index + 1 + ". " + a.soal,
                                      }}
                                    />
                                    {a.id.includes("video") ? (
                                      <>
                                        <div className="tw-flex tw-w-full tw-mt-5 tw-mx-auto tw-px-8 md:tw-px-10 lg:tw-px-14 xl:tw-px-32">
                                          <video
                                            controls
                                            className="lg:tw-w-[50%] tw-mx-auto"
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
                                            <div className="tw-flex tw-bg-[#009900] tw-rounded-full hover:tw-bg-[#06D805] tw-size-28 xs:tw-size-36 md:tw-size-48  tw-justify-center tw-mt-5 tw-mx-auto">
                                              <button
                                                onClick={() =>
                                                  audioPlay(`${a.audio}`)
                                                }
                                                className="tw-p-7 xs:tw-p-7 md:tw-p-10 tw-size-[100%] tw-rounded-full"
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
                                      <div className="tw-grid tw-grid-cols-2 md:tw-flex tw-gap-4 xl:tw-gap-7 tw-w-full tw-mx-auto tw-justify-between">
                                        {a.opsi.map((b) => {
                                          return (
                                            <div className="tw-flex tw-mx-auto">
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
                                            tw-mt-4 tw-size-6 xs:tw-size-8 xl:tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                                >
                                                  <p className="tw-m-auto tw-text-[12px] xs:tw-text-[15px] xl:tw-text-[20px]">
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
                                              hover:tw-bg-[#1F4E78] hover:tw-border-[#1F4E78] hover:tw-text-white tw-mt-4 tw-size-6 xs:tw-size-8 xl:tw-size-12 tw-border-[3px] tw-rounded-lg`}
                                                >
                                                  <p className="tw-m-auto tw-text-[12px] xs:tw-text-[15px] xl:tw-text-[20px]">
                                                    {b.text}
                                                  </p>
                                                </button>
                                              )}
                                              <img
                                                src={b.imgSrc}
                                                className="tw-w-[90px] sm:tw-w-[100px] lg:tw-w-[150px] xl:tw-w-[200px] tw-rounded-lg"
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
                              localStorage.removeItem(`score`);
                              localStorage.removeItem(`tempNilaiSoal`);
                              localStorage.removeItem("shuffledSoal21");
                              localStorage.removeItem("shuffledSoal22");
                              localStorage.removeItem(`dateTime`);
                              localStorage.setItem("id2", "");
                              localStorage.setItem("idDetail", "");
                              window.location.reload();
                            }}
                            className="tw-bg-[#009900] hover:tw-bg-[#007100] tw-w-[45%] xs:tw-w-[40%] sm:tw-w-[30%] lg:tw-w-[15%] xl:tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                          >
                            Ok
                          </button>
                        ) : (
                          <button
                            data-bs-target="#dialogAkhirUjian"
                            data-bs-toggle="modal"
                            className="tw-bg-[#009900] hover:tw-bg-[#007100] tw-w-[45%] xs:tw-w-[40%] sm:tw-w-[30%] lg:tw-w-[15%] xl:tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                          >
                            Selesaikan
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        className="tw-bg-[#979797] tw-w-[45%] xs:tw-w-[40%] sm:tw-w-[30%] lg:tw-w-[15%] xl:tw-w-[10%] tw-py-2 tw-mt-11 tw-mx-auto tw-text-white tw-font-bold"
                        disabled
                      >
                        Selesaikan
                      </button>
                    )}
                  </div>
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
