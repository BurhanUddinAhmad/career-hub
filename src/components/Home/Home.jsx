import { Helmet } from "react-helmet";
import Category from "../CategoryList/Category";
import Featuredjobs from "../Featuredjob/Featuredjobs";



const Home = () => {
    return (
        <>
        <Helmet>
            <title>Career-Hub | Home </title>
        </Helmet>
            <div className="space-y-8">
                <Category />
                <Featuredjobs />
            </div>
        </>
    );
};

export default Home;