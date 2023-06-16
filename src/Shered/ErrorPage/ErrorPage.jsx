import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-gradient-to-r from-sky-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% h-screen w-full">
            <h1 className="text-5xl font-extrabold text-center pt-12 text-red-400 animate-pulse">Oh No !! Something Wrong </h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img className="mx-auto justify-center" src="https://i.ibb.co/H7WKjxq/man-holding-plug-404-error-page-found-page-1150-65047-removebg-preview.png" alt="" />
            </motion.div >
            <div className="text-center">
                <Link to='/'>
                    <button className="btn btn-error font-bold text-white animate-pulse">Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;