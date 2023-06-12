import Swal from "sweetalert2";
import useSelectedClass from "../../../../Hooks/useSelectedClass";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const StudentSelectedClass = () => {
    const [selectedClass, refetch] = useSelectedClass()

    const handleDelete = (singleClass) => {
        console.log(singleClass._id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectDelete/${singleClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
                            toast.success('This class deleted successfully !!')
                        }
                    })
            }
        })

    }

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center my-4">My Selected Class : {selectedClass.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-300 font-semibold shadow-md text-[16px]">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Class Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass.map((selectClass, i) => <tr className="border shadow-md  border-orange-600 " key={selectClass._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={selectClass.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{selectClass.NameOfClass}</p>

                                </td>
                                <td>$ {selectClass.Price}</td>
                                <th className="flex gap-4">
                                    <button onClick={() => handleDelete(selectClass)} className="btn bg-red-400 btn-sm">Delete</button>

                                    <Link to='/dashboard/payment'>  <button className="btn bg-orange-300 btn-sm">Pay Now</button>
                                    </Link>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default StudentSelectedClass