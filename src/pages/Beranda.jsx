import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import HeaderComponent2 from '../components/HeaderComponent2';
import FooterComponent from '../components/FooterComponent';
import JumbotronComponent from '../components/JumbotronComponent';
import ContentHomeComponent from '../components/ContentHomeComponent';

const Beranda = () => {
    return(
        <>
            <HeaderComponent/>
            <JumbotronComponent/>
            <ContentHomeComponent/>
            <FooterComponent/>
        </>
    )
}

export default Beranda;