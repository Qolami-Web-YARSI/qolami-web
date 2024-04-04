import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContentCourse from '../components/ContentCourse';

const Kursus = () => {
    return(
        <>
            <HeaderComponent/>
            <ContentCourse/>
            <FooterComponent/>
        </>
    )
}

export default Kursus;