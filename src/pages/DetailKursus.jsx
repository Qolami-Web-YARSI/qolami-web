import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent2 from "../components/HeaderComponent2";
import ContentDetailKursus from "../components/ContentDetailKursus";
import KursusData from "../data/KursusData";

const DetailKursus = ({ tempToken, img, img2, img3 }) => {
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

  return (
    <>
      {tempToken ? (
        <div>
          <HeaderComponent2 img={img} />
          <ContentDetailKursus img={img} img2={img2} img3={img3} />
          <FooterComponent />
        </div>
      ) : (
        <div>
          <HeaderComponent img={img} />
          <ContentDetailKursus img2={img2} img3={img3} />
          <FooterComponent />
        </div>
      )}
    </>
  );
};

export default DetailKursus;
