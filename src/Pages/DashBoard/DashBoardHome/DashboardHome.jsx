import Typewriter from 'react-ts-typewriter';
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import logo2 from '../../../assets/Logo/d-removebg-preview.png'

const DashboardHome = () => {
    return (
        <div className='mt-6'>
            <Fade>
                <h1 className="text-3xl font-extrabold text-center  underline text-orange-500">
                    <Typewriter
                        speed={100}
                        text='Welcome To Your Dashboard'
                        loop={true}
                    />
                </h1>
            </Fade >
            <Bounce >
                <div className="flex justify-center">
                    <img className='animate-spin' src={logo2} alt="" />
                    <img className='animate-spin' src={logo2} alt="" />
                </div>
            </Bounce>

        </div>
    );
};

export default DashboardHome;