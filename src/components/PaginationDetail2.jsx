import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

const PaginationDetail2 = ({id, tempIdDetail}) => {

    const load = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Smooth scroll animation
        });
    }
    
    return(
        <>
            <div>
                {tempIdDetail.indexOf(id) === 0 ? (
                    <button onClick={load}><Link to={`/detailPelajaran/${tempIdDetail[tempIdDetail.length - 1]}`}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbxrncc9AZwYGCDR4S9eMMbJBw243BWIF9XCVjS0SAYwF0iTDvxBNYYz0RPmopFKSFRWdtYCKETgi4Rpt-pGE4LA8JAaeRhJ_M=w1920-h868" className='tw-rotate-180 tw-w-[60px] tw-filter tw-hue-rotate-120'/></Link></button>
                ) : (
                    <button onClick={load}><Link to={`/detailPelajaran/${tempIdDetail[tempIdDetail.indexOf(id) - 1]}`}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbxrncc9AZwYGCDR4S9eMMbJBw243BWIF9XCVjS0SAYwF0iTDvxBNYYz0RPmopFKSFRWdtYCKETgi4Rpt-pGE4LA8JAaeRhJ_M=w1920-h868" className='tw-rotate-180 tw-w-[60px] tw-filter tw-hue-rotate-120'/></Link></button>
                )}
                    <button className='tw-px-20'><Link to={`/kursus/pelajaran${id.split('').pop()}`}><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AHamburger_icon.svg&psig=AOvVaw1oXzGKjMvmsbLaC9xa3tbC&ust=1714220354392000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMj0wtDu34UDFQAAAAAdAAAAABAE" className='tw-rotate-0 tw-w-[60px]'/></Link></button>
                {tempIdDetail.indexOf(id) === tempIdDetail.indexOf(tempIdDetail[tempIdDetail.length - 1]) ? (
                    <button onClick={load} ><Link to={`/detailPelajaran/${tempIdDetail[0]}`}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbxrncc9AZwYGCDR4S9eMMbJBw243BWIF9XCVjS0SAYwF0iTDvxBNYYz0RPmopFKSFRWdtYCKETgi4Rpt-pGE4LA8JAaeRhJ_M=w1920-h868" className=' tw-rotate-0 tw-w-[60px]'/></Link></button>
                ) : (
                    <button onClick={load}><Link to={`/detailPelajaran/${tempIdDetail[tempIdDetail.indexOf(id) + 1]}`}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbxrncc9AZwYGCDR4S9eMMbJBw243BWIF9XCVjS0SAYwF0iTDvxBNYYz0RPmopFKSFRWdtYCKETgi4Rpt-pGE4LA8JAaeRhJ_M=w1920-h868" className=' tw-rotate-0 tw-w-[60px]'/></Link></button>
                )}
            </div>
        </>
    )
}

export default PaginationDetail2