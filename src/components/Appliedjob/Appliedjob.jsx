import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utils/Localstorage";
import Applied from "../Applied/Applied";


const Appliedjob = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    // console.log(jobs)

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // const jobsApplied = [];
            // for( const id of storedJobIds) {
            //     const job = jobs.find(job => job.id === id);
            //     if(job) {
            //         jobsApplied.push(job);
            //     }
            // }
            setAppliedJobs(jobsApplied);
        }

    }, []);


    return (
        <>
            <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">Applied jobs: {appliedJobs.length} </h2>
            <details className="dropdown">
                <summary className="m-1 btn">Filter </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Onsite </a></li>
                    <li><a>Remote </a></li>
                </ul>
            </details>
            </div>
            <div>
                {
                    appliedJobs.map(job => <Applied key={job.id}
                        job={job}
                    ></Applied>)
                }
            </div>

        </>
    );
};

export default Appliedjob;