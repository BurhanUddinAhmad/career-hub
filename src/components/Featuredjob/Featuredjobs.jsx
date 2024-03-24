import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Featuredjob from "../JobFeatured/Featuredjob";


const Featuredjobs = () => {
    const description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, suscipit nulla consectetur officiis, ratione sunt expedita optio minus velit dolor";
    
    const [fjob, setFjob] = useState([]);
    const [dataLength, setDataLenght ] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then( job => setFjob(job));
    }, []);
    
    return (
        <>
            <Heading title={'Featured Jobs'} description={description} />
            <div className="grid md:grid-cols-2 gap-5">
                {
                    fjob.slice(0, dataLength).map( job => <Featuredjob key={job.id}
                    job={job}
                    ></Featuredjob>)
                }
            </div>
            <div className={`text-center ${dataLength === fjob.length && 'hidden'}`}>
                <button 
                onClick={() => setDataLenght(fjob.length)}
                className="btn bg-blue-700 hover:bg-blue-600 text-white">View All Jobs </button>
            </div>
        </>
    );
};

export default Featuredjobs;