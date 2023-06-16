import axios from 'axios';
import logo from '../../../assets/Logo/logo.png'
import { useEffect, useState } from 'react';
import PopularInstructorCard from '../../../Componets/PopularInstructorCard/PopularInstructorCard';


const PopularInstructors = () => {
    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(() => {
        axios.get('https://y-rubelmasud.vercel.app/popularInstructors')
            .then(res => {
                setPopularInstructor(res.data);
            })
    }, [])

    return (

        <div className="md:mt-28 md:px-0 px-12 mt-12 ">
            <div className="mb-48 text-center  ">
                <h1 className="text-3xl font-bold text-center mb-2 border-l-4 border-r-4 md:w-3/12 mx-auto border-orange-500">Popular Instructors</h1>
                <img className='md:w-12 h-12 text-center mx-auto' src={logo} alt="" />
                <p className='md:w-6/12 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus exercitationem maxime laudantium. Consequuntur porro deleniti fugiat nisi laudantium natus beatae nulla.</p>
            </div>
            <div className="grid md:grid-cols-5 gap-16 mx-auto md:px-0 relative">
                {
                    popularInstructor.map(popularIns => <PopularInstructorCard
                        key={popularIns._id}
                        popularIns={popularIns}
                    />)
                }

            </div>
        </div>

    );
};

export default PopularInstructors;