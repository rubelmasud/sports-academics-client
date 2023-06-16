import { useQuery } from "react-query";
import SingleClassCard from "../../Componets/SingleClassCard/SingleClassCard";

const Classes = () => {


    const { data: AllClasses = [], } = useQuery(['users'], async () => {
        const res = await fetch('https://y-rubelmasud.vercel.app/allclass')
        return res.json()
    })

    return (
        <div className="mt-12 ">
            <h1 className="text-2xl font-semibold text-center mb-32 mt-4 underline">All Classes : {AllClasses.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    AllClasses.map(singleClass => <SingleClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></SingleClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;