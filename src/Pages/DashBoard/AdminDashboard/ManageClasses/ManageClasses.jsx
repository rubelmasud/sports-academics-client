import { useQuery } from "react-query";
import ManageClassCard from "../../../../Componets/ManageClassCard/ManageClassCard";

const ManageClasses = () => {

    const { data: manageClasses = [], } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/allclass')
        return res.json()
    })

    return (
        <div className=" my-4 mx-auto">
            <h1 className="text-2xl text-center font-semibold underline my-6">Manage Classes : {manageClasses.length}</h1>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    manageClasses.map(manageClass => <ManageClassCard
                        key={manageClass._id}
                        manageClass={manageClass}
                    ></ManageClassCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;