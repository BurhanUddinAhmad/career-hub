

const Heading = ({title, description}) => {
    return (
        <>
            <div className='text-center max-w-xl mx-auto'>
                <h2 className='text-3xl font-bold'> {title} </h2>
                <p className="my-4">
                    {description}
                </p>
            </div>
        </>
    );
};

export default Heading;