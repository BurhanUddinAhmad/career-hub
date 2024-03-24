import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import SIngleCategory from "../SingleCategory/SIngleCategory";


const Category = () => {
    const description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, suscipit nulla consectetur officiis, ratione sunt expedita optio minus velit dolor";
   const [jobcat, setJobcat ]= useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then( res => res.json())
        .then(catg => setJobcat(catg));
    }, []);
    return (
        <>
            <Heading title={'Job Category List'} description={description} />
            <div className="flex justify-between gap-5">
                {
                    jobcat.map( cat => <SIngleCategory 
                    key={cat.id}
                    cat={cat}
                    ></SIngleCategory>)
                }
            </div>
        </>

    );
};

export default Category;