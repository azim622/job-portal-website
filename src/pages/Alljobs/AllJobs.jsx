import React, { useState } from 'react';
import UseJobs from '../../Hooks/UseJobs';
import HotJobsCard from '../Home/HotJobsCard';


const AllJobs = () => {
    const [sort, setSort] = useState(false);
    const [search , setSearch] = useState("")
    const [minSalary , setMinSalary] = useState("")
    const [maxSalary , setMaxSalary] = useState("")
    const { jobs, loading } = UseJobs(sort , search , minSalary , maxSalary);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-8 text-center">All Jobs</h2>
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                <button
                    onClick={() => setSort(!sort)}
                    className={`btn px-6 py-2 text-lg font-semibold rounded-md ${
                        sort ? 'bg-green-600 text-white' : 'bg-gray-800 text-white'
                    } hover:bg-green-500 transition`}
                >
                    {sort ? 'Sorted by Salary' : 'Sort by Salary'}
                </button>
                <input
                    type="text"
                    onKeyUp={(e)=> setSearch(e.target.value)}
                    className="input w-full max-w-2xl px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
                    placeholder="Search by location"
                />
                <div className='space-y-3'>
                <input
                    type="text"
                    onKeyUp={(e)=> setMinSalary(e.target.value)}
                    className="input w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
                    placeholder="min Salary"
                />
                <input
                    type="text"
                    onKeyUp={(e)=> setMaxSalary(e.target.value)}
                    className="input w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
                    placeholder="max salary"
                />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {jobs.map(job => (
                    <HotJobsCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default AllJobs;
