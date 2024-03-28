import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utils/Localstorage";
import Applied from "../Applied/Applied";
import { Helmet } from "react-helmet";


const Appliedjob = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


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
            setDisplayJobs(jobsApplied);
        }

    }, [jobs]);

    const handleJobFilter = filter => {
        if(filter === 'all') {
            setDisplayJobs(appliedJobs);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter( r => r.remote_or_onsite === 'Remote' );
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter( o => o.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    return (
        <>
        <Helmet>
            <title>Applied Job </title>
        </Helmet>
            <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">Applied jobs: {appliedJobs.length} </h2>
            <details className="dropdown">
                <summary className="m-1 btn">Filter </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite </a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote </a></li>
                </ul>
            </details>
            </div>
            <div>
                {
                    displayJobs.map(job => <Applied key={job.id}
                        job={job}
                    ></Applied>)
                }
            </div>

        </>
    );
};

export default Appliedjob;