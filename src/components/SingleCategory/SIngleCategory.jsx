

const SIngleCategory = ({cat }) => {
    const {logo, category_name, availability} = cat;
    return (
        <>
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <h2>{category_name}</h2>
                <p>{availability}</p>
            </div>
        </>
    );
};

export default SIngleCategory;