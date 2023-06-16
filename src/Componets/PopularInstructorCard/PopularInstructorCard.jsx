

const PopularInstructorCard = ({ popularIns }) => {
    const { image, name, email } = popularIns || {}
    return (
        <div className="card  hover:bg-orange-100 duration-500 shadow-xl mb-32 hover:scale-105 transition-transform border-2">
            <figure><img className="w-full h-64 rounded-full absolute -top-[145px]  " src={image} alt="Shoes" /></figure>
            <div className="card-body pt-32 text-center text-[15px] font-semibold">
                <p className="pb-0">Name : {name}</p>
                <p>Email : {email}</p>
            </div>
        </div>
    );
};

export default PopularInstructorCard;