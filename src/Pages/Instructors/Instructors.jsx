import axios from "axios";
import { useEffect, useState } from "react";


const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                const usersArray = response.data;

                if (Array.isArray(usersArray)) {
                    const instructors = usersArray.filter(user => user.role === 'instructor');
                    // console.log('Instructors:', instructors);
                    setInstructors(instructors)
                } else {
                    console.log('Invalid users data:', usersArray);
                }
            })
    }, [])

    return (
        <div className="md:p-12 ">
            <h1 className="text-2xl font-semibold  ">Total Instructors : {instructors.length}</h1>
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>See All Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map((instructor, i) => <tr className="border shadow-md  border-orange-600 " key={instructor._id}>
                                <th>
                                    <p>{i + 1}</p>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{instructor.name}</p>
                                </td>
                                <td>
                                    {instructor.email}
                                </td>
                                <td>
                                    <button className="btn btn-outline btn-sm btn-warning">Warning</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Instructors;