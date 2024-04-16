import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DetailKursus = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  const a = (nama) => {
    console.log(nama)
  }
  useEffect(() => {
    const detailApi = async () => {
        try{
            const response = await axios.get(`http://localhost:2002/kursus/${id}`)
            console.log(response.data)
            setItem(response.data)
        }catch(e){
            console.log(e)
        }
    }
    detailApi()
  }, [id]);


  return (
    <>
        {item && (
            <div>
                <h2>{item.nama}</h2>
                <p>{item.deskripsi}</p>
                <div className='tw-flex tw-flex-col'>
                  {item.huruf.map((z)=>{
                    return(
                      <Link to={`/kursus/${item.id}/${z.id}`}>
                        {z.nama}
                      </Link>
                    )
                  })}
                </div>
            </div>
        )}
    </>
  );
}

export default DetailKursus;
