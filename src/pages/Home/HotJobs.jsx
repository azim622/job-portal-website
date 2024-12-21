import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs , settJobs]= useState([])

    useEffect(()=>{
        fetch('https://job-portal-server-livid.vercel.app/jobs')
        .then(res => res.json())
        .then(data =>{
            settJobs(data)
        })
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job=> <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;