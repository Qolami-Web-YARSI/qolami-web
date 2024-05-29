import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ActivityComponent = () => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:2024/users/${localStorage.getItem('id')}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const userData = response.data.data;
            setData(userData);
            if (userData.profileUrl.includes("/uploads/")) {
                userData.profileUrl = `http://localhost:2024${userData.profileUrl}`;
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(()=>{
        fetchData()
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        localStorage.setItem('settings', 'profile')
    },[])

    return(
        <>
            <div className='tw-flex tw-flex-col tw-py-5 tw-bg-[#FFF6D9] tw-font-poppins'>
                <div className='tw-flex tw-pt-44 tw-justify-between tw-mx-36 tw-pb-3'>
                    <p className="tw-text-[35px] tw-pb-6">Aktivitas</p>
                    <div className='tw-flex tw-flex-col tw-gap-6'>
                        <div className='tw-flex tw-size-[200px] tw-rounded-full tw-mx-auto'>
                            <img src={previewUrl || (data && data.profileUrl)} 
                            className='tw-size-[200px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-rounded-full tw-object-cover 
                            tw-object-center tw-mx-auto' alt="profile" />
                        </div>
                        <p className="tw-mx-auto tw-text-[35px] tw-pb-6 tw-text-center">{data && data.firstName+" "+data.lastName}</p>
                    </div>
                    <p className="tw-text-[35px] tw-pb-6 tw-opacity-0">Aktivitas</p>
                </div>
                <hr className='tw-border-2 tw-border-[#000000]'></hr>
                <table className='tw-w-full table-fixed tw-mx-auto tw-my-6'>
                    <tr>
                        <th className='tw-text-center'>Aktivitas</th>
                        <th className='tw-text-center'>Tanggal</th>
                        <th className='tw-text-center'>Nilai</th>
                        <th className='tw-text-center'>Status</th>
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    
                    
                </table>
            </div>
        </>
    )
}

export default ActivityComponent;