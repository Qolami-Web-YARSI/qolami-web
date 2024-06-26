import React, { useState, useEffect } from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent2 from "../components/HeaderComponent2";
import ActivityComponent from "../components/ActivityComponent";
import KursusData from "../data/KursusData";

const Aktifitas = ({ img }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", "profile");
  }, []);

  useEffect(() => {
    KursusData.forEach((a) => {
      a.detail.forEach((b) => {
        if (b.id.includes(localStorage.getItem(`id2`))) {
          if (JSON.parse(localStorage.getItem("IsSubmit")) === true) {
            b.soalJawaban.forEach((_, index) => {
              localStorage.removeItem(`opsiSoal_${index + 1}`);
            });
            localStorage.removeItem(`temps`);
            localStorage.removeItem(`semuaSoalTelahDiisi`);
            localStorage.removeItem(`IsSubmit`);
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    KursusData.forEach((a) => {
      if (a.id.includes(localStorage.getItem(`id2`))) {
        if (JSON.parse(localStorage.getItem("IsSubmit")) === true) {
          a.soalJawaban2.forEach((_, index) => {
            localStorage.removeItem(`opsiSoal_${index + 1}`);
          });
          localStorage.removeItem(`temps`);
          localStorage.removeItem(`semuaSoalTelahDiisi`);
          localStorage.removeItem(`endTime`);
          localStorage.removeItem(`IsSubmit`);
          localStorage.removeItem("timeUnders2Minutes");
          localStorage.removeItem("TimeStop");
        }
      }
    });
  }, []);

  return (
    <>
      <HeaderComponent2 img={img} />
      <ActivityComponent />
      <FooterComponent />
    </>
  );
};

export default Aktifitas;
