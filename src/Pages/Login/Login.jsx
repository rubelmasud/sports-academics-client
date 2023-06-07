import { useForm } from "react-hook-form";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";



const Login = () => {
    const [show, setShow] = useState(false)
    // const [error, setError] = useState('')
    const { logInUser, signInGoogle } = useContext(AuthContext)


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        logInUser(data.email, data.password)
            .then((result) => {
                const logdedUser = result.user;
                console.log(logdedUser);
                toast.success('User Log In Is Successfully !');
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const handleSignInWithGoogle = () => {
        signInGoogle()
            .then((result) => {
                const GoogleUser = result.user;
                console.log(GoogleUser);
                toast.success('User Log In Is Successfully !');
            })
            .catch((error) => {
                console.log(error);
                toast.error({ error })
            })
    }

    return (
        <div className="w-full p-12 mx-auto bg-base-100 grid md:grid-cols-2 py-28">

            <div className=" border-b-4 border-t-2 border-orange-500 p- rounded-lg shadow-lg bg-base-200">
                <form className="py-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your email " {...register("email")} required />


                    <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your Password " {...register("password")} required />

                    <div onClick={() => setShow(!show)} className="w-10/12 mx-auto flex items-center gap-2  mb-2">
                        {
                            show ?
                                <>
                                    <AiFillEyeInvisible className="text-orange-400" ></AiFillEyeInvisible>
                                    <p>Hide password</p>
                                </>
                                :
                                <>
                                    <AiFillEye className="text-orange-400"></AiFillEye>
                                    <p>Show password</p>
                                </>
                        }


                    </div>

                    <div className="w-10/12 mx-auto ">
                        <AwesomeButton className="w-full block" type="primary">logIn</AwesomeButton>
                    </div>

                    <div className="flex pt-4 w-10/12 mx-auto gap-3">
                        <small> Dont have an account ? </small>
                        <p className="text-orange-500 underline"><Link to='/signup'>Place Register</Link></p>
                    </div>
                </form>
                <div onClick={handleSignInWithGoogle} className="w-60 text-center mx-auto my-6">
                    <AwesomeButton className="w-full block" type="primary">   <FcGoogle className="mr-2" /> <span>Continue with google</span></AwesomeButton>
                </div>
            </div>
        </div>
    );
};

export default Login;