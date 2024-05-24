import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import HeaderComponent2 from '../components/HeaderComponent2';
import FooterComponent from '../components/FooterComponent';
import JumbotronComponent from '../components/JumbotronComponent';
import ContentHomeComponent from '../components/ContentHomeComponent';

const Beranda = ({tempToken}) => {
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
                <JumbotronComponent/>
                <ContentHomeComponent/>
                <FooterComponent/>
            </div>
            : 
            <div>
                <HeaderComponent/>
                <JumbotronComponent/>
                <ContentHomeComponent/>
                <FooterComponent/>
            </div>}
        </>
    )
}

export default Beranda;