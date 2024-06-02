import React, { useState, useEffect } from "react";

const FooterComponent = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const idDetail = localStorage.getItem("idDetail");
    const timeStop = localStorage.getItem("TimeStop");
    const shouldHideFooter = idDetail?.includes("exam");

    setIsHidden(shouldHideFooter);
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <footer hidden={isHidden}>
      <div className="tw-flex tw-bg-[#458200] tw-justify-between tw-p-2 tw-py-12 tw-font-poppins">
        <div className="tw-flex tw-flex-col tw-justify-center">
          <p></p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-font-poppins">
          <p className="tw-px-7 tw-font-normal tw-text-white tw-text-[15px] sm:tw-text-[20px] tw-text-center">
            © 2024 Qolami
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center">
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
