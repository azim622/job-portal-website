import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const id = useParams()
    const {user}= UseAuth()
    const navigate = useNavigate()
    // console.log(id ,user)

    const handleApplyJob = e =>{
        e.preventDefault()
        const form = e.target
        const linkIn = form.linkIn.value
        const github = form.github.value
        const resume = form.resume.value
        // console.log(linkIn , github , resume)

        const jobApplication ={
            job_id:id,
            applicant_email:user.email,
            linkIn,
            github,
            resume

        }
        fetch('https://job-portal-server-livid.vercel.app/job-applications',{
            method:'POST',
            headers:{
            'content-type': 'application/json'
            },
            body:JSON.stringify(jobApplication)
        } )
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Apply has been Done",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/myApplication")
            }
        })

    }
    
  return (
    <div className="card bg-base-100 mx-auto w-full  shadow-2xl">
        <h2 className="text-3xl font-bold">Apply Job And GoodLuck</h2>
      <form onSubmit={handleApplyJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkIn URL</span>
          </label>
          <input
            type="url"
            name="linkIn"
            placeholder="LinkIn URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
          
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
