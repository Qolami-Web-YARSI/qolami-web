import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent2 from '../components/HeaderComponent2';
import ContentDetail2Kursus from '../components/ContentDetail2Kursus';

const Detail2Kursus = ({tempToken}) => {
    return(
        <>
            {tempToken ? 
            <div>
                <HeaderComponent2/>
                <ContentDetail2Kursus/>
                <FooterComponent/>
            </div>
            : 
            <div>
                <HeaderComponent/>
                <ContentDetail2Kursus/>
                <FooterComponent/>
            </div>}
        </>
    )
}

export default Detail2Kursus;