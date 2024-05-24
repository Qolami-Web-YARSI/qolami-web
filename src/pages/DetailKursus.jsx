import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent2 from '../components/HeaderComponent2';
import ContentDetailKursus from '../components/ContentDetailKursus';

const DetailKursus = ({tempToken}) => {
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
                <HeaderComponent2/>
                <ContentDetailKursus/>
                <FooterComponent/>
            </div>
            : 
            <div>
                <HeaderComponent/>
                <ContentDetailKursus/>
                <FooterComponent/>
            </div>}
        </>
    )
}

export default DetailKursus;