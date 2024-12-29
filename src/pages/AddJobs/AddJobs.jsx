import React from "react";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";

const AddJobs = () => {
  const { user } = UseAuth();
  const handleAddJobs = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData)
    const { salaryMin, salaryMax, currency, ...newJob } = initialData;
    // console.log(newJob)
    newJob.salaryRange = {
      salaryMin: parseInt(salaryMin),
      salaryMax: parseInt(salaryMax),
      currency,
    };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    // console.log(newJob)
    fetch("https://job-portal-server-livid.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job has been Added",
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate("/myApplication")
        }
      });
  };
  return (
    <div class="card bg-base-100 w-full  mx-auto shadow-2xl">
      <form onSubmit={handleAddJobs} class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Job Category</span>
          </label>
          <select
            defaultValue="Pick a job field"
            class="select select-ghost w-full max-w"
          >
            <option disabled>Pick a job field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Job Type</span>
          </label>
          <select
            defaultValue="Pick Job Type"
            className="select select-ghost w-full max-w"
          >
            <option disabled>Pick Job Type</option>
            <option>Full time</option>
            <option>Part Time</option>
            <option>Remote</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            class="input input-bordered"
            required
          />
        </div>
       
        {/* Salary Range Section */}
        <p className="font-bold mt-4">Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Minimum Salary */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum Salary</span>
            </label>
            <input
              type="number"
              name="salaryMin"
              placeholder="Enter minimum salary"
              className="input input-bordered"
              required
              min="0"
            />
          </div>

          {/* Maximum Salary */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Maximum Salary</span>
            </label>
            <input
              type="number"
              name="salaryMax"
              placeholder="Enter maximum salary"
              className="input input-bordered"
              required
              min="0"
            />
          </div>

          {/* Currency */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select
              name="currency"
              defaultValue="Currency"
              className="select select-bordered w-full"
              required
            >
              <option disabled value="Currency">
                Currency
              </option>
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>

        {/* description */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Job Description"
            class="textarea textarea-bordered"
            required
          ></textarea>
        </div>
        {/* company Name */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            class="input input-bordered"
            required
          />
        </div>
        {/* Requirements */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Requirements</span>
          </label>
          <textarea
            type="text"
            name="requirements"
            placeholder="Put each requirements in a new line"
            class="textarea textarea-bordered"
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Responsibilities</span>
          </label>
          <textarea
            type="text"
            name="responsibilities"
            placeholder="Put each Responsibilities in a new line"
            class="textarea textarea-bordered"
          ></textarea>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Status</span>
          </label>
          <select name="status" class="select select-bordered">
            <option value="active" selected>
              Active
            </option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">HR Email</span>
          </label>
          <input
            type="email"
            readOnly
            defaultValue={user?.email}
            name="hr_email"
            placeholder="HR Email"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control mt-4">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
