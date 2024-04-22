import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PaginationDetail2 from './PaginationDetail2';

const ContentDetail2Kursus = () => {
    const [item, setItem] = useState(null);
    const [item2, setItem2] = useState(null);
    const [item3, setItem3] = useState(null);
    const [tempIdDetail, setTempIdDetail] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const allDetailApi = async () => {
            try{
                const response = await axios.get('http://localhost:2002/detailPelajaran')
                //console.log(response.data)
                //console.log(id.split('').pop())
                response.data.map(a => {
                    if(a.id.includes(id.split('').pop())){
                        tempIdDetail.push(a.id)
                    }
                })
                console.log(tempIdDetail)
            }catch(e){
                console.log(e)
            }
        }
        allDetailApi()
    }, [tempIdDetail])

    useEffect(() => {
        const detail2Api = async () => {
            try{
                const response = await axios.get(`http://localhost:2002/detailPelajaran/${id}`)
                setItem(response.data)
            }catch(e){
                console.log(e)
            }
        }
        detail2Api();
    }, [id]);

    useEffect(() => {
        const detail2Api2 = async () => {
            try{
                const response = await axios.get(`http://localhost:2002/detailLatihan/${id}`)
                //console.log(response.data)
                setItem2(response.data)
            }catch(e){
                console.log(e)
            }
        }
        detail2Api2();
    }, [id]);

    useEffect(() => {
        const detail2Api3 = async () => {
            try{
                const response = await axios.get(`http://localhost:2002/detailUjian/${id}`)
                //console.log(response.data)
                setItem3(response.data)
            }catch(e){
                console.log(e)
            }
        }
        detail2Api3();
    }, [id]);


    return(
        <>
            {item && (
                <div className='tw-pt-80'>
                    <h2>{item.judul}</h2>
                    <h2>{item.nama}</h2>
                    <h2>{item.video}</h2>
                    <h2>{item.gambar}</h2>
                    <h2>{item.detail1}</h2>
                    <h2>{item.detail2}</h2>
                    <h2>{item.detail3}</h2>
                    <PaginationDetail2 id={id} tempIdDetail={tempIdDetail}/>
                </div>
            )}
            {item2 && (
                <div className='tw-pt-80'>
                    <h2>{item2.judul}</h2>
                </div>
            )}
            {item3 && (
                <div className='tw-pt-80'>
                    <h2>{item3.judul}</h2>
                </div>
            )}
        </>
    )
}

export default ContentDetail2Kursus;
