// import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users/')
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    toast.success('User Add To The Admin Now !')
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    toast.success('User Add To The Instructor Now !')
                }
            })
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold my-4">Total User : {users?.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="underline border">
                            <th>#</th>
                            <th>Email</th>
                            <th>Make Instructor & Admin </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr className="border shadow-md  border-orange-600 " key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>
                                {
                                    user.role === "admin" || user.role === 'instructor' ?
                                        <>
                                            <Link disabled className="btn btn-active btn-warning btn-sm">Instructor</Link>

                                            <Link disabled className="btn btn-active btn-secondary btn-sm mx-2 mt-2">Admin</Link>
                                        </>
                                        :
                                        <>
                                            <Link onClick={() => handleMakeInstructor(user)} className="btn  btn-warning btn-sm">Instructor</Link>

                                            <Link onClick={() => handleMakeAdmin(user)} className="btn btn-secondary btn-sm mx-2 mt-2">Admin</Link>
                                        </>
                                }

                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;