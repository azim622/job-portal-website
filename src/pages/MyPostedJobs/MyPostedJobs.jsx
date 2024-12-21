import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const {user}= UseAuth()
    const [jobs , setJobs]=useState([])
    useEffect(()=>{
        fetch(`https://job-portal-server-livid.vercel.app/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setJobs(data))
    },[user.email])
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                jobs.map((job , index)=><tr>
                    <th>{index + 1}</th>
                    <td>{job.title}</td>
                    <td>{job.applicationDeadline}</td>
                    <td>{job.applicationCount}</td>
                    <td>
                        <Link to={`/viewApplication/${job._id}`}>
                           <button className='btn btn-link'>View Applications</button>
                        </Link>
                    </td>
                  </tr>)
            }
           
          </tbody>
        </table>
      </div>
    );
};

export default MyPostedJobs;