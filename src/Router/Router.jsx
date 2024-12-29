import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import JobDetails from "../JobDetails/JobDetails";
import PrivetRoutes from "./PrivetRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplictions from "../pages/ViewApplication/ViewApplictions";
import AllJobs from "../pages/Alljobs/AllJobs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, // The MainLayout component
    errorElement: <h2>Route not Found</h2>, // Error handling
    children: [
      {
        path: "/", // Nested route
        element: <Home></Home>, // Home component
      },
      {
        path: "/job", // Nested route
        element: <AllJobs></AllJobs>, // Home component
      },
      {
        path: "/jobs/:id", 
        element:<PrivetRoutes><JobDetails /></PrivetRoutes>,
        loader: async ({ params }) => {
            const response = await fetch(`https://job-portal-server-livid.vercel.app/jobs/${params.id}`);
            if (!response.ok) {
                throw new Error("Failed to load job details.");
            }
            return response.json();
        }
    },
      {
        path: "jobApply/:id", 
        element:<PrivetRoutes><JobApply></JobApply></PrivetRoutes>, 
      },
      {
        path: "myApplication",
        element:<PrivetRoutes><MyApplications></MyApplications></PrivetRoutes>, 
      },
      {
        path: "myPostedJobs",
        element:<PrivetRoutes><MyPostedJobs></MyPostedJobs></PrivetRoutes>, 
      },
      {
        path: "viewApplication/:job_id",
        element:<PrivetRoutes><ViewApplictions></ViewApplictions></PrivetRoutes>, 
        loader:({params})=> fetch(`https://job-portal-server-livid.vercel.app/job-applications/${params.job_id}`)
      },
      {
        path: "addJobs",
        element:<PrivetRoutes><AddJobs></AddJobs></PrivetRoutes>, 
      },
      {
        path: "register",
        element:<Register></Register>, 
      },
      {
        path: "signin",
        element:<SignIn></SignIn>, 
      },
    ],
  },
]);

export default Router;
