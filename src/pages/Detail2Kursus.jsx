import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent2 from "../components/HeaderComponent2";
import ContentDetail2Kursus from "../components/ContentDetail2Kursus";

const Detail2Kursus = ({ tempToken, img, img2, img3 }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", "profile");
  }, []);

  return (
    <>
      {tempToken ? (
        <div>
          <HeaderComponent2 img={img} />
          <ContentDetail2Kursus img2={img2} img3={img3} />
          <FooterComponent />
        </div>
      ) : (
        <div>
          <HeaderComponent img={img} />
          <ContentDetail2Kursus img2={img2} img3={img3} />
          <FooterComponent />
        </div>
      )}
    </>
  );
};

export default Detail2Kursus;
