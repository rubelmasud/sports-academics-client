import axios from "axios";
import useAuth from "../../../../Hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";


const EnrolledClasses = () => {
    const [allEnrollClass, setAllEnrollClass] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        axios.get(`http://localhost:5000/enrolled?${user?.email}`)
            .then(res => {
                setAllEnrollClass(res.data);
            })
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-semibold  my-4">My Enrolled Classes :{allEnrollClass.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-300 font-semibold shadow-md text-[16px]">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-success" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEnrollClass.map(enrollClass => <tr className="border shadow-md  border-orange-600 " key={enrollClass._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" checked="checked" className="checkbox checkbox-success" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={enrollClass.Image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{enrollClass.ClassName}</p>

                                </td>
                                <td>${enrollClass.Price}</td>
                                <th>
                                    {enrollClass.TransactionId}
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;