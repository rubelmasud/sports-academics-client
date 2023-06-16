import { JackInTheBox } from "react-awesome-reveal";

const PopularClassCard = ({ popularClass }) => {
    const { NameOfClass, Image, AvailableSeats, Student } = popularClass || {}
    return (
        <JackInTheBox>
            <div className="card  hover:bg-orange-100 border-2 shadow-2xl text-center">
                <figure><img className="w-full h-56 opacity-60 hover:opacity-100" src={Image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className="flex justify-center items-center ">
                        <h2 className="font-bold text-xl">
                            Class Name :  {NameOfClass}
                        </h2>

                    </div>
                    <div className="card-actions flex  justify-between">
                        <p className="font-bold">AvailableSeats:  {AvailableSeats}</p>
                        <p className="font-bold">Student : {Student}</p>
                    </div>
                </div>
            </div>
        </JackInTheBox>
    );
};

export default PopularClassCard;