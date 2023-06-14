import axios from "axios";
import useAuth from "../../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import MyClassCard from "../../../../Componets/MyClassCard/MyClassCard";


const AddededClasses = () => {
    const [allAddClasses, setAllAddClasses] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        axios.get(`http://localhost:5000/allAddededClasses?email=${user?.email}`)
            .then(data => {
                setAllAddClasses(data.data);
            })
    }, [])

    return (
        <div className=''>
            <h1 className="text-2xl font-semibold underline mb-8"> My Added Classes : {allAddClasses.length}</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    allAddClasses.map(myClass => <MyClassCard
                        key={myClass._id}
                        myClass={myClass}
                    ></MyClassCard>)
                }
            </div>
        </div>
    );
};

export default AddededClasses;