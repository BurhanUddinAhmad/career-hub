import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import SIngleCategory from "../SingleCategory/SIngleCategory";


const Category = () => {
   const [jobcat, setJobcat ]= useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then( res => res.json())
        .then(catg => setJobcat(catg));
    }, []);
    return (
        <>
            <Heading/>
            <div>
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