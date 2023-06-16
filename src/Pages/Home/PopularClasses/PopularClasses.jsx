import { useEffect } from 'react';
import logo from '../../../assets/Logo/logo.png'
import axios from 'axios';
import { useState } from 'react';
import PopularClassCard from '../../../Componets/PopularClassCard/PopularClassCard';


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([])

    useEffect(() => {
        axios.get('https://y-rubelmasud.vercel.app/popularClasses')
            .then(res => {
                setPopularClasses(res.data);
            })
    }, [])
    return (
        <div className="md:mt-28 mt-10 px-12 md:px-0 text-center">
            <div className="mb-6 px-4">
                <h1 className="text-3xl font-bold text-center mb-2 border-l-4 border-r-4 md:w-3/12 mx-auto border-orange-500">Popular Classes</h1>
                <img className='md:w-12 h-12 text-center mx-auto' src={logo} alt="" />
                <p className='md:w-6/12 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus exercitationem maxime laudantium. Consequuntur porro deleniti fugiat nisi laudantium natus beatae nulla.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    popularClasses.map(popularClass => <PopularClassCard
                        key={popularClass._id}
                        popularClass={popularClass}
                    />)
                }
            </div>

        </div>
    );
};

export default PopularClasses;