import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testing = () => {
    const aaa = async () => {
        try{
            const response = await axios.get('http://localhost:2024/lesson-one')
            console.log(response.data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        aaa()
    }, [])
    

    return(
        <>
            <p>HALLOOOOOOO</p>
        </>
    )
}

export default Testing