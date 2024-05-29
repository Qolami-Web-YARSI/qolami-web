import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContentCourse from '../components/ContentCourse';
import HeaderComponent2 from '../components/HeaderComponent2';

const Kursus = ({tempToken, img}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
       }, [])
    
    useEffect(()=>{
        localStorage.setItem('settings', 'profile')
    },[])

    return(
        <>
            {tempToken ? 
            <div>
                <HeaderComponent2 img={img}/>
                <ContentCourse tempToken={tempToken}/>
                <FooterComponent/>
            </div>
            : 
            <div>
                <HeaderComponent img={img}/>
                <ContentCourse tempToken={tempToken}/>
                <FooterComponent/>
            </div>}
        </>
    )
}

export default Kursus;