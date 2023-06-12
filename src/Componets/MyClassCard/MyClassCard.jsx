

const MyClassCard = ({ myClass }) => {
    console.log(myClass);

    // TODO add of student inroll index and feedback

    const { NameOfClass, Image, Status, AvailableSeats } = myClass || {}
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">
                        {NameOfClass}
                    </h2>
                    <div className="">
                        <p className="font-bold">Student : 0</p>
                    </div>
                    <div className="badge badge-outline bg-orange-200">update</div>
                </div>
                <p>feedBack</p>
                <div className="card-actions justify-end">
                    <p className="badge badge-outline bg-slate-200">{Status}</p>
                    <p className="">AvailableSeats:  {AvailableSeats}</p>

                </div>
            </div>
        </div>
    );
};

export default MyClassCard;