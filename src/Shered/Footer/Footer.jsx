import { Link } from "react-router-dom";
import logo from '../../assets/Logo/logo.png'
import { FaCopyright, FaGoogle, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" rounded-xl border-t-2 border-orange-500 ">
            <div className="footer p-10  text-base-content">
                <div className=''>
                    <img className='w-10 h-10 mx-auto' src={logo} alt="" />
                    <Link className="logo" to='/'>Toy Animal</Link>
                </div>
                <div>
                    <span className="footer-title">Support Me</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border text-gray-500 mb-3">
                        <p className='footer-title '>Contact me</p>
                        <hr />
                        <p className='ml-0'>Email: inforubel@gmail.com</p>
                        <p className='ml-0'>Phone: 00121-57979 </p>
                    </div>
                    <div className="flex gap-4 ">
                        <Link to='https://www.google.com/'>   <FaGoogle className='w-6 h-6 text-green-500'></FaGoogle></Link>
                        <Link to='https://www.youtube.com/'>   <FaYoutube className='w-6 h-6 text-red-500'></FaYoutube></Link>
                        <Link to='https://www.instagram.com/'> <FaInstagramSquare className='w-6 h-6 text-red-800'></FaInstagramSquare></Link>
                        <Link to='https://www.twitter.com/'>  <FaTwitter className='w-6 h-6 text-blue-700'></FaTwitter></Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCopyright className='w-4 h-4 text-gray-500'></FaCopyright >
                        <p> Copyright © 2023 - All right reserved</p>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;