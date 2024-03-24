import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utils/Localstorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast.success('Successfully Applied!');
    }
 
    return (
        <> 
            <div className="flex flex-col md:flex-row gap-5 justify-between ">
                <div className="w-3/5 space-y-2">
                    <p><strong>Description:</strong> {job.job_description} </p>
                    <p><strong>Responsibilities:</strong> {job.job_responsibility} </p>
                    <p><strong>Educational Qualifications:</strong> {job.educational_requirements} </p>
                    <p><strong>Experience:</strong> {job.experiences} </p>
                </div>
                <div className="w-2/5 bg-slate-100 border p-5">
                    <h3 className="font-bold text-xl border-b pb-2 mb-2">Job Information</h3>
                    <p><strong>Salary: </strong> {job.salary} </p>
                    <p><strong>Job Title: </strong> {job.job_title} </p>
                    <h3 className="font-bold text-xl border-b pb-2 mt-6 mb-2">Contact Information</h3>
                    <p><strong>Phone: </strong>{job.contact_information.phone} </p>
                    <p><strong>Email: </strong>{job.contact_information.email} </p>
                    <p><strong>Address: </strong>{job.contact_information.address} </p>
                    
                    <button 
                    onClick={handleApplyJob}
                    className="btn mt-6 bg-blue-700 hover:bg-blue-600 text-white w-full">Apply Now </button>
                </div>
            </div>  
        </>
    );
};

export default JobDetails;