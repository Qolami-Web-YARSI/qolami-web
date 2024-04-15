import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail2Kursus = () => {
    const [item, setItem] = useState(null);
    const { idKursus, idHuruf } = useParams();

    useEffect(() => {
        const detail2Api = async () => {
            try{
                const response = await axios.get(`http://localhost:2002/kursus/${idKursus}`)
                const data = response.data;
                const hurufDetail = data.huruf.find(huruf => huruf.id === idHuruf);
                setItem(hurufDetail);
            }catch(e){
                console.log(e)
            }
        }
        detail2Api();
    }, [idKursus, idHuruf]);


    return(
        <>
            {item && (
                <div>
                    <h2>{item.nama}</h2>
                    {/* Tampilkan detail huruf di sini */}
                </div>
            )}
        </>
    )
}

export default Detail2Kursus;
