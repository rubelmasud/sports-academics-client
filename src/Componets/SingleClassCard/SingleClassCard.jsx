import { useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useInstructor from "../../Hooks/useInstructor";


const SingleClassCard = ({ singleClass }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const { AvailableSeats, Image, Name, NameOfClass, Price } = singleClass || {}

    const classCardStyle = {
        backgroundColor: AvailableSeats === "0" ? 'red' : 'white',
    };

    const handleSelectClass = () => {
        if (!user) {
            navigate('/login')
        } else {
            // Handle class selection logic here
        }
    };

    return (
        <div className="card bg-red-300 shadow-xl md:mb-28" style={classCardStyle}>

            <div className="avatar justify-center relative">
                <div className="w-32 rounded-full bg-orange-100 md:absolute -top-24">
                    <img src={Image} />
                </div>
            </div>
            <div className="card-body text-center font-semibold">
                <h2 className="card-title justify-center">{NameOfClass}</h2>
                <div className="flex">
                    <p>Instructor Name : {Name}</p>
                </div>
                <div className="flex">
                    <p>AvailableSeats :{AvailableSeats}</p>
                    <p> Price : ${Price}</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <button
                        disabled={AvailableSeats === "0" || isAdmin || isInstructor}
                        onClick={handleSelectClass}
                        className="btn btn-sm bg-orange-200">Selected</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;