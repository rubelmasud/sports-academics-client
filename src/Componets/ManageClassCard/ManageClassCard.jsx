import { useForm } from "react-hook-form";

const ManageClassCard = ({ manageClass }) => {
    const { AvailableSeats, Image, NameOfClass, Price, _id } = manageClass || {}

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="card w-96  bg-base-100 shadow-2xl my-6">
            <figure><img className="h-64" src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">
                        {NameOfClass}
                    </h2>
                    <div className="">
                        <p className="font-bold">Student : 0</p>
                    </div>
                    <div className="badge badge-outline bg-orange-200">Price : ${Price}</div>
                </div>
                {/* admin feedback  */}
                <p>AvailableSeats : {AvailableSeats}</p>
                <form onSubmit={handleSubmit(onSubmit)} className="relative">
                    <input className=" h-8  w-full border rounded-full shadow-lg my-4 block px-2  border-orange-100" placeholder="Your Feedback" {...register("Feedback")} required />

                    <button className="btn btn-sm bg-orange-200 rounded-full  absolute top-[16px] right-[0px] h-8 " type="submit">Summit</button>
                </form>

                <div className="card-actions justify-between">
                    <button className="rounded-full border py-2 px-4 font-bold bg-slate-200">Pending</button>
                    <button className="rounded-full border py-2 px-4 font-bold bg-slate-200">Approved</button>
                    <button className="rounded-full border py-2 px-4 font-bold bg-slate-200">Denied</button>
                </div>
            </div>
        </div>
    );
};

export default ManageClassCard;