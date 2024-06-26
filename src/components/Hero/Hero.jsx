

const Hero = () => {
    return (
        <>
            <div className="hero  bg-base-200 px-24">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                   <div>
                   <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                   </div>
                    <div>
                        <h1 className="text-5xl font-bold">One step <br /> closure to your <br /> 
                        <span className="text-blue-600">Dream Job</span></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat <br />
                         fugiat ut assumenda excepturi exercitationem quasi. <br />
                          In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;