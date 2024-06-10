import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const PaginationDetail = ({ id, tempIdCourse }) => {
  const load = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="tw-flex tw-mx-auto tw-justify-between tw-w-[100%] xs:tw-py-10 sm:tw-py-16 tw-px-10 md:tw-px-40"
        dir="ltr"
      >
        {tempIdCourse.indexOf(id) === 0 ? (
          <button
            className=" tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-8 xs:tw-my-5 tw-p-2 tw-rounded-full 
                    2xs:tw-text-[25px] xs:tw-text-[40px] md:tw-text-[60px]"
            onClick={load}
          >
            <Link to={`/${tempIdCourse[tempIdCourse.length - 1]}`}>
              <FiArrowLeft />
            </Link>
          </button>
        ) : (
          <button
            className=" tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-8 xs:tw-my-5 tw-p-2 tw-rounded-full 
            2xs:tw-text-[25px] xs:tw-text-[40px] md:tw-text-[60px]"
            onClick={load}
          >
            <Link to={`/${tempIdCourse[tempIdCourse.indexOf(id) - 1]}`}>
              <FiArrowLeft />
            </Link>
          </button>
        )}
        <button className="2xs:tw-text-[30px] xs:tw-text-[40px] md:tw-text-[60px] hover:tw-text-[#90C963]">
          <Link to={`/kursus`}>
            <FiMenu />
          </Link>
        </button>
        {tempIdCourse.indexOf(id) ===
        tempIdCourse.indexOf(tempIdCourse[tempIdCourse.length - 1]) ? (
          <button
            className="tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-8 xs:tw-my-5 tw-p-2 tw-rounded-full 
            2xs:tw-text-[25px] xs:tw-text-[40px] md:tw-text-[60px]"
            onClick={load}
          >
            <Link to={`/${tempIdCourse[0]}`}>
              <FiArrowRight />
            </Link>
          </button>
        ) : (
          <button
            className=" tw-bg-[#C2EF90] hover:tw-bg-[#90C963] tw-my-8 xs:tw-my-5 tw-p-2 tw-rounded-full 
            2xs:tw-text-[25px] xs:tw-text-[40px] md:tw-text-[60px]"
            onClick={load}
          >
            <Link to={`/${tempIdCourse[tempIdCourse.indexOf(id) + 1]}`}>
              <FiArrowRight />
            </Link>
          </button>
        )}
      </div>
    </>
  );
};

export default PaginationDetail;
