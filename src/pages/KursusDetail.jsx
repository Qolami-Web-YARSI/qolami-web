import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

const KursusDetail = ({ dataKursus }) => {
    const { id } = useParams();

    
    return (
        <>
            <p>{id}</p>
            {/* Render the kursus detail using the dataKursus prop */}
        </>
    );
}

export default KursusDetail;