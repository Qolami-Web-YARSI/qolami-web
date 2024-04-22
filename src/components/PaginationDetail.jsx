import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

const PaginationDetail = ({id, idPelajaran}) => {
    
    return(
        <>
            <div>
                    {idPelajaran.indexOf(id) === 0 ? (
                        <button disabled>before</button>
                    ) : (
                        <button><Link to={`/kursus/${idPelajaran[idPelajaran.indexOf(id) - 1]}`}>before</Link></button>
                    )}
                    <button className='tw-px-20'><Link to={`/kursus`}>=</Link></button>
                    {idPelajaran.indexOf(id) === idPelajaran.indexOf(idPelajaran[idPelajaran.length - 1]) ? (
                        <button>after</button>
                    ) : (
                        <button><Link to={`/kursus/${idPelajaran[idPelajaran.indexOf(id) + 1]}`}>after</Link></button>
                    )}
                </div>
        </>
    )
}

export default PaginationDetail