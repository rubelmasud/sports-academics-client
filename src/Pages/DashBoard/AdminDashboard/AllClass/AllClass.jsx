import { useEffect } from "react";
import { useState } from "react";
import ClassCard from "../../../../Componets/ClassCard/ClassCard";


const AllClass = () => {
    const [allClass, setAllClass] = useState([])
    useEffect(() => {
        fetch('https://y-rubelmasud.vercel.app/allclass')
            .then(res => res.json())
            .then(data => {
                setAllClass(data);

            })
    }, [])

    return (
        <div>
            all class {allClass.length}
            <div className="grid md:grid-cols-2 gap-6 mt-24">
                {
                    allClass.map(singleClass => <ClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></ClassCard>)
                }
            </div>

        </div>
    );
};

export default AllClass;