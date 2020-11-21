import Jobs from "views/Pages/Jobs";
import CreateJob from "views/Pages/CreateJob";
import JobDetails from "views/Pages/JobDetails";

const dashRoutes = [
  {
    path: "/createjob",
    name: "Create Job",
    component: CreateJob,
    layout: "/app"
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
    layout: "/app"
  },
  {
    path: "/jobdetails",
    name: "Job Details",
    component: JobDetails,
    layout: "/app"
  }
];
export default dashRoutes;
