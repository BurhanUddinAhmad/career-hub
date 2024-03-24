

const SIngleCategory = ({cat }) => {
    const {logo, category_name, availability} = cat;
    return (
        <>
            <div className="bg-slate-100 p-5 w-64">
                <div>
                    <img className="w-10" src={logo} alt="" />
                </div>
                <h2 className="font-bold">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </>
    );
};

export default SIngleCategory;