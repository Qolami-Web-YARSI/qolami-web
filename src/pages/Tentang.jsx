import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContentAboutComponent from '../components/ContentAboutComponent';
import HeaderComponent2 from '../components/HeaderComponent2';
import JumbotronComponent from '../components/JumbotronComponent';

const Tentang = ({tempToken}) => {
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
                <ContentAboutComponent/>
                <FooterComponent/>
            </div>
            : 
            <div>
                <HeaderComponent/>
                <ContentAboutComponent/>
                <FooterComponent/>
            </div>}
        </>
    )
}

export default Tentang;