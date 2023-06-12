

const ClassCard = ({ singleClass }) => {

    const { classImage, className, instructorName, instructorEmail, availableSeats, price } = singleClass || {}

    return (
        <div className="card  bg-base-100 shadow-2xl ">
            <div className="avatar justify-center relative">
                <div className="w-40 rounded-full bg-orange-100 md:absolute -top-32">
                    <img src={classImage} />
                </div>
            </div>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{className}</h2>
                <div className="flex">
                    <p>Name : {instructorName}</p>
                    <p>Email : {instructorEmail}</p>
                </div>
                <div className="flex">
                    <p>AvailableSeats : {availableSeats}</p>
                    <p> Price : ${price}</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <button className="btn btn-sm bg-orange-200">Pending</button>
                    <button className="btn btn-sm bg-orange-200">Approved</button>
                    <button className="btn btn-sm bg-orange-200">Denied</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;