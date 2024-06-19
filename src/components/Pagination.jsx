import React from "react";

const Pagination = ({ totaltempDatas, postPerPage, paginate, currentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totaltempDatas / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <div className="tw-flex tw-bg-[#C2EF90] tw-mx-auto tw-mt-20 tw-mb-16 tw-font-poppins">
        {currentPage === 1 ? (
          <li
            className="tw-list-none tw-border-2 tw-border-e-0 tw-bg-[#8a8a8a] tw-border-black 
                    tw-py-0 tw-px-3 md:tw-px-4 lg:tw-px-5 tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-border-r-0 tw-cursor-not-allowed"
            disabled
          >
            &lt;
          </li>
        ) : (
          <li
            className="tw-list-none tw-border-2 tw-border-e-0 hover:tw-bg-[#90C963] 
                    tw-py-0 tw-px-3 md:tw-px-4 lg:tw-px-5 hover:tw-text-black tw-border-black tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] 
                    tw-font-poppins tw-border-r-0 tw-cursor-pointer"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              className="tw-cursor-pointer tw-px-3 md:tw-px-4 lg:tw-px-6"
            >
              &lt;
            </button>
          </li>
        )}
        {pageNumber.map((a) => {
          return (
            <li
              key={a}
              className="tw-list-none tw-border-2 hover:tw-bg-[#90C963] hover:tw-text-black 
                        tw-border-black tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-cursor-pointer"
            >
              <button
                onClick={() => paginate(a)}
                className="tw-cursor-pointer tw-px-3 md:tw-px-4 lg:tw-px-6 hover:tw-bg-[#90C963] hover:tw-text-black"
              >
                {a}
              </button>
            </li>
          );
        })}
        {currentPage === pageNumber[pageNumber.length - 1] ? (
          <li
            className="tw-list-none tw-border-2 tw-border-s-0 tw-bg-[#8a8a8a] tw-border-black 
                    tw-py-0 tw-px-3 md:tw-px-4 lg:tw-px-5 tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-cursor-not-allowed"
            disabled
          >
            &gt;
          </li>
        ) : (
          <li
            className="tw-list-none tw-border-2 tw-border-s-0 hover:tw-bg-[#90C963] 
                    hover:tw-text-black tw-py-0 tw-px-3 md:tw-px-4 lg:tw-px-5 tw-border-black tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-cursor-pointer"
          >
            <button
              onClick={() => paginate(currentPage + 1)}
              className="tw-cursor-pointer tw-px-3 md:tw-px-4 lg:tw-px-6"
            >
              &gt;
            </button>
          </li>
        )}
      </div>
    </>
  );
};

export default Pagination;
