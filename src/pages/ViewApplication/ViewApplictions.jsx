import { a } from "motion/react-client";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplictions = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    // console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`https://job-portal-server-livid.vercel.app/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate("/myApplication")
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {applications.map((application, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{application.applicant_email}</td>
              <td>{application.linkIn}</td>
              <td>
                <select
                  onChange={(e) => handleStatusUpdate(e, application._id)}
                  defaultValue={application.status || "Change Status"}
                  className="select select-bordered select-xs w-full max-w-xs"
                >
                  <option disabled>Change Status</option>
                  <option>Under Review</option>
                  <option>Set InterView</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplictions;
