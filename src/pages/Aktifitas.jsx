import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent2 from '../components/HeaderComponent2';
import ActivityComponent from '../components/ActivityComponent';

const Aktifitas = ({tempToken}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        localStorage.setItem('settings', 'profile')
    },[])

    return(
        <>
            <HeaderComponent2/>
            <ActivityComponent/>
            <FooterComponent/>
        </>
    )
}

export default Aktifitas;