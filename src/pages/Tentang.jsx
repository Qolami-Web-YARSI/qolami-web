import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContentAboutComponent from '../components/ContentAboutComponent';
import HeaderComponent2 from '../components/HeaderComponent2';

const Tentang = ({tempToken}) => {
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