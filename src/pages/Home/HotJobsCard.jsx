import React from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    currency
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 h-[550px]  shadow-xl">
        <div className="flex gap-2 justify-start ">
        <figure className="w-16">
          <img
            src={company_logo}
          />
        </figure>
        <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex gap-2 items-center"><FaMapMarkerAlt /> {location}</p>
        </div>
        </div>
        
        <div className="card-body">
          <h2 className="card-title">{title}
          <div className="badge badge-secondary">NEW</div>

          </h2>

          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {
                requirements.map(skill =><p
                className="border text-center p-2 hover:text-white hover:bg-fuchsia-700"
                >{skill}</p>)
            }
          </div>
          <div className="card-actions justify-end items-center mt-4">
            <p className="flex items-center">Salary :<FaDollarSign></FaDollarSign> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
            <Link to={`/jobs/${_id}`}>
               <button className="btn btn-primary">Apply</button>
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
