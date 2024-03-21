import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import JumbotronComponent from '../components/JumbotronComponent';
import ContentHomeComponent from '../components/ContentHomeComponent';

const Home = () => {
    return(
        <>
            <HeaderComponent/>
            <JumbotronComponent/>
            <ContentHomeComponent/>
            <FooterComponent/>
        </>
    )
}

export default Home;