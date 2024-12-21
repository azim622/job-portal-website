import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job  = useLoaderData()
    const {_id}= job
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center">
        <img src={job.company_logo} alt={job.company} className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <p className="text-lg text-gray-600">{job.company}</p>
        <p className="text-sm text-gray-500"><strong>Location:</strong> {job.location}</p>
        <p className="text-sm text-gray-500"><strong>Job Type:</strong> {job.jobType}</p>
        <p className="text-sm text-gray-500"><strong>Category:</strong> {job.category}</p>
        <p className="text-sm text-gray-500"><strong>Application Deadline:</strong> {job.applicationDeadline}</p>
        <p className="text-sm text-gray-500"><strong>Salary Range:</strong> {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}</p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Job Description:</h3>
        <p className="text-gray-700">{job.description}</p>

        <h3 className="text-xl font-semibold mt-4">Requirements:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {job.requirements.map((requirement, index) => (
            <li key={index} className=' border hover:bg-blue-700 hover:text-white'>{requirement}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4">Responsibilities:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {job.responsibilities.map((responsibility, index) => (
            <li key={index} className='border hover:bg-fuchsia-700 hover:text-white'>{responsibility}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4">Contact HR:</h3>
        <p className="text-gray-700"><strong>Name:</strong> {job.hr_name}</p>
        <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${job.hr_email}`} className="text-blue-600 hover:text-blue-800">{job.hr_email}</a></p>
      </div>

      <div className="mt-6 text-center">
        <Link to={`/jobApply/${_id}`}>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200">Apply Now</button>
        
        </Link>
      </div>
    </div>
    );
};

export default JobDetails;