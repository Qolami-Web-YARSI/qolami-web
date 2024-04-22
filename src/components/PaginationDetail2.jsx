import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

const PaginationDetail2 = ({id, tempIdDetail}) => {
    
    return(
        <>
            <div>
                {tempIdDetail.indexOf(id) === 0 ? (
                    <button disabled>before</button>
                ) : (
                    <button><Link to={`/detailPelajaran/${tempIdDetail[tempIdDetail.indexOf(id) - 1]}`}>before</Link></button>
                )}
                    <button className='tw-px-20'><Link to={`/kursus/pelajaran${id.split('').pop()}`}>=</Link></button>
                {tempIdDetail.indexOf(id) === tempIdDetail.indexOf(tempIdDetail[tempIdDetail.length - 1]) ? (
                    <button>after</button>
                ) : (
                    <button><Link to={`/detailPelajaran/${tempIdDetail[tempIdDetail.indexOf(id) + 1]}`}>after</Link></button>
                )}
            </div>
        </>
    )
}

export default PaginationDetail2