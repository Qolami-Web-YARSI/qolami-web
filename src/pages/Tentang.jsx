import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContentAboutComponent from '../components/ContentAboutComponent';

const Tentang = () => {
    return(
        <>
            <HeaderComponent/>
            <ContentAboutComponent/>
            <FooterComponent/>
        </>
    )
}

export default Tentang;