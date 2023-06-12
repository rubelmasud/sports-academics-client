import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useInstructor from "../../Hooks/useInstructor";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import useSelectedClass from "../../Hooks/useSelectedClass";


const SingleClassCard = ({ singleClass }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [isAdmin] = useAdmin()
    const [, refetch] = useSelectedClass()
    const [isInstructor] = useInstructor()
    const { AvailableSeats, Image, Name, NameOfClass, Price, _id } = singleClass || {}

    const classCardStyle = {
        backgroundColor: AvailableSeats === 0 ? 'red' : 'white',
    };

    const handleSelectClass = (CartClass) => {
        console.log(CartClass);
        if (!user) {
            Swal.fire({
                title: 'Are you sure this class selected',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login now !'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        } else {
            const selectedClassInfo = {
                classId: _id,
                NameOfClass,
                Image,
                Price,
                AvailableSeats,
                studentEmail: user?.email
            }
            fetch('http://localhost:5000/selectedClasses', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClassInfo)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    if (result.insertedId) {
                        refetch()
                        toast.success('This Class selected !!')
                    }
                })
        }
    };

    return (
        <div className="card bg-red-300  md:mb-20 shadow-2xl" style={classCardStyle}>

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
                        disabled={AvailableSeats === 0 || isAdmin || isInstructor}
                        onClick={() => handleSelectClass(singleClass)}
                        className="btn btn-sm bg-orange-200">Selected</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;