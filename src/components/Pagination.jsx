import React, { useState, useEffect, useRef } from 'react';

const Pagination =  ({totaltempDatas, postPerPage, paginate, currentPage}) => {
    const pageNumber = []
    for(let i = 1; i <= Math.ceil(totaltempDatas/postPerPage); i++){
        pageNumber.push(i)
    }
    return(
        <>
            <div className='tw-flex tw-bg-[#C2EF90] tw-mx-auto tw-mt-20 tw-font-poppins'>
                {/* {currentPage === 1 ? 
                    <li className="tw-list-none tw-border-2 tw-bg-[#8a8a8a] tw-border-black tw-py-0 tw-px-3 md:tw-px-4 lg:tw-px-6 tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-border-r-0 tw-cursor-pointer" disabled>
                        &lt;
                    </li> 
                    : 
                    <li className="tw-list-none tw-border-2 tw-border-black tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-border-r-0 tw-cursor-pointer">
                        <a onClick={()=> paginate(currentPage - 1)} className='tw-cursor-pointer tw-px-3 md:tw-px-4 lg:tw-px-6'>&lt;</a>
                    </li>
                } */}
                {pageNumber.map((a)=>{
                    return(
                        <li key={a} className="tw-list-none tw-border-2 tw-border-black tw-my-auto tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins">
                            <a onClick={()=> paginate(a)} className='tw-cursor-pointer tw-px-3 md:tw-px-4 lg:tw-px-6'>{a}</a>
                        </li>
                    )
                })}
                {/* {currentPage === pageNumber[pageNumber.length - 1] ? 
                    <li className="tw-list-none tw-border-2 tw-bg-[#8a8a8a] tw-border-black tw-py-0 tw-px-3 md:tw-px-4 lg:tw-px-6 tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-border-l-0 tw-cursor-pointer" disabled>
                        &gt;
                    </li>
                    : 
                    <li className="tw-list-none tw-border-2 tw-border-black tw-text-[23px] md:tw-text-[25px] lg:tw-text-[35px] tw-font-poppins tw-border-l-0 tw-cursor-pointer">
                        <a onClick={()=> paginate(currentPage + 1)} className='tw-cursor-pointer tw-px-3 md:tw-px-4 lg:tw-px-6'>&gt;</a>
                    </li>
                } */}
            </div>
        </>
    )
}

export default Pagination