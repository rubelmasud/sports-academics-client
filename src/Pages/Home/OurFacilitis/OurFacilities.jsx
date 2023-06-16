import YouTube from 'react-youtube';
import logo from '../../../assets/Logo/logo.png'
import { motion } from "framer-motion"

const OurFacilities = () => {
    const videoId = 'vKqdBZmQxK0'; // Replace with your YouTube video ID

    const opts = {
        playerVars: {
            start: 38, // Start the video at 38 seconds
        },
    };
    return (
        <div className=" mb-20">
            <div className="mb-6 px-4 text-center">
                <h1 className="text-3xl font-bold text-center mb-2 border-l-4 border-r-4 md:w-3/12 mx-auto border-orange-500">Our Some Facilities</h1>
                <img className='md:w-12 h-12 text-center mx-auto' src={logo} alt="" />
                <p className='md:w-6/12 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus exercitationem maxime laudantium. Consequuntur porro deleniti fugiat nisi laudantium natus beatae nulla.</p>
            </div>
            <div className="grid md:grid-cols-2 px-6 gap-6">
                {/* card section */}
                <div className="">
                    {/* card 1 */}
                    <div className=" border-l-4 border-orange-500 flex gap-4  rounded-md shadow-2xl">
                        <div className="w-1/4 px-2 ">
                            <img className='rounded-md' src="https://i.ibb.co/ZmkRLv5/flat-university-concept-23-2148177546.jpg" border="0" />
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold '>Education Facilities</h2>
                            <p className=' text-lg mt-6'>It was popularised in the 1960s with the release of Letraset sheets containing ..</p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className=" border-l-4 border-orange-500 flex gap-4  rounded-md shadow-2xl my-4">
                        <div className="w-1/4 px-2 ">
                            <img className='rounded-md' src="https://i.ibb.co/q10KdDm/gradient-communication-logo-template-23-2149931255.jpg" alt="gradient-communication-logo-template-23-2149931255" border="0" />
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold '>Multimedia Class</h2>
                            <p className=' text-lg mt-6'>It was popularised in the 1960s with the release of Letraset sheets containing .</p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className=" border-l-4 border-orange-500 flex gap-4 rounded-md shadow-2xl">
                        <div className="w-1/4 px-2 ">
                            <img className='rounded-md' src="https://i.ibb.co/YWRCTF4/world-music-day-gradient-background-23-2149397900.jpg" border="0" />
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold '>
                                Music & Arts</h2>
                            <p className=' text-lg mt-6'>It was popularised in the 1960s with the release of Letraset sheets containing . .</p>
                        </div>
                    </div>
                </div>
                {/* video section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <YouTube videoId={videoId} opts={opts} />
                </motion.div>
            </div>
        </div>
    );
};

export default OurFacilities;