import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const Root = () => {
    return (
        <>     
            <Header/>
            <div className="px-24 mx-auto my-10">
            <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Root;