

const PopularInstructorCard = ({ popularIns }) => {
    const { image, name, email } = popularIns || {}
    console.log(popularIns);
    return (
        <div className="card card-compact  bg-base-200 shadow-xl">
            <figure><img className="w-full h-80" src={image} alt="Shoes" /></figure>
            <div className=" flex justify-between items-center my-8 px-2">
                <h2 className="text-[18px]">Name : {name}</h2>
                <p className="text-[16px] font-semibold">Email : {email}</p>
            </div>
        </div>
    );
};

export default PopularInstructorCard;