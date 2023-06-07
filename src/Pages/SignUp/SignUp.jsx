import { useForm } from "react-hook-form";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
    const { createUser, updateUserProfile, signInGoogle } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const password = watch('password', '');

    const validatePasswordMatch = (value) => {
        return value === password || 'Passwords do not match';
    };

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoUrl)
            }).then(() => {
                reset()
                toast.success('User Sign Up Is Successfully !');
            })
            .catch((error) => {
                console.log(error);
                // toast.error(error)
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

                    <input type="text" className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder=" Your Name " {...register("name")} required />

                    <input type="url" className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder=" photoUrl" {...register("photoUrl")} required />

                    <input type="email" className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your email " {...register("email")} required />


                    <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="New Password " {...register("password",
                        {
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/
                        })} required />

                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 character !!</p>}

                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 character !!</p>}

                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must hand ! uppercase  and one special character !!</p>}

                    <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Confirm Password " {...register("confirmPassword", {
                        validate: validatePasswordMatch,
                    })} required />

                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

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
                        <AwesomeButton className="w-full block" type="primary">Sign Up</AwesomeButton>
                    </div>

                    <div className="flex pt-4 w-10/12 mx-auto gap-3">
                        <small> Already have an account ? </small>
                        <p className="text-orange-500 underline"><Link to='/login'>Place Login</Link></p>
                    </div>
                </form>
                <div onClick={handleSignInWithGoogle} className="w-60 text-center mx-auto my-6">
                    <AwesomeButton className="w-full block" type="primary">   <FcGoogle className="mr-2" /> <span>Continue with google</span></AwesomeButton>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
