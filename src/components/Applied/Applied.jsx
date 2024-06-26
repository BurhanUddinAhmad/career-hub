import { CiDollar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Applied = ({ job }) => {
    const { id, logo, job_title, company_name,
        remote_or_onsite, location,
        job_type, salary } = job;

    return (
        <>
            <div className="border p-5 bg-slate-50 mb-5 flex items-center justify-between">
                <div className="flex gap-7 ">
                    <div className="bg-slate-200 p-3 flex items-center"> <img className="w-36" src={logo} alt="" /></div>
                    <div>
                    <h3 className="font-bold my-2 text-lg">{job_title}</h3>
                    <p>{company_name}</p>
                    <div className="flex gap-5 my-2">
                        <p className="border py-1 px-3">{remote_or_onsite}</p>
                        <p className="border py-1 px-3">{job_type}</p>
                    </div>
                    <div className="flex gap-5 my-2">
                        <p className="flex gap-2 items-center"> <IoLocationOutline /> {location}</p>
                        <p className="flex gap-2 items-center"> <CiDollar /> {salary}</p>
                    </div>
                    </div>
                </div>

                <Link to={`/job/${id}`}
                    className="btn btn-sm bg-blue-700 hover:bg-blue-600 text-white">Job Details</Link>
            </div>
        </>
    );
};

export default Applied;