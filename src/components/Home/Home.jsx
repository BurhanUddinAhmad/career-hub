import Category from "../CategoryList/Category";
import Featuredjobs from "../Featuredjob/Featuredjobs";



const Home = () => {
    return (
        <>
            <div className="space-y-8">
                <Category />
                <Featuredjobs />
            </div>
        </>
    );
};

export default Home;