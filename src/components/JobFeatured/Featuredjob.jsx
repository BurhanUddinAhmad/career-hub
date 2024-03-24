import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const Featuredjob = ({job}) => {
    const {id, logo, job_title, company_name,
        remote_or_onsite, location, 
        job_type, salary  } = job;
    return (
        <>
            <div className="border p-5 bg-slate-50">
                <div> <img className="w-12" src={logo} alt="" /></div>
                <h3 className="font-bold my-2 text-lg">{job_title}</h3>
                <p>{company_name}</p>
                <div className="flex gap-5 my-2">
                    <p className="border py-1 px-3">{remote_or_onsite}</p>
                    <p className="border py-1 px-3">{job_type}</p>
                </div>
                <div className="flex gap-5 my-2">
                    <p className="flex gap-2 items-center"> <IoLocationOutline/> {location}</p>
                    <p className="flex gap-2 items-center"> <CiDollar /> {salary}</p>
                </div>
                <button className="btn btn-sm bg-blue-700 hover:bg-blue-600 text-white">View Details</button>
            </div>
        </>
    );
};

export default Featuredjob;